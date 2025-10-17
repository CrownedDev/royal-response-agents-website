"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Phone,
  MessageSquare,
  Clock,
  TrendingUp,
  Shield,
  Zap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

// Add TypeScript declaration for Voiceflow
declare global {
  interface Window {
    voiceflow?: {
      chat?: {
        load: (config: {
          verify: { projectID: string };
          url: string;
          versionID: string;
          autostart?: boolean;
          render?: {
            mode?: string;
            position?: string;
          };
          launch?: {
            event?: {
              onOpen?: () => void;
              onClose?: () => void;
              onMessage?: (message: unknown) => void;
            };
          };
        }) => void;
        open: () => void;
        close: () => void;
        isOpen?: boolean;
        interact?: (action: { type: string; payload: string }) => void;
      };
    };
  }
}

export default function RoyalResponseLanding() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    crm: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.company
    ) {
      alert("Please fill in all required fields");
      return;
    }

    // Open the chat widget instead of showing alert
    if (window.voiceflow?.chat) {
      window.voiceflow.chat.open();

      // Optional: Send their info to the chat
      setTimeout(() => {
        window.voiceflow?.chat?.interact?.({
          type: "text",
          payload: `Hi, I'm ${formData.name} from ${formData.company}. I'm interested in a demo.`,
        });
      }, 500);
    } else {
      // Fallback if chat not loaded yet
      alert("Chat is loading, please try again in a moment");
    }
  };

  // Add new helper function here
  const openChat = () => {
    if (window.voiceflow?.chat?.open) {
      window.voiceflow.chat.open();
    } else {
      // If not loaded yet, try again after a short delay
      setTimeout(() => {
        if (window.voiceflow?.chat?.open) {
          window.voiceflow.chat.open();
        }
      }, 500);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-purple-900/30 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/logo.webp"
                alt="Royal Response Agents"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <div>
                <div className="text-xl font-bold text-yellow-500">
                  ROYAL RESPONSE AGENTS
                </div>
                <div className="text-xs text-purple-300">AT YOUR SERVICE</div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#problem"
                className="text-gray-300 hover:text-yellow-500 transition-colors"
              >
                Problem
              </a>
              <a
                href="#why-us"
                className="text-gray-300 hover:text-yellow-500 transition-colors"
              >
                Why Us?
              </a>
              <a
                href="#features"
                className="text-gray-300 hover:text-yellow-500 transition-colors"
              >
                Features
              </a>
              <a
                href="#roi"
                className="text-gray-300 hover:text-yellow-500 transition-colors"
              >
                ROI Calculator
              </a>

              <a
                href="#demo"
                className="text-gray-300 hover:text-yellow-500 transition-colors"
              >
                Sign Up
              </a>
            </div>

            <button
              onClick={openChat}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-400 hover:to-yellow-500 transition-all"
            >
              Demo
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-purple-900/30 border border-purple-700 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                👑 Royal Response Agents • At Your Service 24/7
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Never Miss Another Lead
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                  {" "}
                  After Hours
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Royal service, 24/7. AI-powered phone, chat, and WhatsApp for UK
                estate agents. Capture the 40% of leads that come when
                you&apos;re closed.
              </p>

              <div className="bg-purple-900/20 border border-purple-700 rounded-xl p-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 text-black p-3 rounded-lg">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow-500 mb-1">
                      7.5x ROI
                    </div>
                    <div className="text-gray-300">
                      Capture £6K/month extra revenue for just £800/month
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={openChat}
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-400 hover:to-yellow-500 transition-all flex items-center space-x-2"
                >
                  <span>Try Live Demo</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={openChat}
                  className="bg-purple-900/30 border-2 border-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-900/50 transition-all"
                >
                  Chat with AI Assistant
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-900 to-purple-950 rounded-2xl p-8 border border-purple-700 shadow-2xl">
                <div className="aspect-video bg-black rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center">
                    <Image
                      src="/images/logo.webp"
                      alt="Royal Response Agents"
                      width={80}
                      height={80}
                      className="w-20 h-20 mx-auto mb-4 opacity-50"
                    />
                    <div className="text-purple-300">Live Demo Embed</div>
                    <div className="text-sm text-gray-500 mt-2">
                      Voiceflow integration here
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-yellow-500">
                      24/7
                    </div>
                    <div className="text-xs text-purple-300">Always On</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-500">
                      &lt;30s
                    </div>
                    <div className="text-xs text-purple-300">Response Time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-500">
                      100%
                    </div>
                    <div className="text-xs text-purple-300">Lead Capture</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section
        id="problem"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-950/30 to-black"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              The <span className="text-yellow-500">£119 Million</span> Problem
            </h2>
            <p className="text-xl text-gray-300">
              UK estate agents lose millions from missed after-hours enquiries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-purple-900/20 border border-purple-700 rounded-xl p-8 text-center">
              <div className="text-5xl font-bold text-yellow-500 mb-2">40%</div>
              <div className="text-gray-300">
                of leads come after hours (6pm-9am)
              </div>
            </div>
            <div className="bg-purple-900/20 border border-purple-700 rounded-xl p-8 text-center">
              <div className="text-5xl font-bold text-yellow-500 mb-2">73%</div>
              <div className="text-gray-300">
                never call back if you miss them
              </div>
            </div>
            <div className="bg-purple-900/20 border border-purple-700 rounded-xl p-8 text-center">
              <div className="text-5xl font-bold text-yellow-500 mb-2">£6K</div>
              <div className="text-gray-300">
                average monthly loss per branch
              </div>
            </div>
          </div>

          <div className="bg-black border-2 border-purple-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-yellow-500">
              What You&apos;re Losing Right Now
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="text-red-500 text-2xl">❌</div>
                <div>
                  <div className="font-semibold text-lg mb-1">
                    Weekend Viewings
                  </div>
                  <div className="text-sm text-gray-400">
                    Saturday morning calls go to voicemail. By Monday,
                    they&apos;ve chosen your competitor.
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-red-500 text-2xl">❌</div>
                <div>
                  <div className="font-semibold text-lg mb-1">
                    Evening Enquiries
                  </div>
                  <div className="text-gray-400">
                    Buyers browse Rightmove at 8pm. You&apos;re closed. They
                    move on.
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-red-500 text-2xl">❌</div>
                <div>
                  <div className="font-semibold text-lg mb-1">
                    Hot Leads Go Cold
                  </div>
                  <div className="text-gray-400">
                    12-hour response time = 7x lower conversion rate.
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-red-500 text-2xl">❌</div>
                <div>
                  <div className="font-semibold text-lg mb-1">
                    Valuation Requests
                  </div>
                  <div className="text-gray-400">
                    Sellers want instant response. Competitors with AI win the
                    instruction.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Royal Response Agents */}
      <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Image
              src="/images/logo.webp"
              alt="Royal Response Agents Shield"
              width={64}
              height={64}
              className="w-16 h-16 mx-auto mb-4"
            />
            <h2 className="text-4xl font-bold mb-4">
              Why{" "}
              <span className="text-yellow-500">Royal Response Agents?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We&apos;re not just another AI chatbot. We&apos;re your dedicated
              24/7 virtual reception team — providing the royal treatment every
              lead deserves.
            </p>
          </div>

          {/* Main Differentiation Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Us vs CRM AI */}
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-950/30 border-2 border-purple-700 rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-yellow-500 text-black p-3 rounded-lg">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-yellow-500">
                  White-Glove Service
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="text-yellow-500 mt-1">✓</div>
                  <div>
                    <div className="font-semibold mb-1">
                      We Set It Up For You
                    </div>
                    <div className="text-sm text-gray-400">
                      Dedicated onboarding specialist handles everything.
                      You&apos;re live in 2 hours, not 2 weeks.
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-yellow-500 mt-1">✓</div>
                  <div>
                    <div className="font-semibold mb-1">
                      Ongoing Optimization
                    </div>
                    <div className="text-sm text-gray-400">
                      We monitor performance, fine-tune responses, and
                      continually improve your AI.
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-yellow-500 mt-1">✓</div>
                  <div>
                    <div className="font-semibold mb-1">Human Oversight</div>
                    <div className="text-sm text-gray-400">
                      Real people reviewing your leads daily. AI does the work,
                      humans ensure quality.
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-yellow-500 mt-1">✓</div>
                  <div>
                    <div className="font-semibold mb-1">Dedicated Support</div>
                    <div className="text-sm text-gray-400">
                      Direct line to our team. No ticket queues. We answer
                      within 2 hours.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CRM AI Limitations */}
            <div className="bg-black border-2 border-red-900/50 rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-red-900/30 text-red-400 p-3 rounded-lg">
                  <span className="text-2xl">⚠️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-300">
                  CRM AI Tools
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="text-red-400 mt-1">✗</div>
                  <div>
                    <div className="font-semibold mb-1 text-gray-300">
                      Self-Service Setup
                    </div>
                    <div className="text-sm text-gray-500">
                      You&apos;re on your own. Read the docs, watch tutorials,
                      hire consultants.
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-red-400 mt-1">✗</div>
                  <div>
                    <div className="font-semibold mb-1 text-gray-300">
                      Internal Focus
                    </div>
                    <div className="text-sm text-gray-500">
                      Designed for agent productivity, not customer-facing
                      excellence.
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-red-400 mt-1">✗</div>
                  <div>
                    <div className="font-semibold mb-1 text-gray-300">
                      Generic Responses
                    </div>
                    <div className="text-sm text-gray-500">
                      One-size-fits-all. Sounds robotic. Customers know
                      it&apos;s AI.
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-red-400 mt-1">✗</div>
                  <div>
                    <div className="font-semibold mb-1 text-gray-300">
                      Support Ticket Hell
                    </div>
                    <div className="text-sm text-gray-500">
                      Email support@bigcrm.com and wait 3-5 business days for a
                      response.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Pillars */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-900/30 to-purple-950/30 border border-purple-700 rounded-2xl p-8 h-full">
                <div className="text-5xl mb-4">🎩</div>
                <h3 className="text-xl font-bold mb-3 text-yellow-500">
                  Butler-Level Service
                </h3>
                <p className="text-gray-300">
                  Like having a well-trained butler for your business. Polite,
                  professional, always present. Handles every enquiry with
                  grace, just as you would.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-900/30 to-purple-950/30 border border-purple-700 rounded-2xl p-8 h-full">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-3 text-yellow-500">
                  Partnership, Not Software
                </h3>
                <p className="text-gray-300">
                  We&apos;re invested in your success. Your wins are our wins.
                  We proactively optimize, not just sell you licenses and
                  disappear.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-900/30 to-purple-950/30 border border-purple-700 rounded-2xl p-8 h-full">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-3 text-yellow-500">
                  Built for Estate Agents
                </h3>
                <p className="text-gray-300">
                  Not generic business AI. Purpose-built for property.
                  Understands EPC ratings, stamp duty, viewing protocols, and
                  chain management.
                </p>
              </div>
            </div>
          </div>

          {/* The Royal Promise */}
          <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border-2 border-yellow-500 rounded-xl p-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-3xl font-bold mb-4 text-yellow-500">
                The Royal Response Agents Promise
              </div>
              <p className="text-lg text-gray-300 mb-6">
                Every lead that contacts you — whether it&apos;s 2pm or 2am,
                Tuesday or Christmas — receives the same royal treatment:
                instant response, professional courtesy, and complete
                information.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500" />
                  <span className="font-semibold">24/7 Excellence</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500" />
                  <span className="font-semibold">Zero Lead Loss</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500" />
                  <span className="font-semibold">Guaranteed ROI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Royal Treatment for Every Lead
            </h2>
            <p className="text-xl text-gray-300">
              At your service 24/7 — AI that sounds human, responds instantly,
              and never sleeps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-950/30 border border-purple-700 rounded-xl p-8 hover:border-yellow-500 transition-all">
              <Phone className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Voice AI Phone Calls</h3>
              <p className="text-gray-300 mb-4">
                Natural-sounding AI answers calls 24/7. Books viewings, captures
                details, qualifies leads.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                  <span>UK accents & dialects</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                  <span>Handles complex questions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                  <span>Routes to humans when needed</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-purple-950/30 border border-purple-700 rounded-xl p-8 hover:border-yellow-500 transition-all">
              <MessageSquare className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Chat & WhatsApp</h3>
              <p className="text-gray-300 mb-4">
                Instant responses on your website, Facebook, and WhatsApp
                Business.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                  <span>Embed on any website</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                  <span>WhatsApp integration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                  <span>Branded to match your site</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-purple-950/30 border border-purple-700 rounded-xl p-8 hover:border-yellow-500 transition-all">
              <Zap className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold mb-3">CRM Integration</h3>
              <p className="text-gray-300 mb-4">
                Seamless sync with Reapit, Alto, Jupix, Expert Agent. Leads
                appear instantly.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                  <span>Auto-create contacts</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                  <span>Log all conversations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                  <span>2-hour setup time</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-purple-950/30 border border-purple-700 rounded-xl p-8 hover:border-yellow-500 transition-all">
              <Clock className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Smart Scheduling</h3>
              <p className="text-gray-300 mb-4">
                AI checks your calendar and books viewings automatically. No
                double-bookings.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                  <span>Calendar integration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                  <span>Automated confirmations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                  <span>SMS/email reminders</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-purple-950/30 border border-purple-700 rounded-xl p-8 hover:border-yellow-500 transition-all">
              <Shield className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold mb-3">GDPR Compliant</h3>
              <p className="text-gray-300 mb-4">
                UK data centres, full compliance, audit trails. Your reputation
                protected.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                  <span>UK-based servers</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                  <span>Data encryption</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                  <span>Full audit logs</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-purple-950/30 border border-purple-700 rounded-xl p-8 hover:border-yellow-500 transition-all">
              <TrendingUp className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Analytics Dashboard</h3>
              <p className="text-gray-300 mb-4">
                See exactly how many leads you&apos;re capturing and track ROI
                in real-time.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                  <span>Lead capture metrics</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                  <span>Response time tracking</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                  <span>Revenue attribution</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section
        id="roi"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-950/30 to-black"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Calculate Your ROI</h2>
            <p className="text-xl text-gray-300">
              See how much revenue you&apos;re leaving on the table
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/30 to-purple-950/30 border-2 border-purple-700 rounded-xl p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Monthly Property Enquiries
                </label>
                <input
                  type="number"
                  defaultValue="100"
                  className="w-full bg-black border border-purple-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500"
                  placeholder="e.g., 100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Average Commission per Sale (£)
                </label>
                <input
                  type="number"
                  defaultValue="4000"
                  className="w-full bg-black border border-purple-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500"
                  placeholder="e.g., 4000"
                />
              </div>

              <div className="border-t border-purple-700 pt-6 mt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-black rounded-lg p-6 border border-purple-700">
                    <div className="text-sm text-gray-400 mb-2">
                      Missed After-Hours Leads
                    </div>
                    <div className="text-3xl font-bold text-red-400">
                      40 leads/month
                    </div>
                  </div>
                  <div className="bg-black rounded-lg p-6 border border-purple-700">
                    <div className="text-sm text-gray-400 mb-2">
                      Lost Revenue (Monthly)
                    </div>
                    <div className="text-3xl font-bold text-red-400">
                      £6,000
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border-2 border-yellow-500 rounded-lg p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-gray-300 mb-1">
                        With Royal Response
                      </div>
                      <div className="text-4xl font-bold text-yellow-500">
                        +£6,000/month
                      </div>
                      <div className="text-sm text-gray-300 mt-1">
                        Cost: £800/month
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-5xl font-bold text-yellow-500">
                        7.5x
                      </div>
                      <div className="text-sm text-gray-300">ROI</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CRM Partners */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Works With Your CRM</h2>
            <p className="text-xl text-gray-300">
              Seamless integration with all major UK property systems
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-purple-900/20 border border-purple-700 rounded-xl p-8 flex items-center justify-center hover:border-yellow-500 transition-all">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500 mb-2">
                  Reapit
                </div>
                <div className="text-xs text-purple-300">AppMarket Partner</div>
              </div>
            </div>
            <div className="bg-purple-900/20 border border-purple-700 rounded-xl p-8 flex items-center justify-center hover:border-yellow-500 transition-all">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500 mb-2">
                  Alto
                </div>
                <div className="text-xs text-purple-300">
                  Certified Integration
                </div>
              </div>
            </div>
            <div className="bg-purple-900/20 border border-purple-700 rounded-xl p-8 flex items-center justify-center hover:border-yellow-500 transition-all">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500 mb-2">
                  Jupix
                </div>
                <div className="text-xs text-purple-300">Full Sync</div>
              </div>
            </div>
            <div className="bg-purple-900/20 border border-purple-700 rounded-xl p-8 flex items-center justify-center hover:border-yellow-500 transition-all">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500 mb-2">
                  Expert Agent
                </div>
                <div className="text-xs text-purple-300">API Connected</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Form */}
      <section
        id="demo"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-950/30 to-black"
      >
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Stop Losing Leads?
            </h2>
            <p className="text-xl text-gray-300">
              Experience royal service — book a demo and see us in action
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/30 to-purple-950/30 border-2 border-purple-700 rounded-xl p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-black border border-purple-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black border border-purple-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500"
                  placeholder="john@yourfirm.co.uk"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-black border border-purple-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500"
                  placeholder="07700 900000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Agency Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-black border border-purple-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500"
                  placeholder="Your Estate Agency"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Which CRM do you use?
                </label>
                <select
                  name="crm"
                  value={formData.crm}
                  onChange={handleChange}
                  className="w-full bg-black border border-purple-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500"
                >
                  <option value="">Select your CRM</option>
                  <option value="reapit">Reapit</option>
                  <option value="alto">Alto</option>
                  <option value="jupix">Jupix</option>
                  <option value="expert-agent">Expert Agent</option>
                  <option value="other">Other</option>
                  <option value="none">No CRM yet</option>
                </select>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-400 hover:to-yellow-500 transition-all"
              >
                Book Your Demo
              </button>

              <p className="text-xs text-center text-gray-400">
                We&apos;ll respond within 24 hours. No pushy sales calls, just a
                friendly chat about how we can help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-900/30 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/images/logo.webp"
                  alt="Royal Response Agents"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <div>
                  <div className="font-bold text-yellow-500">
                    ROYAL RESPONSE AGENTS
                  </div>
                  <div className="text-xs text-purple-300">AT YOUR SERVICE</div>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                24/7 AI customer response for UK estate agents
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-yellow-500">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-yellow-500">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#demo" className="hover:text-yellow-500">
                    Book Demo
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-yellow-500">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-yellow-500">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-yellow-500">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-yellow-500">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-purple-900/30 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Royal Response Agents. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
