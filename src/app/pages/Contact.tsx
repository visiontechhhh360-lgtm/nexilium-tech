import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { AnimatedBackground, LightBackground } from "../components/AnimatedBackground";
import { FloatingCard, GlassCard } from "../components/FloatingCard";

export function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Contact Form & Info */}
      <ContactSection />

      {/* Map Section */}
      <MapSection />
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
            💬 Contact Us
          </motion.span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-4 mb-6 leading-tight">
            Get in <span className="bg-gradient-to-r from-[#FF6A00] to-[#FF8C33] bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with innovative technology solutions? 
            Let's start a conversation about your project.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[#0A0A0A] mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="company">Company Name</Label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Your Company"
                  value={formData.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="service">Service Needed *</Label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => handleChange("service", value)}
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="software">Software Development</SelectItem>
                    <SelectItem value="mobile">Mobile App Development</SelectItem>
                    <SelectItem value="security">Network Security</SelectItem>
                    <SelectItem value="marketing">Digital Marketing</SelectItem>
                    <SelectItem value="recovery">Data Recovery</SelectItem>
                    <SelectItem value="consultancy">IT Consultancy</SelectItem>
                    <SelectItem value="vpn">VPN Services</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  required
                  rows={6}
                  className="mt-2"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-[#FF6A00] hover:bg-[#FF7A10] text-white"
              >
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-[#0A0A0A] mb-6">
              Contact Information
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Reach out to us through any of these channels. Our team is ready to assist you 
              with your technology needs and answer any questions you may have.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-[#FF6A00]/10 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#FF6A00]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0A0A0A] mb-2">
                    Email
                  </h3>
                  <p className="text-gray-600">contact@nexilium.tech</p>
                  <p className="text-gray-600">support@nexilium.tech</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#FF6A00]/10 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#FF6A00]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0A0A0A] mb-2">
                    Phone
                  </h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">+1 (555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#FF6A00]/10 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#FF6A00]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0A0A0A] mb-2">
                    Office Address
                  </h3>
                  <p className="text-gray-600">
                    123 Innovation Drive<br />
                    Silicon Valley, CA 94025<br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#FF6A00]/10 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#FF6A00]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0A0A0A] mb-2">
                    Business Hours
                  </h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Quick Response Card */}
            <div className="mt-12 bg-gradient-to-br from-[#FF6A00] to-[#FF8C33] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">
                Need Immediate Assistance?
              </h3>
              <p className="mb-6 opacity-90">
                Our support team is available 24/7 for urgent matters and critical issues.
              </p>
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-[#FF6A00] hover:bg-gray-100"
              >
                Call Emergency Line
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MapSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#0A0A0A] mb-4">
            Visit Our <span className="text-[#FF6A00]">Office</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Located in the heart of Silicon Valley, we're always happy to welcome you
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl overflow-hidden shadow-xl border border-gray-200"
        >
          {/* Map Placeholder */}
          <div className="w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gray-100">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-[#FF6A00] mx-auto mb-4" />
                  <p className="text-gray-600 text-lg font-semibold">
                    123 Innovation Drive, Silicon Valley, CA 94025
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    Interactive map would be embedded here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}