import React from 'react';
import { Search, Shield, Users } from 'lucide-react';
import { Button, H1, Body } from './ui';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-8 mb-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-secondary" />
              <span>Verified Programs</span>
            </div>
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-primary" />
              <span>Easy Search</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-secondary" />
              <span>Patient-Focused</span>
            </div>
          </div>

          {/* Main Headlines */}
          <div className="space-y-6">
            <H1 className="text-4xl md:text-5xl lg:text-6xl leading-tight bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Save on brand-name prescriptions with verified manufacturer programs
            </H1>
            
            <Body className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We collect official savings offers and turn the fine print into clear, simple summaries you can rely on
            </Body>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button 
              variant="primary" 
              size="lg"
              className="w-full sm:w-auto px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Find Discounts
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto px-8 py-4 text-lg font-semibold hover:bg-primary-50 transform hover:-translate-y-1 transition-all duration-300"
            >
              Create Account
            </Button>
          </div>

          {/* Supporting Information */}
          <div className="pt-12 text-center">
            <Body className="text-gray-500 text-sm max-w-2xl mx-auto">
              <strong className="text-primary-600">100% Free to Use</strong> • No hidden fees • Programs sourced directly from manufacturer websites
            </Body>
          </div>

          {/* Visual Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary-600">500+</div>
              <div className="text-sm text-gray-600">Verified Programs</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-secondary-600">$2.5B</div>
              <div className="text-sm text-gray-600">Potential Savings</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary-600">50K+</div>
              <div className="text-sm text-gray-600">Patients Helped</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};