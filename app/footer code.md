import React from 'react';
import Button from './ui/Button';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900/20 to-purple-900/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, #007BFF 2px, transparent 2px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Stop Guessing. <span className="text-blue-500">Start Winning.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
          Join hundreds of modern law firms transforming their practice with Ross AI. 
          Start your free trial today and see the difference data-driven strategy can make.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button variant="primary" size="xl" className="w-full sm:w-auto">
            Start Your 14-Day Free Trial
          </Button>
          <Button variant="outline" size="xl" className="w-full sm:w-auto">
            Talk to an Expert
          </Button>
        </div>

        <p className="text-sm text-gray-400 mt-8">
          No credit card required • Full access to all features • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CallToAction;