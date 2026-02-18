"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { Menu, X, ChevronRight, Moon, Sun } from "lucide-react";

/**
 * Navigation header with theme toggle, smooth scroll links, and mobile menu
 */
export default function Header() {
    const { theme, toggleTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when pathname changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    const handleNavClick = (id: string) => {
        setIsMobileMenuOpen(false);
        if (pathname === "/") {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            router.push(`/#${id}`);
        }
    };

    const navLinks = [
        { name: "Solution", id: "solution", isScroll: true },
        { name: "How It Works", id: "how-it-works", isScroll: true },
        { name: "For Businesses", path: "/businesses" },
        { name: "For Employees", path: "/employees" },
        { name: "For Specialists", path: "/specialists" },
        { name: "Technology", path: "/technology" },
    ];

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isMobileMenuOpen
                ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-lg border-b border-gray-100 dark:border-gray-800"
                : "bg-transparent"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <Container>
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/">
                        <motion.div
                            className="flex items-center cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="w-20 h-20 -my-4 flex items-center justify-center">
                                <img
                                    src="/omplogo.png"
                                    alt="OMP Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <div key={link.name}>
                                {link.isScroll ? (
                                    <button
                                        onClick={() => handleNavClick(link.id!)}
                                        className="px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        {link.name}
                                    </button>
                                ) : (
                                    <Link
                                        href={link.path!}
                                        className={`px-4 py-2 text-sm font-bold transition-colors ${pathname === link.path
                                            ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
                                            : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}

                        <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-4" />

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 mr-4 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                        </button>

                        <Button size="sm" href="/demo" className="font-bold">
                            Request Demo
                        </Button>
                    </nav>

                    {/* Mobile Controls */}
                    <div className="lg:hidden flex items-center space-x-3">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
                            aria-label="Toggle theme"
                        >
                            {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                        </button>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 rounded-lg text-gray-700 dark:text-gray-300 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </Container>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 overflow-hidden"
                    >
                        <Container className="py-8">
                            <div className="flex flex-col space-y-2">
                                {navLinks.map((link) => (
                                    <div key={link.name}>
                                        {link.isScroll ? (
                                            <button
                                                onClick={() => handleNavClick(link.id!)}
                                                className="w-full flex items-center justify-between p-4 rounded-xl text-lg font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
                                            >
                                                {link.name}
                                                <ChevronRight className="w-5 h-5 text-gray-400" />
                                            </button>
                                        ) : (
                                            <Link
                                                href={link.path!}
                                                className={`w-full flex items-center justify-between p-4 rounded-xl text-lg font-bold transition-all ${pathname === link.path
                                                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                                                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                                                    }`}
                                            >
                                                {link.name}
                                                <ChevronRight className={`w-5 h-5 ${pathname === link.path ? "text-blue-600" : "text-gray-400"}`} />
                                            </Link>
                                        )}
                                    </div>
                                ))}
                                <div className="pt-6">
                                    <Button size="lg" href="/demo" className="w-full justify-center text-lg h-14">
                                        Request Demo
                                    </Button>
                                </div>
                            </div>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
