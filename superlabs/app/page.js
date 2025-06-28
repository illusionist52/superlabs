"use client";
import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Globe,
  Target,
  DollarSign,
  Store,
  TrendingUp,
  Headphones,
} from "lucide-react";

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="border border-gray-200 rounded-lg mb-4">
      <button
        className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-red-500 rounded-lg"
        onClick={onToggle}
      >
        <span className="font-semibold text-gray-800">{title}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-600" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-600" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 rounded-b-lg">
          <p className="text-gray-700 leading-relaxed">{content}</p>
        </div>
      )}
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <Icon className="h-8 w-8 text-red-600 mr-3" />
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const TestimonialCard = ({ name, company, story }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <div className="mb-4">
        <h4 className="font-semibold text-gray-800 text-lg">{name}</h4>
        <p className="text-red-600 font-medium">{company}</p>
      </div>
      <p className="text-gray-700 leading-relaxed">{story}</p>
    </div>
  );
};

export default function Page() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const features = [
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Connect with millions of business buyers from around the world and expand your market presence internationally.",
    },
    {
      icon: Target,
      title: "Targeted Placement",
      description:
        "Get your products placed in the right spots to be noticed by the exact audience you are targeting.",
    },
    {
      icon: DollarSign,
      title: "Low Commission",
      description:
        "Pocket more from each sale, with take rates as low as 0% in some cases.",
    },
    {
      icon: Store,
      title: "Dedicated Store",
      description:
        "Differentiate yourself from the competition with a full store dedicated to your products- no coding or design skills necessary!",
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description:
        "Improve performance with dashboards detailing product exposure, click volume, spend, average cost, store visits, and more.",
    },
    {
      icon: Headphones,
      title: "Full Support",
      description:
        "From onboarding help to online chats to local support during business hours and account optimization tips -- we're here for you",
    },
  ];

  const testimonials = [
    {
      name: "Mr David",
      company: "Medical Devices Manufacturing",
      story:
        "Mr David runs a manufacturing company that works in this field of medical devices. With administrative and production across the country. With full respect for environment and several years' experience using IP systems that are conventional",
    },
    {
      name: "Lab Evolution Team",
      company: "Lab Evolution",
      story:
        "Lab Evolution is an import - export company of reagents and laboratory equipment established over a decade. Our company's team of experts (in the instrumentations and reagents market) carefully follows customers all over the world. Lab Evolution is able to offer all the most competitive and popular brands and the best quality products for your laboratory.",
    },
    {
      name: "Rupesh Kanna",
      company: "Medical Imaging Specialist",
      story:
        "Rupesh Kanna found himself in between jobs in 2016. He started a blog, and wrote about his past experience as a lab technician while sharing his knowledge on imaging techniques. Kanna wanted to see more diversity in the medical devices industry and specilised high-quality pigmented imaging process, so he decided to create his own product line",
    },
    {
      name: "Loyd",
      company: "LTA International Global Services LLC",
      story:
        "LTA International Global Services LLC is a Florida-based export management company that sells top Medical device products from major US brands to importers and distributors around the globe. Founded in 1994 by Loyd, LTA's long-standing expertise in logistics and pricing has made it one of the most successful international trade businesses in the USA.",
    },
  ];

  const faqData = [
    {
      title: "How do I get started selling on 1MDM?",
      content:
        "Getting started is simple! Create your seller account, upload your product catalog, set up your store, and start connecting with buyers worldwide. Our onboarding team will guide you through every step of the process.",
    },
    {
      title: "What are the commission rates?",
      content:
        "We offer competitive commission rates as low as 0% in some cases, depending on your product category and sales volume. Contact our sales team to learn about the specific rates for your products.",
    },
    {
      title: "How do I optimize my product listings?",
      content:
        "Use high-quality images, detailed product descriptions, accurate specifications, and relevant keywords. Our performance dashboard will help you track which products are performing well and identify areas for improvement.",
    },
    {
      title: "What kind of support do you provide?",
      content:
        "We provide comprehensive support including onboarding assistance, online chat support, local support during business hours, account optimization tips, and dedicated account management for larger sellers.",
    },
    {
      title: "How do I track my performance?",
      content:
        "Our advanced analytics dashboard provides detailed insights on product exposure, click volume, spend, average cost, store visits, conversion rates, and more. You can access real-time data to optimize your selling strategy.",
    },
  ];

  return (
    <>
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-red-600">1MDM</h1>
              <span className="ml-2 text-sm text-gray-600">
                World's Largest Medical Devices Marketplace
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-red-600">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-red-600">
                Products
              </a>
              <a href="#" className="text-gray-700 hover:text-red-600">
                About
              </a>
              <a href="#" className="text-red-600 font-medium">
                Sell
              </a>
              <a href="#" className="text-gray-700 hover:text-red-600">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Reach millions of B2B buyers globally
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              Get the tools and know-how to build a successful ecommerce
              presence for your business.
            </p>
            <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              Start Selling Today
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose 1MDM for Your Business?
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to succeed in the global medical devices
              marketplace
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              See how other sellers are thriving on our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about selling on 1MDM
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                title={faq.title}
                content={faq.content}
                isOpen={openAccordion === index}
                onToggle={() => toggleAccordion(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Selling?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Join thousands of successful sellers on the world's largest medical
            devices marketplace
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Create Seller Account
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-600 transition-colors">
              Contact Sales Team
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">1MDM</h3>
              <p className="text-gray-300">
                World's Largest Medical Devices Marketplace
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    Market Place
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Start Selling
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Customer Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Delivery Information
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    Corporate Information
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Images & B-roll
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>
              ⚡ by{" "}
              <a
                href="https://www.superlabs.co"
                className="text-red-400 hover:text-red-300"
              >
                SuperLabs
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
