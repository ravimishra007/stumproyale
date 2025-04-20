"use client";

import { motion } from "framer-motion";
import { ArrowLeftIcon, PrinterIcon, DownloadIcon, ShieldIcon, LockIcon, EyeIcon } from "lucide-react";
import Link from "next/link";
import AppLayout from "../AppLayout";

export default function PrivacyPolicyPage() {
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
                <ShieldIcon className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Privacy Policy</h1>
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
                  At StumpRoyale, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our fantasy cricket platform, including any related mobile applications &quot;Platform. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the Platform.
                </p>
              </div>

              <div className="flex items-center mb-4">
                <LockIcon className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">Information We Collect</h2>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Personal Data</h3>
              <p>
                We may collect personal information that you voluntarily provide to us when you register on the Platform, express interest in obtaining information about us or our products and services, participate in activities on the Platform, or otherwise contact us. The personal information we collect may include:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Name, email address, phone number, and other contact information</li>
                <li>Date of birth, gender, and PAN card details for KYC verification</li>
                <li>Bank account details for processing withdrawals</li>
                <li>Account credentials (username and password)</li>
                <li>Profile preferences and settings</li>
                <li>Transaction and contest participation history</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6">Automatically Collected Information</h3>
              <p>
                When you access our Platform, we may automatically collect certain information about your device and usage of the Platform, including:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Device information (such as your mobile device ID, model, and manufacturer)</li>
                <li>IP address, browser type, operating system</li>
                <li>Your actions on the Platform (such as pages visited, buttons clicked)</li>
                <li>Time and date of your visits</li>
                <li>Referring website, application, or service</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6">Information From Third Parties</h3>
              <p>
                We may obtain information about you from other sources, such as public databases, joint marketing partners, social media platforms, as well as from other third parties. This information may include:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Social media profile information when you connect your account to our Platform</li>
                <li>Marketing leads and search results from third-party providers</li>
              </ul>

              <div className="flex items-center mb-4 mt-8">
                <EyeIcon className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">How We Use Your Information</h2>
              </div>
              <p>
                We use the information we collect or receive:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>To facilitate account creation and login process</li>
                <li>To provide, operate, and maintain our Platform</li>
                <li>To manage contests, track scores, and distribute prizes</li>
                <li>To process transactions and send related information</li>
                <li>To verify your identity for KYC compliance and prevent fraud</li>
                <li>To respond to customer service requests and support needs</li>
                <li>To send you administrative information, such as updates, security alerts, and support messages</li>
                <li>To personalize your experience and deliver content relevant to your interests</li>
                <li>To enable user-to-user communications with your consent</li>
                <li>To process and deliver contest entries and rewards</li>
                <li>To send marketing and promotional communications if you have opted in</li>
                <li>To compile anonymous statistical data for research purposes</li>
                <li>To comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">Disclosure of Your Information</h2>
              <p>
                We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
              </p>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6">By Law or to Protect Rights</h3>
              <p>
                We may disclose your information where required by law or if we believe that disclosure will protect our rights, or the rights, property, and safety of our users or others.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6">Third-Party Service Providers</h3>
              <p>
                We may share your information with third-party vendors, service providers, and other third parties who perform services for us or on our behalf and require access to such information to do that work. These may include payment processors, data analysts, email service providers, hosting providers, customer service providers, and marketing partners.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6">Business Transfers</h3>
              <p>
                If we are involved in a merger, acquisition, or asset sale, your information may be transferred. We will notify you before your information becomes subject to a different privacy policy.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6">With Your Consent</h3>
              <p>
                We may disclose your personal information for any other purpose with your consent.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">Cookies and Tracking Technologies</h2>
              <p>
                We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Platform to help customize the Platform and improve your experience. For more information on how we use cookies, please refer to our Cookie Policy.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">Security of Your Information</h2>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal information from unauthorized access, use, or disclosure. While we take reasonable steps to secure your information, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">Data Retention</h2>
              <p>
                We will retain your information for as long as your account is active, as necessary to provide you with the services, as needed for legal purposes (such as tax and accounting requirements), or as otherwise required by law. When we no longer have a legitimate business need to process your personal information, we will delete or anonymize it.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">Your Rights Regarding Your Information</h2>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6">Account Information</h3>
              <p>
                You can review and change your personal information by logging into your account settings. You may also send us an email to request access to, correction of, or deletion of personal information that you have provided to us.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6">Marketing Communications</h3>
              <p>
                You can unsubscribe from our marketing email list at any time by clicking on the unsubscribe link in the emails that we send or by contacting us. You will still receive transaction-related emails regarding products or services you have requested.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6">Do-Not-Track Features</h3>
              <p>
                Most web browsers and some mobile operating systems include a Do-Not-Track &quot;DNT feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. No uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">Childrens Privacy</h2>
              <p>
                The Platform is not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you discover that a child has provided us with personal information, please contact us immediately so that we can take steps to remove such information and terminate the childs account.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">Changes to this Privacy Policy</h2>
              <p>
                We may update this privacy policy from time to time. The updated version will be indicated by an updated Last Updated date. If we make material changes to this privacy policy, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">Contact Us</h2>
              <p>
                If you have questions or comments about this privacy policy, please contact us at:
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