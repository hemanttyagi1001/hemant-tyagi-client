const timelineItemClass = "relative inline-block px-4 py-2 rounded-full border border-black/20 dark:border-white/20 border-dashed font-mono font-medium uppercase text-sm tracking-[0.5px] text-pColor dark:text-white/70 group-hover:text-black dark:group-hover:text-white transition ease-linear duration-100 before:content-[''] before:absolute before:top-1/2 before:left-[-20px] before:w-[20px] before:h-[1px] before:border-t before:border-black/20 dark:before:border-white/20 before:border-dashed after:content-[''] after:absolute after:top-1/2 after:left-[-22px] after:-translate-y-1/2 after:bg-black dark:after:bg-white after:w-[5px] after:h-[5px] after:rounded-full";

export default function LegalSection() {
  return (
    <div id="legal" className="section bg-white dark:bg-boxDark rounded-lg px-6 py-8 md:px-8 md:py-10 lg:p-12 shadow-sectionBoxShadow hover:shadow-sectionBoxShadowHover transition ease-out duration-[160ms]">
      <div className="md:w-4/5 lg:w-3/4">
        <h6 className="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 mb-5 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-4xl after:opacity-15" data-backdrop-text="Terms">Terms</h6>
        <h2 className="text-3xl lg:text-4xl font-poppins font-semibold mb-3 lg:mb-4 dark:text-white">Terms of Service</h2>
        <p className="text-pColor dark:text-white/70">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>

      <div className="mt-6 lg:mt-12 relative pl-5 space-y-7 before:content-[''] before:absolute before:top-0 before:left-0 before:w-[1px] before:h-full before:border-l before:border-black/20 dark:before:border-white/20 before:border-dashed">
        <div className="group">
          <div className={timelineItemClass}>Section 1</div>
          <h4 className="font-poppins font-medium text-lg lg:text-xl mt-2 mb-1 lg:mt-3 lg:mb-2 dark:text-white">Acceptance of Terms</h4>
          <span className="text-pColor dark:text-white/70">By accessing and using hemanttyagi.com ("the Website"), you agree to be bound by these Terms of Service. If you do not agree, please do not use the Website. We reserve the right to modify these Terms at any time.</span>
        </div>

        <div className="group">
          <div className={timelineItemClass}>Section 2</div>
          <h4 className="font-poppins font-medium text-lg lg:text-xl mt-2 mb-1 lg:mt-3 lg:mb-2 dark:text-white">Description of Service</h4>
          <span className="text-pColor dark:text-white/70">This Website serves as a personal portfolio and professional profile for Hemant Tyagi, providing information about professional services, experience, portfolio projects, and contact details.</span>
        </div>

        <div className="group">
          <div className={timelineItemClass}>Section 3</div>
          <h4 className="font-poppins font-medium text-lg lg:text-xl mt-2 mb-1 lg:mt-3 lg:mb-2 dark:text-white">Intellectual Property</h4>
          <span className="text-pColor dark:text-white/70">All content on this Website is the property of Hemant Tyagi or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, or modify any content without prior written consent.</span>
        </div>

        <div className="group">
          <div className={timelineItemClass}>Section 4</div>
          <h4 className="font-poppins font-medium text-lg lg:text-xl mt-2 mb-1 lg:mt-3 lg:mb-2 dark:text-white">User Conduct</h4>
          <span className="text-pColor dark:text-white/70">You agree not to use the Website for unlawful purposes, submit false information, attempt unauthorized access, interfere with functionality, scrape content, or transmit harmful code.</span>
        </div>

        <div className="group">
          <div className={timelineItemClass}>Section 5</div>
          <h4 className="font-poppins font-medium text-lg lg:text-xl mt-2 mb-1 lg:mt-3 lg:mb-2 dark:text-white">Contact Form Submissions</h4>
          <span className="text-pColor dark:text-white/70">By submitting information through the contact form, you acknowledge that the information is accurate, it does not constitute a contractual agreement, response times may vary, and your data will be handled per our Privacy Policy.</span>
        </div>

        <div className="group">
          <div className={timelineItemClass}>Section 6</div>
          <h4 className="font-poppins font-medium text-lg lg:text-xl mt-2 mb-1 lg:mt-3 lg:mb-2 dark:text-white">Third-Party Links and Services</h4>
          <span className="text-pColor dark:text-white/70">The Website may contain links to third-party websites (e.g., LinkedIn, Google Maps). We do not control and are not responsible for the content or practices of any third-party websites.</span>
        </div>

        <div className="group">
          <div className={timelineItemClass}>Section 7</div>
          <h4 className="font-poppins font-medium text-lg lg:text-xl mt-2 mb-1 lg:mt-3 lg:mb-2 dark:text-white">Disclaimer of Warranties</h4>
          <span className="text-pColor dark:text-white/70">The Website is provided "as is" and "as available" without any warranties of any kind. We disclaim all warranties including merchantability, fitness for a particular purpose, and non-infringement.</span>
        </div>

        <div className="group">
          <div className={timelineItemClass}>Section 8</div>
          <h4 className="font-poppins font-medium text-lg lg:text-xl mt-2 mb-1 lg:mt-3 lg:mb-2 dark:text-white">Limitation of Liability</h4>
          <span className="text-pColor dark:text-white/70">To the fullest extent permitted by law, Hemant Tyagi shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of the Website.</span>
        </div>

        <div className="group">
          <div className={timelineItemClass}>Section 9</div>
          <h4 className="font-poppins font-medium text-lg lg:text-xl mt-2 mb-1 lg:mt-3 lg:mb-2 dark:text-white">Indemnification</h4>
          <span className="text-pColor dark:text-white/70">You agree to indemnify, defend, and hold harmless Hemant Tyagi from any claims, liabilities, damages, losses, and expenses arising from your use of the Website or violation of these Terms.</span>
        </div>

        <div className="group">
          <div className={timelineItemClass}>Section 10</div>
          <h4 className="font-poppins font-medium text-lg lg:text-xl mt-2 mb-1 lg:mt-3 lg:mb-2 dark:text-white">Governing Law</h4>
          <span className="text-pColor dark:text-white/70">These Terms shall be governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Ghaziabad, Uttar Pradesh, India.</span>
        </div>

        <div className="group">
          <div className={timelineItemClass}>Section 11</div>
          <h4 className="font-poppins font-medium text-lg lg:text-xl mt-2 mb-1 lg:mt-3 lg:mb-2 dark:text-white">Changes to Terms</h4>
          <span className="text-pColor dark:text-white/70">We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of the Website after any changes indicates acceptance of the updated Terms.</span>
        </div>

        <div className="group">
          <div className={timelineItemClass}>Section 12</div>
          <h4 className="font-poppins font-medium text-lg lg:text-xl mt-2 mb-1 lg:mt-3 lg:mb-2 dark:text-white">Contact Us</h4>
          <span className="text-pColor dark:text-white/70">Email: info@hemanttyagi.in | Phone: +91-9548550009 | Location: Ghaziabad, Uttar Pradesh, India</span>
        </div>
      </div>
    </div>
  );
}
