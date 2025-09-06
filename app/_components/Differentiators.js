"use client"

import React, { useEffect, useRef } from 'react';
import MyGlobe from "./MyGlobe";
const Differentiators = () => {
  const globeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-globe-rotate');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (globeRef.current) {
      observer.observe(globeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <h2 className="text-4xl text-white md:text-5xl font-bold text-center mb-20">
          Enterprise Power, Accessible to Everyone
        </h2> */}

        <div className="relative">
          {/* Central Globe */}
          {/* <div className="flex justify-center mb-16">
            <div
              ref={globeRef}
              className="relative w-80 h-80 flex items-center justify-center"
            >
            
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30">
            
                <div className="absolute inset-0 rounded-full border border-blue-400/20"></div>
                <div className="absolute inset-4 rounded-full border border-blue-400/15"></div>
                <div className="absolute inset-8 rounded-full border border-blue-400/10"></div>
                
                
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              </div>

           
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full"></div>
              </div>
              <div className="absolute inset-0 animate-spin-reverse" style={{ animationDuration: '20s' }}>
                <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-2 h-2 bg-purple-500 rounded-full"></div>
              </div>
            </div>
          </div> */}
   <MyGlobe/>
          {/* Pillars around the globe */}
          <div className="flex  gap-12 lg:gap-8">
            {/* Pillar 1 */}
            <div className="lg:col-span-1 text-center lg:text-left">
              <h4 className="text-2xl font-bold mb-4">Accessible & Affordable</h4>
              <p className="text-gray-300 leading-relaxed">
                Transparent, tiered SaaS pricing that fits the budgets of solo, small, and mid-sized firms. 
                No opaque enterprise contracts or six-figure setup fees. Start for free and scale as you grow.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="lg:col-span-1 text-center lg:text-left lg:order-3">
              <h4 className="text-2xl font-bold mb-4">Secure & Confidential</h4>
              <p className="text-gray-300 leading-relaxed">
                Built on a foundation of enterprise-grade security. SOC 2 and ISO 27001 compliant. 
                We will never train our AI models on your confidential client data—a commitment backed by our contractual guarantee.
              </p>
            </div>

            {/* Pillar 3 - Centered below */}
            <div className=" text-center lg:max-w-md lg:mx-auto">
              <h4 className="text-2xl font-bold mb-4">Open & Flexible</h4>
              <p className="text-gray-300 leading-relaxed text-left">
                Powered by a state-of-the-art open-source core, Ross AI avoids vendor lock-in and delivers faster innovation. 
                Our flexible architecture gives your firm a durable, long-term competitive edge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiators;