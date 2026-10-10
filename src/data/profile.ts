export type Profile = {
  name: string;
  bio: string;
  image: string;
};

export type LinkItem = {
  /** 클릭 수 집계에 쓰이는 고유 ID (변경하면 기존 집계와 분리됨) */
  id: string;
  title: string;
  url: string;
  /** 제목 앞 아이콘: 이모지 문자, 또는 "/"로 시작하는 public 폴더 이미지 경로 */
  icon?: string;
};

// TODO: 아래는 보여 주기용 더미 값입니다. 실제 내용으로 교체하세요.
export const profile: Profile = {
  name: "김광우",
  bio: "김도연 남편",
  image: "/profile.jpg",
};

export const links: LinkItem[] = [
  { id: "github", title: "깃허브", url: "https://github.com/jabreenjoe", icon: "🐱" },
  { id: "blog", title: "블로그", url: "https://blog.naver.com/kims9292", icon: "🟢" },
  { id: "email", title: "이메일", url: "mailto:kims9292@naver.com", icon: "📮" },
  { id: "food", title: "맛집", url: "https://blog.naver.com/yamyammii", icon: "/yamyam.png" },
];
