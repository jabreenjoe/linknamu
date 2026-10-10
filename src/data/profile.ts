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
};

// TODO: 아래는 보여 주기용 더미 값입니다. 실제 내용으로 교체하세요.
export const profile: Profile = {
  name: "김광우",
  bio: "김도연 남편",
  image: "/profile.svg",
};

export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com/your-id" },
  { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com/in/your-id" },
  { id: "blog", title: "Blog", url: "https://your-blog.example.com" },
];
