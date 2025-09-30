import React from 'react';
import { Shield, Calendar, FileCheck, AlertTriangle } from 'lucide-react';

export const TrustTransparency: React.FC = () => {
  return (
    <section className="py-16 bg-primary-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text mb-4">
            Trust & Transparency
          </h2>
          <p className="text-xl text-primary-700 font-semibold mb-8">
            Source: Manufacturer Official Sites
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Visual Elements */}
          <div className="space-y-8">
            {/* Example Fetched Date Badge */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-secondary" />
                <span className="font-semibold text-text">Data Freshness Example</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-secondary-50 rounded-lg">
                  <span className="text-sm font-medium">Mounjaro Savings Card</span>
                  <span className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-xs font-medium">
                    Updated 3 days ago
                  </span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-warning-50 rounded-lg">
                  <span className="text-sm font-medium">Humira Complete</span>
                  <span className="px-3 py-1 bg-warning-100 text-warning-700 rounded-full text-xs font-medium">
                    Updated 67 days ago
                  </span>
                </div>
              </div>
            </div>

            {/* Medical Icons */}
            <div className="flex justify-center gap-8">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                <FileCheck className="w-8 h-8 text-secondary" />
              </div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                <AlertTriangle className="w-8 h-8 text-warning" />
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-text mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-primary" />
                Our Commitment
              </h3>
              
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  <strong className="text-primary">We never alter program terms</strong> — we simplify them. 
                  Every discount program is sourced directly from official manufacturer websites and 
                  presented in clear, understandable language.
                </p>
                
                <p className="leading-relaxed">
                  Our automated systems check for updates regularly, and we clearly flag any 
                  information that may be outdated to ensure you always have the most current data.
                </p>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-warning">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-warning flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-text mb-2">Important Disclaimer</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    This information is for educational purposes only and is not medical advice. 
                    Always consult with your healthcare provider before making decisions about 
                    your medications or treatment options.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};