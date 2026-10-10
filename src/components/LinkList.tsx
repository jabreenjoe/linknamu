import { Suspense } from "react";
import type { LinkItem } from "@/data/profile";
import ClickCount from "@/components/ClickCount";
import LinkCard from "@/components/LinkCard";

export default function LinkList({ links }: { links: LinkItem[] }) {
  return (
    <ul className="flex w-full flex-col gap-3">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            link={link}
            clickCount={
              // 클릭 수는 요청마다 DB에서 읽으므로 정적 셸 밖에서 스트리밍
              <Suspense fallback={null}>
                <ClickCount id={link.id} />
              </Suspense>
            }
          />
        </li>
      ))}
    </ul>
  );
}
