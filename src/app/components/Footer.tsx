import { Link } from "react-router";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo & Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#FF6A00] to-[#FF8C33] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="text-2xl font-bold">
                Nexilium <span className="text-[#FF6A00]">Tech</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering businesses through innovation and expert technology solutions. 
              We transform your digital vision into reality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#FF6A00] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF6A00] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF6A00] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF6A00] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#FF6A00] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#FF6A00] transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#FF6A00] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#FF6A00] transition-colors">
                  Press Kit
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/offerings" className="text-gray-400 hover:text-[#FF6A00] transition-colors">
                  Software Development
                </Link>
              </li>
              <li>
                <Link to="/offerings" className="text-gray-400 hover:text-[#FF6A00] transition-colors">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link to="/offerings" className="text-gray-400 hover:text-[#FF6A00] transition-colors">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/offerings" className="text-gray-400 hover:text-[#FF6A00] transition-colors">
                  IT Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400">
                <Mail className="w-5 h-5 mt-0.5 text-[#FF6A00]" />
                <div>
                  <p>contact@nexilium.tech</p>
                  <p>support@nexilium.tech</p>
                </div>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-[#FF6A00]" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-0.5 text-[#FF6A00]" />
                <span>123 Innovation Drive<br />Silicon Valley, CA 94025</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2026 Nexilium Tech. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#FF6A00] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF6A00] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF6A00] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
