"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  InstagramIcon, 
  TwitterIcon, 
  FacebookIcon, 
  YoutubeIcon, 
  PhoneIcon, 
  MailIcon, 
  MapPinIcon,
  TrophyIcon,
  ShieldIcon,
  DollarSignIcon,
  HelpCircleIcon,
  InfoIcon,
  BookIcon
} from "lucide-react";

export default function Footer() {
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Press", href: "#" },
      ],
      icon: <InfoIcon size={20} className="text-blue-500" />
    },
    {
      title: "Support",
      links: [
        { name: "FAQ", href: "/faq" },
        { name: "Contact Us", href: "/contact" },
        { name: "Help Center", href: "#" },
        { name: "Safety Center", href: "#" },
      ],
      icon: <HelpCircleIcon size={20} className="text-green-500" />
    },
    {
      title: "Legal",
      links: [
        { name: "Terms of Service", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "Fair Play Policy", href: "#" },
      ],
      icon: <ShieldIcon size={20} className="text-purple-500" />
    },
    {
      title: "Fantasy Cricket",
      links: [
        { name: "How to Play", href: "#" },
        { name: "Point System", href: "#" },
        { name: "Rewards", href: "#" },
        { name: "Fantasy Tips", href: "#" },
      ],
      icon: <TrophyIcon size={20} className="text-yellow-500" />
    },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-10 sm:pt-16 pb-6 sm:pb-8 mt-12 sm:mt-20 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        {/* Logo & Main Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Logo & Social Section */}
          <div className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-1 mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="relative w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">CF</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">StumpRoyale</span>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 mt-4 text-sm">
              India&apos;s premium fantasy cricket platform with futuristic gameplay and amazing rewards.
            </p>
            
            <div className="mt-5 flex space-x-3">
              {[
                { icon: <InstagramIcon size={18} />, href: "#" },
                { icon: <TwitterIcon size={18} />, href: "#" },
                { icon: <FacebookIcon size={18} />, href: "#" },
                { icon: <YoutubeIcon size={18} />, href: "#" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  className="h-9 w-9 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Links Sections */}
          {footerLinks.map((section, i) => (
            <div key={i} className="mt-0">
              <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                {section.icon}
                <h3 className="text-gray-900 dark:text-white font-semibold text-sm sm:text-base">
                  {section.title}
                </h3>
              </div>
              <ul className="space-y-2 sm:space-y-3">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <Link 
                      href={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-xs sm:text-sm transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-6 md:mb-0 text-center md:text-left">
              <p>© {new Date().getFullYear()} StumpRoyale. All rights reserved.</p>
              <p className="mt-1 text-xs italic">
                <span className="font-bold">State-Specific Disclaimer:</span> Daily Fantasy Sports is not allowed in the following states: Andhra Pradesh, Assam, Nagaland, Orissa, Sikkim, and Telangana. Ensure you comply with your local laws before engaging.
              </p>
            </div>
            </div>
            
            <div className="flex space-x-3 sm:space-x-4">
              <Link 
                href="#"
                className="px-2 sm:px-3 py-2 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-medium flex items-center space-x-1 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
              >
                <DollarSignIcon size={14} className="mr-1 sm:mr-0" />
                <span className="hidden sm:inline">Deposit</span>
              </Link>
              
              <Link 
                href="#"
                className="px-2 sm:px-3 py-2 rounded bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium flex items-center space-x-1 hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors"
              >
                <BookIcon size={14} className="mr-1 sm:mr-0" />
                <span className="hidden sm:inline">Rules</span>
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center mt-6 text-xs text-gray-500 dark:text-gray-500 space-y-3 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center">
              <PhoneIcon size={14} className="mr-1" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center">
              <MailIcon size={14} className="mr-1" />
              <span>support@StumpRoyale.com</span>
            </div>
            <div className="flex items-center">
              <MapPinIcon size={14} className="mr-1" />
              <span>Mumbai, India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 
