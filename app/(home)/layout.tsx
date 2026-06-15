import type { ReactNode } from "react";
import { DesktopNav } from "@/components/navigation";
import { DesktopHeader, MobileHeader } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-[#f7f8f3] px-4 py-5 text-[#10201a] sm:px-6 lg:px-10 lg:py-8">
      <ScrollToTop />
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[180px_minmax(0,1fr)]">
        <DesktopNav />
        <div className="min-w-0">
          <DesktopHeader />
          <MobileHeader />

          <main className="mt-8 space-y-12 lg:mt-12">
            {children}
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
}
