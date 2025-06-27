import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-[#f9f9f9] px-40 py-16 border-t text-gray-700 rounded-t-4xl">
      {/* Top CTA Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-12 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-semibold max-w-xl">
          Experience the power of our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
            AI Site Builder
          </span>{" "}
          today
        </h2>
        <div className="mt-6 md:mt-0 flex flex-col items-center">
          <Button
            href="#"
            className="hover:bg-neutral-800 text-white px-12 py-6 text-lg"
          >
            ✨ Get Started
          </Button>
          <p className="text-gray-500 mt-2">Build a website in under 5 minutes. Yes really.</p>
        </div>
      </div>

      <hr className="border-gray-200 mb-12" />

      {/* Links Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <h4 className="font-semibold text-black mb-4">Product</h4>
          <ul className="space-y-2">
            <li>What's New</li>
            <li>AI Site Builder</li>
            <li>Webflow Library</li>
            <li>Figma Library</li>
            <li>React Library</li>
            <li>Chrome Extension</li>
            <li>Libraries</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-black mb-4">Power ups</h4>
          <ul className="space-y-2">
            <li>Relume Icons</li>
            <li>Color Palettes</li>
            <li>Attributes</li>
            <li>Untitled UI</li>
            <li>Learn</li>
            <li>Webflow Style Guide</li>
            <li>Client-First Docs</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-black mb-4">Community</h4>
          <ul className="space-y-2">
            <li>Community Roadmap</li>
            <li>Community Love</li>
            <li>Showcase</li>
            <li>Inspiration Feed</li>
            <li>Slack</li>
            <li>Request Components</li>
            <li>Provide Feedback</li>
            <li>Hire an Expert</li>
            <li>Become an Expert</li>
            <li>Become an Affiliate</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-black mb-4">Company</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              Careers{" "}
              <span className="bg-pink-100 text-pink-500 text-[10px] px-2 py-0.5 rounded-full font-semibold">
                Hiring!
              </span>
            </li>
            <li>Contact Sales</li>
            <li>Support</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Licensing Agreement</li>
            <li>Cookie Settings</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-16 text-gray-500">
        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
