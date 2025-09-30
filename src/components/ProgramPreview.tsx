import React from 'react';
import { ExternalLink, Clock, CheckCircle } from 'lucide-react';
import { Button, Card } from './ui';

interface ProgramCardProps {
  brandName: string;
  programName: string;
  eligibility: string[];
  isRecent: boolean;
  sourceUrl: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  brandName,
  programName,
  eligibility,
  isRecent,
  sourceUrl
}) => {
  return (
    <Card hover className="h-full flex flex-col">
      <div className="flex-1">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-text mb-1">
              {brandName}
            </h3>
            <p className="text-sm text-gray-600 font-medium">
              {programName}
            </p>
          </div>
          
          <div className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${
            isRecent 
              ? 'bg-secondary-100 text-secondary-700' 
              : 'bg-warning-100 text-warning-700'
          }`}>
            {isRecent ? (
              <CheckCircle className="w-3 h-3" />
            ) : (
              <Clock className="w-3 h-3" />
            )}
            {isRecent ? 'Recently Updated' : '60+ days old'}
          </div>
        </div>

        <div className="space-y-2 mb-6">
          {eligibility.map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm text-gray-700 leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <a 
          href={sourceUrl}
          className="flex items-center gap-1 text-sm text-primary hover:text-primary-700 transition-colors duration-200"
        >
          <ExternalLink className="w-4 h-4" />
          Source
        </a>
        
        <Button variant="primary" size="sm">
          View Details
        </Button>
      </div>
    </Card>
  );
};

export const ProgramPreview: React.FC = () => {
  const programs = [
    {
      brandName: "Mounjaro",
      programName: "Mounjaro Savings Card",
      eligibility: [
        "Commercial insurance required",
        "Save up to $150 per prescription",
        "12-month program limit",
        "BMI requirements may apply"
      ],
      isRecent: true,
      sourceUrl: "#"
    },
    {
      brandName: "Januvia",
      programName: "Merck Helps Program",
      eligibility: [
        "Income limits: $48,000 individual",
        "Must be uninsured or underinsured",
        "U.S. residency required",
        "Valid prescription needed"
      ],
      isRecent: true,
      sourceUrl: "#"
    },
    {
      brandName: "Humira",
      programName: "Humira Complete",
      eligibility: [
        "Commercial insurance coverage",
        "$5 per month with qualifying insurance",
        "Annual household income limits",
        "Cannot use with government insurance"
      ],
      isRecent: false,
      sourceUrl: "#"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text mb-4">
            Sample Program Previews
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how we break down complex manufacturer programs into clear, actionable information
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="px-8">
            View All Programs
          </Button>
        </div>
      </div>
    </section>
  );
};