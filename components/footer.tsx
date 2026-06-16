import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-14 pb-4 text-sm leading-6 text-[#4c5a55]">
      <p className="max-w-2xl">
        This site and the scripts are not officially affiliated with Ingress or
        Niantic Labs. Using these scripts is likely to be considered against the
        Ingress Terms of Service. Any use is at your own risk.
      </p>
      <div className="mt-4 flex gap-4 font-semibold text-[#10201a]">
        <Link
          className="underline decoration-[#10201a]/40 underline-offset-4 hover:text-[#3f756c] hover:decoration-[#3f756c]"
          href="/privacy"
        >
          Privacy
        </Link>
        <a
          className="underline decoration-[#10201a]/40 underline-offset-4 hover:text-[#3f756c] hover:decoration-[#3f756c]"
          href="https://github.com/homanw104/iitc-next-web"
          target="_blank"
        >
          Edit this website
        </a>
      </div>
      <p className="mt-6 text-xs text-[#6c7772]">
        Copyright &copy; 2026, IITC Next contributors.
      </p>
    </footer>
  );
}
