import { Logo, MobileNav } from "@/components/navigation";

export function DesktopHeader() {
  return (
    <header className="hidden lg:block" id="home">
      <h1 className="mt-4 text-7xl font-black leading-none">
        IITC Next
      </h1>
      <p className="mt-4 max-w-2xl text-2xl font-medium text-[#4c5a55]">
        Your next Ingress Intel Total Conversion script
      </p>
    </header>
  );
}

export function MobileHeader() {
  return (
    <header className="space-y-5 lg:hidden" id="home">
      <div className="flex items-center gap-4">
        <Logo />
        <h1 className="text-4xl font-black leading-none">
          IITC Next
        </h1>
      </div>
      <p className="text-lg font-medium text-[#4c5a55]">
        Your next Ingress Intel Total Conversion script
      </p>
      <MobileNav />
    </header>
  );
}
