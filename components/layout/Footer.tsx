import Container from "../ui/Container";

/**
 * Footer component
 */
export default function Footer() {
    return (
        <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 py-12">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-20 h-20 flex items-center justify-center">
                                <img
                                    src="/omplogo.png"
                                    alt="OMP Logo"
                                    className="w-full h-full object-contain filter brightness-0 invert"
                                />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-white/70 max-w-[150px] leading-tight">
                                Occupational Medicine Practice
                            </span>
                        </div>
                        <p className="text-gray-400 max-w-md">
                            Workforce Resilience Infrastructure for Nigerian Organizations.
                            Protecting employee wellbeing, mental health, and financial wellness.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Platform</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="/businesses" className="hover:text-blue-400 transition-colors">
                                    For Businesses
                                </a>
                            </li>
                            <li>
                                <a href="/employees" className="hover:text-blue-400 transition-colors">
                                    For Employees
                                </a>
                            </li>
                            <li>
                                <a href="/technology" className="hover:text-blue-400 transition-colors">
                                    Technology
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>Lagos, Nigeria</li>
                            <li>info@omp.ng</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Occupational Medicine Practice. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
}
