import React from 'react';
import { Facebook } from 'lucide-react';

const FacebookFloatingButton: React.FC = () => {
    return (
        <a
            href="https://www.facebook.com/KusinaGenaro"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#1877F2] text-white p-4 rounded-full shadow-lg hover:bg-[#166fe5] transition-all duration-300 hover:scale-110 flex items-center justify-center group"
            aria-label="Visit our Facebook page"
        >
            <Facebook size={24} className="group-hover:rotate-12 transition-transform duration-300" />
            <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap text-sm font-medium">
                Message us on Facebook
            </span>
        </a>
    );
};

export default FacebookFloatingButton;
