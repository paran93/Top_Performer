import React, { useState, useEffect } from 'react';
import { Star, BookOpen, Trophy, Bell, AlertTriangle, Calendar, DollarSign, Users, CheckCircle, Clock, Mail, Smartphone, TrendingUp, Eye, Download, UserCheck, AlertCircle, Target, BarChart3, Shield, Zap, FileText, Settings, Award } from 'lucide-react';

const UnifiedLearningPlatform = () => {
    // Updated user state to include properties needed for calculations, even if 0 for manager overview
    const [user] = useState({
        name: "Sarah Martinez",
        role: "Sales Manager",
        dealership: "Metro Hyundai",
        region: "Southwest",
        starQualified: true,
        currentMonth: "July 2025",
        salesCloseDate: "July 31, 2025, 11:59 PM PT",
        daysRemaining: 3,
        newCarsSold: 0, // Added for manager's overview context
        completedModules: 0, // Added for manager's overview context
        totalModules: 0, // Added for manager's overview context
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
        if (viewMode === 'overview') {
            // When in overview mode, 'user' is the manager.
            // It now includes default newCarsSold, completedModules, totalModules.
            return user;
        }
        // If an individual employee is selected, find their data.
        const member = teamMembers.find(member => member.id === selectedEmployee);

        // Ensure member exists before accessing its properties.
        if (member) {
            const currentTrainingModulesForSelected = member.trainingModules;
            const completed = currentTrainingModulesForSelected.filter(m => m.status === 'completed').length;
            const total = currentTrainingModulesForSelected.length;

            return {
                ...member, // Spread all properties of the selected team member
                completedModules: completed,
                totalModules: total,
                starQualified: completed === total && member.newCarsSold >= 6,
            };
        }
        // Fallback if selectedEmployee isn't found (shouldn't happen with proper flow)
        return user; // Return the manager's data as a safe default
    };

    const currentUser = getCurrentUser();
    // Now currentUser is guaranteed to have newCarsSold, completedModules, and totalModules
    const starReward = getStarReward(currentUser.newCarsSold);
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
                            return {
                                ...module,
                                status: newStatus,
                                progress: newProgress,
                                completedDate: newCompletedDate,
                                score: newScore || module.score,
                            };
                        }
                        return module;
                    });

                    const newCompletedCount = updatedTrainingModules.filter(m => m.status === 'completed').length;
                    const newTotalCount = updatedTrainingModules.length;
                    // Ensure newCarsSold is correctly accessed for the specific member
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
        // Ensure selectedEmployee is valid before calling updateModuleStatus
        if (selectedEmployee && selectedEmployee !== 'self') {
            updateModuleStatus(selectedEmployee, moduleId, 'in_progress', 10);
        }
    };

    const handleModuleContinue = (moduleId) => {
        const currentModule = currentUser.trainingModules?.find(m => m.id === moduleId); // Use optional chaining
        if (currentModule && selectedEmployee && selectedEmployee !== 'self') {
            const newProgress = Math.min(currentModule.progress + 20, 100);
            const newStatus = newProgress === 100 ? 'completed' : 'in_progress';
            const newCompletedDate = newProgress === 100 ? new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : currentModule.completedDate;
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
                        {module.status === 'completed' && `Score: ${module.score}%`}
                        {module.status === 'in_progress' && `${module.progress}% Complete`}
                        {module.status === 'not_started' && `Due: ${module.dueDate}`}
                    </div>
                </div>
                {module.status === 'in_progress' && (
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
                        <span className="text-sm text-green-700">Completed {module.completedDate}</span>
                        <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">COMPLETED</span>
                    </div>
                )}
            </div>
        );
    };

    const handleDownloadReport = () => {
        // In a real application, you would generate a more complex report
        // and trigger a download. For this example, we'll create a simple text file.
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
                            {viewMode === 'individual' && (
                                <button
                                    onClick={handleBackToOverview}
                                    className="mt-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center space-x-2 text-sm"
                                >
                                    <Eye className="w-4 h-4" />
                                    <span>Back to Overview</span>
                                </button>
                            )}
                        </div>
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
                        { id: 'reports', label: 'Reports & Analytics', icon: BarChart3 }, // New tab
                        { id: 'ai-nudge', label: 'AI Nudging', icon: Zap } // New tab
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

            {/* Content Area */}
            {/* Team Overview Tab Content */}
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
                                    <span>Download Report</span>
                                </button>
                                <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center space-x-2">
                                    <Settings className="w-4 h-4" />
                                    <span>Settings</span>
                                </button>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Employee
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            STAR Qual.
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Sales
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Training Progress
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Compliance Score
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {teamMembers.map(member => (
                                        <tr key={member.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                                                        {member.name.charAt(0)}
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">{member.name}</div>
                                                        <div className="text-sm text-gray-500">{member.role}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusDot(member.status)} text-white`}>
                                                    {member.status.replace('_', ' ')}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {member.starQualified ? (
                                                    <Star className="w-5 h-5 text-yellow-500" />
                                                ) : (
                                                    <Star className="w-5 h-5 text-gray-300" />
                                                )}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {member.newCarsSold} new cars
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {member.completedModules}/{member.totalModules} modules
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                <span className={`font-semibold ${getComplianceColor(member.complianceScore)}`}>
                                                    {member.complianceScore}%
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <button
                                                    onClick={() => handleViewEmployee(member.id)}
                                                    className="text-blue-600 hover:text-blue-900"
                                                >
                                                    View Profile
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

            {/* Compliance Alerts Tab Content */}
            {viewMode === 'overview' && activeTab === 'compliance' && (
                <div className="space-y-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Compliance Alerts</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {complianceAlerts.map(alert => (
                            <AlertCard key={alert.id} alert={alert} />
                        ))}
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Detailed Certification Status</h3>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Certification</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expiry/Due Date</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {teamMembers.map(member => (
                                        member.certifications.map(cert => (
                                            <tr key={`${member.id}-${cert.name}`}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    {member.name}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                                    {cert.name}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                        cert.status === 'current' ? 'bg-green-100 text-green-800' :
                                                        cert.status === 'expiring' ? 'bg-orange-100 text-orange-800' :
                                                        cert.status === 'overdue' || cert.status === 'expired' ? 'bg-red-100 text-red-800' :
                                                        'bg-gray-100 text-gray-800'
                                                    }`}>
                                                        {cert.status.replace('_', ' ')}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                                    {cert.expiryDate}
                                                </td>
                                            </tr>
                                        ))
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}

            {/* Reports & Analytics Tab Content */}
            {viewMode === 'overview' && activeTab === 'reports' && (
                <div className="space-y-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Reports & Analytics</h2>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Metrics</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="border border-gray-200 rounded-lg p-4 flex items-center space-x-3">
                                <Trophy className="w-6 h-6 text-yellow-500" />
                                <div>
                                    <p className="text-sm text-gray-600">Total STAR Rewards Potential</p>
                                    <p className="text-xl font-bold text-gray-900">$52,500</p>
                                </div>
                            </div>
                            <div className="border border-gray-200 rounded-lg p-4 flex items-center space-x-3">
                                <BookOpen className="w-6 h-6 text-blue-500" />
                                <div>
                                    <p className="text-sm text-gray-600">Overall Training Completion</p>
                                    <p className="text-xl font-bold text-gray-900">72%</p>
                                </div>
                            </div>
                            <div className="border border-gray-200 rounded-lg p-4 flex items-center space-x-3">
                                <UserCheck className="w-6 h-6 text-green-500" />
                                <div>
                                    <p className="text-sm text-gray-600">Compliance Rate</p>
                                    <p className="text-xl font-bold text-gray-900">89%</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Training Performance Overview</h3>
                        {/* Placeholder for a chart or more detailed table */}
                        <div className="bg-gray-100 h-48 flex items-center justify-center rounded-lg text-gray-500">
                            [Chart: Training Completion by Department/Role]
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Compliance Trends</h3>
                        {/* Placeholder for a chart or more detailed table */}
                        <div className="bg-gray-100 h-48 flex items-center justify-center rounded-lg text-gray-500">
                            [Chart: Compliance Score Over Time]
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm flex justify-between items-center">
                        <p className="text-gray-700">Generate a comprehensive report for this month.</p>
                        <button onClick={handleDownloadReport} className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
                            <FileText className="w-4 h-4" />
                            <span>Export Full Report</span>
                        </button>
                    </div>
                </div>
            )}

            {/* AI Nudging Tab Content */}
            {viewMode === 'overview' && activeTab === 'ai-nudge' && (
                <div className="space-y-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">AI Nudging & Communications</h2>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent AI-Generated Nudges</h3>
                        <div className="space-y-4">
                            {notifications.length > 0 ? (
                                notifications.map(n => (
                                    <div key={n.id} className="border border-gray-200 rounded-lg p-4 flex items-start space-x-3">
                                        <Zap className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-gray-900">{n.title}</p>
                                            <p className="text-sm text-gray-700 mt-1">{n.message}</p>
                                            <div className="flex items-center text-xs text-gray-500 mt-2">
                                                <Clock className="w-3 h-3 mr-1" />
                                                <span>{n.timestamp.toLocaleString()}</span>
                                                <span className="mx-2">•</span>
                                                <span className={`font-medium ${n.priority === 'critical' ? 'text-red-600' : n.priority === 'high' ? 'text-orange-600' : 'text-gray-500'}`}>
                                                    {n.priority.toUpperCase()}
                                                </span>
                                                {n.action && (
                                                    <button className="ml-3 text-blue-600 hover:underline text-xs">
                                                        {n.action}
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500 italic">No recent AI nudges.</p>
                            )}
                        </div>
                        <button className="mt-6 bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2">
                            <Bell className="w-4 h-4" />
                            <span>Create Custom Nudge</span>
                        </button>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Nudge Performance</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="border border-gray-200 rounded-lg p-4 flex items-center space-x-3">
                                <Eye className="w-6 h-6 text-blue-500" />
                                <div>
                                    <p className="text-sm text-gray-600">Average Nudge Open Rate</p>
                                    <p className="text-xl font-bold text-gray-900">75%</p>
                                </div>
                            </div>
                            <div className="border border-gray-200 rounded-lg p-4 flex items-center space-x-3">
                                <TrendingUp className="w-6 h-6 text-green-500" />
                                <div>
                                    <p className="text-sm text-gray-600">Action Taken Rate</p>
                                    <p className="text-xl font-bold text-gray-900">62%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}


            {/* Individual Employee Dashboard Tab Content */}
            {viewMode === 'individual' && activeTab === 'dashboard' && currentUser && (
                <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                            <div className="w-24 h-24 mx-auto bg-blue-500 text-white rounded-full flex items-center justify-center text-4xl font-bold mb-4">
                                {currentUser.name.charAt(0)}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">{currentUser.name}</h3>
                            <p className="text-gray-600">{currentUser.role}</p>
                            <p className="text-sm text-gray-500 mt-1">{currentUser.dealership}</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h4 className="font-semibold text-gray-900 mb-3">Key Metrics</h4>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm text-gray-700">
                                    <div className="flex items-center space-x-2"><DollarSign className="w-4 h-4 text-green-600" /><span>New Cars Sold (Current Month):</span></div>
                                    <span className="font-bold">{currentUser.newCarsSold}</span>
                                </div>
                                <div className="flex items-center justify-between text-sm text-gray-700">
                                    <div className="flex items-center space-x-2"><Trophy className="w-4 h-4 text-yellow-500" /><span>STAR Qualification Status:</span></div>
                                    <span className={`font-bold ${currentUser.starQualified ? 'text-green-600' : 'text-red-600'}`}>
                                        {currentUser.starQualified ? 'Qualified' : 'At Risk'}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between text-sm text-gray-700">
                                    <div className="flex items-center space-x-2"><BookOpen className="w-4 h-4 text-blue-600" /><span>Training Completion:</span></div>
                                    <span className="font-bold">{completionRate}%</span>
                                </div>
                                <div className="flex items-center justify-between text-sm text-gray-700">
                                    <div className="flex items-center space-x-2"><Shield className="w-4 h-4 text-purple-600" /><span>Compliance Score:</span></div>
                                    <span className={`font-bold ${getComplianceColor(currentUser.complianceScore)}`}>
                                        {currentUser.complianceScore}%
                                    </span>
                                </div>
                                <div className="flex items-center justify-between text-sm text-gray-700">
                                    <div className="flex items-center space-x-2"><Calendar className="w-4 h-4 text-gray-600" /><span>Days Remaining (Current Month):</span></div>
                                    <span className="font-bold">{currentUser.daysRemaining}</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h4 className="font-semibold text-gray-900 mb-3">Contact & Details</h4>
                            <div className="space-y-2 text-sm text-gray-700">
                                <p className="flex items-center space-x-2"><Mail className="w-4 h-4 text-gray-500" /><span>{currentUser.email}</span></p>
                                <p className="flex items-center space-x-2"><Smartphone className="w-4 h-4 text-gray-500" /><span>{currentUser.phone}</span></p>
                                <p className="flex items-center space-x-2"><Users className="w-4 h-4 text-gray-500" /><span>Manager: {currentUser.manager}</span></p>
                                <p className="flex items-center space-x-2"><Target className="w-4 h-4 text-gray-500" /><span>Territory: {currentUser.territory}</span></p>
                                <p className="flex items-center space-x-2"><Calendar className="w-4 h-4 text-gray-500" /><span>Hire Date: {currentUser.hireDate}</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Nudges & Alerts</h3>
                            {currentUser.recentNudges && currentUser.recentNudges.length > 0 ? (
                                <div className="space-y-3">
                                    {currentUser.recentNudges.map((n, index) => (
                                        <div key={index} className={`p-3 rounded-md text-sm ${
                                            n.type === 'critical' || n.type === 'urgent' ? 'bg-red-50 text-red-800 border border-red-200' :
                                            n.type === 'warning' ? 'bg-orange-50 text-orange-800 border border-orange-200' :
                                            n.type === 'congratulations' || n.type === 'recognition' ? 'bg-green-50 text-green-800 border border-green-200' :
                                            'bg-blue-50 text-blue-800 border border-blue-200'
                                        }`}>
                                            <div className="flex items-center justify-between">
                                                <p className="font-medium">{n.message}</p>
                                                <span className="text-xs text-gray-500">{n.sent}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-gray-500 italic">No recent nudges for this employee.</p>
                            )}
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Engagement Metrics</h3>
                            <div className="space-y-3 text-gray-700 text-sm">
                                <div className="flex justify-between items-center">
                                    <span>Nudge Open Rate:</span>
                                    <span className="font-bold text-blue-600">{currentUser.engagement?.nudgeOpenRate || 0}%</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span>Training Completion Rate:</span>
                                    <span className="font-bold text-green-600">{currentUser.engagement?.trainingCompletionRate || 0}%</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span>Last Login:</span>
                                    <span className="font-bold">{currentUser.engagement?.lastLogin || 'N/A'}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Individual Employee Training & Certifications Tab Content */}
            {viewMode === 'individual' && activeTab === 'training' && currentUser && (
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Mandatory Training Modules</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                                <p className="col-span-full text-gray-500 italic">No training modules assigned.</p>
                            )}
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Certifications Status</h3>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Certification</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expiry Date</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {currentUser.certifications && currentUser.certifications.length > 0 ? (
                                        currentUser.certifications.map((cert, index) => (
                                            <tr key={index}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{cert.name}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                        cert.status === 'current' ? 'bg-green-100 text-green-800' :
                                                        cert.status === 'expiring' ? 'bg-orange-100 text-orange-800' :
                                                        cert.status === 'overdue' || cert.status === 'expired' ? 'bg-red-100 text-red-800' :
                                                        'bg-gray-100 text-gray-800'
                                                    }`}>
                                                        {cert.status.replace('_', ' ')}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cert.expiryDate}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    {(cert.status === 'expiring' || cert.status === 'pending_renewal' || cert.status === 'overdue' || cert.status === 'expired') && (
                                                        <button className="text-blue-600 hover:text-blue-900 mr-4">Renew</button>
                                                    )}
                                                    <button className="text-blue-600 hover:text-blue-900">View Details</button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="4" className="px-6 py-4 text-center text-gray-500 italic">No certifications listed.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}

            {/* Individual Employee STAR Rewards Tab Content */}
            {viewMode === 'individual' && activeTab === 'rewards' && currentUser && (
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                        <Award className="w-16 h-16 mx-auto text-yellow-500 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900">STAR Rewards Status</h3>
                        <p className="text-gray-600 mt-2">Current Month: {user.currentMonth}</p>
                        <p className="text-sm text-gray-500">Sales Close Date: {user.salesCloseDate}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center justify-center">
                            <Star className={`w-12 h-12 mb-3 ${currentUser.starQualified ? 'text-yellow-500' : 'text-gray-300'}`} />
                            <p className="text-lg font-semibold text-gray-700">STAR Qualified Status</p>
                            <p className={`text-3xl font-bold ${currentUser.starQualified ? 'text-green-600' : 'text-red-600'}`}>
                                {currentUser.starQualified ? 'QUALIFIED' : 'NOT QUALIFIED'}
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center justify-center">
                            <DollarSign className="w-12 h-12 text-green-600 mb-3" />
                            <p className="text-lg font-semibold text-gray-700">Potential STAR Reward</p>
                            <p className="text-3xl font-bold text-green-600">
                                ${starReward.total.toLocaleString()}
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                                (Rate: ${starReward.rate}/car, Sold: {currentUser.newCarsSold} cars)
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Qualification Criteria</h3>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-700 flex items-center space-x-2">
                                    <DollarSign className="w-5 h-5 text-gray-500" />
                                    <span>New Cars Sold (Current Month):</span>
                                </span>
                                <span className="font-bold text-xl text-gray-900">{currentUser.newCarsSold} / 6+</span>
                                {currentUser.newCarsSold >= 6 ? <CheckCircle className="w-6 h-6 text-green-500" /> : <AlertCircle className="w-6 h-6 text-red-500" />}
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-700 flex items-center space-x-2">
                                    <BookOpen className="w-5 h-5 text-gray-500" />
                                    <span>Mandatory Training Completion:</span>
                                </span>
                                <span className="font-bold text-xl text-gray-900">{completionRate}% / 100%</span>
                                {completionRate === 100 ? <CheckCircle className="w-6 h-6 text-green-500" /> : <AlertCircle className="w-6 h-6 text-red-500" />}
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-700 flex items-center space-x-2">
                                    <Shield className="w-5 h-5 text-gray-500" />
                                    <span>Compliance Score:</span>
                                </span>
                                <span className="font-bold text-xl text-gray-900">{currentUser.complianceScore}% / 90%+</span>
                                {currentUser.complianceScore >= 90 ? <CheckCircle className="w-6 h-6 text-green-500" /> : <AlertCircle className="w-6 h-6 text-red-500" />}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UnifiedLearningPlatform;
