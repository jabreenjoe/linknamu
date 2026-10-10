import { MongoClient, type Db } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB ?? "linknamu";

// 개발 모드의 HMR에서도 연결을 재사용하도록 전역에 보관
const globalForMongo = globalThis as unknown as {
  _mongoClientPromise?: Promise<MongoClient>;
};

/** MONGODB_URI가 설정되지 않았으면 null을 반환한다. */
export async function getDb(): Promise<Db | null> {
  if (!uri) return null;

  if (!globalForMongo._mongoClientPromise) {
    globalForMongo._mongoClientPromise = new MongoClient(uri).connect();
  }
  const client = await globalForMongo._mongoClientPromise;
  return client.db(dbName);
}
