import React, { useState } from 'react';
import { CheckCircle, XCircle, Clock, Eye, FileText, Users, AlertTriangle, Brain, BookOpen, Flag, Target, Layers, Database, GraduationCap, TrendingUp, Compass, RefreshCcw, Lightbulb } from 'lucide-react';

const AILearningApprovalWorkflow = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedItem, setSelectedItem] = useState(null);
  const [newPrompt, setNewPrompt] = useState('');
  const [contentType, setContentType] = useState('lesson');
  const [targetAudience, setTargetAudience] = useState('general');
  const [rejectionComments, setRejectionComments] = useState('');

  const [contentItems, setContentItems] = useState([
    {
      id: 1,
      title: "OEM Dealership Sales Onboarding: Product Knowledge",
      type: "lesson",
      status: "sme-review",
      aiGenerated: true,
      aiModel: "GPT-4",
      modelVersion: "4.0.3",
      prompt: "Develop an interactive module for new dealership sales staff on key OEM vehicle features, trim levels, and competitive advantages.",
      confidenceScore: 0.94,
      generatedAt: "2025-01-20 09:30",
      submittedBy: "AI Content Generator",
      currentReviewer: "Regional Sales Trainer",
      riskLevel: "medium",
      targetAudience: "new-hires", // Maps to 'new-hires' in learningProgramsMap
      contentPreview: "Welcome to your OEM Sales Journey! This module will equip you with essential product knowledge to confidently present our vehicles...",
      flags: ["product-info", "sales-training"],
      currentStage: 2,
      totalStages: 6,
      workflowPath: [
        { stage: "AI Generation", status: "completed", reviewer: "AI System", completedAt: "2025-01-20 09:30" },
        { stage: "Risk Analysis", status: "completed", reviewer: "Risk Scanner", completedAt: "2025-01-20 09:32" },
        { stage: "SME Review", status: "in-progress", reviewer: "Regional Sales Trainer", assignedAt: "2025-01-20 09:34" },
        { stage: "Legal Review", status: "pending", reviewer: "Legal Team", assignedAt: null },
        { stage: "DEI Review", status: "pending", reviewer: "DEI Officer", assignedAt: null },
        { stage: "Final Approval", status: "pending", reviewer: "Learning Director", assignedAt: null }
      ],
      rejectionHistory: [],
      xapiEvents: [
        { verb: "generated", timestamp: "2025-01-20 09:30", actor: "AI System" },
        { verb: "documented", timestamp: "2025-01-20 09:31", actor: "Metadata Registry" },
        { verb: "analyzed", timestamp: "2025-01-20 09:32", actor: "Risk Scanner" },
        { verb: "submitted", timestamp: "2025-01-20 09:33", actor: "System" },
        { verb: "assigned", timestamp: "2025-01-20 09:34", actor: "Workflow Engine" }
      ]
    },
    {
      id: 2,
      title: "Advanced CRM Training for Corporate Sales",
      type: "interactive",
      status: "dei-review",
      aiGenerated: true,
      aiModel: "Claude Sonnet",
      modelVersion: "3.5",
      prompt: "Create an advanced training module for OEM corporate sales teams on leveraging CRM analytics for lead scoring and pipeline management.",
      confidenceScore: 0.87,
      generatedAt: "2025-01-19 14:15",
      submittedBy: "AI Content Generator",
      currentReviewer: "Corporate IT Lead",
      riskLevel: "high",
      targetAudience: "managers", // Maps to 'managers' in learningProgramsMap
      contentPreview: "Master our CRM to supercharge your sales pipeline. This training focuses on data-driven lead qualification and efficient opportunity management...",
      flags: ["crm-training", "data-analytics"],
      currentStage: 4,
      totalStages: 6,
      workflowPath: [
        { stage: "AI Generation", status: "completed", reviewer: "AI System", completedAt: "2025-01-19 14:15" },
        { stage: "Risk Analysis", status: "completed", reviewer: "Risk Scanner", completedAt: "2025-01-19 14:17" },
        { stage: "SME Review", status: "completed", reviewer: "Sales Operations SME", completedAt: "2025-01-19 15:45" },
        { stage: "Legal Review", status: "completed", reviewer: "Corporate Legal", completedAt: "2025-01-19 16:22" },
        { stage: "DEI Review", status: "in-progress", reviewer: "Corporate IT Lead", assignedAt: "2025-01-19 16:25" },
        { stage: "Final Approval", status: "pending", reviewer: "Learning Director", assignedAt: null }
      ],
      rejectionHistory: [],
      xapiEvents: [
        { verb: "generated", timestamp: "2025-01-19 14:15", actor: "AI System" },
        { verb: "reviewed", timestamp: "2025-01-19 15:22", actor: "Sales Operations SME" },
        { verb: "approved", timestamp: "2025-01-19 15:45", actor: "Sales Operations SME" },
        { verb: "approved", timestamp: "2025-01-19 16:22", actor: "Corporate Legal" },
        { verb: "assigned", timestamp: "2025-01-19 16:25", actor: "Workflow Engine" }
      ]
    },
    {
      id: 3,
      title: "Dealership Service Bay Safety Protocol Quiz",
      type: "assessment",
      status: "published",
      aiGenerated: true,
      aiModel: "Gemini Pro",
      modelVersion: "1.5",
      prompt: "Design a mandatory quiz for dealership service technicians covering safety protocols for high-voltage vehicles and workshop equipment.",
      confidenceScore: 0.96,
      generatedAt: "2025-01-18 11:45",
      submittedBy: "AI Content Generator",
      currentReviewer: "Published",
      riskLevel: "low",
      targetAudience: "all-employees", // Maps to 'all-employees' in learningProgramsMap
      contentPreview: "Test your knowledge on essential service bay safety. This quiz covers critical procedures for electric vehicle handling, lift operations, and hazardous waste disposal...",
      flags: ["assessment", "safety-training"],
      approvedBy: "Full Review Chain",
      publishedAt: "2025-01-18 16:30",
      learnerViews: 247,
      currentStage: 6,
      totalStages: 6,
      workflowPath: [
        { stage: "AI Generation", status: "completed", reviewer: "AI System", completedAt: "2025-01-18 11:45" },
        { stage: "Risk Analysis", status: "completed", reviewer: "Risk Scanner", completedAt: "2025-01-18 11:47" },
        { stage: "SME Review", status: "completed", reviewer: "Dealership Safety Officer", completedAt: "2025-01-18 13:22" },
        { stage: "Legal Review", status: "completed", reviewer: "OEM Legal Dept.", completedAt: "2025-01-18 14:15" },
        { stage: "DEI Review", status: "skipped", reviewer: "N/A (Low Risk)", completedAt: "2025-01-18 14:15" },
        { stage: "Final Approval", status: "completed", reviewer: "OEM Learning Director", completedAt: "2025-01-18 16:30" }
      ],
      rejectionHistory: [],
      xapiEvents: [
        { verb: "generated", timestamp: "2025-01-18 11:45", actor: "AI System" },
        { verb: "reviewed", timestamp: "2025-01-18 13:22", actor: "Dealership Safety Officer" },
        { verb: "approved", timestamp: "2025-01-18 14:15", actor: "OEM Legal Dept." },
        { verb: "published", timestamp: "2025-01-18 16:30", actor: "LMS System" },
        { verb: "experienced", timestamp: "2025-01-18 17:45", actor: "247 Dealership Learners" }
      ]
    },
  ]);

  const getStatusColor = (status: string) => { // Added type annotation
    const colors = {
      'ai-generation': 'text-blue-600 bg-blue-100',
      'risk-analysis': 'text-purple-600 bg-purple-100',
      'sme-review': 'text-yellow-600 bg-yellow-100',
      'legal-review': 'text-orange-600 bg-orange-100',
      'dei-review': 'text-indigo-600 bg-indigo-100',
      'lxd-review': 'text-teal-600 bg-teal-100',
      'final-approval': 'text-green-600 bg-green-100',
      'published': 'text-green-700 bg-green-200',
      'rejected': 'text-red-600 bg-red-100'
    };
    return colors[status] || 'text-gray-600 bg-gray-100';
  };

  const getRiskColor = (risk: string) => { // Added type annotation
    const colors = {
      'low': 'text-green-600 bg-green-100',
      'medium': 'text-yellow-600 bg-yellow-100',
      'high': 'text-red-600 bg-red-100'
    };
    return colors[risk] || 'text-gray-600 bg-gray-100';
  };

  const generateAIContent = () => {
    if (newPrompt.trim()) {
      const newItem = {
        id: Date.now(),
        title: "AI Generated Learning Content",
        type: contentType,
        status: "ai-generation",
        aiGenerated: true,
        aiModel: "GPT-4",
        modelVersion: "4.0.3",
        prompt: newPrompt,
        confidenceScore: Math.random() * 0.3 + 0.7,
        generatedAt: new Date().toLocaleString(),
        submittedBy: "AI Content Generator",
        currentReviewer: "System Processing",
        riskLevel: contentType === 'assessment' ? 'low' : targetAudience === 'managers' ? 'high' : 'medium',
        targetAudience: targetAudience,
        contentPreview: "AI is generating content based on your prompt...",
        flags: [],
        currentStage: 1,
        totalStages: 6,
        workflowPath: [
          { stage: "AI Generation", status: "in-progress", reviewer: "AI System", assignedAt: new Date().toLocaleString() },
          { stage: "Risk Analysis", status: "pending", reviewer: "Risk Scanner", assignedAt: null },
          { stage: "SME Review", status: "pending", reviewer: "SME Team", assignedAt: null },
          { stage: "Legal Review", status: "pending", reviewer: "Legal Team", assignedAt: null },
          { stage: "DEI Review", status: "pending", reviewer: "DEI Officer", assignedAt: null },
          { stage: "Final Approval", status: "pending", reviewer: "Learning Director", assignedAt: null }
        ],
        rejectionHistory: [],
        xapiEvents: [
          { verb: "generated", timestamp: new Date().toLocaleString(), actor: "AI System" }
        ]
      };
      setContentItems(prev => [newItem, ...prev]);
      setNewPrompt('');
      
      // Simulate AI generation process
      setTimeout(() => {
        setContentItems(prev => prev.map(item => 
          item.id === newItem.id 
            ? { ...item, status: 'risk-analysis', contentPreview: `Generated ${contentType} content based on prompt: "${newPrompt.substring(0, 50)}..."` }
            : item
        ));
      }, 2000);
    }
  };

  const handleReviewAction = (itemId, action, comments = '') => {
    setContentItems(prev => prev.map(item => {
      if (item.id === itemId) {
        const timestamp = new Date().toLocaleString();
        let updatedItem = { ...item };
        
        if (action === 'approve') {
          // Move to next stage in workflow
          const nextStageIndex = item.workflowPath.findIndex(stage => stage.status === 'in-progress') + 1;
          const updatedWorkflowPath = item.workflowPath.map((stage, index) => {
            if (index === nextStageIndex - 1) {
              return { ...stage, status: 'completed', completedAt: timestamp };
            }
            if (index === nextStageIndex && nextStageIndex < item.workflowPath.length) {
              return { ...stage, status: 'in-progress', assignedAt: timestamp };
            }
            return stage;
          });

          // Determine new status and current reviewer
          let newStatus = item.status;
          let newReviewer = item.currentReviewer;
          let newCurrentStage = item.currentStage;

          const statusFlow = {
            'sme-review': { status: 'legal-review', reviewer: 'Legal Team', stage: 3 },
            'legal-review': { status: 'dei-review', reviewer: 'DEI Officer', stage: 4 },
            'dei-review': { status: 'final-approval', reviewer: 'Learning Director', stage: 5 },
            'final-approval': { status: 'published', reviewer: 'Published', stage: 6 }
          };

          const next = statusFlow[item.status];
          if (next) {
            newStatus = next.status;
            newReviewer = next.reviewer;
            newCurrentStage = next.stage;
          }

          updatedItem = {
            ...updatedItem,
            status: newStatus,
            currentReviewer: newReviewer,
            currentStage: newCurrentStage,
            workflowPath: updatedWorkflowPath
          };

        } else if (action === 'reject') {
          // Create rejection entry
          const currentStageInfo = item.workflowPath.find(stage => stage.status === 'in-progress');
          const rejectionEntry = {
            stage: currentStageInfo?.stage || 'Unknown Stage',
            reviewer: 'Current User',
            rejectedAt: timestamp,
            reason: comments,
            feedback: [], // This could be expanded to parse structured feedback
            severity: 'major' // This could be determined by the reviewer
          };

          // Update workflow path to show rejection
          const updatedWorkflowPath = item.workflowPath.map(stage => {
            if (stage.status === 'in-progress') {
              return { ...stage, status: 'rejected', completedAt: timestamp };
            }
            if (stage.status === 'pending') {
              return { ...stage, status: 'cancelled' };
            }
            return stage;
          });

          updatedItem = {
            ...updatedItem,
            status: 'rejected',
            currentReviewer: `Rejected at ${currentStageInfo?.stage || 'Current Stage'}`,
            workflowPath: updatedWorkflowPath,
            rejectionHistory: [...(item.rejectionHistory || []), rejectionEntry]
          };
        }

        const newEvent = { 
          verb: action === 'approve' ? 'approved' : 'rejected', 
          timestamp, 
          actor: 'Current User',
          comments: comments || undefined
        };

        return {
          ...updatedItem,
          xapiEvents: [...updatedItem.xapiEvents, newEvent]
        };
      }
      return item;
    }));
    setSelectedItem(null);
    setRejectionComments(''); // Clear comments after action
  };

  const stats = {
    total: contentItems.length,
    inReview: contentItems.filter(item => !['published', 'rejected'].includes(item.status)).length,
    published: contentItems.filter(item => item.status === 'published').length,
    highRisk: contentItems.filter(item => item.riskLevel === 'high').length
  };

  // Mapping target audiences to their respective learning programs and AI features
  const learningProgramsMap = {
    "technical": {
      title: "For Technical/Service Staff",
      icon: <GraduationCap className="w-5 h-5 text-blue-600" />,
      modules: [
        "AR/VR-Based Machine Repair Simulations",
        "Troubleshooting Smart Manufacturing Systems",
        "Sensor Diagnostics and Predictive Maintenance",
        "Robotics Programming Basics"
      ],
      aiFeatures: [
        "Interactive fault-tree simulators",
        "Smart hint system during simulations"
      ]
    },
    "salesperson": {
      title: "For Frontline Salesperson",
      icon: <Users className="w-5 h-5 text-green-600" />,
      modules: [
        "Mobile Learning for Product Specs & Demos",
        "Objection Handling for Competitive OEM Markets",
        "AI-Assisted Quote Configurators"
      ],
      aiFeatures: [
        "Chat-based roleplays for objection handling",
        "Personalized pitch builders using AI"
      ]
    },
    "l&d-designers": {
      title: "For L&D / Designers",
      icon: <Lightbulb className="w-5 h-5 text-purple-600" />,
      modules: [
        "Persona-Based Curriculum Templates",
        "AI Content Co-Creation for Learning Modules",
        "Best Practices for AI-Augmented Learning Design"
      ],
      aiFeatures: [
        "Lesson auto-generator",
        "Feedback loop from learner data"
      ]
    },
    "managers": {
      title: "For Performance Managers",
      icon: <TrendingUp className="w-5 h-5 text-orange-600" />,
      modules: [
        "Using Compliance Dashboards",
        "Diagnosing Underperformance via Learning Metrics",
        "Coaching Conversations Based on AI Insights"
      ],
      aiFeatures: [
        "Predictive analytics for team performance",
        "Alerts on learner disengagement"
      ]
    },
    "compliance-officers": {
      title: "For Compliance Officers",
      icon: <Flag className="w-5 h-5 text-red-600" />,
      modules: [
        "Mandatory Training (ISO, Safety, ESG)",
        "Audit-Ready Learning Log Reviews",
        "Regulatory Changes in OEM Compliance"
      ],
      aiFeatures: [
        "Auto-flagging gaps in mandatory learning",
        "Real-time compliance dashboards"
      ]
    },
    "new-hires": {
      title: "For New Corporate Employees",
      icon: <BookOpen className="w-5 h-5 text-indigo-600" />,
      modules: [
        "OEM Onboarding Journeys",
        "Systems & Process Familiarization (ERP, CRM, PLM)",
        "Virtual Mentor Programs"
      ],
      aiFeatures: [
        "Personalized onboarding roadmaps",
        "AI-driven mentor matching"
      ]
    },
    "career-oriented": {
      title: "For Career-Oriented Learners",
      icon: <Compass className="w-5 h-5 text-teal-600" />,
      modules: [
        "AI-Driven Career Planning",
        "Internal Mobility Skills Pathways",
        "Upskilling for Leadership in Manufacturing 4.0"
      ],
      aiFeatures: [
        "Skill-gap analysis",
        "Custom learning journeys"
      ]
    },
    "re-training": {
      title: "For Re-Training / Transitional Learners",
      icon: <RefreshCcw className="w-5 h-5 text-yellow-600" />,
      modules: [
        "Support for Role Changes (e.g., factory to QA)",
        "Microlearning for New Systems",
        "Career Reskilling Roadmap"
      ],
      aiFeatures: [
        "Career path suggestions",
        "Role-matching based on completed training"
      ]
    },
    "self-directed": {
      title: "For Self-Directed Learners",
      icon: <Eye className="w-5 h-5 text-gray-600" />,
      modules: [
        "Open Exploration Topics (e.g., AI in Manufacturing, Lean Principles)",
        "Elective Skill Modules (e.g., CAD/CAM, PLC Programming)"
      ],
      aiFeatures: [
        "Interest-based learning dashboard",
        "Adaptive quiz and learning path recommendations"
      ]
    },
    "general": {
        title: "General Learning Programs",
        icon: <BookOpen className="w-5 h-5 text-gray-600" />,
        modules: ["General company policies", "Basic software usage", "Workplace safety"],
        aiFeatures: ["General knowledge assessments", "Curated learning paths"]
    },
    "all-employees": {
        title: "Programs for All Employees",
        icon: <BookOpen className="w-5 h-5 text-gray-600" />,
        modules: ["Mandatory annual compliance training", "Company culture and values", "Basic cybersecurity awareness"],
        aiFeatures: ["Automated compliance tracking", "Personalized news feeds"]
    }
  };


  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-sm border mb-6">
        <div className="px-6 py-4 border-b">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded flex items-center justify-center">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">AI Learning Content Approval System</h1>
              <p className="text-sm text-gray-600">Enhanced workflow with xAPI integration and AI lifecycle tracking</p>
            </div>
          </div>
        </div>

        <div className="flex border-b overflow-x-auto">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: <Layers className="w-4 h-4" /> },
            { id: 'generate', label: 'AI Generation', icon: <Brain className="w-4 h-4" /> },
            { id: 'xapi', label: 'xAPI Events', icon: <Database className="w-4 h-4" /> },
            { id: 'analytics', label: 'Analytics', icon: <Target className="w-4 h-4" /> }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 font-medium flex items-center gap-2 whitespace-nowrap ${
                activeTab === tab.id ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'dashboard' && (
        <div className="space-y-6">
          {/* Enhanced Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Content</p>
                  <p className="text-2xl font-bold text-gray-800">{stats.total}</p>
                  <p className="text-xs text-green-600">AI-Generated</p>
                </div>
                <BookOpen className="w-8 h-8 text-gray-400" />
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">In Review</p>
                  <p className="text-2xl font-bold text-yellow-600">{stats.inReview}</p>
                  <p className="text-xs text-yellow-600">Active Workflow</p>
                </div>
                <Clock className="w-8 h-8 text-yellow-400" />
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Published</p>
                  <p className="text-2xl font-bold text-green-600">{stats.published}</p>
                  <p className="text-xs text-green-600">Live for Learners</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">High Risk</p>
                  <p className="text-2xl font-bold text-red-600">{stats.highRisk}</p>
                  <p className="text-xs text-red-600">Needs Extra Review</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-red-400" />
              </div>
            </div>
          </div>

          {/* Enhanced Content List */}
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="px-6 py-4 border-b">
              <h2 className="text-lg font-semibold text-gray-800">AI Content Approval Pipeline</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Content & AI Details</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Risk Level</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Current Stage</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reviewer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Generated</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {contentItems.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-800">{item.title}</p>
                            <div className="flex items-center gap-4 mt-1 text-xs text-gray-500">
                              <span className="flex items-center gap-1">
                                <Brain className="w-3 h-3" />
                                {item.aiModel} v{item.modelVersion}
                              </span>
                              <span>Confidence: {(item.confidenceScore * 100).toFixed(0)}%</span>
                              <span className="capitalize">{item.type}</span>
                            </div>
                            {/* Progress Bar */}
                            <div className="mt-2">
                              <div className="flex items-center gap-2 text-xs text-gray-600">
                                <span>Stage {item.currentStage}/{item.totalStages}</span>
                                <div className="flex-1 bg-gray-200 rounded-full h-1.5">
                                  <div 
                                    className={`h-1.5 rounded-full transition-all duration-300 ${
                                      item.status === 'rejected' ? 'bg-red-500' : 
                                      item.status === 'published' ? 'bg-green-500' : 'bg-blue-500'
                                    }`}
                                    style={{ width: `${(item.currentStage / item.totalStages) * 100}%` }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                            {item.flags.length > 0 && (
                              <div className="flex gap-1 mt-1">
                                {item.flags.map(flag => (
                                  <span key={flag} className="px-1.5 py-0.5 bg-blue-100 text-blue-700 text-xs rounded">
                                    {flag}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(item.riskLevel)}`}>
                          {item.riskLevel.toUpperCase()}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                          {item.status.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{item.currentReviewer}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{item.generatedAt}</td>
                      <td className="px-6 py-4">
                        <button 
                          onClick={() => setSelectedItem(item)}
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                        >
                          Review
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'generate' && (
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center gap-3 mb-6">
            <Brain className="w-6 h-6 text-blue-600" />
            <h2 className="text-lg font-semibold text-gray-800">AI Content Generation</h2>
          </div>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Content Type</label>
                <select 
                  value={contentType}
                  onChange={(e) => setContentType(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                >
                  <option value="lesson">Interactive Lesson</option>
                  <option value="assessment">Quiz/Assessment</option>
                  <option value="simulation">Simulation</option>
                  <option value="video-script">Video Script</option>
                  <option value="job-aid">Job Aid/Reference</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Target Audience</label>
                <select 
                  value={targetAudience}
                  onChange={(e) => setTargetAudience(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                >
                  <option value="general">General Employees</option>
                  <option value="new-hires">New Dealership Hires</option>
                  <option value="managers">Dealership & Corporate Managers</option>
                  <option value="leadership">OEM Leadership</option>
                  <option value="technical">Technical & Service Staff</option>
                  <option value="salesperson">Frontline Salesperson</option>
                  <option value="l&d-designers">L&D / Designers</option>
                  <option value="compliance-officers">Compliance Officers</option>
                  <option value="career-oriented">Career-Oriented Learners</option>
                  <option value="re-training">Re-Training / Transitional Learners</option>
                  <option value="self-directed">Self-Directed Learners</option>
                  <option value="all-employees">All OEM Corporate Employees</option> {/* Added for clarity */}
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Learning Objective & Content Prompt</label>
              <textarea 
                value={newPrompt}
                onChange={(e) => setNewPrompt(e.target.value)}
                placeholder="Describe the learning objectives and content requirements. Be specific about skills, knowledge areas, and desired outcomes..."
                className="w-full h-32 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div className="bg-blue-50 p-4 rounded-md">
              <div className="flex items-start gap-3">
                <Brain className="w-5 h-5 text-blue-600 mt-0.5" />
                <div className="text-sm">
                  <p className="text-blue-800 font-medium">AI Generation Process</p>
                  <p className="text-blue-700 mt-1">Content will be generated → Risk analyzed → Routed for review → Tracked via xAPI</p>
                </div>
              </div>
            </div>
            
            <button 
              onClick={generateAIContent}
              disabled={!newPrompt.trim()}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-md hover:from-blue-700 hover:to-purple-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <Brain className="w-4 h-4" />
              Generate AI Content
            </button>
          </div>
        </div>
      )}

      {activeTab === 'xapi' && (
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="px-6 py-4 border-b">
            <div className="flex items-center gap-3">
              <Database className="w-5 h-5 text-gray-600" />
              <h2 className="text-lg font-semibold text-gray-800">xAPI Event Stream</h2>
              <span className="text-sm text-gray-500">(Learning Record Store Integration)</span>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {contentItems.flatMap(item => 
                item.xapiEvents.map((event, index) => ({
                  ...event,
                  contentTitle: item.title,
                  contentId: item.id,
                  eventId: `${item.id}-${index}`
                }))
              )
              .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
              .map(event => (
                <div key={event.eventId} className="border-l-4 border-blue-200 pl-4 py-3 bg-gray-50 rounded-r">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded uppercase">
                        {event.verb}
                      </span>
                      <span className="text-sm font-medium text-gray-800">{event.contentTitle}</span>
                    </div>
                    <span className="text-xs text-gray-500">{event.timestamp}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Actor:</span> {event.actor}
                    {event.comments && (
                      <div className="mt-1">
                        <span className="font-medium">Comments:</span> {event.comments}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'analytics' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">AI Model Performance</h3>
              <div className="space-y-3">
                {[
                  { model: 'GPT-4', version: '4.0.3', avgConfidence: 0.94, contentCount: 45 },
                  { model: 'Claude Sonnet', version: '3.5', avgConfidence: 0.89, contentCount: 23 },
                  { model: 'Gemini Pro', version: '1.5', avgConfidence: 0.92, contentCount: 31 }
                ].map(model => (
                  <div key={`${model.model}-${model.version}`} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <div>
                      <p className="font-medium text-gray-800">{model.model} v{model.version}</p>
                      <p className="text-sm text-gray-600">{model.contentCount} content items</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-green-600">{(model.avgConfidence * 100).toFixed(0)}%</p>
                      <p className="text-xs text-gray-500">Avg Confidence</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Review Bottlenecks</h3>
              <div className="space-y-3">
                {[
                  { stage: 'DEI Review', avgDays: 2.3, backlog: 8 },
                  { stage: 'Legal Review', avgDays: 1.8, backlog: 3 },
                  { stage: 'SME Review', avgDays: 1.2, backlog: 12 },
                  { stage: 'LXD Review', avgDays: 0.9, backlog: 5 }
                ].map(stage => (
                  <div key={stage.stage} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <div>
                      <p className="font-medium text-gray-800">{stage.stage}</p>
                      <p className="text-sm text-gray-600">{stage.backlog} items in queue</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-yellow-600">{stage.avgDays}d</p>
                      <p className="text-xs text-gray-500">Avg Review Time</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Review Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="px-6 py-4 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Brain className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-800">AI Content Review</h3>
                </div>
                <button 
                  onClick={() => {
                    setSelectedItem(null);
                    setRejectionComments(''); // Clear comments when closing modal
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              {/* AI Metadata */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-3">AI Generation Details</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-blue-700">Model:</span> {selectedItem.aiModel} v{selectedItem.modelVersion}
                  </div>
                  <div>
                    <span className="font-medium text-blue-700">Confidence:</span> {(selectedItem.confidenceScore * 100).toFixed(0)}%
                  </div>
                  <div className="md:col-span-2">
                    <span className="font-medium text-blue-700">Original Prompt:</span>
                    <p className="mt-1 text-blue-800 italic">"{selectedItem.prompt}"</p>
                  </div>
                </div>
              </div>

              {/* Content Preview */}
              <div>
                <h4 className="font-medium text-gray-800 mb-3">Content Preview</h4>
                <div className="bg-gray-50 p-4 rounded-md border">
                  <h5 className="font-medium text-gray-700 mb-2">{selectedItem.title}</h5>
                  <p className="text-sm text-gray-700">{selectedItem.contentPreview}</p>
                </div>
              </div>

              {/* Associated Learning Program Details */}
              {selectedItem.targetAudience && learningProgramsMap[selectedItem.targetAudience] && (
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Associated Learning Program Details</h4>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      {learningProgramsMap[selectedItem.targetAudience].icon}
                      <h3 className="text-md font-semibold text-gray-800">
                        {learningProgramsMap[selectedItem.targetAudience].title}
                      </h3>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">Modules:</p>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        {learningProgramsMap[selectedItem.targetAudience].modules.map((module, modIndex) => (
                          <li key={modIndex}>{module}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">AI Features:</p>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        {learningProgramsMap[selectedItem.targetAudience].aiFeatures.map((feature, featIndex) => (
                          <li key={featIndex}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Workflow Progress Visualization */}
              <div>
                <h4 className="font-medium text-gray-800 mb-3">Workflow Progress</h4>
                <div className="space-y-2">
                  {selectedItem.workflowPath.map((stage, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                        stage.status === 'completed' ? 'bg-green-500 text-white' :
                        stage.status === 'in-progress' ? 'bg-blue-500 text-white' :
                        stage.status === 'rejected' ? 'bg-red-500 text-white' :
                        stage.status === 'cancelled' ? 'bg-gray-400 text-white' :
                        stage.status === 'skipped' ? 'bg-yellow-500 text-white' :
                        'bg-gray-200 text-gray-600'
                      }`}>
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-800">{stage.stage}</span>
                          <span className={`text-xs px-2 py-1 rounded uppercase font-medium ${
                            stage.status === 'completed' ? 'bg-green-100 text-green-700' :
                            stage.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                            stage.status === 'rejected' ? 'bg-red-100 text-red-700' :
                            stage.status === 'cancelled' ? 'bg-gray-100 text-gray-600' :
                            stage.status === 'skipped' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-gray-50 text-gray-500'
                          }`}>
                            {stage.status}
                          </span>
                        </div>
                        <div className="text-xs text-gray-600 mt-1">
                          {stage.reviewer}
                          {stage.completedAt && <span className="ml-2">• Completed: {stage.completedAt}</span>}
                          {stage.assignedAt && stage.status === 'in-progress' && <span className="ml-2">• Assigned: {stage.assignedAt}</span>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rejection History */}
              {selectedItem.rejectionHistory && selectedItem.rejectionHistory.length > 0 && (
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Rejection History & Feedback</h4>
                  <div className="space-y-4">
                    {selectedItem.rejectionHistory.map((rejection, index) => (
                      <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <XCircle className="w-4 h-4 text-red-600" />
                            <span className="text-sm font-medium text-red-800">{rejection.stage}</span>
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              rejection.severity === 'major' ? 'bg-red-200 text-red-800' :
                              rejection.severity === 'minor' ? 'bg-yellow-200 text-yellow-800' :
                              'bg-gray-200 text-gray-800'
                            }`}>
                              {rejection.severity} Issues
                            </span>
                          </div>
                          <span className="text-xs text-red-600">{rejection.rejectedAt}</span>
                        </div>
                        <div className="text-sm text-red-700 mb-2">
                          <strong>Reviewer:</strong> {rejection.reviewer}
                        </div>
                        <div className="text-sm text-red-800 mb-3">
                          <strong>Reason:</strong> {rejection.reason}
                        </div>
                        {rejection.feedback && rejection.feedback.length > 0 && (
                          <div>
                            <p className="text-sm font-medium text-red-800 mb-2">Specific Feedback:</p>
                            <ul className="list-disc list-inside text-sm text-red-700 space-y-1">
                              {rejection.feedback.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* xAPI History */}
              <div>
                <h4 className="font-medium text-gray-800 mb-3">Review History (xAPI Events)</h4>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {selectedItem.xapiEvents.map((event, index) => (
                    <div key={index} className="flex items-center gap-3 text-sm">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs uppercase font-medium">
                        {event.verb}
                      </span>
                      <span className="text-gray-600">{event.actor}</span>
                      <span className="text-gray-500 text-xs">{event.timestamp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Risk Assessment */}
              <div>
                <h4 className="font-medium text-gray-800 mb-3">Risk Assessment</h4>
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRiskColor(selectedItem.riskLevel)}`}>
                    {selectedItem.riskLevel.toUpperCase()} RISK
                  </span>
                  <span className="text-sm text-gray-600">Target: {selectedItem.targetAudience.replace('-', ' ')}</span>
                </div>
              </div>

              {/* Review Actions */}
              {!['published', 'rejected'].includes(selectedItem.status) && (
                <div className="flex flex-col gap-3 pt-4 border-t">
                  {/* Rejection Comments Textarea */}
                  <div className="w-full">
                    <label htmlFor="rejectionComments" className="block text-sm font-medium text-gray-700 mb-2">
                      Rejection Reason & Feedback:
                    </label>
                    <textarea
                      id="rejectionComments"
                      value={rejectionComments}
                      onChange={(e) => setRejectionComments(e.target.value)}
                      placeholder="Provide detailed reasons for rejection and suggestions for improvement..."
                      rows="4"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    ></textarea>
                  </div>

                  <div className="flex gap-3">
                    <button 
                      onClick={() => handleReviewAction(selectedItem.id, 'approve')}
                      className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 flex items-center gap-2"
                    >
                      <CheckCircle className="w-4 h-4" />
                      Approve & Forward
                    </button>
                    <button 
                      onClick={() => handleReviewAction(selectedItem.id, 'reject', rejectionComments)}
                      disabled={!rejectionComments.trim()} // Disable if no comments for rejection
                      className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      <XCircle className="w-4 h-4" />
                      Reject with Detailed Feedback
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AILearningApprovalWorkflow;
