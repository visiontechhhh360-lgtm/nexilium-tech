import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { 
  Code, 
  Shield, 
  Smartphone, 
  TrendingUp, 
  Database, 
  Lightbulb,
  Lock,
  CheckCircle2,
  ArrowRight,
  Zap
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { LightBackground, AnimatedBackground } from "../components/AnimatedBackground";
import { FloatingCard, ParallaxCard } from "../components/FloatingCard";

export function Offerings() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Detail */}
      <ServicesDetailSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Benefits Section */}
      <BenefitsSection />
    </div>
  );
}

function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section 
      ref={ref} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20"
    >
      <AnimatedBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-block text-[#FF6A00] font-semibold uppercase tracking-wider text-sm mb-6 bg-[#FF6A00]/10 px-4 py-2 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            ⚡ Our Offerings
          </motion.span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-4 mb-6 leading-tight">
            Technology Solutions for{" "}
            <span className="bg-gradient-to-r from-[#FF6A00] to-[#FF8C33] bg-clip-text text-transparent">
              Modern Businesses
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology services designed to transform your business operations, 
            enhance security, and drive sustainable growth in the digital age.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ServicesDetailSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      id: "software-development",
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions built with cutting-edge technologies to streamline your operations and accelerate growth.",
      image: "https://images.unsplash.com/photo-1660810731526-0720827cbd38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwd29ya3NwYWNlfGVufDF8fHx8MTc3Mjc1OTIyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      benefits: [
        "Custom enterprise applications",
        "Scalable cloud-native architecture",
        "API development and integration",
        "Legacy system modernization"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      sectionid: "mobile-apps",
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      image: "https://images.unsplash.com/photo-1629697776809-f37ceac39e77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBzbWFydHBob25lJTIwaGFuZHN8ZW58MXx8fHwxNzcyNzczMDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      benefits: [
        "iOS and Android native apps",
        "Cross-platform React Native apps",
        "Progressive Web Applications",
        "Mobile-first UI/UX design"
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Network Security",
      description: "Comprehensive cybersecurity solutions to protect your infrastructure from evolving threats and ensure data integrity.",
      image: "https://images.unsplash.com/photo-1768839721176-2fa91fdce725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwaGFja2VyJTIwcHJvdGVjdGlvbnxlbnwxfHx8fDE3NzI3NzMwMjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      benefits: [
        "Threat detection and prevention",
        "Penetration testing and audits",
        "24/7 security monitoring",
        "Incident response planning"
      ],
      gradient: "from-red-500 to-orange-500"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Data-driven digital marketing strategies that amplify your brand presence and drive measurable business growth.",
      image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc3Mjc3MzAyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      benefits: [
        "SEO and content marketing",
        "Social media management",
        "PPC advertising campaigns",
        "Analytics and reporting"
      ],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Database,
      title: "Data Recovery",
      description: "Advanced data recovery and backup solutions to ensure your critical business information is always protected and accessible.",
      image: "https://images.unsplash.com/flagged/photo-1579274216947-86eaa4b00475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyJTIwc2VydmVyc3xlbnwxfHx8fDE3NzI3NDQyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      benefits: [
        "Emergency data recovery",
        "Automated backup solutions",
        "Disaster recovery planning",
        "Data migration services"
      ],
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Lightbulb,
      title: "IT Consultancy",
      description: "Strategic technology consulting to optimize your IT infrastructure, reduce costs, and accelerate digital transformation.",
      image: "https://images.unsplash.com/photo-1769798643630-194a0fcfa367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBzdHJhdGVneXxlbnwxfHx8fDE3NzI3MTI4MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      benefits: [
        "Technology roadmap planning",
        "Infrastructure optimization",
        "Digital transformation strategy",
        "IT governance and compliance"
      ],
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Lock,
      title: "VPN Services",
      description: "Secure virtual private network solutions for remote teams and distributed workforces operating across the globe.",
      image: "https://images.unsplash.com/photo-1768224656445-33d078c250b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwc2VjdXJpdHklMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MjcwMTM3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      benefits: [
        "Enterprise VPN setup",
        "Multi-location connectivity",
        "Secure remote access",
        "24/7 network monitoring"
      ],
      gradient: "from-gray-700 to-gray-900"
    }
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <LightBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-32">
          {services.map((service, index) => (
            <FloatingCard key={service.title} delay={index * 0.1}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}>
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="mb-6">
                    <div className={`inline-flex bg-gradient-to-br ${service.gradient} w-16 h-16 rounded-2xl items-center justify-center mb-4 shadow-lg`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h2 className="text-4xl font-bold text-[#0A0A0A] mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {service.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start space-x-3">
                        <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center mt-0.5`}>
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link to="/contact">
                    <Button className="bg-gradient-to-r from-[#FF6A00] to-[#FF8C33] hover:from-[#FF7A10] hover:to-[#FF9C43] text-white shadow-lg group">
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>

                <ParallaxCard className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/20 to-[#FF8C33]/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                      <ImageWithFallback
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                          <div className="flex items-center gap-3">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                              <service.icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <div className="text-white font-semibold">{service.title}</div>
                              <div className="text-white/80 text-sm">Professional Service</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ParallaxCard>
              </div>
            </FloatingCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "Understanding your business objectives and requirements",
      icon: "🔍"
    },
    {
      number: "02",
      title: "Strategy",
      description: "Developing tailored roadmap and architecture",
      icon: "🎯"
    },
    {
      number: "03",
      title: "Development",
      description: "Building with agile methodologies",
      icon: "⚙️"
    },
    {
      number: "04",
      title: "Deployment",
      description: "Seamless launch with thorough testing",
      icon: "🚀"
    },
    {
      number: "05",
      title: "Support",
      description: "Ongoing maintenance and optimization",
      icon: "💪"
    }
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-900 via-[#0A0A0A] to-gray-800">
      <AnimatedBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-[#FF6A00] to-[#FF8C33] bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A proven methodology that ensures successful project delivery every time
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF6A00] via-[#FF8C33] to-[#FF6A00] transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300 group h-full">
                  <div className="text-center">
                    <div className="text-6xl mb-4">{step.icon}</div>
                    <div className="text-[#FF6A00] text-4xl font-bold mb-2">{step.number}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                  
                  {/* Connecting Dot */}
                  <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#FF6A00] to-[#FF8C33] border-4 border-gray-900 group-hover:scale-150 transition-transform"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Bank-level security protocols to protect your sensitive data",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "Technology that grows with your business needs",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: CheckCircle2,
      title: "Proven Track Record",
      description: "500+ successful projects with 98% satisfaction",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Innovation Focus",
      description: "Leveraging latest technologies for competitive advantage",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <LightBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] mb-4">
            Why Choose Our <span className="text-[#FF6A00]">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We deliver exceptional value through expertise, innovation, and commitment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <FloatingCard key={benefit.title} delay={index * 0.1}>
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0A0A0A] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            </FloatingCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-[#FF6A00] to-[#FF8C33] hover:from-[#FF7A10] hover:to-[#FF9C43] text-white px-12 shadow-lg shadow-[#FF6A00]/50">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}