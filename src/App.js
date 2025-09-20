import React, { useState, useEffect } from 'react';
import { Brain, TrendingUp, Users, Clock, AlertTriangle, Zap, Eye, MessageSquare, Repeat2, Heart } from 'lucide-react';

const ThreadripperDemo = () => {
  const [selectedThread, setSelectedThread] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [liveStats, setLiveStats] = useState({
    threadsAnalyzed: 1247,
    accuracy: 87.3,
    viralDetected: 23,
    activeUsers: 2400
  });

  // Mock viral threads data
  const mockThreads = [
    {
      id: 1,
      author: "@TechGuru_Mike",
      content: "Just spent 3 hours debugging what turned out to be a missing semicolon. Sometimes I wonder why I became a developer... 😅 But honestly, moments like these remind me why I love what I do. The satisfaction when it finally works? Unmatched.",
      metrics: { likes: 2400, retweets: 890, replies: 156 },
      viralScore: 89,
      status: "trending",
      psychAnalysis: {
        primaryEmotion: "Frustration → Satisfaction",
        manipulation: "Relatability Hook",
        hiddenMeaning: "Seeking validation through shared struggle",
        powerDynamics: "Humble bragging disguised as vulnerability",
        engagement: "High - taps into universal developer experience"
      },
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      author: "@StartupCEO_Sarah",
      content: "Our team really grinded it out this quarter. Couldn't be prouder of what we've accomplished together. The late nights, the weekend pushes, the constant pivots - it all paid off. Sometimes you have to push through the hard times to see the other side.",
      metrics: { likes: 1800, retweets: 420, replies: 89 },
      viralScore: 76,
      status: "viral",
      psychAnalysis: {
        primaryEmotion: "Pride masking exhaustion",
        manipulation: "Toxic positivity",
        hiddenMeaning: "Team burnout being celebrated as achievement",
        powerDynamics: "Leadership deflecting responsibility for work-life balance",
        engagement: "Medium - resonates with hustle culture believers"
      },
      timestamp: "4 hours ago"
    },
    {
      id: 3,
      author: "@InvestorVoice",
      content: "Just closed another round with an incredible founder. What impressed me most wasn't their pitch deck or numbers - it was their raw honesty about the challenges ahead. That's the kind of authenticity that builds trust.",
      metrics: { likes: 3200, retweets: 1100, replies: 234 },
      viralScore: 94,
      status: "explosive",
      psychAnalysis: {
        primaryEmotion: "Manufactured authenticity",
        manipulation: "Authority positioning",
        hiddenMeaning: "Self-promotion disguised as founder appreciation",
        powerDynamics: "Gatekeeping while appearing supportive",
        engagement: "Very High - appeals to founder aspirations"
      },
      timestamp: "6 hours ago"
    }
  ];

  const [threads, setThreads] = useState(mockThreads);

  useEffect(() => {
    // Simulate live updates
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        threadsAnalyzed: prev.threadsAnalyzed + Math.floor(Math.random() * 3),
        accuracy: 87.3 + (Math.random() - 0.5) * 2,
        viralDetected: prev.viralDetected + (Math.random() > 0.8 ? 1 : 0),
        activeUsers: prev.activeUsers + Math.floor((Math.random() - 0.5) * 50)
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'trending': return 'bg-blue-100 text-blue-800';
      case 'viral': return 'bg-purple-100 text-purple-800';
      case 'explosive': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getViralScoreColor = (score) => {
    if (score >= 90) return 'text-red-500';
    if (score >= 75) return 'text-orange-500';
    if (score >= 60) return 'text-yellow-500';
    return 'text-green-500';
  };

  const analyzeThread = (thread) => {
    setSelectedThread(thread);
    setIsAnalyzing(true);
    
    setTimeout(() => {
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Header */}
      <div className="border-b border-gray-700 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-lg">
                <Brain className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">THREADRIPPER</h1>
                <p className="text-sm text-gray-300">AI Twitter Analysis Engine</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Live Monitoring</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Live Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-blue-400" />
              <span className="text-sm text-gray-300">Threads Analyzed</span>
            </div>
            <div className="text-2xl font-bold">{liveStats.threadsAnalyzed.toLocaleString()}</div>
          </div>
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-sm text-gray-300">Accuracy</span>
            </div>
            <div className="text-2xl font-bold">{liveStats.accuracy.toFixed(1)}%</div>
          </div>
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-red-400" />
              <span className="text-sm text-gray-300">Viral Detected</span>
            </div>
            <div className="text-2xl font-bold">{liveStats.viralDetected}</div>
          </div>
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-green-400" />
              <span className="text-sm text-gray-300">Active Users</span>
            </div>
            <div className="text-2xl font-bold">{liveStats.activeUsers.toLocaleString()}</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Viral Threads Feed */}
          <div className="bg-black/30 backdrop-blur-sm rounded-xl border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Live Viral Thread Detection
              </h2>
            </div>
            <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
              {threads.map((thread) => (
                <div 
                  key={thread.id} 
                  className="bg-gray-800/50 rounded-lg p-4 border border-gray-600 hover:border-gray-500 transition-colors cursor-pointer"
                  onClick={() => analyzeThread(thread)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-blue-400">{thread.author}</span>
                      <span className="text-xs text-gray-400">{thread.timestamp}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(thread.status)}`}>
                        {thread.status}
                      </span>
                      <span className={`font-bold ${getViralScoreColor(thread.viralScore)}`}>
                        {thread.viralScore}%
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-3 line-clamp-3">{thread.content}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      {thread.metrics.likes.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Repeat2 className="w-3 h-3" />
                      {thread.metrics.retweets.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageSquare className="w-3 h-3" />
                      {thread.metrics.replies}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Analysis Panel */}
          <div className="bg-black/30 backdrop-blur-sm rounded-xl border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Brain className="w-5 h-5" />
                AI Psychological Analysis
              </h2>
            </div>
            <div className="p-4">
              {!selectedThread ? (
                <div className="text-center py-12">
                  <Brain className="w-16 h-16 mx-auto text-gray-500 mb-4" />
                  <p className="text-gray-400">Select a thread to analyze its psychological subtext</p>
                </div>
              ) : isAnalyzing ? (
                <div className="text-center py-12">
                  <div className="animate-spin w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full mx-auto mb-4"></div>
                  <p className="text-gray-400">Analyzing psychological patterns...</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-400 mb-2">Selected Thread</h3>
                    <p className="text-sm text-gray-300 italic">"{selectedThread.content}"</p>
                    <p className="text-xs text-gray-400 mt-2">— {selectedThread.author}</p>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-purple-900/30 rounded-lg p-3 border border-purple-700">
                      <h4 className="font-semibold text-purple-300 mb-1">Primary Emotion</h4>
                      <p className="text-sm">{selectedThread.psychAnalysis.primaryEmotion}</p>
                    </div>

                    <div className="bg-red-900/30 rounded-lg p-3 border border-red-700">
                      <h4 className="font-semibold text-red-300 mb-1">Manipulation Technique</h4>
                      <p className="text-sm">{selectedThread.psychAnalysis.manipulation}</p>
                    </div>

                    <div className="bg-yellow-900/30 rounded-lg p-3 border border-yellow-700">
                      <h4 className="font-semibold text-yellow-300 mb-1">Hidden Meaning</h4>
                      <p className="text-sm">{selectedThread.psychAnalysis.hiddenMeaning}</p>
                    </div>

                    <div className="bg-blue-900/30 rounded-lg p-3 border border-blue-700">
                      <h4 className="font-semibold text-blue-300 mb-1">Power Dynamics</h4>
                      <p className="text-sm">{selectedThread.psychAnalysis.powerDynamics}</p>
                    </div>

                    <div className="bg-green-900/30 rounded-lg p-3 border border-green-700">
                      <h4 className="font-semibold text-green-300 mb-1">Engagement Strategy</h4>
                      <p className="text-sm">{selectedThread.psychAnalysis.engagement}</p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-lg border border-purple-500">
                    <h4 className="font-bold text-purple-300 mb-2">🧠 AI Verdict</h4>
                    <p className="text-sm">
                      This thread employs <strong>{selectedThread.psychAnalysis.manipulation.toLowerCase()}</strong> to generate engagement. 
                      The viral score of <strong>{selectedThread.viralScore}%</strong> indicates high manipulation effectiveness.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Demo Notice */}
        <div className="mt-8 bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-xl p-6 border border-purple-500">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-purple-500 p-2 rounded-lg">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold">This is a Demo</h3>
          </div>
          <p className="text-gray-300 mb-4">
            THREADRIPPER uses advanced AI to detect viral threads in real-time and expose psychological manipulation tactics. 
            The full version monitors Twitter 24/7 and provides automated responses to viral content.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-purple-600/30 text-purple-200 rounded-full text-sm">Real-time Monitoring</span>
            <span className="px-3 py-1 bg-blue-600/30 text-blue-200 rounded-full text-sm">Google Gemini AI</span>
            <span className="px-3 py-1 bg-green-600/30 text-green-200 rounded-full text-sm">Auto-Reply System</span>
            <span className="px-3 py-1 bg-yellow-600/30 text-yellow-200 rounded-full text-sm">Psychological Analysis</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreadripperDemo;