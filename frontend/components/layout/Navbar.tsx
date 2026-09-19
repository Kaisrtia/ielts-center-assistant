"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/motion/theme-toggle";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "Trang chủ", href: "/" },
  { name: "Về chúng tôi", href: "/about" },
  { 
    name: "Khóa học", 
    href: "/courses", 
    children: [
      { name: "IELTS Beginner", href: "/courses/beginner", description: "Mục tiêu: 0 - 3.5" },
      { name: "IELTS Foundation", href: "/courses/foundation", description: "Mục tiêu: 3.5 - 5.0" },
      { name: "IELTS Preparation", href: "/courses/preparation", description: "Mục tiêu: 5.0 - 6.0" },
      { name: "IELTS Intensive", href: "/courses/intensive", description: "Mục tiêu: 6.0 - 6.5+" },
      { name: "IELTS Graduation", href: "/courses/graduation", description: "Mục tiêu: 6.5 - 7.0+" },
    ]
  },
  { name: "Blog", href: "/blog" },
  { name: "Trang học viên", href: "/student" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    // Check on mount as well
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={cn(
        "fixed top-0 left-0 z-50 flex justify-center w-full bg-[#fafafa]/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-800/50 transition-all duration-300",
        scrolled ? "shadow-sm dark:shadow-md" : ""
      )}>
        <nav className="flex items-center justify-between gap-4 lg:gap-8 px-4 md:px-8 py-4 mx-auto w-full max-w-[1440px]">
          <Link href="/" className="text-lg xl:text-2xl font-bold tracking-tight hover:text-amber-500 transition-colors cursor-pointer dark:text-zinc-100 whitespace-nowrap shrink-0">
            Kaisrtia English.
          </Link>
          <div className="hidden lg:flex flex-1 gap-4 xl:gap-8 text-xs xl:text-sm font-medium font-sans uppercase tracking-wider text-zinc-500 dark:text-zinc-400 items-center justify-center min-w-0">
            {NAV_ITEMS.map((item) => {
              const isActive = item.href === "/" ? pathname === item.href : pathname?.startsWith(item.href);
              
              if (item.children) {
                return (
                  <div key={item.name} className="relative group">
                    <button className={cn(
                      "flex items-center gap-1 whitespace-nowrap transition-all duration-300 outline-none uppercase font-sans font-medium tracking-wider",
                      isActive 
                        ? "text-amber-500 dark:text-amber-400 -translate-y-0.5"
                        : "hover:text-amber-500 dark:hover:text-amber-400 hover:-translate-y-0.5"
                    )}>
                      {item.name}
                    </button>
                    {/* Invisible bridge for hover */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 h-4 w-full" />
                    {/* Dropdown Menu */}
                    <div className="absolute top-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-xl overflow-hidden w-[280px] p-2 flex flex-col gap-1 relative">
                        {item.children.map(child => {
                          const isChildActive = pathname === child.href;
                          return (
                            <Link 
                              key={child.href} 
                              href={child.href} 
                              className={cn(
                                "flex flex-col p-3 rounded-lg transition-colors group/item relative overflow-hidden",
                                isChildActive ? "bg-amber-50 dark:bg-amber-900/20" : "hover:bg-zinc-50 dark:hover:bg-zinc-900"
                              )}
                            >
                              <span className={cn(
                                "font-bold text-sm tracking-normal capitalize",
                                isChildActive ? "text-amber-600 dark:text-amber-400" : "text-zinc-900 dark:text-zinc-100 group-hover/item:text-amber-500"
                              )}>{child.name}</span>
                              <span className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 normal-case tracking-normal">{child.description}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }
              
              return (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className={cn(
                    "whitespace-nowrap transition-all duration-300",
                    isActive 
                      ? "text-amber-500 dark:text-amber-400 -translate-y-0.5" 
                      : "hover:text-amber-500 dark:hover:text-amber-400 hover:-translate-y-0.5"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          <div className="flex items-center gap-2 xl:gap-4 shrink-0">
            <ThemeToggle 
              variant="circle" 
              className="text-zinc-500 hover:text-amber-500 dark:text-zinc-400 dark:hover:text-amber-400 transition-colors p-1 md:p-2" 
              iconClassName="w-4 h-4 md:w-5 md:h-5"
            />
            <div className="hidden lg:flex items-center gap-1 md:gap-2">
              <button className="whitespace-nowrap px-2 md:px-4 py-2 text-zinc-600 dark:text-zinc-300 font-sans font-semibold hover:text-amber-500 transition-colors text-xs xl:text-sm">
                Đăng nhập
              </button>
              <button className="whitespace-nowrap bg-amber-500 hover:bg-amber-600 hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/20 text-white px-3 md:px-5 py-2 rounded font-sans font-semibold transition-all duration-300 shadow-sm text-xs xl:text-sm">
                Đăng kí
              </button>
            </div>
            {/* Hamburger button for mobile */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-zinc-600 dark:text-zinc-300 hover:text-amber-500 transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Sidebar (Rendered completely outside the Navbar div so it escapes stacking context limitations) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-zinc-950/60 backdrop-blur-sm z-[90] lg:hidden"
            />
            
            {/* Sidebar */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] sm:w-[350px] bg-white dark:bg-zinc-950 border-l border-zinc-200 dark:border-zinc-800 z-[100] shadow-2xl flex flex-col lg:hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-zinc-100 dark:border-zinc-800">
                <span className="font-bold text-lg dark:text-zinc-100">Menu</span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-zinc-500 hover:text-red-500 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-2 p-4 overflow-y-auto">
                {NAV_ITEMS.map((item) => {
                  const isActive = item.href === "/" ? pathname === item.href : pathname?.startsWith(item.href);
                  
                  if (item.children) {
                    const isDropdownOpen = mobileDropdownOpen === item.name;
                    return (
                      <div key={item.href} className="flex flex-col gap-1">
                        <button 
                          onClick={() => setMobileDropdownOpen(isDropdownOpen ? null : item.name)}
                          className={cn(
                            "flex items-center justify-between p-4 rounded-lg font-medium transition-colors w-full text-left",
                            isActive 
                              ? "bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400"
                              : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 hover:text-amber-500"
                          )}
                        >
                          {item.name}
                        </button>
                        
                        <AnimatePresence>
                          {isDropdownOpen && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden flex flex-col gap-1 pl-4"
                            >
                              {item.children.map(child => {
                                const isChildActive = pathname === child.href;
                                return (
                                  <Link 
                                    key={child.href}
                                    href={child.href}
                                    className={cn(
                                      "p-3 rounded-lg font-medium transition-colors flex flex-col",
                                      isChildActive 
                                        ? "text-amber-600 dark:text-amber-400 bg-amber-50/50 dark:bg-amber-900/10"
                                        : "text-zinc-500 dark:text-zinc-400 hover:text-amber-500"
                                    )}
                                  >
                                    <span className="font-bold text-sm text-zinc-800 dark:text-zinc-200">{child.name}</span>
                                    <span className="text-xs font-sans mt-0.5">{child.description}</span>
                                  </Link>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link 
                      key={item.href} 
                      href={item.href}
                      className={cn(
                        "p-4 rounded-lg font-medium transition-colors",
                        isActive 
                          ? "bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400"
                          : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 hover:text-amber-500"
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>

              {/* Footer / Auth */}
              <div className="mt-auto p-4 flex flex-col gap-3 border-t border-zinc-100 dark:border-zinc-800">
                <button className="w-full py-3 text-zinc-600 dark:text-zinc-300 font-sans font-semibold hover:text-amber-500 transition-colors border border-zinc-200 dark:border-zinc-800 rounded-lg">
                  Đăng nhập
                </button>
                <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-sans font-semibold transition-colors shadow-sm">
                  Đăng kí
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
