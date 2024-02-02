import { readdirSync, readFileSync, writeFileSync } from "fs";
import * as aq from "arquero";
import { Timestamp } from "firebase/firestore";
import { Document, PERSONALID_KEY } from "./models/document";

interface Record extends Document {
  timestamp: Timestamp;
}

const OUTPUT_DIR = "out";
const WITH_SIGNATURE_MAX_ROW = 2000;
const baseSelectedColumns = [
  PERSONALID_KEY,
  "name",
  "location",
  "date",
  "email",
  "phone",
];

const documents = readdirSync(OUTPUT_DIR)
  .filter((path) => path.endsWith(".json"))
  .reduce<Document[]>((list, path) => {
    list.push(...JSON.parse(readFileSync(`${OUTPUT_DIR}/${path}`, "utf-8")));
    return list;
  }, []);

console.log(`Original data has ${documents.length} rows`);

const cleanData = aq
  .from(documents)
  .filter(
    aq.escape(
      (d: Record) =>
        d.surname.length > 1 &&
        d.lastname.length > 1 &&
        d.location.length &&
        d.signedAt.seconds &&
        d[PERSONALID_KEY] &&
        validatePersonalId(d[PERSONALID_KEY])
    )
  )
  .orderby((d: Record) => d.signedAt.seconds)
  .derive({
    name: (d: Record) =>
      `${aq.op.trim(d.title)} ${aq.op.trim(d.surname)} ${aq.op.trim(
        d.lastname
      )}`,
    date: aq.escape((d: Record) =>
      new Date(d.signedAt.seconds * 1000).toLocaleDateString("TH-th")
    ),
    email: (d: Record) => aq.op.replace(d.email, "-", ""),
    phone: (d: Record) => aq.op.replace(d.tel, "-", ""),
  })
  .dedupe(PERSONALID_KEY, "name")
  .reify();

writeFileSync(
  `${OUTPUT_DIR}/enlaw-prtr-cleaned.csv`,
  cleanData
    .select(...baseSelectedColumns)
    .print()
    .toCSV()
);

for (let i = 0; i * WITH_SIGNATURE_MAX_ROW < cleanData.size; i++) {
  writeFileSync(
    `${OUTPUT_DIR}/enlaw-prtr-cleaned-signature-${i + 1}.csv`,
    cleanData
      .slice(i * WITH_SIGNATURE_MAX_ROW, (i + 1) * WITH_SIGNATURE_MAX_ROW)
      .select(...baseSelectedColumns, "signature")
      .toCSV()
  );
}

function validatePersonalId(value: string) {
  if (value.length !== 13 || value.split("").some((digit) => isNaN(+digit))) {
    return false;
  }

  // https://th.wikipedia.org/wiki/เลขประจำตัวประชาชนไทย#ตัวเลขหลักที่_13
  const n13 = +value.charAt(12);
  const sum = value
    .substring(0, 12)
    .split("")
    .reduce((sum, value, i) => sum + (13 - i) * +value, 0);
  const x = sum % 11;
  const expectedN13 = x <= 1 ? 1 - x : 11 - x;

  return expectedN13 === n13;
}
