import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white  border-t border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h3 className="font-bold text-lg mb-3">
            SPRINGWORKS
          </h3>
          <p className="text-sm text-white/70">
            Entrepreneurial Campus
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">
            Legal
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/legalPage" className="hover:text-yellow-400 transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/legalPage" className="hover:text-yellow-400 transition">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Info */}
        <div>
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} SpringWorks Entrepreneurial Campus
          </p>
        </div>

      </div>
    </footer>
  );
}
