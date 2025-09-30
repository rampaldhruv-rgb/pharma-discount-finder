import React from 'react';
import { Brain, ExternalLink, RefreshCw, UserCheck, Share2 } from 'lucide-react';

export const FeaturesGrid: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-powered summaries",
      description: "Complex eligibility requirements, savings amounts, and program caps simplified into clear bullet points"
    },
    {
      icon: ExternalLink,
      title: "Always cites the official source",
      description: "Every program links directly to the manufacturer's official website for verification and updates"
    },
    {
      icon: RefreshCw,
      title: "Freshness checks",
      description: "Programs over 60 days old are clearly flagged, with regular updates to ensure current information"
    },
    {
      icon: UserCheck,
      title: "No login required to browse",
      description: "Access all program information immediately without creating an account or providing personal details"
    },
    {
      icon: Share2,
      title: "Optional save/share features",
      description: "Create an account to save favorite programs and share relevant options with healthcare providers"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text mb-4">
            Why Choose Pharma Discount Finder
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've built the most comprehensive and user-friendly platform for finding prescription drug discounts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center space-y-4 p-6 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <feature.icon className="w-8 h-8 text-primary-600" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-text">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};