import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PrivacyPolicy() {
  return (
    <>
    <Navbar/>
      <div className="min-h-screen bg-[#020617] text-gray-300 px-6 py-16 pt-38">
        <div className="max-w-6xl mx-auto">
          {/* HEADER */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Privacy Policy
          </h1>

          <p className="text-sm text-gray-400 mb-10">
            Last Updated: {new Date().toLocaleDateString()}
          </p>

          {/* SECTION */}
          {sections.map((sec, i) => (
            <div key={i} className="mb-8">
              <h2 className="text-xl font-semibold text-[#38BDF8] mb-3">
                {i + 1}. {sec.title}
              </h2>
              <p className="text-sm leading-relaxed text-gray-400 whitespace-pre-line">
                {sec.content}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}

const sections = [
  {
    title: "Introduction & Scope",
    content:
      "SRJ Global Technologies ('we', 'our', or 'us') is committed to protecting your privacy. This Privacy Policy applies to all visitors, users, and others who access our website (https://gaming-sw.vercel.app) and use our services. By accessing or using our website, you agree to the terms of this Privacy Policy.",
  },
  {
    title: "Information We Collect",
    content:
      "We collect several types of information to provide and improve our services:\n\n• Personal Identification Information: Name, email address, phone number, company name, and designation when you fill out contact forms, request quotes, or sign up for newsletters.\n\n• Technical Data: IP address, browser type, device information, operating system, and time zone settings collected automatically via cookies and similar technologies.\n\n• Usage Data: Pages visited, time spent on pages, links clicked, and other actions taken on our website.\n\n• Communication Data: Any correspondence you send to us via email, phone, or contact forms.",
  },
  {
    title: "How We Use Your Information",
    content:
      "We use the collected information for the following purposes:\n\n• To provide, operate, and maintain our website and services\n• To process and respond to your inquiries, requests, or support tickets\n• To send you technical notices, updates, security alerts, and administrative messages\n• To improve our website functionality, user experience, and service offerings\n• To detect, prevent, and address technical or security issues\n• To comply with legal obligations and enforce our terms of service\n• For marketing purposes, only with your explicit consent",
  },
  {
    title: "Cookies & Tracking Technologies",
    content:
      "We use cookies, web beacons, and similar tracking technologies to enhance your browsing experience. Cookies are small text files stored on your device that help us:\n\n• Remember your preferences and settings\n• Understand how you use our website\n• Analyze website traffic and user behavior\n• Personalize content and advertisements\n\nYou can manage cookie preferences through your browser settings. Disabling cookies may affect certain website functionalities. For more details, please review our Cookie Policy.",
  },
  {
    title: "Data Sharing & Third-Party Disclosure",
    content:
      "We do not sell, trade, or rent your personal information to third parties. However, we may share your data with:\n\n• Trusted Service Providers: Hosting, analytics, payment processing, email delivery, and customer support services that assist us in operating our business. These parties agree to keep your information confidential.\n\n• Legal Requirements: When required by law, court order, or government regulation to protect our rights, property, or safety, or that of others.\n\n• Business Transfers: In the event of a merger, acquisition, reorganization, or asset sale, your information may be transferred as part of the transaction.",
  },
  {
    title: "Data Security & Retention",
    content:
      "We implement industry-standard security measures including encryption, firewalls, and secure socket layer (SSL) technology to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your data, we cannot guarantee absolute security. We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.",
  },
  {
    title: "Your Privacy Rights",
    content:
      "Depending on your location, you may have the following rights regarding your personal information:\n\n• Right to Access: Request a copy of the personal data we hold about you\n• Right to Rectification: Correct inaccurate or incomplete information\n• Right to Erasure: Request deletion of your personal data ('right to be forgotten')\n• Right to Restrict Processing: Limit how we use your information\n• Right to Data Portability: Receive your data in a structured, machine-readable format\n• Right to Object: Object to processing based on legitimate interests or direct marketing\n• Right to Withdraw Consent: Withdraw previously given consent at any time\n\nTo exercise any of these rights, please contact us using the information provided in Section 11.",
  },
  {
    title: "Third-Party Links & Services",
    content:
      "Our website may contain links to third-party websites, plugins, or applications. Clicking those links may allow third parties to collect or share your data. We do not control these third-party websites and are not responsible for their privacy practices. We encourage you to review the privacy policies of every website you visit. This Privacy Policy applies solely to information collected by our website.",
  },
  {
    title: "Children’s Privacy",
    content:
      "Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately. If we discover we have collected personal information from a child under 13 without verification of parental consent, we will take steps to delete that information promptly.",
  },
  {
    title: "International Data Transfers",
    content:
      "Your information may be transferred to and maintained on servers located outside your state, province, country, or other governmental jurisdiction where data protection laws may differ. By using our website, you consent to the transfer of your information to countries outside your own. We take appropriate safeguards to ensure your data is treated securely and in accordance with this Privacy Policy.",
  },
  {
    title: "Changes to This Privacy Policy",
    content:
      "We reserve the right to update or modify this Privacy Policy at any time without prior notice. Changes will be effective immediately upon posting on this page. We will notify you of material changes by updating the 'Last Updated' date at the top of this policy. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.",
  },
  {
    title: "Contact Information & Grievance Officer",
    content:
      "If you have any questions, concerns, or complaints about this Privacy Policy or our data practices, please contact us:\n\n📧 Email: srjglobaltechnology@gmail.com\n📞 Phone: +91 96251 90448\n📍 Address: SRJ Global Technologies, [Your City, State, India]\n\nIf you are not satisfied with our response, you have the right to lodge a complaint with your local data protection authority.\n\nFor data privacy-related grievances, please reach out to our Grievance Officer:\nName: [Your Name]\nEmail: grievance@srjglobal.com\nResponse Time: We will respond to your inquiry within 30 business days.",
  },
  {
    title: "Governing Law & Consent",
    content:
      "This Privacy Policy is governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with this policy shall be subject to the exclusive jurisdiction of the courts in [Your City, State], India.\n\nBy using our website, you expressly consent to this Privacy Policy and agree to its terms. If you do not agree with any part of this policy, please do not use our website or services.",
  },
];