import { getClickCounts } from "@/lib/clicks";

export default async function ClickCount({ id }: { id: string }) {
  let count = 0;
  try {
    count = (await getClickCounts())[id] ?? 0;
  } catch (error) {
    console.error("클릭 수 조회 실패:", error);
    return null;
  }

  return <span className="shrink-0 text-xs text-gray-400">클릭 {count.toLocaleString("ko-KR")}</span>;
}
