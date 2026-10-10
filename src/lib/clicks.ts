import { io } from "next/cache";
import { cache } from "react";
import { getDb } from "@/lib/mongodb";

type ClickDoc = { _id: string; count: number };

const COLLECTION = "clicks";

/** 링크 ID별 클릭 수. 한 요청 안에서는 한 번만 조회한다. */
export const getClickCounts = cache(async (): Promise<Record<string, number>> => {
  // DB 설정 여부와 관계없이 항상 요청 시점에 조회 (빌드 시 값이 박제되지 않도록)
  await io();
  const db = await getDb();
  if (!db) return {};

  const docs = await db.collection<ClickDoc>(COLLECTION).find().toArray();
  return Object.fromEntries(docs.map((doc) => [doc._id, doc.count]));
});

export async function incrementClick(linkId: string): Promise<boolean> {
  const db = await getDb();
  if (!db) return false;

  await db
    .collection<ClickDoc>(COLLECTION)
    .updateOne({ _id: linkId }, { $inc: { count: 1 } }, { upsert: true });
  return true;
}
