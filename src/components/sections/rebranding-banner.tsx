import { ChevronRight } from "lucide-react";
import Link from "next/link";

const RebrandingBanner = () => {
  return (
    <div className="flex w-full flex-col items-center pb-6 pt-14">
      <Link
        href="/"
        className="group inline-flex items-center justify-center gap-x-2.5 rounded-full bg-secondary py-2 px-4 text-sm font-medium text-primary transition-colors hover:bg-border"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-accent opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-accent"></span>
        </span>
        <p className="uppercase tracking-wide">
          Introducing Quotyl: prompt-to-business quotation maker
        </p>
        <ChevronRight className="h-4 w-4 text-muted-foreground duration-200 group-hover:translate-x-0.5" />
      </Link>
    </div>
  );
};

export default RebrandingBanner;