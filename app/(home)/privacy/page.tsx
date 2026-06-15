import { SectionTitle, SectionContent } from "@/components/section";

export default function PrivacyPage() {
  return (
    <article className="space-y-10 text-base">
      <section>
        <SectionTitle>
          Privacy Policy for IITC Next Applications
        </SectionTitle>
        <SectionContent>
          <p>
            Last Updated: June 16, 2026
          </p>
          <p>
            This Privacy Policy applies to all IITC Next applications, including
            this website, the userscript, and the mobile apps.
          </p>
          <p>
            IITC Next is committed to protecting your privacy. This Privacy
            Policy explains how we handle information in connection with our
            applications.
          </p>
          <p>
            External links, including GitHub, Ingress, or Niantic services, are
            governed by their own privacy policies once you leave this site.
          </p>
        </SectionContent>
      </section>

      <section>
        <SectionTitle as="h3">
          Data Collection by IITC Next Applications
        </SectionTitle>
        <SectionContent>
          <p>
            We do not collect, store, or transmit any personal data or user
            information.
          </p>
          <p>IITC Next applications function as enhanced web browsers that:</p>
          <ul>
            <li>Load intel.ingress.com in a webview</li>
            <li>
              Apply userscripts to enhance the interface with additional
              features
            </li>
            <li>Do not collect any personal information from users</li>
            <li>Do not store user data on our servers</li>
            <li>Do not track user behavior or usage patterns</li>
            <li>Do not require user accounts or registration</li>
          </ul>
        </SectionContent>
      </section>

      <section>
        <SectionTitle as="h3">
          How IITC Next Applications Work
        </SectionTitle>
        <SectionContent>
          <p>IITC Next applications are specialized browsers that:</p>
          <ul>
            <li>
              Display intel.ingress.com with enhanced userscripts running in the
              webpage context
            </li>
            <li>
              May cache web resources temporarily on your device for performance
            </li>
            <li>
              May request standard device permissions for functionality. Data
              remains on your device.
            </li>
          </ul>
          <p>
            The userscripts work within the webpage like any JavaScript code.
            They do not intercept network traffic or modify data transmission.
          </p>
        </SectionContent>
      </section>

      <section>
        <SectionTitle as="h3">
          Third-Party Services - Ingress Intel
        </SectionTitle>
        <SectionContent>
          <p>
            When you use IITC Next applications, you are directly accessing
            intel.ingress.com, operated by Niantic, Inc.
          </p>
          <ul>
            <li>
              All user data collection and storage is handled by
              intel.ingress.com according to Niantic&apos;s Privacy Policy
            </li>
            <li>
              We have no access to or control over the data processed by
              intel.ingress.com
            </li>
            <li>
              You interact directly with Niantic&apos;s service through our
              enhanced interface
            </li>
          </ul>
        </SectionContent>
      </section>

      <section>
        <SectionTitle as="h3">
          Children&apos;s Privacy
        </SectionTitle>
        <SectionContent>
          <p>
            IITC Next applications do not collect any information from users of
            any age. However, intel.ingress.com, accessed through our
            applications, is operated by Niantic and may have age restrictions.
            Parents should review Niantic&apos;s terms and privacy policy.
          </p>
        </SectionContent>
      </section>

      <section>
        <SectionTitle as="h3">
          Changes to This Privacy Policy
        </SectionTitle>
        <SectionContent>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated Last Updated date.
          </p>
        </SectionContent>
      </section>

      <section>
        <SectionTitle as="h3">
          Contact Information
        </SectionTitle>
        <SectionContent>
          <p>
            If you have questions about this Privacy Policy, contact us at:
          </p>
          <p>
            Email:{" "}
            <a href="mailto:contact@homans.world">contact@homans.world</a>
          </p>
        </SectionContent>
      </section>

      <section>
        <SectionTitle as="h3">
          Your Rights
        </SectionTitle>
        <SectionContent>
          <p>
            Since we do not collect any personal data, there is no personal data
            for you to access, modify, or delete from our systems. For any data
            collected by intel.ingress.com, please contact Niantic directly.
          </p>
        </SectionContent>
      </section>
    </article>
  );
}
