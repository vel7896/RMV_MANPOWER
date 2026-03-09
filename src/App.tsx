import React, { useState } from 'react';
import { 
  Home, 
  Package, 
  Building2, 
  UserPlus, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook,
  CheckCircle2,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
type Page = 'home' | 'products' | 'company-register' | 'employee-register' | 'profile';

// --- Components ---

const Navbar = ({ currentPage, setCurrentPage }: { currentPage: Page, setCurrentPage: (p: Page) => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: { id: Page; label: string; icon: any }[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'company-register', label: 'Company Reg', icon: Building2 },
    { id: 'employee-register', label: 'Employee Reg', icon: UserPlus },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black-deep/80 backdrop-blur-lg border-b border-cyan-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-cyan-primary tracking-tighter cursor-pointer" onClick={() => setCurrentPage('home')}>
              RMV<span className="text-white">MANPOWER</span>
            </span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    currentPage === item.id 
                      ? 'text-cyan-primary bg-cyan-primary/10' 
                      : 'text-gray-300 hover:text-cyan-primary hover:bg-white/5'
                  }`}
                >
                  <item.icon size={16} />
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black-card border-b border-cyan-primary/20"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium flex items-center gap-3 ${
                    currentPage === item.id 
                      ? 'text-cyan-primary bg-cyan-primary/10' 
                      : 'text-gray-300 hover:text-cyan-primary hover:bg-white/5'
                  }`}
                >
                  <item.icon size={18} />
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold text-white mb-4"
    >
      {title.split(' ').map((word, i) => (
        <span key={i} className={i === title.split(' ').length - 1 ? 'text-cyan-primary' : ''}>
          {word}{' '}
        </span>
      ))}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-gray-400 max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
    <div className="w-24 h-1 bg-cyan-primary mx-auto mt-4 rounded-full" />
  </div>
);

// --- Pages ---

const HomePage = () => {
  const companies = [
    "Tenneco", "NCL Industries", "Reliance Power", "Tata Steel", 
    "L&T Construction", "Adani Group", "JSW Steel", "Mahindra & Mahindra",
    "Bosch India", "Siemens", "ABB India", "Cummins"
  ];

  return (
    <div className="pt-16">
      {/* Section 1: Hero */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
            alt="Company Background" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black-deep/60 via-black-deep/80 to-black-deep" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
              RMV <span className="text-cyan-primary cyan-glow">MANPOWER</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 font-light">
              Empowering Industries with Elite Workforce Solutions and Strategic Talent Management.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-cyan-primary text-black font-bold rounded-lg hover:bg-cyan-dark transition-all transform hover:scale-105">
                Explore Services
              </button>
              <button className="px-8 py-4 border border-cyan-primary text-cyan-primary font-bold rounded-lg hover:bg-cyan-primary/10 transition-all">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: About */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <SectionHeader title="About Our Company" />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-gray-300 leading-relaxed"
          >
            <p>
              RMV Manpower stands as a beacon of excellence in the industrial recruitment sector, bridging the gap between ambitious talent and visionary enterprises. With over a decade of experience, we have mastered the art of identifying specialized skill sets that drive operational efficiency.
            </p>
            <p>
              Our commitment goes beyond simple staffing; we provide comprehensive workforce strategies tailored to the unique demands of modern manufacturing and infrastructure. We believe that the right person in the right role can transform a business's trajectory.
            </p>
            <p>
              By leveraging cutting-edge technology and a deep understanding of industrial dynamics, we ensure that our clients receive not just employees, but assets that contribute to long-term growth. Our rigorous screening process guarantees quality and reliability in every placement we make.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video rounded-2xl overflow-hidden border border-cyan-primary/30 cyan-border-glow">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070" 
                alt="Industrial Work" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Manpower */}
      <section className="py-24 bg-black-card/50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader 
            title="Our Manpower Partners" 
            subtitle="We provide elite manpower solutions to 10+ industry leaders across the globe."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {companies.map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, borderColor: '#00f2ff' }}
                className="p-6 glass-card rounded-xl flex items-center justify-center text-center group cursor-default transition-all"
              >
                <div className="flex flex-col items-center gap-3">
                  <CheckCircle2 className="text-cyan-primary opacity-50 group-hover:opacity-100 transition-opacity" size={24} />
                  <span className="text-lg font-semibold text-gray-200 group-hover:text-cyan-primary transition-colors">
                    {company}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Contact */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <SectionHeader title="Get In Touch" subtitle="Contact our experts for personalized workforce solutions." />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Mail, title: 'Email Us', detail: 'contact@nexus-solutions.com', sub: '24/7 Support' },
            { icon: Phone, title: 'Call Us', detail: '+91 98765 43210', sub: 'Mon - Sat, 9am - 6pm' },
            { icon: MapPin, title: 'Visit Us', detail: '123 Industrial Hub, Tech Park', sub: 'Bangalore, India' }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="p-8 glass-card rounded-2xl text-center flex flex-col items-center group"
            >
              <div className="w-16 h-16 bg-cyan-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-cyan-primary group-hover:text-black transition-all duration-500">
                <item.icon className="text-cyan-primary group-hover:text-black transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-cyan-primary font-medium mb-1">{item.detail}</p>
              <p className="text-gray-500 text-sm">{item.sub}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Social Icons */}
        <div className="mt-16 flex justify-center gap-8">
          {[Linkedin, Twitter, Facebook].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{ scale: 1.2, color: '#00f2ff' }}
              className="text-gray-400 transition-colors"
            >
              <Icon size={28} />
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  );
};

