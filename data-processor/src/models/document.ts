import {
  object,
  string,
  toTrimmed,
  length,
  type Output,
  optional,
  minLength,
  regex,
  number,
} from "valibot";

export const PERSONALID_KEY = "citizenId";

export const documentSchema = object({
  location: string([toTrimmed(), minLength(1)]),
  birthDay_day: string("วันที่ไม่ถูกต้อง", [regex(/([1-9]|[12][0-9]|3[01])/)]),
  birthDay_month: string("เดือนไม่ถูกต้อง", [regex(/[1-9]|1[0-2]/)]),
  birthDay_year: string("ปีไม่ถูกต้อง", [regex(/^25[3-6][0-9]$/)]),
  [PERSONALID_KEY]: string([toTrimmed(), length(13)]),
  title: optional(string()),
  email: optional(string()),
  tel: optional(string()),
  surname: string([toTrimmed(), minLength(1)]),
  lastname: string([toTrimmed(), minLength(1)]),
  signature: string("กรุณาลงชื่อ"),
  signedAt: object({ seconds: number(), nanoseconds: number() }),
});

export type Document = Output<typeof documentSchema>;
