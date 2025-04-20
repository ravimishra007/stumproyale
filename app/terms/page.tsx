"use client";

import { motion } from "framer-motion";
import { ArrowLeftIcon, PrinterIcon, DownloadIcon, ChevronRightIcon, BookOpenIcon, ShieldCheckIcon } from "lucide-react";
import Link from "next/link";
import AppLayout from "../AppLayout";
import { useState, useEffect } from "react";

export default function TermsPage() {
  const lastUpdated = "March 15, 2023";
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Handle print functionality
  const handlePrint = () => {
    window.print();
  };

  // Handle download as PDF functionality
  const handleDownloadPDF = () => {
    // This is a placeholder - in a real implementation, you would use a library like jsPDF
    alert("PDF download functionality would be implemented here");
  };

  // Scroll to section when clicked in table of contents
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("h2[id]");
      let currentSection = null;
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100) {
          currentSection = section.id;
        }
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Header with premium styling */}
        <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900 rounded-xl p-6 text-white shadow-lg">
          <div>
            <Link 
              href="/"
              className="inline-flex items-center text-blue-100 hover:text-white hover:underline mb-4 transition-colors"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-1" />
              Back to Home
            </Link>
            <div className="flex items-center gap-3">
              <BookOpenIcon className="w-8 h-8 text-blue-200" />
              <h1 className="text-3xl md:text-4xl font-bold">Terms and Conditions</h1>
            </div>
            <p className="text-blue-100 mt-2">Last Updated: {lastUpdated}</p>
          </div>
          
          <div className="mt-4 md:mt-0 flex space-x-3">
            <button 
              onClick={handlePrint}
              className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors backdrop-blur-sm"
            >
              <PrinterIcon className="w-4 h-4 mr-2" />
              Print
            </button>
            <button 
              onClick={handleDownloadPDF}
              className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors backdrop-blur-sm"
            >
              <DownloadIcon className="w-4 h-4 mr-2" />
              Download PDF
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Table of Contents with premium styling */}
          <div className="lg:w-1/4">
            <div className="sticky top-24 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheckIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Table of Contents</h2>
              </div>
              <nav className="space-y-1">
                <button 
                  onClick={() => scrollToSection("acceptance")}
                  className={`w-full text-left px-3 py-2 rounded-md flex items-center transition-all ${activeSection === "acceptance" ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"}`}
                >
                  <ChevronRightIcon className="w-4 h-4 mr-2" />
                  <span>1. Acceptance of Terms</span>
                </button>
                <button 
                  onClick={() => scrollToSection("eligibility")}
                  className={`w-full text-left px-3 py-2 rounded-md flex items-center transition-all ${activeSection === "eligibility" ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"}`}
                >
                  <ChevronRightIcon className="w-4 h-4 mr-2" />
                  <span>2. Eligibility</span>
                </button>
                <button 
                  onClick={() => scrollToSection("account")}
                  className={`w-full text-left px-3 py-2 rounded-md flex items-center transition-all ${activeSection === "account" ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"}`}
                >
                  <ChevronRightIcon className="w-4 h-4 mr-2" />
                  <span>3. Account Registration and KYC</span>
                </button>
                <button 
                  onClick={() => scrollToSection("contests")}
                  className={`w-full text-left px-3 py-2 rounded-md flex items-center transition-all ${activeSection === "contests" ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"}`}
                >
                  <ChevronRightIcon className="w-4 h-4 mr-2" />
                  <span>4. Fantasy Cricket Contests</span>
                </button>
                <button 
                  onClick={() => scrollToSection("financial")}
                  className={`w-full text-left px-3 py-2 rounded-md flex items-center transition-all ${activeSection === "financial" ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"}`}
                >
                  <ChevronRightIcon className="w-4 h-4 mr-2" />
                  <span>5. Financial Terms</span>
                </button>
                <button 
                  onClick={() => scrollToSection("conduct")}
                  className={`w-full text-left px-3 py-2 rounded-md flex items-center transition-all ${activeSection === "conduct" ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"}`}
                >
                  <ChevronRightIcon className="w-4 h-4 mr-2" />
                  <span>6. Code of Conduct</span>
                </button>
                <button 
                  onClick={() => scrollToSection("ip")}
                  className={`w-full text-left px-3 py-2 rounded-md flex items-center transition-all ${activeSection === "ip" ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"}`}
                >
                  <ChevronRightIcon className="w-4 h-4 mr-2" />
                  <span>7. Intellectual Property</span>
                </button>
                <button 
                  onClick={() => scrollToSection("disclaimers")}
                  className={`w-full text-left px-3 py-2 rounded-md flex items-center transition-all ${activeSection === "disclaimers" ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"}`}
                >
                  <ChevronRightIcon className="w-4 h-4 mr-2" />
                  <span>8. Disclaimers and Limitations</span>
                </button>
                <button 
                  onClick={() => scrollToSection("indemnification")}
                  className={`w-full text-left px-3 py-2 rounded-md flex items-center transition-all ${activeSection === "indemnification" ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"}`}
                >
                  <ChevronRightIcon className="w-4 h-4 mr-2" />
                  <span>9. Indemnification</span>
                </button>
                <button 
                  onClick={() => scrollToSection("dispute")}
                  className={`w-full text-left px-3 py-2 rounded-md flex items-center transition-all ${activeSection === "dispute" ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"}`}
                >
                  <ChevronRightIcon className="w-4 h-4 mr-2" />
                  <span>10. Dispute Resolution</span>
                </button>
                <button 
                  onClick={() => scrollToSection("governing")}
                  className={`w-full text-left px-3 py-2 rounded-md flex items-center transition-all ${activeSection === "governing" ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"}`}
                >
                  <ChevronRightIcon className="w-4 h-4 mr-2" />
                  <span>11. Governing Law</span>
                </button>
                <button 
                  onClick={() => scrollToSection("modifications")}
                  className={`w-full text-left px-3 py-2 rounded-md flex items-center transition-all ${activeSection === "modifications" ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"}`}
                >
                  <ChevronRightIcon className="w-4 h-4 mr-2" />
                  <span>12. Modifications to Terms</span>
                </button>
                <button 
                  onClick={() => scrollToSection("termination")}
                  className={`w-full text-left px-3 py-2 rounded-md flex items-center transition-all ${activeSection === "termination" ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"}`}
                >
                  <ChevronRightIcon className="w-4 h-4 mr-2" />
                  <span>13. Termination</span>
                </button>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className={`w-full text-left px-3 py-2 rounded-md flex items-center transition-all ${activeSection === "contact" ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"}`}
                >
                  <ChevronRightIcon className="w-4 h-4 mr-2" />
                  <span>14. Contact Information</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Content with premium styling */}
          <div className="lg:w-3/4">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-md border border-gray-100 dark:border-gray-700">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="prose prose-lg dark:prose-invert max-w-none"
              >
                <div className="mb-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg border border-blue-100 dark:border-blue-800">
                  <p className="text-blue-800 dark:text-blue-300 font-medium">
                    Welcome to StumpRoyale! These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of the StumpRoyale website, mobile applications, and services collectively, the Platform. Please read these Terms carefully before using our Platform.
                  </p>
                </div>
                
                <p className="font-medium">
                  By accessing or using the Platform, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use the Platform.
                </p>

                <h2 id="acceptance" className="scroll-mt-24 pt-4 border-b border-gray-200 dark:border-gray-700 pb-2">1. Acceptance of Terms</h2>
                <p>
                  By registering an account with StumpRoyale or by accessing or using the Platform, you acknowledge that you have read, understood, and agree to be bound by these Terms, as well as any additional terms and conditions that may apply.
                </p>

                <h2 id="eligibility" className="scroll-mt-24 pt-4 border-b border-gray-200 dark:border-gray-700 pb-2">2. Eligibility</h2>
                <p>
                  To use the Platform, you must:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Be at least 18 years old</li>
                  <li>Be capable of forming a binding contract with StumpRoyale</li>
                  <li>Not be prohibited from using the Platform under applicable law</li>
                  <li>Reside in a state or territory of India where participation in fantasy sports contests is legal</li>
                  <li>Have a valid email address and phone number</li>
                </ul>
                <p>
                  By using the Platform, you represent and warrant that you meet all eligibility requirements. StumpRoyale reserves the right to verify your eligibility at any time.
                </p>

                <h2 id="account" className="scroll-mt-24 pt-4 border-b border-gray-200 dark:border-gray-700 pb-2">3. Account Registration and KYC</h2>
                
                <h3 className="text-blue-600 dark:text-blue-400">3.1 Account Creation</h3>
                <p>
                  To access certain features of the Platform, you must register for an account. When you register, you agree to provide accurate, current, and complete information about yourself. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                </p>
                
                <h3 className="text-blue-600 dark:text-blue-400">3.2 KYC Verification</h3>
                <p>
                  To withdraw winnings from the Platform, you must complete our Know Your Customer (KYC) verification process, which may include providing:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Your full name, address, and date of birth</li>
                  <li>A copy of your PAN card</li>
                  <li>A valid government-issued photo ID (such as Aadhaar Card, Passport, or Drivers License)</li>
                  <li>Bank account details</li>
                </ul>
                <p>
                  Failure to provide accurate KYC information or any attempt to provide false information will result in termination of your account and forfeiture of any winnings.
                </p>

                <h2 id="contests" className="scroll-mt-24 pt-4 border-b border-gray-200 dark:border-gray-700 pb-2">4. Fantasy Cricket Contests</h2>
                
                <h3 className="text-blue-600 dark:text-blue-400">4.1 Contest Rules</h3>
                <p>
                  Each fantasy cricket contest on the Platform has its own specific rules, entry fees, prize structure, and eligibility requirements. By entering a contest, you agree to abide by its specific rules in addition to these Terms.
                </p>
                
                <h3 className="text-blue-600 dark:text-blue-400">4.2 Contest Modifications</h3>
                <p>
                  StumpRoyale reserves the right to:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Cancel or modify contests at any time before or after they have commenced</li>
                  <li>Adjust contest structures, prize pools, or entry fees</li>
                  <li>Limit the number of entries per person or per contest</li>
                  <li>Prohibit specific users from entering certain contests</li>
                </ul>
                
                <h3 className="text-blue-600 dark:text-blue-400">4.3 Game of Skill</h3>
                <p>
                  The fantasy cricket contests offered on the Platform are games of skill. Success in these contests depends primarily on the skill, knowledge, and judgment of the participants rather than chance or luck. By participating in these contests, you acknowledge and agree that they constitute games of skill under applicable law.
                </p>

                <h2 id="financial" className="scroll-mt-24 pt-4 border-b border-gray-200 dark:border-gray-700 pb-2">5. Financial Terms</h2>
                
                <h3 className="text-blue-600 dark:text-blue-400">5.1 Deposits</h3>
                <p>
                  You may deposit funds into your StumpRoyale account using the payment methods available on the Platform. All deposits must be made using payment instruments that you are legally authorized to use. We may impose minimum and maximum deposit limits at our discretion.
                </p>
                
                <h3 className="text-blue-600 dark:text-blue-400">5.2 Contest Entry Fees</h3>
                <p>
                  Some contests require an entry fee to participate. By entering such contests, you authorize StumpRoyale to deduct the entry fee from your account balance. All entry fees are inclusive of applicable taxes and platform fees.
                </p>
                
                <h3 className="text-blue-600 dark:text-blue-400">5.3 Winnings</h3>
                <p>
                  Winnings will be credited to your StumpRoyale account after the official results of the relevant cricket match have been declared and all statistics have been verified. The distribution of prizes for each contest is specified in the contest details.
                </p>
                
                <h3 className="text-blue-600 dark:text-blue-400">5.4 Withdrawals</h3>
                <p>
                  You may withdraw available funds from your StumpRoyale account subject to:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Completion of KYC verification</li>
                  <li>Minimum withdrawal amount requirements</li>
                  <li>Withdrawal processing timelines (typically 24-48 hours)</li>
                  <li>Verification that deposits used for contest entries have been settled</li>
                </ul>
                <p>
                  StumpRoyale reserves the right to withhold withdrawals and freeze accounts if we suspect fraudulent activity, policy violations, or require additional verification.
                </p>
                
                <h3 className="text-blue-600 dark:text-blue-400">5.5 Taxes</h3>
                <p>
                  All taxes, levies, and duties applicable to your winnings are your sole responsibility. For winnings above ₹10,000, StumpRoyale will deduct TDS (Tax Deducted at Source) as per Indian tax laws. You will be provided with TDS certificates for such deductions.
                </p>

                <h2 id="conduct" className="scroll-mt-24 pt-4 border-b border-gray-200 dark:border-gray-700 pb-2">6. Code of Conduct</h2>
                
                <p>
                  While using the Platform, you agree not to:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Create multiple accounts</li>
                  <li>Use the Platform for any illegal purpose</li>
                  <li>Engage in collusion or match-fixing</li>
                  <li>Use automated scripts, bots, or other software to access or interact with the Platform</li>
                  <li>Manipulate or attempt to manipulate the outcome of any contest</li>
                  <li>Harass, threaten, or intimidate other users</li>
                  <li>Post or transmit offensive, obscene, or inappropriate content</li>
                  <li>Attempt to reverse engineer, decompile, or disassemble any part of the Platform</li>
                  <li>Interfere with the proper functioning of the Platform</li>
                </ul>
                <p>
                  Violation of this code of conduct may result in suspension or termination of your account, forfeiture of winnings, and legal action where applicable.
                </p>

                <h2 id="ip" className="scroll-mt-24 pt-4 border-b border-gray-200 dark:border-gray-700 pb-2">7. Intellectual Property</h2>
                <p>
                  All content on the Platform, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, is the property of StumpRoyale or its licensors and is protected by international copyright, trademark, and other intellectual property laws.
                </p>
                <p>
                  You are granted a limited, non-exclusive, non-transferable license to access and use the Platform for personal, non-commercial purposes. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any content from the Platform without the prior written consent of StumpRoyale.
                </p>

                <h2 id="disclaimers" className="scroll-mt-24 pt-4 border-b border-gray-200 dark:border-gray-700 pb-2">8. Disclaimers and Limitations of Liability</h2>
                
                <h3 className="text-blue-600 dark:text-blue-400">8.1 Platform Availability</h3>
                <p>
                  The Platform is provided on an as is and as available basis. StumpRoyale does not guarantee that the Platform will be available, uninterrupted, secure, or error-free at all times.
                </p>
                
                <h3 className="text-blue-600 dark:text-blue-400">8.2 Accuracy of Information</h3>
                <p>
                  While we strive to provide accurate and up-to-date information, StumpRoyale does not warrant the accuracy, completeness, or reliability of any content on the Platform, including player statistics, match information, or contest details.
                </p>
                
                <h3 className="text-blue-600 dark:text-blue-400">8.3 Limitation of Liability</h3>
                <p>
                  To the maximum extent permitted by law, StumpRoyale and its affiliates, officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, or goodwill, arising out of or in connection with your use of the Platform.
                </p>
                <p>
                  In no event shall StumpRoyales total liability to you for all claims arising out of or relating to these Terms or your use of the Platform exceed the amount paid by you to StumpRoyale during the three (3) months preceding the event giving rise to the liability.
                </p>

                <h2 id="indemnification" className="scroll-mt-24 pt-4 border-b border-gray-200 dark:border-gray-700 pb-2">9. Indemnification</h2>
                <p>
                  You agree to indemnify, defend, and hold harmless StumpRoyale and its affiliates, officers, directors, employees, and agents from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys fees) arising from or relating to:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Your use of the Platform</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any rights of another person or entity</li>
                  <li>Your violation of any applicable laws, rules, or regulations</li>
                </ul>

                <h2 id="dispute" className="scroll-mt-24 pt-4 border-b border-gray-200 dark:border-gray-700 pb-2">10. Dispute Resolution</h2>
                <p>
                  Any dispute arising out of or in connection with these Terms or the Platform shall be resolved through good faith negotiations between the parties. If the dispute cannot be resolved through negotiations, it shall be submitted to arbitration in accordance with the Arbitration and Conciliation Act, 1996, of India. The arbitration shall take place in Hyderabad, India, and the language of arbitration shall be English.
                </p>

                <h2 id="governing" className="scroll-mt-24 pt-4 border-b border-gray-200 dark:border-gray-700 pb-2">11. Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles. The courts of Hyderabad, Telangana, India shall have exclusive jurisdiction over any disputes arising under these Terms.
                </p>

                <h2 id="modifications" className="scroll-mt-24 pt-4 border-b border-gray-200 dark:border-gray-700 pb-2">12. Modifications to Terms</h2>
                <p>
                  StumpRoyale reserves the right to modify these Terms at any time. We will notify you of any material changes by posting the updated Terms on the Platform or by sending you an email. Your continued use of the Platform after the posting of updated Terms constitutes your acceptance of the changes.
                </p>

                <h2 id="termination" className="scroll-mt-24 pt-4 border-b border-gray-200 dark:border-gray-700 pb-2">13. Termination</h2>
                <p>
                  StumpRoyale may terminate or suspend your account and access to the Platform at any time, with or without cause, and with or without notice. Upon termination, your right to use the Platform will immediately cease, and you must cease all use of the Platform.
                </p>

                <h2 id="contact" className="scroll-mt-24 pt-4 border-b border-gray-200 dark:border-gray-700 pb-2">14. Contact Information</h2>
                <p>
                  If you have any questions or concerns about these Terms, please contact us at:
                </p>
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700 dark:to-blue-900/30 p-4 rounded-lg mt-2 border border-gray-200 dark:border-gray-600">
                  <p className="font-medium">
                    StumpRoyale<br />
                    Email: legal@StumpRoyale.com<br />
                    Phone: +91 98765 43210<br />
                    Address: Level 8, Cyber Towers, Hitec City, Hyderabad, Telangana 500081, India
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
} 