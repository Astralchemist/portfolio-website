import { PageHeader } from '../components/PageHeader';
import { QuoteForm } from '../components/forms/QuoteForm';
import { PageLayout } from '../components/layout/PageLayout';

export function Quote() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <PageHeader
          title="Request a Quote"
          description="Fill out the form below and we'll get back to you within 24 hours"
        />

        <div className="bg-gray-800/50 rounded-lg p-8">
          <QuoteForm />
        </div>
      </div>
    </PageLayout>
  );
}