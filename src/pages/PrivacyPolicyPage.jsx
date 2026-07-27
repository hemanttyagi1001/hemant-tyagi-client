const timelineItemClass = "relative inline-block px-4 py-2 rounded-full border border-black/20 dark:border-white/20 border-dashed font-mono font-medium uppercase text-sm tracking-[0.5px] text-pColor dark:text-white/70 group-hover:text-black dark:group-hover:text-white transition ease-linear duration-100 before:content-[''] before:absolute before:top-1/2 before:left-[-20px] before:w-[20px] before:h-[1px] before:border-t before:border-black/20 dark:before:border-white/20 before:border-dashed after:content-[''] after:absolute after:top-1/2 after:left-[-22px] after:-translate-y-1/2 after:bg-black dark:after:bg-white after:w-[5px] after:h-[5px] after:rounded-full";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white dark:bg-boxDark rounded-lg px-6 py-8 md:px-8 md:py-10 lg:p-12 shadow-sectionBoxShadow hover:shadow-sectionBoxShadowHover transition ease-out duration-[160ms]">
      <div className="md:w-4/5 lg:w-3/4">
        <h6 className="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 mb-5 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-4xl after:opacity-15" data-backdrop-text="Privacy">Privacy</h6>
        <h2 className="text-3xl lg:text-4xl font-poppins font-semibold mb-3 lg:mb-4 dark:text-white">Privacy Policy</h2>
        <p className="text-pColor dark:text-white/70">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>

      <div className="mt-6 lg:mt-12 relative pl-5 space-y-7 before:content-[''] before:absolute before:top-0 before:left-0 before:w-[1px] before:h-full before:border-l before:border-black/20 dark:before:border-white/20 before:border-dashed">
        <div className="group">
          <div className={timelineItemClass}>Section 1</div>
          <h4 className="font-poppins font-medium text-lg lg:text-xl mt-2 mb-1 lg:mt-3 lg:mb-2 dark:text-white">Introduction</h4>
          <span className="text-pColor dark:text-white/70">Welcome to hemanttyagi.in ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</span>
        </div>

        <div className="group">
          <div className={timelineItemClass}>Section 2</div>
          <h4 className="font-poppins font-medium text-lg lg:text-xl mt-2 mb-1 lg:mt-3 lg:mb-2 dark:text-white">Information We Collect</h4>
          <span className="text-pColor dark:text-white/70">We may collect personal information you voluntarily provide (name, email, message content via contact form) and automatically collected information (IP address, browser type, device info, pages visited, cookies).</span>
        </div>

        <div className="group">
          <div className={timelineItemClass}>Section 3</div>
          <h4 className="font-poppins font-medium text-lg lg:text-xl mt-2 mb-1 lg:mt-3 lg:mb-2 dark:text-white">How We Use Your Information</h4>
          <span className="text-pColor dark:text-white/70">We use information to respond to inquiries, improve and optimize website experience, analyze traffic and usage patterns, and comply with legal obligations.</span>
        </div>

        <div className="group">
          <div className={timelineItemClass}>Section 4</div>
          <h4 className="font-poppins font-medium text-lg lg:text-xl mt-2 mb-1 lg:mt-3 lg:mb-2 dark:text-white">Cookies and Tracking Technologies</h4>
          <span className="text-pColor dark:text-white/70">Our website uses essential cookies, analytics cookies, and third-party cookies to enhance your browsing experience. You can control cookies through your browser settings.</span>
        </div>

        <div className="group">
          <div className={timelineItemClass}>Section 5</div>
          <h4 className="font-poppins font-medium text-lg lg:text-xl mt-2 mb-1 lg:mt-3 lg:mb-2 dark:text-white">Third-Party Services</h4>
          <span className="text-pColor dark:text-white/70">We use Google Maps (embedded maps) and EmailJS (contact form processing) which may collect information per their respective privacy policies.</span>
        </div>

        <div className="group">
          <div className={timelineItemClass}>Section 6</div>
          <h4 className="font-poppins font-medium text-lg lg:text-xl mt-2 mb-1 lg:mt-3 lg:mb-2 dark:text-white">Data Security</h4>
          <span className="text-pColor dark:text-white/70">We implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.</span>
        </div>

        <div className="group">
          <div className={timelineItemClass}>Section 7</div>
          <h4 className="font-poppins font-medium text-lg lg:text-xl mt-2 mb-1 lg:mt-3 lg:mb-2 dark:text-white">Your Rights</h4>
          <span className="text-pColor dark:text-white/70">You have the right to access, correct, or delete your personal information, opt out of marketing communications, and withdraw consent where processing is based on consent.</span>
        </div>

        <div className="group">
          <div className={timelineItemClass}>Section 8</div>
          <h4 className="font-poppins font-medium text-lg lg:text-xl mt-2 mb-1 lg:mt-3 lg:mb-2 dark:text-white">Children's Privacy</h4>
          <span className="text-pColor dark:text-white/70">Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.</span>
        </div>

        <div className="group">
          <div className={timelineItemClass}>Section 9</div>
          <h4 className="font-poppins font-medium text-lg lg:text-xl mt-2 mb-1 lg:mt-3 lg:mb-2 dark:text-white">Changes to This Policy</h4>
          <span className="text-pColor dark:text-white/70">We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.</span>
        </div>

        <div className="group">
          <div className={timelineItemClass}>Section 10</div>
          <h4 className="font-poppins font-medium text-lg lg:text-xl mt-2 mb-1 lg:mt-3 lg:mb-2 dark:text-white">Contact Us</h4>
          <span className="text-pColor dark:text-white/70">Email: info@hemanttyagi.in | Phone: +91-9548550009 | Location: Ghaziabad, Uttar Pradesh, India</span>
        </div>
      </div>
    </div>
  );
}
