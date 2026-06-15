import type { ReactNode } from "react";

export function SectionTitle({
  as = "h2",
  children,
  id,
}: {
  as?: "h2" | "h3";
  children: ReactNode;
  id?: string;
}) {
  const Heading = as;

  return (
    <Heading
      className={
        as === "h2"
          ? "scroll-mt-8 text-2xl font-black leading-tight sm:text-3xl"
          : "scroll-mt-8 text-xl font-black leading-tight sm:text-2xl"
      }
      id={id}
    >
      {children}
    </Heading>
  );
}

export function SectionContent({ children }: { children: ReactNode }) {
  return (
    <div className="mt-4 max-w-3xl space-y-4 leading-7 text-[#3f4e49] [&_a]:font-semibold [&_a]:text-[#2c746a] [&_a]:underline [&_a]:decoration-[#2c746a]/50 [&_a]:underline-offset-4 [&_a:hover]:text-[#10201a] [&_a:hover]:decoration-[#10201a] [&_li]:pl-1 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
      {children}
    </div>
  );
}
