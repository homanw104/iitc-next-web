import Image from "next/image";
import { SectionTitle, SectionContent } from "@/components/section";

const screenshots = [
  { alt: "IITC Next screenshot showing map controls", src: "/screenshots/001.png" },
  { alt: "IITC Next screenshot showing draw lines plugin", src: "/screenshots/002.png" },
  { alt: "IITC Next screenshot showing portal details", src: "/screenshots/003.png" },
  { alt: "IITC Next screenshot showing a loading globe map view", src: "/screenshots/004.png" },
  { alt: "IITC Next screenshot showing a globe map view", src: "/screenshots/005.png" },
];

export default function Home() {
  return (
    <>
      <section aria-label="IITC Next preview" className="space-y-5">
        <div className="relative aspect-2/1 overflow-hidden rounded-xl bg-[#10201a]/5">
          <Image
            fill
            priority
            alt="Hero banner"
            className="object-cover"
            sizes="(min-width: 1024px) 900px, 100vw"
            src="/hero/hero.png"
          />
        </div>
        <div className="hide-scrollbar desktop-screen-edge-rail -mx-4 overflow-x-auto px-4 pb-3 sm:-mx-6 sm:px-6 lg:mx-0 lg:pl-0">
          <div className="flex w-max gap-4">
            {screenshots.map((screenshot) => (
              <div
                className="relative aspect-1080/2189 w-40 shrink-0 overflow-hidden rounded-xl bg-[#10201a]/5 sm:w-48 lg:w-56"
                key={screenshot.src}
              >
                <Image
                  fill
                  alt={screenshot.alt}
                  className="object-cover"
                  sizes="(min-width: 1024px) 224px, (min-width: 640px) 192px, 160px"
                  src={screenshot.src}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <SectionContent>
          <p>
            IITC Next is another powerful browser add-on that modifies and
            enhances the official Ingress intel map. It uses a similar
            mechanism to IITC-CE, but with a different rendering engine:
            CesiumJS.
          </p>
          <p>
            The main purpose of this version of IITC is give Ingress Intel Map
            a more modern look and feel by enabling fractional zooming and
            displaying the world map as a globe. This allows continental links
            and fields appear more naturally, while all the entities can be
            rendered on 3D terrain.
          </p>
          <p>
            This project is not intended to replace the community edition of IITC.
            IITC-CE is still much more powerful thanks to its rich plugin ecosystem.
            Although we have already implemented all the basic functionalities,
            we still need time to build the plugins you all know and love.
          </p>
        </SectionContent>
      </section>

      <section>
        <SectionTitle id="downloads">
          Downloads
        </SectionTitle>
        <SectionTitle as="h3">
          Userscript
        </SectionTitle>
        <SectionContent>
          <p>
            To use the userscript on your browser, you need to install a
            userscript manager such as{" "}
            <a href="https://www.tampermonkey.net/" target="_blank">
              Tampermonkey
            </a>
            . After that, you can install the userscript from{" "}
            <a
              href="https://github.com/homanw104/iitc-next/releases/latest/download/iitc-next.user.js"
              target="_blank"
            >
              here
            </a>
            .
          </p>
          <p>
            Note: You need to disable the IITC Button extension and disable all
            IITC-CE related scripts in your userscript manager to avoid conflicts.
          </p>
        </SectionContent>
        <SectionTitle as="h3">
          Android
        </SectionTitle>
        <SectionContent>
          <p>
            Downloads are available from{" "}
            <a
              href="https://play.google.com/store/apps/details?id=world.homans.iitcnext"
              target="_blank"
            >
              Google Play
            </a>
            {" "}or from{" "}
            <a
              href="https://github.com/homanw104/iitc-next/releases"
              target="_blank"
            >
              GitHub Releases
            </a>
            .
          </p>
          <p>
            Note: If you decide to switch between Google Play and GitHub Release,
            you need to uninstall the existing version first as they use different signature keys.
          </p>
        </SectionContent>
      </section>

      <section>
        <SectionTitle id="contribute">
          Contribute
        </SectionTitle>
        <SectionContent>
          <p>
            Contributions are welcome. Feel free to send pull requests or open
            an issue in our{" "}
            <a href="https://github.com/homanw104/iitc-next" target="_blank">
              GitHub repository
            </a>
            .
          </p>
        </SectionContent>
      </section>

      <section>
        <SectionTitle id="faq">
          FAQ
        </SectionTitle>
        <SectionContent>
          <p className="font-semibold">
            Q: Is IITC Next a plugin of IITC?
          </p>
          <p>
            No. IITC Next is a brand new script that is built from scratch.
            It is not a plugin of IITC, and it does not depend on IITC to run.
          </p>
          <p className="font-semibold">
            Q: Can I use IITC-CE plugins for IITC Next?
          </p>
          <p>
            No, you can&#39;t.
            IITC Next and IITC-CE are fundamentally different
            in terms of the tech stack they use.
            Plugins cannot be shared across two applications.
            There&#39;s no plan to support original IITC-CE plugins in IITC Next.
          </p>
        </SectionContent>
      </section>

      <section>
        <SectionTitle id="donate">
          Donate
        </SectionTitle>
        <SectionContent>
          <p>
            If you are grateful to help us continue our development, you can
            donate via <a href="https://wise.com/pay/me/homanmw" target="_blank">Wise</a>{" "}
            or <a href="https://www.patreon.com/homanw104/posts/buy-me-coffee-162980115" target="_blank">Patreon</a>.
          </p>
        </SectionContent>
      </section>
    </>
  );
}
