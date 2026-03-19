import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { 
  Code, 
  Shield, 
  Smartphone, 
  TrendingUp, 
  Database, 
  Lightbulb,
  Lock,
  Users,
  Target,
  Rocket,
  Award,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { AnimatedBackground, LightBackground } from "../components/AnimatedBackground";
import { FloatingCard, GlassCard, ParallaxCard } from "../components/FloatingCard";

function AnimatedCounter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const animate = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}+</span>;
}

export function Home() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20"
      >
        <AnimatedBackground />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 mb-6"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6A00] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF6A00]"></span>
                </span>
                <span className="text-white/80 text-sm font-medium">
                  Shaping the Future, One Pixel at a Time
                </span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Empowering Businesses Through{" "}
                <span className="bg-gradient-to-r from-[#FF6A00] to-[#FF8C33] bg-clip-text text-transparent">
                  Innovation
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-300 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                We deliver innovative tech solutions that drive success. Our team leverages advanced 
                technologies to accelerate business growth and digital transformation.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                 <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#FF6A00] to-[#FF8C33] hover:from-[#FF7A10] hover:to-[#FF9C43] text-white px-8 shadow-lg shadow-[#FF6A00]/50 group"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                </Link>
                <Link to="/offerings">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-white/20 text-black hover:bg-white/10 backdrop-blur-sm px-8 w-full sm:w-auto"
                  >
                    <Sparkles className="mr-2 w-5 h-5" />
                    Explore Services
                  </Button>
                </Link>
              </motion.div>

              {/* Quick Stats with Glass Effect */}
              <motion.div 
                className="grid grid-cols-3 gap-6 mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <GlassCard className="p-4">
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#FF6A00] to-[#FF8C33] bg-clip-text text-transparent">
                    <AnimatedCounter end={500} />
                  </div>
                  <div className="text-sm text-white/70">Projects</div>
                </GlassCard>
                <GlassCard className="p-4">
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#FF6A00] to-[#FF8C33] bg-clip-text text-transparent">
                    <AnimatedCounter end={98} />%
                  </div>
                  <div className="text-sm text-white/70">Satisfaction</div>
                </GlassCard>
                <GlassCard className="p-4">
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#FF6A00] to-[#FF8C33] bg-clip-text text-transparent">
                    <AnimatedCounter end={15} />+
                  </div>
                  <div className="text-sm text-white/70">Years</div>
                </GlassCard>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Floating 3D Cards */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotateY: [0, 10, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10"
                >
                  <GlassCard className="p-8">
                    <ImageWithFallback
                      src="/img.png"
                      alt="Technology Innovation"
                      className="rounded-2xl"
                    />
                  </GlassCard>
                </motion.div>

                {/* Floating Mini Cards */}
                <motion.div
                  animate={{
                    y: [0, 15, 0],
                    x: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-10 -left-10 z-20"
                >
                  <GlassCard className="p-6 flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FF6A00] to-[#FF8C33] rounded-xl flex items-center justify-center">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Fast Delivery</div>
                      <div className="text-white/60 text-sm">On-time Projects</div>
                    </div>
                  </GlassCard>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    x: [0, -10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-10 -right-10 z-20"
                >
                  <GlassCard className="p-6 flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Top Rated</div>
                      <div className="text-white/60 text-sm">Industry Leader</div>
                    </div>
                  </GlassCard>
                </motion.div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF6A00]/20 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

     

      {/* About Preview Section */}
      <AboutPreviewSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Approach Section */}
      <ApproachSection />

      {/* Why Choose Section */}
      <WhyChooseSection />

      {/* Statistics Section */}
      <StatisticsSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}

function TrustedBySection() {
  const companies = [
    "TechCorp", "InnovateLabs", "DataFlow", "CloudScale", "SecureNet", "DevOps+"
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-gray-500 text-sm font-semibold uppercase tracking-wider mb-12">
          Trusted by Innovative Businesses
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {companies.map((company) => (
            <div
              key={company}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
            >
              <span className="text-xl font-bold text-gray-700">{company}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutPreviewSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-[#0A0A0A] mb-6">
              Leveraging Advanced Technology Solutions to Accelerate{" "}
              <span className="text-[#FF6A00]">Business Growth</span> and Innovation
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Nexilium Tech, we specialize in delivering innovative tech solutions and custom 
              software development to help businesses grow, optimize operations, and thrive in the 
              digital era.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our expert team is committed to providing tailored services that drive success and 
              transformation. We combine cutting-edge technology with deep industry expertise to 
              deliver solutions that make a real impact.
            </p>
            <Link to="/about">
              <Button className="bg-[#FF6A00] hover:bg-[#FF7A10] text-white">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1770777843445-2a1621b1201d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5JTIwdGVhbXxlbnwxfHx8fDE3NzI3MzUzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Technology Team"
              className="rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs, built with cutting-edge technologies and best practices."
    },
    {
      icon: Shield,
      title: "Network Security",
      description: "Comprehensive cybersecurity solutions to protect your infrastructure from threats and ensure data integrity."
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences on all devices."
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies that amplify your brand presence and drive meaningful customer engagement."
    },
    {
      icon: Database,
      title: "Data Recovery",
      description: "Advanced data recovery and backup solutions to ensure your critical business information is always protected."
    },
    {
      icon: Lightbulb,
      title: "IT Consultancy",
      description: "Strategic technology consulting to optimize your IT infrastructure and accelerate digital transformation."
    },
    {
      icon: Lock,
      title: "VPN Services",
      description: "Secure virtual private network solutions for remote teams and distributed workforces worldwide."
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#0A0A0A] mb-4">
            Our <span className="text-[#FF6A00]">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to drive your business forward
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-[#FF6A00]/50 transition-all duration-300 cursor-pointer"
            >
              <div className="bg-[#FF6A00]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#FF6A00] transition-colors">
                <service.icon className="w-7 h-7 text-[#FF6A00] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-[#0A0A0A] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApproachSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#FF6A00] font-semibold uppercase tracking-wider text-sm">
            Our Strategy
          </span>
          <h2 className="text-4xl font-bold text-[#0A0A0A] mt-4 mb-4">
            Our Approach: <span className="text-[#FF6A00]">Innovative Solutions</span>,
            <br />Tailored for Your Success
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-10 shadow-lg border border-gray-100"
          >
            <div className="bg-[#FF6A00] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#0A0A0A] mb-4">
              Partner-First Approach
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our approach is centered on collaboration, innovation, and delivering results. 
              We work closely with our clients to understand their unique needs, offering tailored 
              solutions that drive growth and success.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl p-10 shadow-lg border border-gray-100"
          >
            <div className="bg-[#FF6A00] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#0A0A0A] mb-4">
              Innovative Impact Method
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We combine cutting-edge technology with business insights to create impactful, 
              tailored solutions that drive growth and ensure long-term success. Every project 
              is designed with measurable outcomes in mind.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced professionals with deep expertise across all technology domains"
    },
    {
      icon: Rocket,
      title: "Innovative Technology",
      description: "Leveraging cutting-edge tools and frameworks to build future-ready solutions"
    },
    {
      icon: Target,
      title: "Tailored Solutions",
      description: "Custom approaches designed specifically for your business needs and goals"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Track record of delivering successful projects that exceed expectations"
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#0A0A0A] mb-4">
            Why Choose <span className="text-[#FF6A00]">Nexilium Tech</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We bring together expertise, innovation, and dedication to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-[#FF6A00]/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-10 h-10 text-[#FF6A00]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0A0A0A] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatisticsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: 500, label: "Projects Delivered", suffix: "+" },
    { value: 350, label: "Satisfied Clients", suffix: "+" },
    { value: 15, label: "Years Experience", suffix: "" },
    { value: 25, label: "Global Reach", suffix: "+" },
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-[#FF6A00] to-[#FF8C33] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-bold mb-3">
                <AnimatedCounter end={stat.value} />
                {stat.suffix}
              </div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-gray-900 to-[#0A0A0A] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF6A00' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business with{" "}
            <span className="text-[#FF6A00]">Advanced Technology</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Let's build something amazing together. Get in touch with our team to start your digital transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-[#FF6A00] hover:bg-[#FF7A10] text-white px-8 w-full sm:w-auto"
              >
                Start a Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-black hover:bg-white/10 px-8 w-full sm:w-auto"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}