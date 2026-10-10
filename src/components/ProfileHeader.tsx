import Image from "next/image";
import type { Profile } from "@/data/profile";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={profile.image}
        alt={`${profile.name} 프로필 사진`}
        width={112}
        height={112}
        priority
        className="h-28 w-28 rounded-full border-4 border-white object-cover shadow-md sm:h-32 sm:w-32"
      />
      <h1 className="mt-5 text-2xl font-bold text-gray-900">{profile.name}</h1>
      <p className="mt-2 text-base text-gray-600">{profile.bio}</p>
    </header>
  );
}
