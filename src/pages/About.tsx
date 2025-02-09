import React from 'react';
import { Award, Users, Building, Target, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';  // Ensure this path is correct

export function About() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-16">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="relative">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-blue-600 dark:text-blue-400">
              Our Story
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Founded in 2017, ConsultHasha has been at the forefront of business transformation, 
              helping organizations navigate complex challenges and achieve sustainable growth.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-800 bg-opacity-50 py-16 border-t border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[ 
              { icon: Users, number: '500+', label: 'Clients Served' },
              { icon: Award, number: '10+', label: 'Years Experience' },
              { icon: Building, number: '5', label: 'Countries Present' }
            ].map((stat, index) => (
              <Card key={index}>
                <CardContent className="flex items-center space-x-4">
                  <div className="p-3 bg-gray-700 rounded-lg">
                    <stat.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">
                      {stat.number}
                    </div>
                    <div className="text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Services Structure Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Our Services Structure
        </h2>
        
        {/* Strategic Consulting Card */}
        <Card className="mb-12">
          <CardContent>
            <div className="flex items-center justify-center space-x-4">
              <div className="p-4 bg-gray-700 rounded-lg">
                <Target className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white">
                  Strategic Consulting
                </h3>
                <p className="text-gray-400">
                  Business Strategy & Planning
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Department Level */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[ 
            { title: 'Technology Solutions', items: ['Developer Services', 'Digital Transformation', 'Cloud Solutions'] },
            { title: 'Financial Services', items: ['M&A Advisory', 'Portfolio Management', 'Risk Assessment'] },
            { title: 'Industry Solutions', items: ['Construction Services', 'Manufacturing', 'Retail'] }
          ].map((dept, index) => (
            <Card key={index}>
              <CardContent>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-gray-700 rounded-lg">
                    <Building className="w-5 h-5 text-blue-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">
                    {dept.title}
                  </h4>
                </div>
                <ul className="space-y-3">
                  {dept.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-2 text-gray-400">
                      <ChevronRight className="w-4 h-4 text-blue-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