const ProductsPage = () => {
  const products = [
    { name: 'Industrial Safety Gear', category: 'Equipment', price: '$120', img: 'https://images.unsplash.com/photo-1590103512987-396253399c1c?auto=format&fit=crop&q=80&w=800' },
    { name: 'Heavy Machinery Parts', category: 'Components', price: '$450', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800' },
    { name: 'Precision Tools Set', category: 'Tools', price: '$299', img: 'https://images.unsplash.com/photo-1530124560676-400bc47bc59c?auto=format&fit=crop&q=80&w=800' },
    { name: 'Automation Sensors', category: 'Electronics', price: '$85', img: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=800' },
    { name: 'Welding Equipment', category: 'Equipment', price: '$550', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800' },
    { name: 'Hydraulic Systems', category: 'Components', price: '$1200', img: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <div className="pt-24 pb-24 px-4 max-w-7xl mx-auto">
      <SectionHeader title="Our Industrial Products" subtitle="High-quality equipment and components for industrial excellence." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-2xl overflow-hidden group"
          >
            <div className="h-64 overflow-hidden relative">
              <img 
                src={product.img} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-cyan-primary text-black px-3 py-1 rounded-full text-xs font-bold">
                {product.category}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-primary transition-colors">{product.name}</h3>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-white">{product.price}</span>
                <button className="flex items-center gap-2 text-cyan-primary font-semibold hover:underline">
                  View Details <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const CompanyRegisterPage = () => {
  return (
    <div className="pt-24 pb-24 px-4 max-w-3xl mx-auto">
      <SectionHeader title="Company Registration" subtitle="Register your enterprise to access elite manpower solutions." />
      <motion.form 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-8 rounded-2xl space-y-6"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400">Company Name</label>
            <input type="text" className="w-full bg-black-deep border border-white/10 rounded-lg px-4 py-3 focus:border-cyan-primary outline-none transition-colors" placeholder="Nexus Ltd" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400">Registration Number</label>
            <input type="text" className="w-full bg-black-deep border border-white/10 rounded-lg px-4 py-3 focus:border-cyan-primary outline-none transition-colors" placeholder="REG-123456" />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-400">Industry Type</label>
          <select className="w-full bg-black-deep border border-white/10 rounded-lg px-4 py-3 focus:border-cyan-primary outline-none transition-colors">
            <option>Manufacturing</option>
            <option>Construction</option>
            <option>IT & Technology</option>
            <option>Logistics</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-400">Company Email</label>
          <input type="email" className="w-full bg-black-deep border border-white/10 rounded-lg px-4 py-3 focus:border-cyan-primary outline-none transition-colors" placeholder="hr@company.com" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-400">Company Description</label>
          <textarea className="w-full bg-black-deep border border-white/10 rounded-lg px-4 py-3 focus:border-cyan-primary outline-none transition-colors h-32" placeholder="Tell us about your company..."></textarea>
        </div>
        <button className="w-full py-4 bg-cyan-primary text-black font-bold rounded-lg hover:bg-cyan-dark transition-all transform active:scale-95">
          Register Company
        </button>
      </motion.form>
    </div>
  );
};

const EmployeeRegisterPage = () => {
  return (
    <div className="pt-24 pb-24 px-4 max-w-3xl mx-auto">
      <SectionHeader title="Employee Registration" subtitle="Join our elite workforce and build your career with industry leaders." />
      <motion.form 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-8 rounded-2xl space-y-6"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400">Full Name</label>
            <input type="text" className="w-full bg-black-deep border border-white/10 rounded-lg px-4 py-3 focus:border-cyan-primary outline-none transition-colors" placeholder="John Doe" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400">Date of Birth</label>
            <input type="date" className="w-full bg-black-deep border border-white/10 rounded-lg px-4 py-3 focus:border-cyan-primary outline-none transition-colors" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400">Email Address</label>
            <input type="email" className="w-full bg-black-deep border border-white/10 rounded-lg px-4 py-3 focus:border-cyan-primary outline-none transition-colors" placeholder="john@example.com" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400">Phone Number</label>
            <input type="tel" className="w-full bg-black-deep border border-white/10 rounded-lg px-4 py-3 focus:border-cyan-primary outline-none transition-colors" placeholder="+91 00000 00000" />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-400">Primary Skills</label>
          <input type="text" className="w-full bg-black-deep border border-white/10 rounded-lg px-4 py-3 focus:border-cyan-primary outline-none transition-colors" placeholder="Welding, CNC Operation, etc." />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-400">Upload Resume</label>
          <div className="border-2 border-dashed border-white/10 rounded-lg p-8 text-center hover:border-cyan-primary transition-colors cursor-pointer">
            <p className="text-gray-400">Drag and drop your resume here or click to browse</p>
          </div>
        </div>
        <button className="w-full py-4 bg-cyan-primary text-black font-bold rounded-lg hover:bg-cyan-dark transition-all transform active:scale-95">
          Submit Application
        </button>
      </motion.form>
    </div>
  );
};

const ProfilePage = () => {
  return (
    <div className="pt-24 pb-24 px-4 max-w-5xl mx-auto">
      <SectionHeader title="User Profile" />
      <div className="grid md:grid-cols-3 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-card p-8 rounded-2xl text-center"
        >
          <div className="w-32 h-32 bg-cyan-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center border-2 border-cyan-primary">
            <User size={64} className="text-cyan-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-1">Alex Johnson</h3>
          <p className="text-cyan-primary font-medium mb-6">Senior Industrial Engineer</p>
          <div className="flex justify-center gap-4">
            <button className="p-2 bg-white/5 rounded-lg hover:text-cyan-primary transition-colors"><Linkedin size={20} /></button>
            <button className="p-2 bg-white/5 rounded-lg hover:text-cyan-primary transition-colors"><Twitter size={20} /></button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-2 glass-card p-8 rounded-2xl space-y-8"
        >
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-white/10 pb-2">Personal Information</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">alex.j@nexus-solutions.com</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium">+91 98765 43210</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">Bangalore, India</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Member Since</p>
                <p className="font-medium">March 2024</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-white/10 pb-2">Skills & Expertise</h4>
            <div className="flex flex-wrap gap-2">
              {['Project Management', 'Lean Manufacturing', 'AutoCAD', 'Supply Chain', 'Team Leadership'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-cyan-primary/10 text-cyan-primary rounded-full text-sm border border-cyan-primary/20">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-white/10 pb-2">Recent Activity</h4>
            <div className="space-y-4">
              {[
                { action: 'Applied for Senior Consultant at Tenneco', date: '2 days ago' },
                { action: 'Updated Profile Information', date: '1 week ago' },
                { action: 'Completed Safety Certification', date: '2 weeks ago' }
              ].map((activity, i) => (
                <div key={i} className="flex justify-between items-center text-sm">
                  <span className="text-gray-300">{activity.action}</span>
                  <span className="text-gray-500">{activity.date}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage />;
      case 'products': return <ProductsPage />;
      case 'company-register': return <CompanyRegisterPage />;
      case 'employee-register': return <EmployeeRegisterPage />;
      case 'profile': return <ProfilePage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-black-deep text-white font-sans selection:bg-cyan-primary selection:text-black">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="bg-black-card border-t border-white/5 py-12 mt-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-2xl font-bold text-cyan-primary tracking-tighter mb-4">
            RMV<span className="text-white">MANPOWER</span>
          </div>
          <p className="text-gray-500 max-w-md mx-auto mb-8">
            Leading the way in industrial manpower and strategic workforce management since 2014.
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <button onClick={() => setCurrentPage('home')} className="text-gray-400 hover:text-cyan-primary transition-colors">Home</button>
            <button onClick={() => setCurrentPage('products')} className="text-gray-400 hover:text-cyan-primary transition-colors">Products</button>
            <button onClick={() => setCurrentPage('company-register')} className="text-gray-400 hover:text-cyan-primary transition-colors">Company</button>
            <button onClick={() => setCurrentPage('employee-register')} className="text-gray-400 hover:text-cyan-primary transition-colors">Employee</button>
          </div>
          <div className="text-gray-600 text-sm">
            © 2024 RMV Manpower. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
