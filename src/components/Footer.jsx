import { Link } from "react-router-dom";

export default function NexoraFooter() {
  return (
    <footer className="bg-(--color-primary) pt-14 pb-8 px-6 md:px-16 mt-20">

      {/* TOP SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

        {/* BRAND */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4 font-share tracking-wide">
            Nexora
          </h2>
          <p className="text-sm text-gray-200 leading-relaxed">
            The future of smartphones, delivered to your hands.  
            Explore next-gen devices with powerful performance and stunning design.
          </p>
        </div>

        {/* SHOP */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 uppercase">
            Shop
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/smartphones" className="hover:text-white text-gray-200">Smartphones</Link></li>
            <li><Link to="/accessories" className="hover:text-white text-gray-200">Accessories</Link></li>
            <li><Link to="/offers" className="hover:text-white text-gray-200">Offers</Link></li>
            <li><Link to="/new-launches" className="hover:text-white text-gray-200">New Launches</Link></li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 uppercase">
            Support
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/contact" className="hover:text-white text-gray-200">Contact Us</Link></li>
            <li><Link to="/faq" className="hover:text-white text-gray-200">FAQs</Link></li>
            <li><Link to="/service-center" className="hover:text-white text-gray-200">Service Centers</Link></li>
            <li><Link to="/warranty" className="hover:text-white text-gray-200">Warranty Info</Link></li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 uppercase">
            Company
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-white text-gray-200">About Us</Link></li>
            <li><Link to="/careers" className="hover:text-white text-gray-200">Careers</Link></li>
            <li><Link to="/privacy" className="hover:text-white text-gray-200">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white text-gray-200">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="border-t border-(--color-border) pt-6 flex flex-col md:flex-row md:items-center md:justify-between text-sm text-gray-200">

        <p>
          © {new Date().getFullYear()} <span className="text-white font-semibold">Nexora</span>.  
          All Rights Reserved.
        </p>

        <p className="mt-3 md:mt-0">
          made with 💖 by  
          <a
            className="font-bold text-white ml-1 hover:underline"
            href="https://github.com/Hrushikeshj26"
          >
            Hrushikeshj26
          </a>
        </p>

        {/* SOCIALS */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition">Twitter</a>
          <a href="#" className="hover:text-white transition">Instagram</a>
          <a href="#" className="hover:text-white transition">LinkedIn</a>
        </div>
      </div>

    </footer>
  );
}
