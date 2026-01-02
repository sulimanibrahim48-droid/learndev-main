import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Code2, Cloud, Server, Home, Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const closeAll = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav className="nav-gradient fixed top-0 left-0 right-0 z-50 border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" onClick={closeAll}>
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
              <Code2 className="w-5 h-5 text-primary" />
            </div>
            <span className="font-display font-bold text-xl text-gradient">DevLearn</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
            >
              <Home className="w-4 h-4" />
              <span className="font-medium">Home</span>
            </Link>

            {/* Frontend Dropdown */}
            <div className="dropdown relative">
              <button className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors">
                <Code2 className="w-4 h-4" />
                <span className="font-medium">Frontend</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-200" />
              </button>
              <div className="dropdown-content">
                <Link to="/html" className="dropdown-item">HTML</Link>
                <Link to="/css" className="dropdown-item">CSS</Link>
                <Link to="/javascript" className="dropdown-item">JavaScript</Link>
              </div>
            </div>

            {/* Cloud Dropdown */}
            <div className="dropdown relative">
              <button className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors">
                <Cloud className="w-4 h-4" />
                <span className="font-medium">Cloud</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-200" />
              </button>
              <div className="dropdown-content">
                <Link to="/az900" className="dropdown-item">AZ-900</Link>
                <Link to="/az104" className="dropdown-item">AZ-104</Link>
              </div>
            </div>

            {/* Backend Dropdown */}
            <div className="dropdown relative">
              <button className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors">
                <Server className="w-4 h-4" />
                <span className="font-medium">Backend</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-200" />
              </button>
              <div className="dropdown-content">
                <Link to="/python" className="dropdown-item">Python</Link>
                <Link to="/django" className="dropdown-item">Django</Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground/80 hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-[500px] pb-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-2 pt-2">
            <Link
              to="/"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors"
              onClick={closeAll}
            >
              <Home className="w-5 h-5" />
              <span className="font-medium">Home</span>
            </Link>

            {/* Mobile Frontend Dropdown */}
            <div>
              <button
                className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors"
                onClick={() => toggleDropdown("frontend")}
              >
                <div className="flex items-center gap-3">
                  <Code2 className="w-5 h-5" />
                  <span className="font-medium">Frontend</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ${
                    openDropdown === "frontend" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openDropdown === "frontend" ? "max-h-40" : "max-h-0"
                }`}
              >
                <div className="pl-12 flex flex-col gap-1 py-2">
                  <Link to="/html" className="py-2 px-4 rounded-lg hover:bg-primary/10 transition-colors" onClick={closeAll}>HTML</Link>
                  <Link to="/css" className="py-2 px-4 rounded-lg hover:bg-primary/10 transition-colors" onClick={closeAll}>CSS</Link>
                  <Link to="/javascript" className="py-2 px-4 rounded-lg hover:bg-primary/10 transition-colors" onClick={closeAll}>JavaScript</Link>
                </div>
              </div>
            </div>

            {/* Mobile Cloud Dropdown */}
            <div>
              <button
                className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors"
                onClick={() => toggleDropdown("cloud")}
              >
                <div className="flex items-center gap-3">
                  <Cloud className="w-5 h-5" />
                  <span className="font-medium">Cloud</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ${
                    openDropdown === "cloud" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openDropdown === "cloud" ? "max-h-32" : "max-h-0"
                }`}
              >
                <div className="pl-12 flex flex-col gap-1 py-2">
                  <Link to="/az900" className="py-2 px-4 rounded-lg hover:bg-primary/10 transition-colors" onClick={closeAll}>AZ-900</Link>
                  <Link to="/az104" className="py-2 px-4 rounded-lg hover:bg-primary/10 transition-colors" onClick={closeAll}>AZ-104</Link>
                </div>
              </div>
            </div>

            {/* Mobile Backend Dropdown */}
            <div>
              <button
                className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors"
                onClick={() => toggleDropdown("backend")}
              >
                <div className="flex items-center gap-3">
                  <Server className="w-5 h-5" />
                  <span className="font-medium">Backend</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ${
                    openDropdown === "backend" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openDropdown === "backend" ? "max-h-32" : "max-h-0"
                }`}
              >
                <div className="pl-12 flex flex-col gap-1 py-2">
                  <Link to="/python" className="py-2 px-4 rounded-lg hover:bg-primary/10 transition-colors" onClick={closeAll}>Python</Link>
                  <Link to="/django" className="py-2 px-4 rounded-lg hover:bg-primary/10 transition-colors" onClick={closeAll}>Django</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
