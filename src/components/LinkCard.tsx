"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import type { LinkItem } from "@/data/profile";

function recordClick(id: string) {
  const body = JSON.stringify({ id });
  // 새 탭으로 이동해도 요청이 끊기지 않도록 sendBeacon 우선 사용
  if (navigator.sendBeacon?.("/api/click", new Blob([body], { type: "application/json" }))) {
    return;
  }
  fetch("/api/click", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => {});
}

export default function LinkCard({ link, clickCount }: { link: LinkItem; clickCount?: ReactNode }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => recordClick(link.id)}
      className="flex w-full items-center justify-between gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm transition hover:-translate-y-0.5 hover:border-green-500 hover:shadow-md active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
    >
      <span className="flex min-w-0 items-center gap-3">
        {link.icon?.startsWith("/") ? (
          <Image src={link.icon} alt="" width={24} height={24} className="h-6 w-6 shrink-0 rounded-md object-cover" />
        ) : (
          link.icon && (
            <span aria-hidden="true" className="w-6 shrink-0 text-center text-xl leading-none">
              {link.icon}
            </span>
          )
        )}
        <span className="font-medium text-gray-900">{link.title}</span>
      </span>
      {clickCount}
    </a>
  );
}
