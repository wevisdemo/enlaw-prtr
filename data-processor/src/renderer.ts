import { writeFile, readdir, readFile } from "fs/promises";
import { fill } from "./fill";
import { parse } from "csv-parse/sync";

const OUTPUT_DIR = "out";
const TARGETTED_FILENAME = "enlaw-prtr-cleaned-signature";

export type SignedPetition = {
  citizenId: string;
  name: string;
  location: string;
  date: string;
  signature: string;
};

async function main() {
  const filenames = (await readdir(OUTPUT_DIR))
    .filter((filename) => filename.startsWith(TARGETTED_FILENAME))
    .sort((a, z) => a.localeCompare(z));

  let counter = 0;

  for (let i = 0; i < filenames.length; i++) {
    const filename = filenames[i];
    console.log(`Reading ${filename}...`);
    const fileContent = (
      await readFile(`${OUTPUT_DIR}/${filename}`)
    ).toString();
    const signs: SignedPetition[] = parse(fileContent, {
      columns: true,
    }) as SignedPetition[];

    console.log(`Filling ${signs.length} signatures...`);
    const pdfBytes = await fill(signs);

    const outputFilename = `${OUTPUT_DIR}/${TARGETTED_FILENAME}-${i + 1}.pdf`;
    console.log(`Writing ${outputFilename}...`);
    await writeFile(outputFilename, pdfBytes);

    counter += signs.length;

    console.log(`----------------------------`);
  }

  console.log(`Finished. Filled ${counter} signatures to PDFs.`);
}

main();
