import { Award, Users, Building, Target } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';

export function About() {
  return (
    <div className="min-h-screen bg-black dark:bg-gray-900 pt-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <PageHeader
          title="Our Story"
          description="Founded in 2017, ConsultHasha has been at the forefront of business transformation, helping organizations navigate complex challenges and achieve sustainable growth."
        />
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '500+', label: 'Clients Served' },
              { number: '10+', label: 'Years Experience' },
              { number: '5', label: 'Countries Present' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Section - Organizational Chart */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Our Services Structure
        </h2>
        <div className="relative">
          {/* CEO Level */}
          <div className="flex justify-center mb-12">
            <div className="bg-purple-600/20 p-4 rounded-lg border border-purple-500/30 text-center">
              <h3 className="text-xl font-semibold text-white">Strategic Consulting</h3>
              <p className="text-gray-400 text-sm">Business Strategy & Planning</p>
            </div>
          </div>

          {/* Department Level */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Technology Solutions',
                items: ['Developer Services', 'Digital Transformation', 'Cloud Solutions'],
              },
              {
                title: 'Financial Services',
                items: ['M&A Advisory', 'Portfolio Management', 'Risk Assessment'],
              },
              {
                title: 'Industry Solutions',
                items: ['Construction Services', 'Manufacturing', 'Retail'],
              },
            ].map((dept, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-4">{dept.title}</h4>
                <ul className="space-y-2">
                  {dept.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-400 text-sm">• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}