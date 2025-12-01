'use client';

import { useState } from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { Sparkles, Copy, Download, RefreshCw } from 'lucide-react';

export default function GeneratePage() {
  const [prompt, setPrompt] = useState('');
  const [quotation, setQuotation] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const examplePrompts = [
    "Quote for 200 AC units with installation and maintenance",
    "Enterprise software licensing for 500 users",
    "Construction project: Office renovation 5000 sq ft",
    "Marketing campaign package with SEO and social media"
  ];

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    
    try {
      const response = await fetch('/api/generate-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate quotation');
      }

      setQuotation(data.quotation);
    } catch (error) {
      console.error('Error:', error);
      setQuotation('Error generating quotation. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(quotation);
  };

  const handleDownload = () => {
    const blob = new Blob([quotation], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `quotation-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleReset = () => {
    setPrompt('');
    setQuotation('');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-orange-50 rounded-full">
              <Sparkles className="w-4 h-4 text-orange-accent" />
              <span className="text-sm font-medium text-orange-accent">AI-Powered Quote Generator</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-light mb-6">
              Generate Professional Quotations
            </h1>
            <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
              Transform your requirements into polished business quotations in seconds. 
              Just describe what you need, and let AI handle the rest.
            </p>
          </div>

          {/* Main Workspace */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Input Section */}
              <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700 delay-150">
                <div className="bg-white rounded-2xl shadow-lg border border-border p-6">
                  <label className="block text-lg font-display font-medium mb-4">
                    Describe Your Requirements
                  </label>
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="E.g., I need a quote for 200 commercial AC units with installation, 2-year warranty, and net-30 payment terms..."
                    className="w-full h-64 p-4 border border-border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-accent focus:border-transparent transition-all"
                  />
                  
                  {/* Example Prompts */}
                  <div className="mt-4">
                    <p className="text-sm text-neutral-gray mb-2">Try these examples:</p>
                    <div className="flex flex-wrap gap-2">
                      {examplePrompts.map((example, idx) => (
                        <button
                          key={idx}
                          onClick={() => setPrompt(example)}
                          className="text-xs px-3 py-1.5 bg-background-light hover:bg-border rounded-full transition-colors"
                        >
                          {example}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-6">
                    <button
                      onClick={handleGenerate}
                      disabled={!prompt.trim() || isGenerating}
                      className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-xl px-6 py-3 font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-all duration-200 hover:-translate-y-0.5"
                    >
                      {isGenerating ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4" />
                          Generate Quote
                        </>
                      )}
                    </button>
                    {quotation && (
                      <button
                        onClick={handleReset}
                        className="px-6 py-3 border border-border rounded-xl hover:bg-background-light transition-colors"
                      >
                        Reset
                      </button>
                    )}
                  </div>
                </div>

                
              </div>

              {/* Output Section */}
              <div className="space-y-4 animate-in fade-in slide-in-from-right duration-700 delay-300">
                <div className="bg-white rounded-2xl shadow-lg border border-border p-6">
                  <div className="flex items-center justify-between mb-4">
                    <label className="text-lg font-display font-medium">
                      Generated Quotation
                    </label>
                    {quotation && (
                      <div className="flex gap-2">
                        <button
                          onClick={handleCopy}
                          className="p-2 hover:bg-background-light rounded-lg transition-colors"
                          title="Copy to clipboard"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                        <button
                          onClick={handleDownload}
                          className="p-2 hover:bg-background-light rounded-lg transition-colors"
                          title="Download as text file"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                  
                  <div className="bg-background-light rounded-xl p-6 h-[500px] overflow-y-auto">
                    {quotation ? (
                      <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-foreground">
                        {quotation}
                      </pre>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full text-center">
                        <div className="w-16 h-16 bg-border rounded-full flex items-center justify-center mb-4">
                          <Sparkles className="w-8 h-8 text-neutral-gray" />
                        </div>
                        <p className="text-neutral-gray mb-2">Your quotation will appear here</p>
                        <p className="text-sm text-light-gray">Enter your requirements and click Generate</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="max-w-3xl mx-auto mt-16 text-center animate-in fade-in duration-700 delay-500">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-display font-medium mb-3">
                Need More Advanced Features?
              </h3>
              <p className="text-neutral-gray mb-6">
                Upgrade to unlock CRM integrations, custom templates, approval workflows, 
                and enterprise-grade features.
              </p>
              <a
                href="/pricing"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-all duration-200 hover:-translate-y-0.5"
              >
                View Pricing Plans
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}