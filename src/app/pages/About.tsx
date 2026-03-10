import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Target, Eye, Heart, Award, Users, Zap, Shield, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { AnimatedBackground, LightBackground } from "../components/AnimatedBackground";
import { FloatingCard } from "../components/FloatingCard";

export function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Mission, Vision, Values */}
      <MVVSection />

      {/* Our Story Timeline */}
      <TimelineSection />

      {/* Team Section */}
      <TeamSection />

      {/* Core Values */}
      <CoreValuesSection />
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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block text-[#FF6A00] font-semibold uppercase tracking-wider text-sm mb-6 bg-[#FF6A00]/10 px-4 py-2 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            🏢 About Us
          </motion.span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-4 mb-6 leading-tight">
            About <span className="bg-gradient-to-r from-[#FF6A00] to-[#FF8C33] bg-clip-text text-transparent">Nexilium Tech</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are a forward-thinking technology company dedicated to transforming businesses 
            through innovative solutions, exceptional service, and unwavering commitment to excellence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc3Mjc2MTA0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Nexilium Tech Team"
              className="rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/50 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MVVSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const items = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower businesses worldwide with cutting-edge technology solutions that drive growth, innovation, and digital transformation. We are committed to delivering excellence in every project, ensuring our clients stay ahead in an ever-evolving digital landscape."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To become a global leader in technology innovation, recognized for our ability to turn complex challenges into elegant solutions. We envision a future where technology seamlessly enhances business operations, unlocking unprecedented opportunities for growth and success."
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "Integrity, innovation, and impact are at the core of everything we do. We believe in transparent communication, collaborative partnerships, and delivering measurable results that make a real difference to our clients' business objectives."
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="bg-[#FF6A00]/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-10 h-10 text-[#FF6A00]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A0A0A] mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const milestones = [
    {
      year: "2011",
      title: "Foundation",
      description: "Nexilium Tech was founded with a vision to revolutionize how businesses leverage technology for growth."
    },
    {
      year: "2014",
      title: "Expansion",
      description: "Expanded our services to include comprehensive cybersecurity and cloud solutions, serving clients across 10 countries."
    },
    {
      year: "2017",
      title: "Innovation Hub",
      description: "Established our dedicated R&D center to develop proprietary solutions and advance emerging technologies."
    },
    {
      year: "2020",
      title: "Global Recognition",
      description: "Recognized as one of the top technology consulting firms, with over 300 successful projects delivered."
    },
    {
      year: "2023",
      title: "AI Integration",
      description: "Pioneered AI-driven solutions for enterprise clients, helping them automate and optimize operations at scale."
    },
    {
      year: "2026",
      title: "Continued Excellence",
      description: "Celebrating 15 years of innovation, with 500+ projects delivered and a growing global presence."
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#0A0A0A] mb-4">
            Our <span className="text-[#FF6A00]">Journey</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From humble beginnings to becoming a trusted technology partner for businesses worldwide
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#FF6A00]/20"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="text-[#FF6A00] text-3xl font-bold mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-semibold text-[#0A0A0A] mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                <div className="hidden md:flex w-6 h-6 rounded-full bg-[#FF6A00] border-4 border-white shadow-lg z-10"></div>

                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const team = [
    {
      name: "Michael Chen",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxlYWRlcnNoaXAlMjBleGVjdXRpdmV8ZW58MXx8fHwxNzcyNzcyNTgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Visionary leader with 20+ years in technology innovation"
    },
    {
      name: "Sarah Johnson",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1762341114803-a797c44649f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHRlY2hub2xvZ3klMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcyNzcyNTgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Expert in AI and cloud architecture with multiple patents"
    },
    {
      name: "David Rodriguez",
      role: "VP of Engineering",
      image: "https://images.unsplash.com/photo-1758691737387-a89bb8adf768?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVjaCUyMHByb2Zlc3Npb25hbHN8ZW58MXx8fHwxNzcyNzcyNTgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Leads our engineering teams to deliver exceptional solutions"
    },
    {
      name: "Emily Watson",
      role: "Head of Cybersecurity",
      image: "https://images.unsplash.com/photo-1762341114803-a797c44649f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHRlY2hub2xvZ3klMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcyNzcyNTgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Protecting businesses with advanced security strategies"
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
            Meet Our <span className="text-[#FF6A00]">Leadership Team</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experienced professionals driving innovation and excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent"></div>
              </div>
              <h3 className="text-xl font-semibold text-[#0A0A0A] mb-1">
                {member.name}
              </h3>
              <p className="text-[#FF6A00] font-medium mb-2">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CoreValuesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethical practices in every interaction"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We constantly push boundaries, exploring new technologies and creative solutions"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and building lasting partnerships"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We are committed to delivering the highest quality in everything we do"
    },
    {
      icon: Target,
      title: "Customer Focus",
      description: "Our clients' success is our success. We prioritize their needs above all"
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth",
      description: "We invest in learning, development, and staying ahead of industry trends"
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#0A0A0A] mb-4">
            Our Core <span className="text-[#FF6A00]">Values</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The principles that guide our work and define who we are
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="bg-[#FF6A00]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <value.icon className="w-8 h-8 text-[#FF6A00]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0A0A0A] mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}