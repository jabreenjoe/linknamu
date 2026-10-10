import LinkList from "@/components/LinkList";
import ProfileHeader from "@/components/ProfileHeader";
import { links, profile } from "@/data/profile";

// 와이어프레임: 상단 원형 프로필 사진 · 이름 · 한줄 소개, 그 아래 링크 카드 세로 목록
export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center gap-10 px-4 py-12 sm:py-16">
      <ProfileHeader profile={profile} />
      <LinkList links={links} />
    </main>
  );
}
