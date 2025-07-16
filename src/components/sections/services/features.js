'use client';

import { Code2Icon, DatabaseIcon, GaugeIcon, PaletteIcon, RocketIcon, LayersIcon } from 'lucide-react';

const features = [
  {
    title: "Design-first",
    description: "Each block and component is carefully crafted and optimized by AI to give a unique business feel for a design-first approach.",
    icon: <PaletteIcon className="w-8 h-8" />,
    mockup: (
      <div className="relative">
        <div className="w-48 h-96 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-4 border border-gray-700">
          <div className="bg-gray-700 rounded-2xl h-full p-4">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-white text-sm">Active team</span>
              </div>
              <div className="text-white text-xs">9:41</div>
            </div>
            
            <h3 className="text-white text-xl font-bold mb-6">Dashboard</h3>
            
            <div className="space-y-4">
              <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-3">
                <div className="text-orange-400 text-sm font-medium">Overview</div>
              </div>
              
              <div className="space-y-2">
                <div className="text-gray-300 text-sm">Team Statistics</div>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>Active Members</span>
                  <span>24</span>
                </div>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>Completed</span>
                  <span>67</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Made for fast development",
    description: "With lightweight code, modern tooling and best practices, Launch UI is as fast to build with as it is to load.",
    icon: <RocketIcon className="w-8 h-8" />,
    mockup: (
      <div className="relative">
        <div className="w-64 h-48 bg-gray-900 rounded-xl border border-gray-700 p-4">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-600">
              <div className="w-6 h-6 bg-orange-500 rounded"></div>
            </div>
            <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-600">
              <RocketIcon className="w-6 h-6 text-orange-400" />
            </div>
            <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-600">
              <Code2Icon className="w-6 h-6 text-blue-400" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-2 bg-orange-500 rounded-full w-3/4"></div>
            <div className="h-2 bg-blue-500 rounded-full w-1/2"></div>
            <div className="h-2 bg-green-500 rounded-full w-5/6"></div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "The code is yours",
    description: "With Launch UI, the code is yours forever. Never worry about subscriptions and lock-ins.",
    icon: <Code2Icon className="w-8 h-8" />,
    mockup: (
      <div className="relative">
        <div className="w-72 h-48 bg-gray-900 rounded-xl border border-gray-700 p-4 font-mono text-xs">
          <div className="space-y-1 text-gray-300">
            <div><span className="text-blue-400">import</span> <span className="text-green-400">React</span> <span className="text-blue-400">from</span> <span className="text-yellow-400">&apos;react&apos;</span>;</div>
            <div><span className="text-blue-400">import</span> <span className="text-green-400">Button</span> <span className="text-blue-400">from</span> <span className="text-yellow-400">&apos;./Button&apos;</span>;</div>
            <div></div>
            <div><span className="text-blue-400">export</span> <span className="text-blue-400">default</span> <span className="text-green-400">function</span> <span className="text-yellow-400">Component</span>() {`{`}</div>
            <div className="ml-4"><span className="text-blue-400">return</span> (</div>
            <div className="ml-8">&lt;<span className="text-red-400">div</span> <span className="text-green-400">className</span>=<span className="text-yellow-400">&quot;container&quot;</span>&gt;</div>
            <div className="ml-12">&lt;<span className="text-red-400">Button</span>&gt;Click me&lt;/<span className="text-red-400">Button</span>&gt;</div>
            <div className="ml-8">&lt;/<span className="text-red-400">div</span>&gt;</div>
            <div className="ml-4">);</div>
            <div>{`}`}</div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Top-level performance",
    description: "Built for scale. Your websites and apps will load blazingly fast, every session and every visitor, your website will feel snappy and load instantly.",
    icon: <GaugeIcon className="w-8 h-8" />,
    mockup: (
      <div className="relative">
        <div className="w-64 h-48 bg-gray-900 rounded-xl border border-gray-700 p-6 flex items-center justify-center">
          <div className="relative w-32 h-32">
            {/* Performance visualization circles */}
            <div className="absolute inset-0 border-4 border-gray-700 rounded-full"></div>
            <div className="absolute inset-2 border-4 border-gray-600 rounded-full"></div>
            <div className="absolute inset-4 border-4 border-orange-500/50 rounded-full"></div>
            <div className="absolute inset-6 border-4 border-orange-500 rounded-full"></div>
            
            {/* Center indicator */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <GaugeIcon className="w-4 h-4 text-white" />
            </div>
            
            {/* Performance dots */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-400 rounded-full"></div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full"></div>
            <div className="absolute top-1/2 left-2 transform -translate-y-1/2 w-2 h-2 bg-purple-400 rounded-full"></div>
            <div className="absolute top-1/2 right-2 transform -translate-y-1/2 w-2 h-2 bg-yellow-400 rounded-full"></div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Data-agnostic",
    description: "All the data is separate from components so you can edit it as separate or make it dynamic. Easily connect to a CMS of your choice.",
    icon: <DatabaseIcon className="w-8 h-8" />,
    mockup: (
      <div className="relative">
        <div className="w-64 h-48 bg-gray-900 rounded-xl border border-gray-700 p-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-sm">Data Management</span>
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-3 border border-gray-600">
              <div className="flex items-center gap-2 mb-2">
                <DatabaseIcon className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300 text-xs">Database Connected</span>
              </div>
              <div className="text-green-400 text-xs">Status: Active</div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Collections</span>
                <span className="text-orange-400">12</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">API Calls</span>
                <span className="text-green-400">1.2k</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Cache Hit</span>
                <span className="text-blue-400">98%</span>
              </div>
            </div>
            
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xs py-2 px-4 rounded-lg transition-colors">
              Sync Data
            </button>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Fits right into your stack",
    description: "Build your website and product with the same technologies and frameworks. Forget about vendor lock-ins and extra dependencies, no extra maintenance.",
    icon: <LayersIcon className="w-8 h-8" />,
    mockup: (
      <div className="relative">
        <div className="w-64 h-48 bg-gray-900 rounded-xl border border-gray-700 p-6">
          <div className="grid grid-cols-3 gap-4 h-full">
            {/* Tech stack visualization */}
            <div className="space-y-3">
              <div className="w-full h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">React</span>
              </div>
              <div className="w-full h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">Node</span>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="relative">
                {/* Connection visualization */}
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <LayersIcon className="w-4 h-4 text-white" />
                </div>
                <div className="absolute -top-2 -left-2 w-12 h-12 border-2 border-orange-500/30 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="w-full h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">API</span>
              </div>
              <div className="w-full h-8 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">DB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Devspire
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            With Launch UI, you can make sure that your design is unique and memorable.
            Built with modern technologies and best practices for optimal performance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-all duration-500"
              style={{ 
                animationDelay: `${index * 200}ms`,
                animation: 'fadeInUp 0.8s ease-out forwards'
              }}
            >
              {/* Feature content */}
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{feature.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Feature mockup */}
                <div className="flex-shrink-0">
                  {feature.mockup}
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              Join thousands of developers and businesses who trust Devspire for their digital solutions.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25">
              Start Your Project
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
