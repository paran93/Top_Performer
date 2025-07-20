import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, ScatterChart, Scatter, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Users, TrendingUp, Award, Target, Brain, AlertTriangle, CheckCircle, Star, Filter, Download, Search, Eye, BookOpen, Clock, MessageSquare, MapPin, Zap } from 'lucide-react';

const WorkforcePerformancePlatform = () => {
  const [selectedRegion, setSelectedRegion] = useState('All Regions');
  const [selectedRole, setSelectedRole] = useState('All Roles');
  const [selectedThreshold, setSelectedThreshold] = useState('Top 50');
  const [activeTab, setActiveTab] = useState('analysis');

  // Updated regions
  const regions = ['All Regions', 'Central', 'Eastern', 'Mid-Atlantic', 'Mountain States', 'S Central', 'Southern', 'Western'];
  
  // Sample data with more comprehensive analysis
  const topPerformersData = [
    { 
      name: 'Sarah Chen', 
      role: 'Sales Consultant', 
      region: 'Western', 
      performanceScore: 94, 
      trend: '+8%',
      engagement: 92,
      trainingHours: 45,
      completionRate: 98,
      managerFeedback: 4.8,
      experience: '3.5 years',
      certifications: 5,
      avatar: 'SC',
      keyStrengths: ['Customer Rapport', 'Product Knowledge', 'Follow-up Excellence'],
      predictiveScore: 87
    },
    { 
      name: 'Marcus Johnson', 
      role: 'Sales Manager', 
      region: 'Eastern', 
      performanceScore: 92, 
      trend: '+5%',
      engagement: 89,
      trainingHours: 52,
      completionRate: 95,
      managerFeedback: 4.9,
      experience: '5.2 years',
      certifications: 7,
      avatar: 'MJ',
      keyStrengths: ['Team Leadership', 'Training Others', 'Strategic Planning'],
      predictiveScore: 91
    },
    { 
      name: 'Lisa Rodriguez', 
      role: 'Service Advisor', 
      region: 'S Central', 
      performanceScore: 91, 
      trend: '+12%',
      engagement: 94,
      trainingHours: 38,
      completionRate: 96,
      managerFeedback: 4.7,
      experience: '2.8 years',
      certifications: 4,
      avatar: 'LR',
      keyStrengths: ['Customer Service', 'Technical Knowledge', 'Problem Solving'],
      predictiveScore: 85
    },
    { 
      name: 'David Kim', 
      role: 'Technician', 
      region: 'Mountain States', 
      performanceScore: 89, 
      trend: '+3%',
      engagement: 88,
      trainingHours: 41,
      completionRate: 94,
      managerFeedback: 4.6,
      experience: '4.1 years',
      certifications: 6,
      avatar: 'DK',
      keyStrengths: ['Diagnostic Skills', 'Efficiency', 'Quality Work'],
      predictiveScore: 82
    },
    { 
      name: 'Emily Foster', 
      role: 'Sales Consultant', 
      region: 'Mid-Atlantic', 
      performanceScore: 88, 
      trend: '+7%',
      engagement: 91,
      trainingHours: 43,
      completionRate: 97,
      managerFeedback: 4.8,
      experience: '1.9 years',
      certifications: 3,
      avatar: 'EF',
      keyStrengths: ['Fast Learner', 'Digital Savvy', 'Customer Focus'],
      predictiveScore: 89
    }
  ];

  const behaviorAnalysis = [
    { 
      behavior: 'Completes training within 48hrs', 
      impact: 92, 
      correlation: 'High Performance',
      topPerformerRate: 96,
      avgPerformerRate: 67,
      description: 'Quick training completion strongly correlates with sales success'
    },
    { 
      behavior: 'Maintains 3+ active certifications', 
      impact: 88, 
      correlation: 'Sustained Excellence',
      topPerformerRate: 94,
      avgPerformerRate: 52,
      description: 'Continuous certification maintenance indicates commitment to growth'
    },
    { 
      behavior: 'Daily LMS engagement (>15min)', 
      impact: 85, 
      correlation: 'Future Star Potential',
      topPerformerRate: 89,
      avgPerformerRate: 45,
      description: 'Consistent learning habits predict future performance improvements'
    },
    { 
      behavior: 'Responds to nudges within 2hrs', 
      impact: 76, 
      correlation: 'High Engagement',
      topPerformerRate: 91,
      avgPerformerRate: 58,
      description: 'Quick response to coaching indicates receptiveness to improvement'
    },
    { 
      behavior: 'Takes optional/advanced modules', 
      impact: 73, 
      correlation: 'Growth Mindset',
      topPerformerRate: 87,
      avgPerformerRate: 34,
      description: 'Self-directed learning strongly predicts career advancement'
    },
    { 
      behavior: 'Receives 4.5+ manager feedback', 
      impact: 81, 
      correlation: 'Leadership Potential',
      topPerformerRate: 93,
      avgPerformerRate: 41,
      description: 'Consistent positive feedback indicates strong soft skills'
    }
  ];

  const trainingRecommendations = [
    {
      persona: 'Potentials',
      training: 'Advanced Negotiation & Closing Techniques',
      priority: 'High',
      estimatedImpact: '+15% close rate',
      basedOn: ['Sarah Chen behavior patterns', 'Marcus Johnson training path'],
      targetAudience: 'Sales Consultants with 85+ performance scores',
      duration: '4 hours',
      delivery: 'Interactive workshop + shadowing top performers'
    },
    {
      persona: 'Absorbers',
      training: 'Customer Engagement Mastery Program',
      priority: 'Medium',
      estimatedImpact: '+12% customer satisfaction',
      basedOn: ['Lisa Rodriguez service approach', 'Top performer communication styles'],
      targetAudience: 'Service Advisors with moderate engagement',
      duration: '6 hours',
      delivery: 'Role-play scenarios + peer mentoring'
    },
    {
      persona: 'Disengaged',
      training: 'Back to Basics + Manager Check-in Protocol',
      priority: 'Critical',
      estimatedImpact: 'Retention + 8% performance boost',
      basedOn: ['Early warning indicators', 'Successful re-engagement cases'],
      targetAudience: 'All roles with declining metrics',
      duration: '2 hours + ongoing coaching',
      delivery: 'One-on-one coaching + micro-learning modules'
    }
  ];

  const regionalPerformance = [
    { region: 'Central', performers: 18, potentials: 24, absorbers: 31, disengaged: 8, total: 81 },
    { region: 'Eastern', performers: 22, potentials: 28, absorbers: 35, disengaged: 12, total: 97 },
    { region: 'Mid-Atlantic', performers: 15, potentials: 32, absorbers: 28, disengaged: 6, total: 81 },
    { region: 'Mountain States', performers: 12, potentials: 19, absorbers: 23, disengaged: 4, total: 58 },
    { region: 'S Central', performers: 25, potentials: 31, absorbers: 38, disengaged: 9, total: 103 },
    { region: 'Southern', performers: 28, potentials: 35, absorbers: 42, disengaged: 11, total: 116 },
    { region: 'Western', performers: 17, potentials: 27, absorbers: 29, disengaged: 9, total: 82 }
  ];

  const keyCharacteristics = [
    {
      category: 'Learning Behavior',
      characteristics: [
        { trait: 'Training Completion Speed', topPerformer: 95, average: 67 },
        { trait: 'Optional Module Participation', topPerformer: 87, average: 34 },
        { trait: 'Knowledge Retention', topPerformer: 91, average: 72 },
        { trait: 'Peer Teaching Frequency', topPerformer: 78, average: 23 }
      ]
    },
    {
      category: 'Engagement Patterns',
      characteristics: [
        { trait: 'Daily LMS Activity', topPerformer: 89, average: 45 },
        { trait: 'Response to Coaching', topPerformer: 93, average: 58 },
        { trait: 'Manager Interaction Quality', topPerformer: 88, average: 61 },
        { trait: 'Team Collaboration', topPerformer: 85, average: 52 }
      ]
    },
    {
      category: 'Performance Indicators',
      characteristics: [
        { trait: 'Customer Satisfaction Scores', topPerformer: 92, average: 78 },
        { trait: 'Process Adherence', topPerformer: 94, average: 71 },
        { trait: 'Innovation/Improvement Ideas', topPerformer: 76, average: 29 },
        { trait: 'Consistency Over Time', topPerformer: 90, average: 68 }
      ]
    }
  ];

  const predictiveFactors = [
    { factor: 'Early Training Velocity', weight: 25, description: 'Speed of initial skill acquisition' },
    { factor: 'Feedback Responsiveness', weight: 20, description: 'How quickly they implement coaching' },
    { factor: 'Voluntary Learning Engagement', weight: 18, description: 'Self-directed skill development' },
    { factor: 'Cross-functional Interest', weight: 15, description: 'Curiosity about other departments' },
    { factor: 'Peer Collaboration Score', weight: 12, description: 'Quality of teamwork and mentoring' },
    { factor: 'Customer Interaction Quality', weight: 10, description: 'Natural customer service aptitude' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">AI-Powered Top Performer Analysis</h1>
                <p className="text-sm text-gray-600">Identify Excellence • Extract Insights • Uplift Performance</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-blue-50 px-3 py-2 rounded-lg">
                <Zap className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-800">87% Prediction Accuracy</span>
              </div>
              <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Download className="w-4 h-4" />
                <span>Export Analysis</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center space-x-2 mb-4">
            <Search className="w-5 h-5 text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-900">Top Performer Analysis Filters</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Region</label>
              <select 
                value={selectedRegion} 
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {regions.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Role Category</label>
              <select 
                value={selectedRole} 
                onChange={(e) => setSelectedRole(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option>All Roles</option>
                <option>Sales Consultant</option>
                <option>Sales Manager</option>
                <option>Service Advisor</option>
                <option>Technician</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Analysis Scope</label>
              <select 
                value={selectedThreshold} 
                onChange={(e) => setSelectedThreshold(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option>Top 50</option>
                <option>Top 25%</option>
                <option>Top 10%</option>
                <option>Top 100</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
                <Eye className="w-4 h-4" />
                <span>Analyze Top Performers</span>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'analysis', name: 'Top 50 Analysis', icon: Award },
                { id: 'characteristics', name: 'Key Characteristics', icon: Brain },
                { id: 'recommendations', name: 'Training Recommendations', icon: Target },
                { id: 'predictions', name: 'Predictive Factors', icon: TrendingUp },
                { id: 'regional', name: 'Regional Breakdown', icon: MapPin }
              ].map(({ id, name, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{name}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Top 50 Analysis Tab */}
        {activeTab === 'analysis' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Top 50 Performers - {selectedRegion}</h3>
                  <p className="text-sm text-gray-600">Comprehensive analysis beyond performance scores</p>
                </div>
                <div className="flex space-x-2">
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                    Extract Characteristics
                  </button>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    Generate Recommendations
                  </button>
                </div>
              </div>
              
              <div className="space-y-4">
                {topPerformersData.map((performer, index) => (
                  <div key={performer.name} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 text-white font-bold rounded-full">
                          {index + 1}
                        </div>
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                          {performer.avatar}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{performer.name}</h4>
                          <p className="text-sm text-gray-600">{performer.role} • {performer.region}</p>
                          <div className="flex items-center space-x-4 mt-1">
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                              {performer.experience} exp
                            </span>
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                              {performer.certifications} certs
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <p className="text-xl font-bold text-green-600">{performer.performanceScore}</p>
                          <p className="text-xs text-gray-500">Performance</p>
                        </div>
                        <div className="text-center">
                          <p className="text-lg font-semibold text-blue-600">{performer.engagement}%</p>
                          <p className="text-xs text-gray-500">Engagement</p>
                        </div>
                        <div className="text-center">
                          <p className="text-lg font-semibold text-purple-600">{performer.completionRate}%</p>
                          <p className="text-xs text-gray-500">Training Complete</p>
                        </div>
                        <div className="text-center">
                          <p className="text-lg font-semibold text-orange-600">{performer.managerFeedback}</p>
                          <p className="text-xs text-gray-500">Manager Rating</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-medium text-gray-700 mb-1">Key Strengths:</p>
                          <div className="flex space-x-2">
                            {performer.keyStrengths.map((strength, i) => (
                              <span key={i} className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                                {strength}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="text-center">
                            <p className="text-sm font-semibold text-indigo-600">{performer.predictiveScore}</p>
                            <p className="text-xs text-gray-500">Future Star Score</p>
                          </div>
                          <button className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                            View Full Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Key Characteristics Tab */}
        {activeTab === 'characteristics' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Extracted Key Characteristics & Behaviors</h3>
                  <p className="text-sm text-gray-600">AI-identified traits that differentiate top performers from average performers</p>
                </div>
                <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-green-800">Analysis Complete</span>
                </div>
              </div>

              {keyCharacteristics.map((category, categoryIndex) => (
                <div key={category.category} className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">{category.category}</h4>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {category.characteristics.map((char, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-3">
                          <h5 className="font-medium text-gray-900">{char.trait}</h5>
                          <div className="text-right">
                            <span className="text-lg font-bold text-green-600">{char.topPerformer}%</span>
                            <span className="text-sm text-gray-500 ml-2">vs {char.average}%</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-green-700">Top Performers</span>
                            <span className="font-medium">{char.topPerformer}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{width: `${char.topPerformer}%`}}></div>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Average Performers</span>
                            <span className="font-medium">{char.average}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-gray-400 h-2 rounded-full" style={{width: `${char.average}%`}}></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Behavioral Impact Analysis</h3>
              <div className="space-y-4">
                {behaviorAnalysis.map((behavior, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{behavior.behavior}</h4>
                        <p className="text-sm text-gray-600 mt-1">{behavior.description}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                            Top Performers: {behavior.topPerformerRate}%
                          </span>
                          <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                            Average: {behavior.avgPerformerRate}%
                          </span>
                        </div>
                      </div>
                      <div className="text-right ml-4">
                        <div className="text-2xl font-bold text-blue-600">{behavior.impact}%</div>
                        <div className="text-xs text-gray-500">Impact Score</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Training Recommendations Tab */}
        {activeTab === 'recommendations' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">AI-Curated Training Recommendations</h3>
                  <p className="text-sm text-gray-600">Based on top performer characteristics and behavioral analysis</p>
                </div>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Deploy All Recommendations
                </button>
              </div>

              <div className="space-y-6">
                {trainingRecommendations.map((rec, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 bg-gradient-to-r from-blue-50 to-purple-50">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center space-x-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          rec.persona === 'Potentials' ? 'bg-blue-100 text-blue-800' :
                          rec.persona === 'Absorbers' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {rec.persona}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          rec.priority === 'High' ? 'bg-orange-100 text-orange-800' :
                          rec.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {rec.priority} Priority
                        </span>
                      </div>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Deploy Training
                      </button>
                    </div>

                    <h4 className="text-xl font-bold text-gray-900 mb-2">{rec.training}</h4>
                    <p className="text-lg text-green-600 font-semibold mb-4">Estimated Impact: {rec.estimatedImpact}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h5 className="font-semibold text-gray-700 mb-2">Target Audience</h5>
                        <p className="text-sm text-gray-600">{rec.targetAudience}</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-700 mb-2">Duration & Delivery</h5>
                        <p className="text-sm text-gray-600">{rec.duration} • {rec.delivery}</p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-semibold text-gray-700 mb-2">Based on Analysis of:</h5>
                      <div className="flex flex-wrap gap-2">
                        {rec.basedOn.map((source, i) => (
                          <span key={i} className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                            {source}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Predictive Factors Tab */}
        {activeTab === 'predictions' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Early Performance Predictive Factors</h3>
                  <p className="text-sm text-gray-600">AI model identifies who has potential to become top performers</p>
                </div>
                <div className="flex items-center space-x-2 bg-indigo-50 px-4 py-2 rounded-lg">
                  <Star className="w-5 h-5 text-indigo-600" />
                  <span className="text-sm font-medium text-indigo-800">87% Accuracy Rate</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Predictive Model Weights</h4>
                  <div className="space-y-4">
                    {predictiveFactors.map((factor, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h5 className="font-semibold text-gray-900">{factor.factor}</h5>
                          <span className="text-lg font-bold text-blue-600">{factor.weight}%</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{factor.description}</p>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: `${factor.weight * 4}%`}}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Future Star Predictions</h4>
                  <div className="space-y-4">
                    {[
                      { name: 'Alex Thompson', currentScore: 74, predictedScore: 89, timeline: '3-4 months', confidence: 87 },
                      { name: 'Jordan Lee', currentScore: 71, predictedScore: 85, timeline: '4-5 months', confidence: 82 },
                      { name: 'Casey Miller', currentScore: 68, predictedScore: 83, timeline: '5-6 months', confidence: 78 },
                      { name: 'Riley Chang', currentScore: 76, predictedScore: 91, timeline: '2-3 months', confidence: 91 }
                    ].map((prediction, index) => (
                      <div key={index} className="border border-yellow-200 bg-yellow-50 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h5 className="font-semibold text-gray-900">{prediction.name}</h5>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                              {prediction.confidence}% confidence
                            </span>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <p className="text-gray-600">Current Score</p>
                            <p className="font-semibold">{prediction.currentScore}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Predicted Score</p>
                            <p className="font-semibold text-green-600">{prediction.predictedScore}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Timeline</p>
                            <p className="font-semibold">{prediction.timeline}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regional Breakdown Tab */}
        {activeTab === 'regional' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Regional Performance Distribution</h3>
              <div className="h-64 mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={regionalPerformance}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="region" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="performers" stackId="a" fill="#10B981" />
                    <Bar dataKey="potentials" stackId="a" fill="#3B82F6" />
                    <Bar dataKey="absorbers" stackId="a" fill="#F59E0B" />
                    <Bar dataKey="disengaged" stackId="a" fill="#EF4444" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Regional Rankings by Top Performer %</h4>
                  <div className="space-y-2">
                    {regionalPerformance
                      .map(region => ({
                        ...region,
                        performerRate: ((region.performers / region.total) * 100).toFixed(1)
                      }))
                      .sort((a, b) => parseFloat(b.performerRate) - parseFloat(a.performerRate))
                      .map((region, index) => (
                        <div key={region.region} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-semibold">
                              {index + 1}
                            </div>
                            <span className="font-medium text-gray-900">{region.region}</span>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-green-600">{region.performerRate}%</div>
                            <div className="text-xs text-gray-500">{region.performers} of {region.total}</div>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Regional Improvement Opportunities</h4>
                  <div className="space-y-4">
                    {regionalPerformance
                      .map(region => ({
                        ...region,
                        disengagedRate: ((region.disengaged / region.total) * 100).toFixed(1)
                      }))
                      .sort((a, b) => parseFloat(b.disengagedRate) - parseFloat(a.disengagedRate))
                      .slice(0, 3)
                      .map((region, index) => (
                        <div key={region.region} className="border border-red-200 bg-red-50 rounded-lg p-4">
                          <div className="flex justify-between items-center mb-2">
                            <h5 className="font-semibold text-gray-900">{region.region}</h5>
                            <span className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded">
                              Priority {index + 1}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">
                            {region.disengaged} disengaged employees ({region.disengagedRate}% of workforce)
                          </p>
                          <button className="bg-red-600 text-white px-3 py-2 rounded text-sm hover:bg-red-700 transition-colors">
                            Deploy Intervention Program
                          </button>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkforcePerformancePlatform;
