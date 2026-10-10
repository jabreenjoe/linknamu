# 🌳 링크나무

내 모든 링크를 한 페이지에 모아 두고, 하나의 URL로 공유하는 서비스입니다.

## 시작하기

```bash
npm install
cp .env.example .env.local   # MongoDB Atlas 연결 문자열 입력
npm run dev                  # http://localhost:3000
```

`MONGODB_URI`가 없어도 페이지는 동작하며, 클릭 수만 저장되지 않습니다.

## 내 정보 수정

`src/data/profile.ts`에서 이름·소개·사진 경로와 링크 목록을 수정하세요.
프로필 사진은 `public/`에 넣고 `image` 경로를 바꾸면 됩니다.

## 구조

| 경로 | 역할 |
| --- | --- |
| `src/app/page.tsx` | 메인 페이지 (프로필 + 링크 카드) |
| `src/app/api/click/route.ts` | 클릭 수 기록 API (`POST { id }`) |
| `src/components/` | `ProfileHeader`, `LinkList`, `LinkCard`, `ClickCount` |
| `src/lib/mongodb.ts`, `src/lib/clicks.ts` | MongoDB 연결 및 클릭 수 조회/증가 |
| `src/data/profile.ts` | 프로필·링크 데이터 |

## 배포 (Vercel)

Vercel 프로젝트의 Environment Variables에 `MONGODB_URI`, `MONGODB_DB`를 등록한 뒤 배포합니다.
