"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

function scrollToHashTarget() {
  const hash = window.location.hash;
  if (!hash) return false;

  const id = decodeURIComponent(hash.slice(1));
  const target = document.getElementById(id);
  if (!target) return false;

  target.scrollIntoView({ block: "start", behavior: "auto" });
  return true;
}

export function MarketingScrollRestore() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (scrollToHashTarget()) return;

    const scrollTop = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    scrollTop();
    const frame = requestAnimationFrame(scrollTop);
    const timeout = window.setTimeout(scrollTop, 0);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, [pathname]);

  useLayoutEffect(() => {
    function handleHashChange() {
      scrollToHashTarget();
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return null;
}
