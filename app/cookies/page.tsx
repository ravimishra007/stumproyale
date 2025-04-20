"use client";

import { motion } from "framer-motion";
import { ArrowLeftIcon, PrinterIcon, DownloadIcon, CookieIcon, SettingsIcon, ShieldIcon, InfoIcon, SmartphoneIcon } from "lucide-react";
import Link from "next/link";
import AppLayout from "../AppLayout";

export default function CookiesPage() {
  const lastUpdated = "March 15, 2023";

  return (
    <AppLayout>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between"
          >
            <div>
              <Link 
                href="/"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-4 group"
              >
                <ArrowLeftIcon className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Link>
              <div className="flex items-center">
                <CookieIcon className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Cookie Policy</h1>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Last Updated: {lastUpdated}</p>
            </div>
            
            <div className="mt-4 md:mt-0 flex space-x-3">
              <button className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-sm">
                <PrinterIcon className="w-4 h-4 mr-2" />
                Print
              </button>
              <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
                <DownloadIcon className="w-4 h-4 mr-2" />
                Download PDF
              </button>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-md border border-gray-100 dark:border-gray-700"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg mb-6 border-l-4 border-blue-500">
                <p className="text-blue-800 dark:text-blue-200 m-0">
                  This Cookie Policy explains how StumpRoyale &quot;(we, us, or our) uses cookies and similar technologies on our website and mobile applications (collectively, the Platform). This policy is part of our Privacy Policy and explains what cookies are, how we use them, and what options you have regarding their use.
                </p>
              </div>

              <div className="flex items-center mb-4">
                <InfoIcon className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">What Are Cookies?</h2>
              </div>
              <p>
                Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently, provide basic functionality such as remembering your preferences, and collect information about your browsing experience. Cookies are not harmful and do not contain viruses or personal information like credit card details.
              </p>

              <div className="flex items-center mb-4 mt-8">
                <SettingsIcon className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">Types of Cookies We Use</h2>
              </div>
              <p>
                We use different types of cookies for various purposes:
              </p>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6">Essential Cookies</h3>
              <p>
                These cookies are necessary for the Platform to function properly. They enable core features such as security, network management, and account access. You cannot opt out of these cookies as the Platform cannot function properly without them.
              </p>
              <p>
                Examples of essential cookies we use:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Authentication cookies:</strong> These help us identify you when you log in to our Platform so we can show you your account information and provide personalized features.</li>
                <li><strong>Security cookies:</strong> These help us detect and prevent fraudulent activity and ensure the security of your account.</li>
                <li><strong>Session cookies:</strong> These are temporary cookies that are deleted when you close your browser. They allow our Platform to link your actions during a particular browser session.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6">Functional Cookies</h3>
              <p>
                These cookies enable enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our Platform. If you disable these cookies, some or all of these functions may not work properly.
              </p>
              <p>
                Examples of functional cookies we use:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Preference cookies:</strong> These allow us to remember choices you make (such as language preference, theme selection, or region) to provide a more personalized experience.</li>
                <li><strong>Game progress cookies:</strong> These help us remember your game state and preferences in contests so you can continue where you left off.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6">Analytics Cookies</h3>
              <p>
                These cookies collect information about how visitors use our Platform, including which pages visitors go to most often and if they receive error messages. This helps us improve how our Platform works and measure the effectiveness of our marketing campaigns. All information collected by these cookies is aggregated and therefore anonymous.
              </p>
              <p>
                Examples of analytics cookies we use:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Google Analytics:</strong> This service helps us understand how users interact with our Platform by collecting and analyzing usage data.</li>
                <li><strong>Performance monitoring:</strong> These cookies help us identify performance issues and ensure a smooth user experience.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6">Advertising Cookies</h3>
              <p>
                These cookies are used to make advertising messages more relevant to you and your interests. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed, and in some cases selecting advertisements based on your interests.
              </p>
              <p>
                Examples of advertising cookies we use:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Third-party advertising cookies:</strong> These are placed by advertising networks with our permission to help deliver personalized ads that may be relevant to you based on your browsing habits.</li>
                <li><strong>Social media cookies:</strong> Our Platform may include features from social media platforms, such as Like buttons, which may collect your IP address and track which page you are visiting.</li>
              </ul>

              <div className="flex items-center mb-4 mt-8">
                <ShieldIcon className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">Third-Party Cookies</h2>
              </div>
              <p>
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics, deliver advertisements, and so on. These cookies may be placed when you visit our Platform or when you interact with certain features.
              </p>
              <p>
                Third-party services we use that may place cookies include:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Google Analytics (analytics)</li>
                <li>Facebook Pixel (marketing)</li>
                <li>Google Ads (marketing)</li>
                <li>Hotjar (user behavior analysis)</li>
                <li>Mixpanel (analytics)</li>
                <li>Payment gateways (transaction processing)</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">Cookie Management</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6">Browser Settings</h3>
              <p>
                Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies, or to alert you when cookies are being sent. The methods for doing so vary from browser to browser, and from version to version. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience since it will no longer be personalized to you.
              </p>
              <p>
                Here are links to cookie management instructions for common browsers:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Safari</a></li>
                <li><a href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Microsoft Edge</a></li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6">Cookie Consent</h3>
              <p>
                When you first visit our Platform, you will be shown a cookie banner giving you the option to accept or decline non-essential cookies. You can change your preferences at any time by clicking on the Cookie Settings link in the footer of our Platform.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6">Do Not Track Signals</h3>
              <p>
                Some browsers have a Do Not Track feature that signals to websites that you visit that you do not want to have your online activity tracked. Given that there is no consistent industry standard for Do Not Track signals, our Platform does not currently respond to browser Do Not Track signals.
              </p>

              <div className="flex items-center mb-4 mt-8">
                <SmartphoneIcon className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">Mobile Applications</h2>
              </div>
              <p>
                Our mobile applications may use technologies similar to cookies, such as local storage on your device, to provide functionality and remember your preferences. These technologies work in a similar way to cookies. You can clear local storage by clearing the application data in your device settings.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">Changes to This Cookie Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will become effective when we post the revised policy on our Platform. We encourage you to review this policy periodically to stay informed about our use of cookies.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">Contact Us</h2>
              <p>
                If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mt-2">
                <p className="m-0">
                  <span className="font-semibold">StumpRoyale</span><br />
                  Email: <a href="mailto:privacy@StumpRoyale.com" className="text-blue-600 dark:text-blue-400 hover:underline">privacy@StumpRoyale.com</a><br />
                  Phone: <a href="tel:+919876543210" className="text-blue-600 dark:text-blue-400 hover:underline">+91 98765 43210</a><br />
                  Address: Level 8, Cyber Towers, Hitec City, Hyderabad, Telangana 500081, India
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AppLayout>
  );
} 