import type { ReactNode } from "react";

type SectionTitleLevel = "h2" | "h3";

export function SectionTitle({
  as = "h2",
  children,
  id,
}: {
  as?: SectionTitleLevel;
  children: ReactNode;
  id?: string;
}) {
  const Heading = as;

  return (
    <Heading
      className={
        as === "h2"
          ? "mt-12 scroll-mt-8 text-2xl font-black leading-tight first:mt-0 sm:text-3xl"
          : "mt-8 scroll-mt-8 text-xl font-black leading-tight first:mt-0 sm:text-2xl"
      }
      id={id}
    >
      {children}
    </Heading>
  );
}

export function SectionContent({ children }: { children: ReactNode }) {
  return (
    <div className="mt-4 max-w-3xl space-y-4 leading-7 text-[#3f4e49] first:mt-0 [&_a]:font-semibold [&_a]:text-[#2c746a] [&_a]:underline [&_a]:decoration-[#2c746a]/50 [&_a]:underline-offset-4 [&_a:hover]:text-[#10201a] [&_a:hover]:decoration-[#10201a] [&_li]:pl-1 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
      {children}
    </div>
  );
}
