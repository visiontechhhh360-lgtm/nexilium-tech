import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { 
      name: "Offerings", 
      path: "/offerings",
      hasDropdown: true,
      dropdownItems: [
        "Software Development",
        "Mobile App Development",
        "Network Security",
        "Digital Marketing",
        "Data Recovery",
        "IT Consultancy",
        "VPN Services"
      ]
    },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg"
          : "bg-white shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div 
              className="w-11 h-11 bg-gradient-to-br from-[#FF6A00] to-[#FF8C33] rounded-xl flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span className="text-white font-bold text-xl">N</span>
            </motion.div>
            <div>
              <span className="text-2xl font-bold text-[#0A0A0A] group-hover:text-[#FF6A00] transition-colors">
                Nexilium
              </span>
              <span className="text-2xl font-bold text-[#FF6A00]"> Tech</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.path} className="relative">
                {link.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center space-x-1 transition-colors ${
                        location.pathname === link.path
                          ? "text-[#FF6A00]"
                          : "text-[#0A0A0A] hover:text-[#FF6A00]"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </Link>
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2"
                        >
                          {link.dropdownItems?.map((item) => (
                            <Link
                              key={item}
                              to="/offerings"
                              className="block px-4 py-2 text-sm text-[#0A0A0A] hover:bg-[#FF6A00]/10 hover:text-[#FF6A00] transition-colors"
                            >
                              {item}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`transition-colors ${
                      location.pathname === link.path
                        ? "text-[#FF6A00]"
                        : "text-[#0A0A0A] hover:text-[#FF6A00]"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Button className="bg-[#FF6A00] hover:bg-[#FF7A10] text-white">
              Get Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#0A0A0A]" />
            ) : (
              <Menu className="w-6 h-6 text-[#0A0A0A]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block py-2 ${
                    location.pathname === link.path
                      ? "text-[#FF6A00]"
                      : "text-[#0A0A0A]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button className="w-full bg-[#FF6A00] hover:bg-[#FF7A10] text-white">
                Get Consultation
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}