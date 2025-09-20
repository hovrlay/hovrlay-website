import EmailIcon from "@/assets/email.svg?react";
import TwitterIcon from "@/assets/twitter.svg?react";
import LinkedInIcon from "@/assets/linkedin.svg?react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border pt-12 pb-8 mx-6 md:mx-12 lg:mx-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-2 mb-4">
              <img src="/favicon.svg" alt="Hovrlay" className="w-8 h-8" />
              <span className="text-xl font-bold text-foreground">hovrlay</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              AI wingman for every conversation. Transform how you engage in meetings, calls and interviews with real-time AI assistance.
            </p>
            <div className="flex gap-4">
              <a 
                href="mailto:hello@hovrlay.com" 
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="Email us"
              >
                <EmailIcon className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/hovrlay" 
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="Follow us on Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/company/hovrlay" 
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="Connect with us on LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#features" 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#demo" 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Demo
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Download
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#faq" 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="mailto:support@hovrlay.com" 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
              <span>&copy; 2025 Hovrlay. All rights reserved.</span>
            </div>
            <div className="text-sm text-muted-foreground">
              Made with ❤️ for better conversations
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
