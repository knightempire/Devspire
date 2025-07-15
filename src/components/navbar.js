import React, { useState, useRef, useEffect } from 'react';
import { 
    ChevronDown, 
    Menu, 
    X, 
    Code, 
    Book, 
    Layers, 
    Zap,
    Globe,
    Download,
    Users,
    Building,
    FileText,
    Briefcase,
    Heart,
    BookOpen,
    Target,
    Mail,
    Settings,
    Shield,
    BarChart3,
    Webhook,
    Palette,
    Database,
    Terminal,
    Smartphone,
    Monitor,
    HelpCircle,
    MessageSquare,
    Activity,
    ArrowUpRight
} from 'lucide-react';

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [hoveredDropdown, setHoveredDropdown] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dropdownRef = useRef(null);
    const timeoutRef = useRef(null);

    const navItems = [
        {
            label: 'Features',
            dropdown: [
                {
                    items: [
                        { 
                            label: 'Email API', 
                            href: '/email-api', 
                            description: 'Send emails programmatically with our REST API', 
                            icon: <Mail className="w-5 h-5 text-blue-400" /> 
                        },
                        { 
                            label: 'Templates', 
                            href: '/templates', 
                            description: 'Beautiful, responsive email templates', 
                            icon: <Palette className="w-5 h-5 text-purple-400" /> 
                        },
                        { 
                            label: 'Analytics', 
                            href: '/analytics', 
                            description: 'Track opens, clicks, and deliverability', 
                            icon: <BarChart3 className="w-5 h-5 text-green-400" /> 
                        },
                        { 
                            label: 'Webhooks', 
                            href: '/webhooks', 
                            description: 'Real-time event notifications', 
                            icon: <Webhook className="w-5 h-5 text-orange-400" /> 
                        },
                        { 
                            label: 'Domains', 
                            href: '/domains', 
                            description: 'Custom domain authentication', 
                            icon: <Globe className="w-5 h-5 text-cyan-400" /> 
                        },
                        { 
                            label: 'Security', 
                            href: '/security', 
                            description: 'Enterprise-grade email security', 
                            icon: <Shield className="w-5 h-5 text-red-400" /> 
                        }
                    ]
                }
            ],
            isMegaMenu: true
        },
        {
            label: 'Company',
            dropdown: [
                {
                    items: [
                        { 
                            label: 'About', 
                            href: '/about', 
                            description: 'Learn about our mission and team',
                            icon: <Building className="w-4 h-4 text-gray-400" /> 
                        },
                        { 
                            label: 'Blog', 
                            href: '/blog', 
                            description: 'Latest news and insights',
                            icon: <FileText className="w-4 h-4 text-gray-400" /> 
                        },
                        { 
                            label: 'Careers', 
                            href: '/careers', 
                            description: 'Join our growing team',
                            icon: <Briefcase className="w-4 h-4 text-gray-400" /> 
                        },
                        { 
                            label: 'Customers', 
                            href: '/customers', 
                            description: 'Stories from our users',
                            icon: <Users className="w-4 h-4 text-gray-400" /> 
                        },
                        { 
                            label: 'Humans', 
                            href: '/humans', 
                            description: 'Meet the people behind Resend',
                            icon: <Heart className="w-4 h-4 text-gray-400" /> 
                        }
                    ]
                }
            ],
            isMegaMenu: true
        },
        {
            label: 'Resources',
            dropdown: [
                {
                    items: [
                        { 
                            label: 'Getting Started', 
                            href: '/getting-started', 
                            description: 'Quick start guide and tutorials',
                            icon: <BookOpen className="w-4 h-4 text-gray-400" /> 
                        },
                        { 
                            label: 'API Reference', 
                            href: '/api', 
                            description: 'Complete API documentation',
                            icon: <Code className="w-4 h-4 text-gray-400" /> 
                        },
                        { 
                            label: 'Integrations', 
                            href: '/integrations', 
                            description: 'Connect with your favorite tools',
                            icon: <Layers className="w-4 h-4 text-gray-400" /> 
                        },
                        { 
                            label: 'Examples', 
                            href: '/examples', 
                            description: 'Code samples and use cases',
                            icon: <Terminal className="w-4 h-4 text-gray-400" /> 
                        },
                        { 
                            label: 'SDKs', 
                            href: '/sdks', 
                            description: 'Official libraries and tools',
                            icon: <Download className="w-4 h-4 text-gray-400" /> 
                        }
                    ]
                }
            ],
            isMegaMenu: true
        },
        {
            label: 'Help',
            dropdown: [
                {
                    items: [
                        { 
                            label: 'Contact', 
                            href: '/contact', 
                            description: 'Get in touch with our team',
                            icon: <Mail className="w-4 h-4 text-gray-400" /> 
                        },
                        { 
                            label: 'Support', 
                            href: '/support', 
                            description: 'Get help from our team',
                            icon: <MessageSquare className="w-4 h-4 text-gray-400" /> 
                        },
                        { 
                            label: 'Status', 
                            href: '/status', 
                            description: 'System status and uptime',
                            icon: <Activity className="w-4 h-4 text-gray-400" /> 
                        },
                        { 
                            label: 'Migrate', 
                            href: '/migrate', 
                            description: 'Switch from other providers',
                            icon: <ArrowUpRight className="w-4 h-4 text-gray-400" /> 
                        }
                    ]
                }
            ]
        },
        { label: 'Docs', href: '/docs' },
        { label: 'Pricing', href: '/pricing' }
    ];

    const techIcons = [
        { name: 'Node.js', icon: <Database className="w-6 h-6 text-green-400" />, color: 'bg-green-400/10 hover:bg-green-400/20' },
        { name: 'React', icon: <Zap className="w-6 h-6 text-blue-400" />, color: 'bg-blue-400/10 hover:bg-blue-400/20' },
        { name: 'Next.js', icon: <Monitor className="w-6 h-6 text-gray-300" />, color: 'bg-gray-300/10 hover:bg-gray-300/20' },
        { name: 'Vue', icon: <Layers className="w-6 h-6 text-emerald-400" />, color: 'bg-emerald-400/10 hover:bg-emerald-400/20' },
        { name: 'PHP', icon: <Code className="w-6 h-6 text-purple-400" />, color: 'bg-purple-400/10 hover:bg-purple-400/20' },
        { name: 'Python', icon: <Terminal className="w-6 h-6 text-yellow-400" />, color: 'bg-yellow-400/10 hover:bg-yellow-400/20' },
        { name: 'Ruby', icon: <Settings className="w-6 h-6 text-red-400" />, color: 'bg-red-400/10 hover:bg-red-400/20' },
        { name: 'Go', icon: <Globe className="w-6 h-6 text-cyan-400" />, color: 'bg-cyan-400/10 hover:bg-cyan-400/20' }
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setActiveDropdown(null);
                setHoveredDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleMouseEnter = (label) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setHoveredDropdown(label);
        setActiveDropdown(label);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setHoveredDropdown(null);
            setActiveDropdown(null);
        }, 150);
    };

    const handleDropdownToggle = (label) => {
        setActiveDropdown(activeDropdown === label ? null : label);
    };

    const renderMegaMenuContent = (item) => {
        if (item.label === 'Features') {
            return (
                <div className="grid grid-cols-2 gap-1">
                    {item.dropdown?.[0].items.map((dropdownItem, index) => (
                        <a
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="group flex items-start p-4 rounded-lg hover:bg-gray-800/30 transition-all duration-200 ease-out animate-slide-lr"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            <div className="flex-shrink-0 mr-4 mt-0.5">
                                {dropdownItem.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">
                                    {dropdownItem.label}
                                </div>
                                <div className="text-xs text-gray-400 mt-1 leading-relaxed">
                                    {dropdownItem.description}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            );
        }

        if (item.label === 'Company') {
            return (
                <div className="flex">
                    <div className="flex-1 pr-8">
                        <div className="space-y-1">
                            {item.dropdown?.[0].items.map((dropdownItem, index) => (
                                <a
                                    key={dropdownItem.label}
                                    href={dropdownItem.href}
                                    className="group flex items-center px-3 py-2.5 rounded-md hover:bg-gray-800/30 transition-all duration-200 ease-out animate-slide-lr"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    <div className="flex-shrink-0 mr-3">
                                        {dropdownItem.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-sm font-medium text-white group-hover:text-white transition-colors">
                                            {dropdownItem.label}
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="w-80 pl-8 border-l border-gray-800/50">
                        <div className="space-y-3 bg-gradient-to-br from-[#18181b]/90 via-[#232328]/80 to-[#101014]/90 rounded-2xl shadow-2xl border border-gray-800/40 backdrop-blur-xl p-6">
                            <div className="group bg-gradient-to-br from-[#232328]/80 to-[#18181b]/90 p-4 rounded-xl hover:bg-gray-800/40 transition-all duration-300 cursor-pointer border border-gray-800/30 hover:border-gray-700/50 animate-slide-lr" style={{ animationDelay: '200ms' }}>
                                <div className="flex items-center mb-3">
                                    <div className="w-10 h-10 bg-gray-700/50 rounded-lg flex items-center justify-center mr-3">
                                        <BookOpen className="w-5 h-5 text-gray-300" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white group-hover:text-white transition-colors">Handbook</h3>
                                        <p className="text-xs text-gray-400">How we work</p>
                                    </div>
                                </div>
                            </div>
                            <div className="group bg-gradient-to-br from-[#232328]/80 to-[#18181b]/90 p-4 rounded-xl hover:bg-gray-800/40 transition-all duration-300 cursor-pointer border border-gray-800/30 hover:border-gray-700/50 animate-slide-lr" style={{ animationDelay: '250ms' }}>
                                <div className="flex items-center mb-3">
                                    <div className="w-10 h-10 bg-gray-700/50 rounded-lg flex items-center justify-center mr-3">
                                        <Target className="w-5 h-5 text-gray-300" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white group-hover:text-white transition-colors">Philosophy</h3>
                                        <p className="text-xs text-gray-400">What we value</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        if (item.label === 'Resources') {
            return (
                <div className="flex">
                    <div className="flex-1 pr-8">
                        <div className="space-y-1">
                            {item.dropdown?.[0].items.map((dropdownItem, index) => (
                                <a
                                    key={dropdownItem.label}
                                    href={dropdownItem.href}
                                    className="group flex items-center px-3 py-2.5 rounded-md hover:bg-gray-800/30 transition-all duration-200 ease-out animate-slide-lr"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    <div className="flex-shrink-0 mr-3">
                                        {dropdownItem.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-sm font-medium text-white group-hover:text-white transition-colors">
                                            {dropdownItem.label}
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="w-80 pl-8 border-l border-gray-800/50">
                        <div className="mb-4">
                            <div className="bg-gray-800/20 p-4 rounded-xl border border-gray-800/30 animate-slide-lr" style={{ animationDelay: '200ms' }}>
                                <div className="flex items-center mb-3">
                                    <div className="w-10 h-10 bg-gray-700/50 rounded-lg flex items-center justify-center mr-3">
                                        <Book className="w-5 h-5 text-gray-300" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white">Knowledge Base</h3>
                                        <p className="text-xs text-gray-400">Comprehensive guides</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                            {techIcons.map((tech, index) => (
                                <div
                                    key={tech.name}
                                    className={`group flex flex-col items-center p-2 rounded-lg transition-all duration-300 cursor-pointer ${tech.color} border border-transparent hover:border-gray-700/50 animate-slide-lr`}
                                    style={{ animationDelay: `${250 + index * 30}ms` }}
                                >
                                    <div className="mb-1 group-hover:scale-110 transition-transform duration-200">
                                        {tech.icon}
                                    </div>
                                    <span className="text-xs text-gray-300 font-medium">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );
        }

        if (item.label === 'Help') {
            return (
                <div className="flex">
                    <div className="flex-1 pr-8">
                        <div className="space-y-1">
                            {item.dropdown?.[0].items.map((dropdownItem, index) => (
                                <a
                                    key={dropdownItem.label}
                                    href={dropdownItem.href}
                                    className="group flex items-center px-3 py-2.5 rounded-md hover:bg-gray-800/30 transition-all duration-200 ease-out animate-slide-lr"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    <div className="flex-shrink-0 mr-3">
                                        {dropdownItem.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-sm font-medium text-white group-hover:text-white transition-colors">
                                            {dropdownItem.label}
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="w-80 pl-8 border-l border-gray-800/50">
                        <div className="bg-gray-800/20 p-4 rounded-xl border border-gray-800/30 animate-slide-lr" style={{ animationDelay: '200ms' }}>
                            <div className="flex items-center mb-3">
                                <div className="w-10 h-10 bg-gray-700/50 rounded-lg flex items-center justify-center mr-3">
                                    <HelpCircle className="w-5 h-5 text-gray-300" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">Knowledge Base</h3>
                                    <p className="text-xs text-gray-400">Find answers quickly</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return null;
    };

    return (
        <>
            <style>{`
                @keyframes slideLeftRight {
                    from {
                        opacity: 0;
                        transform: translateX(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-10px) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
                .animate-slide-lr {
                    animation: slideLeftRight 0.4s ease-out forwards;
                    opacity: 0;
                }
                .animate-slide-down {
                    animation: slideDown 0.3s ease-out forwards;
                }
            `}</style>

            <nav className="bg-black/70 backdrop-blur-xl border-b border-gray-800/20 sticky top-0 z-50" ref={dropdownRef}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <a href="/" className="flex items-center space-x-2 group">
                                <img
                                    src="/devspire_white_logo.png"
                                    alt="Resend Logo"
                                    className="h-15 w-auto transition-transform duration-200 group-hover:scale-105"
                                />
                                <span className="text-white text-xl font-bold tracking-tight hover:text-gray-300 transition-colors">
                                   DevSpire
                                </span>
                            </a>
                        </div>

                        {/* Desktop Navigation */}
                                                <div className="hidden lg:block">
                                                    <div className="flex items-center space-x-2">
                                                        {navItems.map((item) => (
                                                            <div 
                                                                key={item.label} 
                                                                className="relative"
                                                                onMouseEnter={() => item.dropdown && handleMouseEnter(item.label)}
                                                                onMouseLeave={() => item.dropdown && handleMouseLeave()}
                                                            >
                                                                {item.dropdown ? (
                                                                    <button className="flex items-center px-4 py-2 text-gray-300 hover:text-white transition-all duration-200 text-sm font-medium rounded-lg hover:bg-gray-800/20">
                                                                        {item.label}
                                                                        <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180 text-white' : ''}`} />
                                                                    </button>
                                                                ) : (
                                                                    <a href={item.href} className="px-4 py-2 text-gray-300 hover:text-white transition-all duration-200 text-sm font-medium rounded-lg hover:bg-gray-800/20 block">
                                                                        {item.label}
                                                                    </a>
                                                                )}

                                                                {/* Dropdown */}
                                                                {item.dropdown && item.dropdown.length > 0 && activeDropdown === item.label && (
                                                                    <div 
                                                                        className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-4 z-50 overflow-x-auto border border-gray-800/40 rounded-2xl shadow-2xl transition-all duration-300 ease-out animate-slide-down backdrop-blur-md ${
                                                                            item.isMegaMenu ? 'w-[640px] max-w-[95vw]' : 'w-96 max-w-[95vw]'
                                                                        } bg-[#18181b]`}
                                                                        style={{ minWidth: item.isMegaMenu ? '320px' : '240px' }}
                                                                    >
                                                                        {/* Foreground content (clean and crisp) */}
                                                                        <div className="relative z-10 p-6">
                                                                            {renderMegaMenuContent(item)}
                                                                        </div>
                                                                    </div>
                                                                )}

                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Right side buttons */}
                        <div className="hidden lg:flex items-center space-x-4">
                            <button className="px-4 py-2 text-gray-300 hover:text-white transition-all duration-200 text-sm font-medium rounded-lg hover:bg-gray-800/20">
                                Sign in
                            </button>
                            <button className="bg-white text-black px-6 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                                Get Started
                            </button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="lg:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800/20"
                            >
                                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    <div className={`lg:hidden transition-all duration-300 ease-in-out ${
                        isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}>
                        <div className="border-t border-gray-800/50 py-4">
                            <div className="space-y-2">
                                {navItems.map((item, index) => (
                                    <div key={item.label} className="animate-slide-lr" style={{ animationDelay: `${index * 50}ms` }}>
                                        {item.dropdown ? (
                                            <div>
                                                <button
                                                    onClick={() => handleDropdownToggle(item.label)}
                                                    className="flex items-center justify-between w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/20 transition-all duration-200 rounded-lg"
                                                >
                                                    <span className="font-medium">{item.label}</span>
                                                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                                                        activeDropdown === item.label ? 'rotate-180' : ''
                                                    }`} />
                                                </button>
                                                <div className={`transition-all duration-300 ease-in-out ${
                                                    activeDropdown === item.label ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                                                }`}>
                                                    <div className="pl-4 space-y-1 mt-2">
                                                        {item.dropdown[0].items.map((dropdownItem, subIndex) => (
                                                            <a
                                                                key={dropdownItem.label}
                                                                href={dropdownItem.href}
                                                                className="flex items-center px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-gray-800/20 transition-all duration-200 rounded-lg animate-slide-lr"
                                                                style={{ animationDelay: `${subIndex * 30}ms` }}
                                                            >
                                                                <div className="mr-3">{dropdownItem.icon}</div>
                                                                <div>
                                                                    <div className="font-medium">{dropdownItem.label}</div>
                                                                    {dropdownItem.description && (
                                                                        <div className="text-xs text-gray-500 mt-0.5">{dropdownItem.description}</div>
                                                                    )}
                                                                </div>
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <a
                                                href={item.href}
                                                className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/20 transition-all duration-200 rounded-lg font-medium"
                                            >
                                                {item.label}
                                            </a>
                                        )}
                                    </div>
                                ))}
                                
                                <div className="pt-4 border-t border-gray-800/50 space-y-3">
                                    <button className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/20 transition-all duration-200 rounded-lg font-medium animate-slide-lr" style={{ animationDelay: '300ms' }}>
                                        Sign in
                                    </button>
                                    <button className="block w-full bg-white text-black px-4 py-3 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-all duration-200 animate-slide-lr" style={{ animationDelay: '350ms' }}>
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
