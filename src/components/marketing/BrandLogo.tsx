import Image from "next/image";
import { brand } from "@/config/site";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  variant: "logo" | "wordmark";
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ variant, className, priority = false }: BrandLogoProps) {
  if (variant === "wordmark") {
    return (
      <Image
        src={brand.wordmark}
        alt="CRISP Content Engine"
        width={1080}
        height={200}
        className={cn("shrink-0 object-contain", className)}
        priority={priority}
      />
    );
  }

  return (
    <Image
      src={brand.logo}
      alt="CRISP Content Engine"
      width={1200}
      height={627}
      className={cn("shrink-0 object-contain", className)}
      priority={priority}
    />
  );
}
