import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  getDocs,
  limit,
  orderBy,
  startAfter,
} from "firebase/firestore";
import { parse } from "valibot";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import { firebaseConfigSchema } from "./models/firebase-config";
import { PERSONALID_KEY } from "./models/document";

const FIRESTORE_DOCUMENT_COLLECTION = "participant";
const OUTPUT_DIR = "out";
const PAGE_LIMIT = 1000;

const firebaseConfig = parse(
  firebaseConfigSchema,
  JSON.parse(process.env.FIREBASE_CONFIG ?? "{}")
);

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

(async () => {
  if (!existsSync(OUTPUT_DIR)) {
    mkdirSync(OUTPUT_DIR);
  }

  let lastPersonalid: string = "";
  let batchCount = 1;
  let isCompleted = false;

  do {
    const documents: unknown[] = [];

    const res = await getDocs(
      query(
        collection(firestore, FIRESTORE_DOCUMENT_COLLECTION),
        orderBy(PERSONALID_KEY),
        limit(PAGE_LIMIT),
        ...(lastPersonalid ? [startAfter(lastPersonalid)] : [])
      )
    );

    lastPersonalid = res.docs[res.size - 1].get(PERSONALID_KEY);

    console.log(
      `Batch ${batchCount}: ${res.docs[0].get(
        PERSONALID_KEY
      )} - ${lastPersonalid} (${res.size}) are retrieved.`
    );

    res.forEach((doc) => documents.push(doc.data()));

    writeFileSync(
      `${OUTPUT_DIR}/raw-${batchCount}.json`,
      JSON.stringify(documents)
    );

    batchCount++;
    isCompleted = res.size < PAGE_LIMIT;
  } while (!isCompleted);

  process.exit(0);
})();
