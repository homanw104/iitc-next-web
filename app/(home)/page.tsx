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
            IITC Next is yet another powerful browser add-on that modifies and
            enhances the official Ingress intel map. It shares the similar
            mechanism as IITC-CE, but uses a different engine: Cesium.
          </p>
          <p>
            The main purpose of this version of IITC is to create a more modern
            look of the Ingress intel map by enabling it to zoom fractionally and
            show the world map as a globe. This way, continental links and fields
            would appear more naturally and all the entities can be rendered
            on a 3D terrain.
          </p>
          <p>
            This project is not aimed to replace the community edition of IITC.
            The community edition is much more powerful for its rich plugin
            ecosystem. While we have already finished all the basic functionalities,
            we need time to build all the plugins you love.
          </p>
        </SectionContent>
      </section>

      <section>
        <SectionTitle id="downloads">
          Downloads
        </SectionTitle>
        <SectionContent>
          <p>
            Downloads are available in our{" "}
            <a href="https://github.com/homanw104/iitc-next/releases" target="_blank">
              GitHub releases page
            </a>
            .
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
          <p className="font-semibold text-[#10201a]">
            Q: Can I use IITC-CE plugins for IITC Next?
          </p>
          <p>
            A: No. IITC Next uses a different architecture than IITC-CE.
            Plugins cannot be shared across two applications.
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
            donate via <a href="https://wise.com/pay/me/homanmw" target="_blank">Wise</a>.
          </p>
        </SectionContent>
      </section>
    </>
  );
}
