import React, { useState, useEffect } from 'react';
import { Star, BookOpen, Trophy, Bell, AlertTriangle, Calendar, DollarSign, Users, CheckCircle, Clock, Mail, Smartphone, TrendingUp, Eye, Download, UserCheck, AlertCircle, Target, BarChart3, Shield, Zap, FileText, Settings, Award } from 'lucide-react';

const UnifiedLearningPlatform = () => {
    const [user] = useState({
        name: "Sarah Martinez",
        role: "Sales Manager",
        dealership: "Metro Hyundai",
        region: "Southwest",
        starQualified: true,
        currentMonth: "July 2025",
        salesCloseDate: "July 31, 2025, 11:59 PM PT",
        daysRemaining: 3
    });

    const [activeTab, setActiveTab] = useState('overview');
    const [selectedEmployee, setSelectedEmployee] = useState('self');
    const [viewMode, setViewMode] = useState('overview');
    const [notifications, setNotifications] = useState([]);

    const [teamMembers, setTeamMembers] = useState([
        {
            id: 'mike',
            name: 'Mike Rodriguez',
            role: 'Sales Consultant',
            starQualified: false,
            newCarsSold: 14,
            completedModules: 4,
            totalModules: 6,
            daysRemaining: 3,
            status: 'at_risk',
            certificationIssues: ['Product Knowledge expires in 12 days'],
            complianceScore: 75,
            lastActivity: '2 days ago',
            hireDate: 'March 2023',
            email: 'mike.rodriguez@metrohyundai.com',
            phone: '(555) 123-4567',
            manager: 'Sarah Martinez',
            territory: 'Downtown',
            ytdSales: 156,
            avgCustomerRating: 4.2,
            certifications: [
                { name: 'Product Knowledge', status: 'expiring', expiryDate: 'August 12, 2025' },
                { name: 'Sales Fundamentals', status: 'current', expiryDate: 'December 15, 2025' },
                { name: 'Finance & Insurance', status: 'current', expiryDate: 'October 8, 2025' },
                { name: 'Customer Service Excellence', status: 'pending_renewal', expiryDate: 'August 1, 2025' }
            ],
            trainingModules: [
                { id: 1, name: '2025 Hyundai Model Updates', status: 'completed', completedDate: 'July 18, 2025', score: 92, duration: "30 min" },
                { id: 2, name: 'Digital Sales Tools', status: 'completed', completedDate: 'July 15, 2025', score: 88, duration: "45 min" },
                { id: 3, name: 'Customer Retention Strategies', status: 'completed', completedDate: 'July 12, 2025', score: 95, duration: "60 min" },
                { id: 4, name: 'Financing Options Deep Dive', status: 'completed', completedDate: 'July 10, 2025', score: 85, duration: "40 min" },
                { id: 5, name: 'Competitive Analysis Workshop', status: 'in_progress', progress: 60, dueDate: 'July 30, 2025', duration: "50 min" },
                { id: 6, name: 'Q3 Sales Strategy Session', status: 'not_started', dueDate: 'July 31, 2025', duration: "35 min" }
            ],
            recentNudges: [
                { type: 'urgent', message: 'Complete Q3 Sales Strategy to maintain STAR qualification', sent: '2 hours ago' },
                { type: 'reminder', message: 'Product Knowledge certification expires in 12 days', sent: '1 day ago' }
            ],
            engagement: {
                nudgeOpenRate: 78,
                trainingCompletionRate: 89,
                lastLogin: '2 days ago'
            }
        },
        {
            id: 'sarah',
            name: 'Sarah Chen',
            role: 'Sales Consultant',
            starQualified: true,
            newCarsSold: 18,
            completedModules: 6,
            totalModules: 6,
            daysRemaining: 3,
            status: 'qualified',
            certificationIssues: [],
            complianceScore: 100,
            lastActivity: '1 day ago',
            hireDate: 'January 2022',
            email: 'sarah.chen@metrohyundai.com',
            phone: '(555) 234-5678',
            manager: 'Sarah Martinez',
            territory: 'Midtown',
            ytdSales: 198,
            avgCustomerRating: 4.8,
            certifications: [
                { name: 'Product Knowledge', status: 'current', expiryDate: 'November 22, 2025' },
                { name: 'Sales Fundamentals', status: 'current', expiryDate: 'January 10, 2026' },
                { name: 'Finance & Insurance', status: 'current', expiryDate: 'September 18, 2025' },
                { name: 'Customer Service Excellence', status: 'current', expiryDate: 'December 3, 2025' },
                { name: 'Advanced Sales Techniques', status: 'current', expiryDate: 'October 15, 2025' }
            ],
            trainingModules: [
                { id: 1, name: '2025 Hyundai Model Updates', status: 'completed', completedDate: 'July 20, 2025', score: 98, duration: "30 min" },
                { id: 2, name: 'Digital Sales Tools', status: 'completed', completedDate: 'July 19, 2025', score: 94, duration: "45 min" },
                { id: 3, name: 'Customer Retention Strategies', status: 'completed', completedDate: 'July 17, 2025', score: 96, duration: "60 min" },
                { id: 4, name: 'Financing Options Deep Dive', status: 'completed', completedDate: 'July 16, 2025', score: 91, duration: "40 min" },
                { id: 5, name: 'Competitive Analysis Workshop', status: 'completed', completedDate: 'July 14, 2025', score: 89, duration: "50 min" },
                { id: 6, name: 'Q3 Sales Strategy Session', status: 'completed', completedDate: 'July 13, 2025', score: 93, duration: "35 min" }
            ],
            recentNudges: [
                { type: 'congratulations', message: 'Excellent work! 100% STAR compliance achieved', sent: '1 day ago' },
                { type: 'recognition', message: 'Top performer this month - 18 cars sold!', sent: '3 days ago' }
            ],
            engagement: {
                nudgeOpenRate: 95,
                trainingCompletionRate: 100,
                lastLogin: '1 day ago'
            }
        },
        {
            id: 'david',
            name: 'David Thompson',
            role: 'Sales Consultant',
            starQualified: false,
            newCarsSold: 8,
            completedModules: 2,
            totalModules: 6,
            daysRemaining: 3,
            status: 'critical',
            certificationIssues: ['Finance Certification overdue', 'Safety Training expired'],
            complianceScore: 45,
            lastActivity: '5 days ago',
            hireDate: 'November 2023',
            email: 'david.thompson@metrohyundai.com',
            phone: '(555) 345-6789',
            manager: 'Sarah Martinez',
            territory: 'Suburban',
            ytdSales: 89,
            avgCustomerRating: 3.9,
            certifications: [
                { name: 'Product Knowledge', status: 'current', expiryDate: 'February 28, 2026' },
                { name: 'Sales Fundamentals', status: 'current', expiryDate: 'March 15, 2026' },
                { name: 'Finance & Insurance', status: 'overdue', expiryDate: 'July 15, 2025' },
                { name: 'Safety Training', status: 'expired', expiryDate: 'July 17, 2025' }
            ],
            trainingModules: [
                { id: 1, name: '2025 Hyundai Model Updates', status: 'completed', completedDate: 'July 8, 2025', score: 79, duration: "30 min" },
                { id: 2, name: 'Digital Sales Tools', status: 'completed', completedDate: 'July 5, 2025', score: 82, duration: "45 min" },
                { id: 3, name: 'Customer Retention Strategies', status: 'not_started', dueDate: 'July 31, 2025', duration: "60 min" },
                { id: 4, name: 'Financing Options Deep Dive', status: 'not_started', dueDate: 'July 31, 2025', duration: "40 min" },
                { id: 5, name: 'Competitive Analysis Workshop', status: 'not_started', dueDate: 'July 31, 2025', duration: "50 min" },
                { id: 6, name: 'Q3 Sales Strategy Session', status: 'not_started', dueDate: 'July 31, 2025', duration: "35 min" }
            ],
            recentNudges: [
                { type: 'critical', message: 'URGENT: Safety Training expired - complete immediately', sent: '3 hours ago' },
                { type: 'urgent', message: 'Finance certification overdue - affects sales ability', sent: '1 day ago' },
                { type: 'warning', message: '4 training modules overdue - STAR qualification at risk', sent: '2 days ago' }
            ],
            engagement: {
                nudgeOpenRate: 32,
                trainingCompletionRate: 33,
                lastLogin: '5 days ago'
            }
        }
    ]);

    const [complianceAlerts] = useState([
        {
            id: 1,
            type: 'expiring',
            title: 'Certifications Expiring Soon',
            count: 8,
            priority: 'high',
            details: '8 employees have certifications expiring within 14 days'
        },
        {
            id: 2,
            type: 'overdue',
            title: 'Overdue Training',
            count: 3,
            priority: 'critical',
            details: '3 employees have overdue mandatory training'
        },
        {
            id: 3,
            type: 'star_risk',
            title: 'STAR Risk',
            count: 5,
            priority: 'high',
            details: '5 employees at risk of losing STAR qualification'
        }
    ]);

    // Calculate STAR rewards
    const getStarReward = (carsSold) => {
        if (carsSold >= 17) return { rate: 175, total: carsSold * 175 };
        if (carsSold >= 11) return { rate: 125, total: carsSold * 125 };
        if (carsSold >= 6) return { rate: 75, total: carsSold * 75 };
        return { rate: 0, total: 0 };
    };

    const getCurrentUser = () => {
        if (viewMode === 'overview') return user;
        const member = teamMembers.find(member => member.id === selectedEmployee);
        const currentTrainingModulesForSelected = member ? member.trainingModules : [];
        const completed = currentTrainingModulesForSelected.filter(m => m.status === 'completed').length;
        const total = currentTrainingModulesForSelected.length;

        return {
            ...user,
            ...(member || {}),
            completedModules: completed,
            totalModules: total,
            starQualified: completed === total && (member ? member.newCarsSold : 0) >= 6,
        };
    };

    const currentUser = getCurrentUser();
    const starReward = getStarReward(currentUser.newCarsSold || 0);
    const completionRate = currentUser.totalModules > 0 ? Math.round((currentUser.completedModules / currentUser.totalModules) * 100) : 0;

    const handleViewEmployee = (employeeId) => {
        setSelectedEmployee(employeeId);
        setViewMode('individual');
        setActiveTab('dashboard');
    };

    const handleBackToOverview = () => {
        setViewMode('overview');
        setActiveTab('overview');
        setSelectedEmployee('self');
    };

    const updateModuleStatus = (employeeId, moduleId, newStatus, newProgress = 0, newCompletedDate = null, newScore = null) => {
        setTeamMembers(prevMembers =>
            prevMembers.map(member => {
                if (member.id === employeeId) {
                    const updatedTrainingModules = member.trainingModules.map(module => {
                        if (module.id === moduleId) {
                            // Create a new module object with consistent properties
                            // Start with the original module properties
                            let updatedModule = { ...module, status: newStatus };

                            // Conditionally add/remove properties based on status
                            if (newStatus === 'in_progress') {
                                updatedModule.progress = newProgress;
                                // Ensure dueDate exists if it's an in_progress module that had one
                                if (!updatedModule.dueDate && module.dueDate) {
                                    updatedModule.dueDate = module.dueDate;
                                }
                                delete updatedModule.completedDate;
                                delete updatedModule.score;
                            } else if (newStatus === 'completed') {
                                updatedModule.completedDate = newCompletedDate;
                                updatedModule.score = newScore || module.score;
                                delete updatedModule.progress;
                                delete updatedModule.dueDate;
                            } else if (newStatus === 'not_started') {
                                // For 'not_started', ensure dueDate is present if it was there initially
                                if (!updatedModule.dueDate && module.dueDate) {
                                     updatedModule.dueDate = module.dueDate;
                                }
                                delete updatedModule.progress;
                                delete updatedModule.completedDate;
                                delete updatedModule.score;
                            }

                            return updatedModule;
                        }
                        return module;
                    });

                    const newCompletedCount = updatedTrainingModules.filter(m => m.status === 'completed').length;
                    const newTotalCount = updatedTrainingModules.length;
                    const newStarQualified = newCompletedCount === newTotalCount && member.newCarsSold >= 6;

                    return {
                        ...member,
                        trainingModules: updatedTrainingModules,
                        completedModules: newCompletedCount,
                        totalModules: newTotalCount,
                        starQualified: newStarQualified,
                    };
                }
                return member;
            })
        );
    };

    const handleModuleStart = (moduleId) => {
        updateModuleStatus(selectedEmployee, moduleId, 'in_progress', 10);
    };

    const handleModuleContinue = (moduleId) => {
        const currentModule = currentUser.trainingModules?.find(m => m.id === moduleId);
        if (currentModule && currentModule.progress) {
            const newProgress = Math.min(currentModule.progress + 20, 100);
            const newStatus = newProgress === 100 ? 'completed' : 'in_progress';
            const newCompletedDate = newProgress === 100 ? new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : null;
            const newScore = newProgress === 100 ? Math.floor(Math.random() * 15) + 85 : null;
            updateModuleStatus(selectedEmployee, moduleId, newStatus, newProgress, newCompletedDate, newScore);
        }
    };

    useEffect(() => {
        const generateAINudges = () => {
            const nudges = [
                {
                    id: 1,
                    type: 'urgent',
                    title: '🚨 Critical: 3 Employees Need Immediate Action',
                    message: 'David Thompson has expired certifications and overdue training. Risk of compliance violation.',
                    priority: 'critical',
                    action: 'View Details',
                    timestamp: new Date(Date.now() - 1000 * 60 * 15)
                },
                {
                    id: 2,
                    type: 'star_risk',
                    title: '⭐ STAR Qualification Alert',
                    message: '5 team members at risk of losing STAR qualification this month. Estimated impact: $15,750 in lost rewards.',
                    priority: 'high',
                    action: 'Send Nudges',
                    timestamp: new Date(Date.now() - 1000 * 60 * 60)
                }
            ];
            setNotifications(nudges);
        };
        generateAINudges();
    }, []);

    const getStatusColor = (status) => {
        switch (status) {
            case 'qualified': return 'border-green-200 bg-green-50';
            case 'critical': return 'border-red-200 bg-red-50';
            case 'at_risk': return 'border-orange-200 bg-orange-50';
            case 'behind': return 'border-yellow-200 bg-yellow-50';
            default: return 'border-gray-200 bg-gray-50';
        }
    };

    const getStatusDot = (status) => {
        switch (status) {
            case 'qualified': return 'bg-green-500';
            case 'critical': return 'bg-red-500';
            case 'at_risk': return 'bg-orange-500';
            case 'behind': return 'bg-yellow-500';
            default: return 'bg-gray-500';
        }
    };

    const getComplianceColor = (score) => {
        if (score >= 90) return 'text-green-600';
        if (score >= 70) return 'text-yellow-600';
        return 'text-red-600';
    };

    const AlertCard = ({ alert }) => {
        const getAlertColor = () => {
            switch (alert.priority) {
                case 'critical': return 'border-red-300 bg-red-50';
                case 'high': return 'border-orange-300 bg-orange-50';
                case 'medium': return 'border-yellow-300 bg-yellow-50';
                default: return 'border-gray-300 bg-gray-50';
            }
        };

        const getAlertIcon = () => {
            switch (alert.type) {
                case 'expiring': return <Clock className="w-5 h-5 text-orange-600" />;
                case 'overdue': return <AlertTriangle className="w-5 h-5 text-red-600" />;
                case 'star_risk': return <Star className="w-5 h-5 text-yellow-600" />;
                default: return <Bell className="w-5 h-5 text-gray-600" />;
            }
        };

        return (
            <div className={`p-4 rounded-lg border ${getAlertColor()}`}>
                <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                        {getAlertIcon()}
                        <div>
                            <h4 className="font-semibold text-gray-900">{alert.title}</h4>
                            <p className="text-sm text-gray-600 mt-1">{alert.details}</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className={`text-2xl font-bold ${
                            alert.priority === 'critical' ? 'text-red-600' :
                                alert.priority === 'high' ? 'text-orange-600' :
                                    'text-yellow-600'
                        }`}>
                            {alert.count}
                        </span>
                    </div>
                </div>
            </div>
        );
    };

    const TrainingModuleCard = ({ module, onStart, onContinue }) => {
        const getModuleStatusColor = (status) => {
            switch (status) {
                case 'completed': return 'bg-green-50 border-green-200 text-green-800';
                case 'in_progress': return 'bg-yellow-50 border-yellow-200 text-yellow-800';
                case 'not_started': return 'bg-gray-50 border-gray-200 text-gray-800';
                default: return 'bg-gray-50 border-gray-200 text-gray-800';
            }
        };

        const getModuleStatusIcon = (status) => {
            switch (status) {
                case 'completed': return <CheckCircle className="w-5 h-5 text-green-600" />;
                case 'in_progress': return <Clock className="w-5 h-5 text-yellow-600" />;
                case 'not_started': return <BookOpen className="w-5 h-5 text-gray-600" />;
                default: return <BookOpen className="w-5 h-5 text-gray-600" />;
            }
        };

        return (
            <div className={`p-4 rounded-lg border ${getModuleStatusColor(module.status)}`}>
                <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                        {getModuleStatusIcon(module.status)}
                        <div>
                            <h3 className="font-semibold">{module.name}</h3>
                            <p className="text-sm opacity-75">{module.duration}</p>
                        </div>
                    </div>
                    <div className="text-sm font-medium">
                        {module.status === 'completed' && module.score && `Score: ${module.score}%`}
                        {module.status === 'in_progress' && module.progress && `${module.progress}% Complete`}
                        {module.status === 'not_started' && module.dueDate && `Due: ${module.dueDate}`}
                    </div>
                </div>
                {module.status === 'in_progress' && module.progress && (
                    <div className="w-full bg-white rounded-full h-2 mb-3">
                        <div
                            className="bg-yellow-600 h-2 rounded-full transition-all"
                            style={{ width: `${module.progress}%` }}
                        />
                    </div>
                )}
                {module.status === 'not_started' && (
                    <button
                        onClick={() => onStart(module.id)}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Start Module
                    </button>
                )}
                {module.status === 'in_progress' && (
                    <button
                        onClick={() => onContinue(module.id)}
                        className="w-full bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700 transition-colors"
                    >
                        Continue Learning ({module.progress}%)
                    </button>
                )}
                {module.status === 'completed' && (
                    <div className="flex items-center justify-between mt-2">
                        <span className="text-sm text-green-700">
                            Completed {module.completedDate}
                        </span>
                        <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">COMPLETED</span>
                    </div>
                )}
            </div>
        );
    };

    const handleDownloadReport = () => {
        const reportContent = `
Unified Learning Platform Report - ${new Date().toLocaleDateString()}

Team Overview:
STAR Qualified: ${teamMembers.filter(m => m.starQualified).length}
Critical Issues: ${teamMembers.filter(m => m.status === 'critical').length}
Avg Compliance: ${Math.round(teamMembers.reduce((acc, m) => acc + m.complianceScore, 0) / teamMembers.length)}%

Team Member Details:
${teamMembers.map(member => `
  Name: ${member.name}
  Role: ${member.role}
  STAR Qualified: ${member.starQualified ? 'Yes' : 'No'}
  New Cars Sold (Current Month): ${member.newCarsSold}
  Completed Modules: ${member.completedModules}/${member.totalModules}
  Compliance Score: ${member.complianceScore}%
  Certification Issues: ${member.certificationIssues.length > 0 ? member.certificationIssues.join(', ') : 'None'}
  Recent Nudges: ${member.recentNudges.map(n => n.message).join('; ') || 'None'}
`).join('\n')}

Compliance Alerts:
${complianceAlerts.map(alert => `
  Title: ${alert.title}
  Details: ${alert.details}
  Priority: ${alert.priority}
`).join('\n')}
        `;

        const blob = new Blob([reportContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Unified_Learning_Report.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                            <Shield className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Unified Learning & Compliance Platform</h1>
                            <p className="text-gray-600">
                                {viewMode === 'overview' ? 'Manager Dashboard' : `${currentUser.name} • ${currentUser.role}`} • {user.dealership} • {user.region}
                            </p>
                        </div>
                        {viewMode === 'individual' && (
                            <button
                                onClick={handleBackToOverview}
                                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                            >
                                ← Back to Overview
                            </button>
                        )}
                    </div>

                    {viewMode === 'overview' && (
                        <div className="flex items-center space-x-6">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-600">
                                    {teamMembers.filter(m => m.starQualified).length}
                                </div>
                                <p className="text-sm text-gray-600">STAR Qualified</p>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-red-600">
                                    {teamMembers.filter(m => m.status === 'critical').length}
                                </div>
                                <p className="text-sm text-gray-600">Critical Issues</p>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-blue-600">
                                    {Math.round(teamMembers.reduce((acc, m) => acc + m.complianceScore, 0) / teamMembers.length)}%
                                </div>
                                <p className="text-sm text-gray-600">Avg Compliance</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Navigation */}
            {viewMode === 'overview' && (
                <div className="flex space-x-1 mb-6 bg-white rounded-lg p-1">
                    {[
                        { id: 'overview', label: 'Team Overview', icon: Users },
                        { id: 'compliance', label: 'Compliance Alerts', icon: Shield },
                        { id: 'reports', label: 'Reports & Analytics', icon: BarChart3 },
                        { id: 'ai-nudge', label: 'AI Nudging', icon: Zap }
                    ].map(tab => {
                        const Icon = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                                    activeTab === tab.id
                                        ? 'bg-blue-100 text-blue-700'
                                        : 'text-gray-600 hover:bg-gray-100'
                                }`}
                            >
                                <Icon className="w-4 h-4" />
                                <span>{tab.label}</span>
                            </button>
                        );
                    })}
                </div>
            )}

            {/* Individual Employee Navigation */}
            {viewMode === 'individual' && (
                <div className="flex space-x-1 mb-6 bg-white rounded-lg p-1">
                    {[
                        { id: 'dashboard', label: 'Employee Dashboard', icon: TrendingUp },
                        { id: 'training', label: 'Training & Certifications', icon: BookOpen },
                        { id: 'rewards', label: 'STAR Rewards', icon: Star }
                    ].map(tab => {
                        const Icon = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                                    activeTab === tab.id
                                        ? 'bg-blue-100 text-blue-700'
                                        : 'text-gray-600 hover:bg-gray-100'
                                }`}
                            >
                                <Icon className="w-4 h-4" />
                                <span>{tab.label}</span>
                            </button>
                        );
                    })}
                </div>
            )}

            {/* Team Overview */}
            {viewMode === 'overview' && activeTab === 'overview' && (
                <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                    <Target className="w-5 h-5 text-green-600" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-green-600">87%</div>
                                    <p className="text-sm text-gray-600">STAR Compliance</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <BookOpen className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-blue-600">23</div>
                                    <p className="text-sm text-gray-600">Active Trainings</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                                    <AlertCircle className="w-5 h-5 text-red-600" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-red-600">11</div>
                                    <p className="text-sm text-gray-600">Issues Detected</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                    <DollarSign className="w-5 h-5 text-purple-600" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-purple-600">$47K</div>
                                    <p className="text-sm text-gray-600">STAR Rewards at Risk</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-gray-900">Team Members - {user.currentMonth}</h2>
                            <div className="flex items-center space-x-3">
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2" onClick={handleDownloadReport}>
                                    <Download className="w-4 h-4" />
                                    <span>Export Report</span>
                                </button>
                                <button className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2">
                                    <Zap className="w-4 h-4" />
                                    <span>Send Nudges</span>
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            {teamMembers.map(member => {
                                return (
                                    <div
                                        key={member.id}
                                        className={`p-4 rounded-lg border-2 ${getStatusColor(member.status)}`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <div className={`w-3 h-3 rounded-full ${getStatusDot(member.status)}`}></div>
                                                <div>
                                                    <h3 className="font-semibold text-gray-900">{member.name}</h3>
                                                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                                                        <span>{member.role}</span>
                                                        {member.starQualified && (
                                                            <span className="flex items-center space-x-1">
                                                                <Star className="w-4 h-4 text-yellow-500" />
                                                                <span>STAR Qualified</span>
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-4">
                                                <div className="text-right">
                                                    <p className="text-sm text-gray-600">New Cars Sold</p>
                                                    <p className="text-lg font-bold text-gray-900">{member.newCarsSold}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-sm text-gray-600">Training Completion</p>
                                                    <p className="text-lg font-bold text-blue-600">{member.completedModules}/{member.totalModules}</p>
                                                </div>
                                                <button
                                                    onClick={() => handleViewEmployee(member.id)}
                                                    className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600 transition-colors"
                                                >
                                                    View Profile
                                                </button>
                                            </div>
                                        </div>
                                        {member.certificationIssues && member.certificationIssues.length > 0 && (
                                            <div className="mt-3 text-sm text-red-700 flex items-center space-x-2">
                                                <AlertTriangle className="w-4 h-4" />
                                                <span>Issues: {member.certificationIssues.join(', ')}</span>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}

            {/* Compliance Alerts Tab */}
            {viewMode === 'overview' && activeTab === 'compliance' && (
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Compliance Alerts</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {complianceAlerts.map(alert => (
                            <AlertCard key={alert.id} alert={alert} />
                        ))}
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Detailed Compliance Status</h3>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Compliance Score</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Certifications</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Overdue Training</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Activity</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {teamMembers.map(member => (
                                        <tr key={member.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">{member.name}</div>
                                                        <div className="text-sm text-gray-500">{member.role}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                    member.complianceScore >= 90 ? 'bg-green-100 text-green-800' :
                                                        member.complianceScore >= 70 ? 'bg-yellow-100 text-yellow-800' :
                                                            'bg-red-100 text-red-800'
                                                }`}>
                                                    {member.complianceScore}%
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {member.certifications.filter(c => c.status !== 'current').map(c => (
                                                    <div key={c.name} className={`flex items-center ${c.status === 'expired' ? 'text-red-600' : 'text-orange-600'}`}>
                                                        <AlertTriangle className="w-4 h-4 mr-1" /> {c.name} ({c.status})
                                                    </div>
                                                ))}
                                                {member.certifications.filter(c => c.status === 'current').length === member.certifications.length && 'All Current'}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {member.trainingModules.filter(m => m.status === 'not_started' && m.dueDate && new Date(m.dueDate) < new Date()).length > 0 ? (
                                                    <span className="text-red-600 font-semibold">{member.trainingModules.filter(m => m.status === 'not_started' && m.dueDate && new Date(m.dueDate) < new Date()).length} Overdue</span>
                                                ) : 'None'}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {member.lastActivity}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}

            {/* Reports & Analytics Tab */}
            {viewMode === 'overview' && activeTab === 'reports' && (
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Reports & Analytics</h2>

                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-semibold text-gray-900">Training & Performance Summary</h3>
                            <button
                                onClick={handleDownloadReport}
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                            >
                                <Download className="w-4 h-4" />
                                <span>Download Full Report</span>
                            </button>
                        </div>
                        <p className="text-gray-600 mb-4">
                            Here you can find comprehensive reports on your team's training progress, certification status, sales performance, and engagement metrics.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="border border-gray-200 p-4 rounded-md">
                                <h4 className="font-medium text-gray-800 flex items-center gap-2 mb-2"><BarChart3 className="w-5 h-5" /> Overall Training Progress</h4>
                                <p className="text-lg font-bold text-blue-600">
                                    {Math.round(teamMembers.reduce((sum, member) => sum + (member.completedModules / member.totalModules || 0), 0) / teamMembers.length * 100) || 0}% Average
                                </p>
                                <p className="text-sm text-gray-500">Across all team members and modules.</p>
                            </div>
                            <div className="border border-gray-200 p-4 rounded-md">
                                <h4 className="font-medium text-gray-800 flex items-center gap-2 mb-2"><Award className="w-5 h-5" /> Certification Compliance</h4>
                                <p className="text-lg font-bold text-green-600">
                                    {Math.round(teamMembers.filter(m => m.complianceScore === 100).length / teamMembers.length * 100) || 0}% Fully Compliant
                                </p>
                                <p className="text-sm text-gray-500">Percentage of team members with all certifications current.</p>
                            </div>
                            <div className="border border-gray-200 p-4 rounded-md">
                                <h4 className="font-medium text-gray-800 flex items-center gap-2 mb-2"><DollarSign className="w-5 h-5" /> Potential STAR Rewards</h4>
                                <p className="text-lg font-bold text-purple-600">
                                    ${teamMembers.reduce((sum, member) => sum + getStarReward(member.newCarsSold).total, 0)}
                                </p>
                                <p className="text-sm text-gray-500">Total potential earnings from STAR program this month.</p>
                            </div>
                            <div className="border border-gray-200 p-4 rounded-md">
                                <h4 className="font-medium text-gray-800 flex items-center gap-2 mb-2"><TrendingUp className="w-5 h-5" /> Top Performers (Sales)</h4>
                                <ul className="list-disc list-inside text-sm text-gray-700">
                                    {teamMembers.sort((a,b) => b.newCarsSold - a.newCarsSold).slice(0,3).map(member => (
                                        <li key={member.id}>{member.name}: {member.newCarsSold} cars</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="mt-6 text-sm text-gray-500">
                            *Note: This report provides a summary. Click "Download Full Report" for all detailed data.
                        </div>
                    </div>
                </div>
            )}

            {/* AI Nudging Tab */}
            {viewMode === 'overview' && activeTab === 'ai-nudge' && (
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">AI Nudging & Automation</h2>

                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent AI-Generated Nudges</h3>
                        {notifications.length > 0 ? (
                            <div className="grid grid-cols-1 gap-4">
                                {notifications.map(nudge => (
                                    <div key={nudge.id} className={`p-4 rounded-lg border ${
                                        nudge.priority === 'critical' ? 'border-red-300 bg-red-50' :
                                            nudge.priority === 'high' ? 'border-orange-300 bg-orange-50' :
                                            'border-gray-300 bg-gray-50'
                                    }`}>
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-center space-x-3">
                                                {nudge.type === 'urgent' && <AlertTriangle className="w-5 h-5 text-red-600" />}
                                                {nudge.type === 'star_risk' && <Star className="w-5 h-5 text-yellow-600" />}
                                                {nudge.type === 'congratulations' && <Award className="w-5 h-5 text-green-600" />}
                                                {nudge.type === 'reminder' && <Bell className="w-5 h-5 text-blue-600" />}
                                                <div>
                                                    <h4 className="font-semibold text-gray-900">{nudge.title}</h4>
                                                    <p className="text-sm text-gray-600 mt-1">{nudge.message}</p>
                                                </div>
                                            </div>
                                            <div className="text-right text-sm text-gray-500">
                                                <p>{nudge.timestamp.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}</p>
                                                {nudge.action && (
                                                    <button className="mt-2 text-blue-600 hover:underline text-sm font-medium">
                                                        {nudge.action}
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-500">No recent AI nudges to display.</p>
                        )}
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Send a Custom Nudge</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="nudgeRecipient" className="block text-sm font-medium text-gray-700">Recipient</label>
                                <select
                                    id="nudgeRecipient"
                                    name="nudgeRecipient"
                                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                                    defaultValue="all"
                                >
                                    <option value="all">All Team Members</option>
                                    {teamMembers.map(member => (
                                        <option key={member.id} value={member.id}>{member.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="nudgeType" className="block text-sm font-medium text-gray-700">Nudge Type</label>
                                <select
                                    id="nudgeType"
                                    name="nudgeType"
                                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                                >
                                    <option>Reminder</option>
                                    <option>Urgent Action</option>
                                    <option>Congratulations</option>
                                    <option>Performance Tip</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="nudgeMessage" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                id="nudgeMessage"
                                name="nudgeMessage"
                                rows="3"
                                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Type your nudge message here..."
                            ></textarea>
                        </div>
                        <div className="mt-4 flex justify-end">
                            <button className="bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2">
                                <Mail className="w-4 h-4" />
                                <span>Send Nudge</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Individual Employee Dashboard */}
            {viewMode === 'individual' && activeTab === 'dashboard' && currentUser && (
                <div className="space-y-6">
                    {/* Employee Profile Card */}
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <div className="flex items-center space-x-6">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-3xl font-bold">
                                {currentUser.name?.charAt(0) || 'U'}
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">{currentUser.name}</h2>
                                <p className="text-gray-600">{currentUser.role} at {currentUser.dealership}</p>
                                <div className="flex items-center space-x-3 text-sm text-gray-500 mt-2">
                                    <Mail className="w-4 h-4" /> <span>{currentUser.email}</span>
                                    <Smartphone className="w-4 h-4" /> <span>{currentUser.phone}</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 border-t border-gray-200 pt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <p className="text-sm text-gray-500">Hire Date</p>
                                <p className="font-medium text-gray-900">{currentUser.hireDate}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Manager</p>
                                <p className="font-medium text-gray-900">{currentUser.manager}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Territory</p>
                                <p className="font-medium text-gray-900">{currentUser.territory}</p>
                            </div>
                        </div>
                    </div>

                    {/* Key Performance Indicators */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="bg-white p-6 rounded-xl shadow-sm flex items-center space-x-4">
                            <DollarSign className="w-8 h-8 text-blue-600" />
                            <div>
                                <p className="text-sm text-gray-600">New Cars Sold (Current Month)</p>
                                <p className="text-2xl font-bold text-gray-900">{currentUser.newCarsSold || 0}</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm flex items-center space-x-4">
                            <BookOpen className="w-8 h-8 text-purple-600" />
                            <div>
                                <p className="text-sm text-gray-600">Training Completion</p>
                                <p className="text-2xl font-bold text-gray-900">{completionRate}%</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm flex items-center space-x-4">
                            <Shield className="w-8 h-8 text-green-600" />
                            <div>
                                <p className="text-sm text-gray-600">Compliance Score</p>
                                <p className={`text-2xl font-bold ${getComplianceColor(currentUser.complianceScore || 0)}`}>{currentUser.complianceScore || 0}%</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm flex items-center space-x-4">
                            <Trophy className="w-8 h-8 text-yellow-600" />
                            <div>
                                <p className="text-sm text-gray-600">STAR Qualified</p>
                                <p className={`text-2xl font-bold ${currentUser.starQualified ? 'text-green-600' : 'text-red-600'}`}>
                                    {currentUser.starQualified ? 'Yes' : 'No'}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Certifications and Training Summary */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Certifications</h3>
                            <div className="space-y-3">
                                {currentUser.certifications && currentUser.certifications.map(cert => (
                                    <div key={cert.name} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                                        <div className="flex items-center space-x-3">
                                            {cert.status === 'current' && <CheckCircle className="w-5 h-5 text-green-500" />}
                                            {cert.status === 'expiring' && <Clock className="w-5 h-5 text-orange-500" />}
                                            {cert.status === 'pending_renewal' && <AlertCircle className="w-5 h-5 text-yellow-500" />}
                                            {cert.status === 'overdue' && <AlertTriangle className="w-5 h-5 text-red-500" />}
                                            {cert.status === 'expired' && <AlertTriangle className="w-5 h-5 text-red-500" />}
                                            <span className="font-medium text-gray-800">{cert.name}</span>
                                        </div>
                                        <span className={`text-sm font-semibold ${
                                            cert.status === 'current' ? 'text-green-600' :
                                                cert.status === 'expiring' ? 'text-orange-600' :
                                                    cert.status === 'pending_renewal' ? 'text-yellow-600' :
                                                        'text-red-600'
                                        }`}>
                                            {cert.status === 'current' ? 'Current' :
                                            cert.status === 'expiring' ? `Expires ${new Date(cert.expiryDate).toLocaleDateString('en-US', {month: 'short', day: 'numeric'})}` :
                                            cert.status === 'pending_renewal' ? `Pending Renewal (${new Date(cert.expiryDate).toLocaleDateString('en-US', {month: 'short', day: 'numeric'})})` :
                                            `OVERDUE (${new Date(cert.expiryDate).toLocaleDateString('en-US', {month: 'short', day: 'numeric'})})`}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Training Modules</h3>
                            <div className="space-y-4">
                                {currentUser.trainingModules && currentUser.trainingModules.slice(0, 3).map(module => (
                                    <TrainingModuleCard
                                        key={module.id}
                                        module={module}
                                        onStart={handleModuleStart}
                                        onContinue={handleModuleContinue}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Recent Nudges and Engagement */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Nudges Sent</h3>
                            <div className="space-y-3">
                                {currentUser.recentNudges && currentUser.recentNudges.length > 0 ? (
                                    currentUser.recentNudges.map((nudge, index) => (
                                        <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-md border border-gray-200">
                                            {nudge.type === 'critical' || nudge.type === 'urgent' || nudge.type === 'warning' ? (
                                                <AlertTriangle className="w-5 h-5 text-red-500 mt-1" />
                                            ) : (
                                                <Bell className="w-5 h-5 text-blue-500 mt-1" />
                                            )}
                                            <div>
                                                <p className="text-gray-800">{nudge.message}</p>
                                                <p className="text-xs text-gray-500 mt-1">Sent: {nudge.sent}</p>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-500">No recent nudges for this employee.</p>
                                )}
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Engagement Metrics</h3>
                            {currentUser.engagement ? (
                                <div className="space-y-3 text-gray-700">
                                    <div className="flex justify-between items-center">
                                        <span className="flex items-center space-x-2"><Eye className="w-5 h-5 text-blue-500" /> <span>Nudge Open Rate:</span></span>
                                        <span className="font-semibold">{currentUser.engagement.nudgeOpenRate}%</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="flex items-center space-x-2"><CheckCircle className="w-5 h-5 text-green-500" /> <span>Training Completion Rate:</span></span>
                                        <span className="font-semibold">{currentUser.engagement.trainingCompletionRate}%</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="flex items-center space-x-2"><Clock className="w-5 h-5 text-gray-500" /> <span>Last Login:</span></span>
                                        <span className="font-semibold">{currentUser.engagement.lastLogin}</span>
                                    </div>
                                </div>
                            ) : (
                                <p className="text-gray-500">No engagement data available.</p>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Individual Employee Training & Certifications */}
            {viewMode === 'individual' && activeTab === 'training' && currentUser && (
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Training & Certifications for {currentUser.name}</h2>

                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Current Certifications</h3>
                        <div className="space-y-3">
                            {currentUser.certifications && currentUser.certifications.length > 0 ? (
                                currentUser.certifications.map(cert => (
                                    <div key={cert.name} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                                        <div className="flex items-center space-x-3">
                                            {cert.status === 'current' && <CheckCircle className="w-5 h-5 text-green-500" />}
                                            {cert.status === 'expiring' && <Clock className="w-5 h-5 text-orange-500" />}
                                            {cert.status === 'pending_renewal' && <AlertCircle className="w-5 h-5 text-yellow-500" />}
                                            {cert.status === 'overdue' && <AlertTriangle className="w-5 h-5 text-red-500" />}
                                            {cert.status === 'expired' && <AlertTriangle className="w-5 h-5 text-red-500" />}
                                            <span className="font-medium text-gray-800">{cert.name}</span>
                                        </div>
                                        <span className={`text-sm font-semibold ${
                                            cert.status === 'current' ? 'text-green-600' :
                                                cert.status === 'expiring' ? 'text-orange-600' :
                                                    cert.status === 'pending_renewal' ? 'text-yellow-600' :
                                                        'text-red-600'
                                        }`}>
                                            {cert.status === 'current' ? 'Current' :
                                            cert.status === 'expiring' ? `Expires ${new Date(cert.expiryDate).toLocaleDateString('en-US', {month: 'short', day: 'numeric'})}` :
                                            cert.status === 'pending_renewal' ? `Pending Renewal (${new Date(cert.expiryDate).toLocaleDateString('en-US', {month: 'short', day: 'numeric'})})` :
                                            `OVERDUE (${new Date(cert.expiryDate).toLocaleDateString('en-US', {month: 'short', day: 'numeric'})})`}
                                        </span>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500">No certifications listed.</p>
                            )}
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Assigned Training Modules</h3>
                        <div className="space-y-4">
                            {currentUser.trainingModules && currentUser.trainingModules.length > 0 ? (
                                currentUser.trainingModules.map(module => (
                                    <TrainingModuleCard
                                        key={module.id}
                                        module={module}
                                        onStart={handleModuleStart}
                                        onContinue={handleModuleContinue}
                                    />
                                ))
                            ) : (
                                <p className="text-gray-500">No training modules assigned.</p>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Individual Employee STAR Rewards */}
            {viewMode === 'individual' && activeTab === 'rewards' && currentUser && (
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">STAR Rewards for {currentUser.name}</h2>

                    <div className="bg-white rounded-xl shadow-sm p-6 flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <Trophy className="w-12 h-12 text-yellow-600" />
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">Current Month's STAR Performance</h3>
                                <p className="text-gray-600">Sales close date: {user.salesCloseDate} ({user.daysRemaining} days remaining)</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-gray-600">New Cars Sold:</p>
                            <p className="text-3xl font-bold text-blue-600">{currentUser.newCarsSold || 0}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">STAR Qualification Status</h3>
                            <div className="flex items-center space-x-3">
                                {currentUser.starQualified ? (
                                    <CheckCircle className="w-8 h-8 text-green-500" />
                                ) : (
                                    <AlertTriangle className="w-8 h-8 text-red-500" />
                                )}
                                <div>
                                    <p className="text-lg font-semibold text-gray-900">
                                        Status: <span className={currentUser.starQualified ? 'text-green-600' : 'text-red-600'}>
                                            {currentUser.starQualified ? 'Qualified' : 'Not Qualified'}
                                        </span>
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        {currentUser.starQualified ? "Great job! You've met all requirements for STAR qualification." : "Action required to achieve STAR qualification."}
                                    </p>
                                </div>
                            </div>
                            {!currentUser.starQualified && (
                                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md text-red-800 text-sm">
                                    <ul className="list-disc list-inside">
                                        {currentUser.totalModules > 0 && currentUser.completedModules < currentUser.totalModules && (
                                            <li>Complete remaining {currentUser.totalModules - currentUser.completedModules} training modules.</li>
                                        )}
                                        {(currentUser.newCarsSold || 0) < 6 && (
                                            <li>Sell {6 - (currentUser.newCarsSold || 0)} more new cars.</li>
                                        )}
                                        {currentUser.certificationIssues && currentUser.certificationIssues.length > 0 && (
                                            <li>Address certification issues: {currentUser.certificationIssues.join(', ')}.</li>
                                        )}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Estimated STAR Rewards</h3>
                            <div className="flex items-center space-x-4">
                                <DollarSign className="w-12 h-12 text-purple-600" />
                                <div>
                                    <p className="text-lg font-semibold text-gray-900">
                                        Estimated Payout: <span className="text-purple-600">${starReward.total}</span>
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Based on {currentUser.newCarsSold || 0} cars sold at ${starReward.rate} per car.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-4 text-sm text-gray-700">
                                <p><strong>STAR Reward Tiers:</strong></p>
                                <ul className="list-disc list-inside mt-1">
                                    <li>6-10 Cars: $75/car</li>
                                    <li>11-16 Cars: $125/car</li>
                                    <li>17+ Cars: $175/car</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UnifiedLearningPlatform;
