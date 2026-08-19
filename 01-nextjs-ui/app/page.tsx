'use client';

import React, { useState } from 'react';

export default function StrategyPlanner() {
  const [idea, setIdea] = useState('');
  const [audience, setAudience] = useState('');
  const [budget, setBudget] = useState('Bootstrapped ($0 - $1000)');
  const [strategy, setStrategy] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if (!idea) return;
    setIsGenerating(true);
    
    // Simulating the backend API delay
    setTimeout(() => {
      setStrategy(`[Simulated Strategy from AI Engine]\n\nBased on your idea: "${idea}", here is your actionable Digital Business Strategy mapped out for success... (Connect backend to view full generation)`);
      setIsGenerating(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        
        <div className="bg-gradient-to-r from-blue-900 to-black text-white p-10 text-center">
          <h1 className="text-4xl font-extrabold mb-3">AI Business Strategy Planner 📊</h1>
          <p className="text-blue-200 text-lg">Decode your path to success. Instantly generate a digital roadmap for your startup.</p>
        </div>

        <div className="p-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Input Section */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Your Business Idea</label>
              <textarea 
                rows={4}
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-600"
                placeholder="e.g., A SaaS platform for local gym owners..."
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Target Audience</label>
              <input 
                type="text" 
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-600"
                placeholder="e.g., Fitness coaches, young professionals"
                value={audience}
                onChange={(e) => setAudience(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Initial Budget</label>
              <select 
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-600"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              >
                <option>Bootstrapped ($0 - $1,000)</option>
                <option>Seed ($1,000 - $10,000)</option>
                <option>Funded ($10,000+)</option>
              </select>
            </div>

            <button 
              onClick={handleGenerate}
              disabled={isGenerating || !idea}
              className={`w-full py-4 text-white font-bold rounded-lg transition-all ${isGenerating ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700 shadow-lg'}`}
            >
              {isGenerating ? 'Analyzing Market...' : 'Generate Full Strategy ✨'}
            </button>
          </div>

          {/* Output Section */}
          <div className="lg:col-span-2 bg-gray-100 rounded-xl p-8 border border-gray-200">
            {strategy ? (
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Execution Blueprint:</h3>
                <div className="whitespace-pre-wrap text-gray-700 leading-relaxed font-medium">
                  {strategy}
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-gray-400">
                <span className="text-6xl mb-4">📈</span>
                <p>Fill out your startup details to generate a comprehensive strategy.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
