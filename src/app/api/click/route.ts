import { links } from "@/data/profile";
import { incrementClick } from "@/lib/clicks";

const linkIds = new Set(links.map((link) => link.id));

export async function POST(request: Request) {
  let id: unknown;
  try {
    ({ id } = await request.json());
  } catch {
    return Response.json({ error: "잘못된 요청입니다." }, { status: 400 });
  }

  if (typeof id !== "string" || !linkIds.has(id)) {
    return Response.json({ error: "존재하지 않는 링크입니다." }, { status: 404 });
  }

  try {
    const saved = await incrementClick(id);
    return Response.json({ ok: true, saved });
  } catch (error) {
    console.error("클릭 수 저장 실패:", error);
    return Response.json({ error: "클릭 수를 저장하지 못했습니다." }, { status: 500 });
  }
}
