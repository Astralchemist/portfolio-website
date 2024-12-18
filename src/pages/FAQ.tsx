import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { Card } from '../components/ui/Card';
import { Container } from '../components/layout/Container';

const faqs = [
  {
    question: 'What services do you offer in technology consulting?',
    answer: 'Our technology consulting services include software development solutions, cloud infrastructure optimization, digital transformation strategies, and DevOps implementation. We provide end-to-end technical solutions with our in-house expertise.',
  },
  {
    question: 'How do you handle mergers and acquisitions?',
    answer: 'Our M&A services cover the entire process from initial valuation and due diligence to post-merger integration. We provide comprehensive analysis, risk assessment, and strategic planning to ensure successful transactions.',
  },
  {
    question: 'What does your portfolio management service include?',
    answer: 'Our portfolio management services include asset allocation, risk management, performance analysis, and investment strategy development. We help clients optimize their investment portfolios for maximum returns while managing risk.',
  },
  {
    question: 'What construction consulting services do you provide?',
    answer: 'We offer comprehensive construction consulting including project planning, cost estimation, quality control, and safety management. Our team provides expertise in both residential and commercial construction projects.',
  },
  {
    question: 'How do you approach individual consulting?',
    answer: "Our individual consulting services are tailored to each client's needs, focusing on career development, personal branding, skills assessment, and leadership coaching. We provide personalized strategies for professional growth.",
  },
  {
    question: 'What makes your company consulting approach unique?',
    answer: 'Our approach combines data-driven insights with practical implementation strategies, leveraging our in-house technology expertise. We focus on sustainable solutions that continue to deliver value long after our engagement ends.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black dark:bg-gray-900 pt-20">
      <Container className="py-16">
        <PageHeader
          title="Frequently Asked Questions"
          description="Find answers to common questions about our services"
        />

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-white">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-purple-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-purple-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Still have questions?{' '}
            <a
              href="/contact"
              className="text-purple-400 hover:text-purple-300 underline"
            >
              Contact us
            </a>{' '}
            for more information.
          </p>
        </div>
      </Container>
    </div>
  );
}