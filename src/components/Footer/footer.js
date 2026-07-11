import React from "react";
import { Link } from "react-scroll";
import { ArrowUp } from "lucide-react";

const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-black pt-12 pb-8 relative z-10">
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">

                <div className="mb-8 text-center max-w-xl">
                    <p className="text-xl font-medium text-white mb-4">
                        <span className="text-gradient font-bold text-2xl">AM.</span>
                    </p>
                    <p className="text-gray-400 text-sm italic">
                        "Your potential is endless. Don't limit yourself based on past experiences."
                    </p>
                </div>

                <div className="w-full border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Asma Malica. All Rights Reserved.
                    </p>
                    
                    <Link
                        to="intro"
                        smooth={true}
                        duration={800}
                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-accent/20 hover:border-accent/50 cursor-pointer transition-all hover:-translate-y-1"
                        aria-label="Back to top"
                    >
                        <ArrowUp size={20} />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
