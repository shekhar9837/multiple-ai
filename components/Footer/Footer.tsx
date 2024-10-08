import React from 'react';
import { Facebook, Twitter, Linkedin, Github } from 'lucide-react'; // Importing icons
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        {/* Footer top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">About Us</h3>
            <p>
              We are a team of passionate developers building innovative web
              applications to simplify your digital needs. Follow us on social
              media to stay updated!
            </p>
          </div>

          {/* Quick Links section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/sign-in" className="hover:underline">Services</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-300">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-700">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-500">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer bottom section */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center">
            &copy; {new Date().getFullYear()} Multiple. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
