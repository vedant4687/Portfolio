"use client";

import { motion, Variants } from "framer-motion";
import { 
  Mail, FileText, ExternalLink, PlayCircle, GraduationCap, Send, 
  ChevronRight, BrainCircuit, BarChart3, Terminal, Network, MessageSquare, 
  Database, LineChart, Settings, Zap, Layout, Activity
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { 
  SiPython, SiPytorch, SiTensorflow, SiScikitlearn, SiPandas, SiNumpy, 
  SiMysql, SiFastapi, SiStreamlit, SiGit, SiGithub, SiFigma 
} from "react-icons/si";

// Advanced animation variants
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 10 } }
};

// Skill Data
const aiSkills = [
  { name: "PyTorch", icon: SiPytorch },
  { name: "TensorFlow / Keras", icon: SiTensorflow },
  { name: "Deep Learning (CNN/RNN)", icon: Network },
  { name: "Scikit-Learn", icon: SiScikitlearn },
  { name: "XGBoost & Prophet", icon: LineChart },
  { name: "Generative AI & LLMs", icon: BrainCircuit },
  { name: "Hugging Face", icon: Zap },
  { name: "NLP", icon: MessageSquare },
  { name: "SHAP Explainability", icon: Layout },
  { name: "Prompt Engineering", icon: Terminal },
  { name: "Predictive Modeling", icon: Activity },
];

const dataSkills = [
  { name: "SQL (MySQL)", icon: SiMysql },
  { name: "Power BI & DAX", icon: BarChart3 },
  { name: "Pandas", icon: SiPandas },
  { name: "NumPy & SciPy", icon: SiNumpy },
  { name: "Matplotlib & Plotly", icon: BarChart3 },
  { name: "ETL Pipelines", icon: Database },
  { name: "Data Modeling", icon: Database },
  { name: "Statistical Modeling", icon: LineChart },
  { name: "A/B Testing", icon: Zap },
  { name: "KPI Tracking", icon: Activity },
  { name: "MS Excel", icon: Layout },
];

const toolSkills = [
  { name: "Python", icon: SiPython },
  { name: "FastAPI", icon: SiFastapi },
  { name: "Streamlit", icon: SiStreamlit },
  { name: "REST APIs", icon: Network },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "VS Code", icon: Terminal },
  { name: "Figma", icon: SiFigma },
  { name: "Render Deployment", icon: Zap },
  { name: "Agile / SDLC", icon: Settings },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-cyan-500/30 font-sans pb-12 relative overflow-hidden">
      
      {/* High-Tech Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-slate-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,182,212,0.15),rgba(2,6,23,0))]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-900 to-transparent opacity-50"></div>
      </div>

      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/60 backdrop-blur-xl"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tighter flex items-center gap-2">
            <BrainCircuit className="w-5 h-5 text-cyan-500" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              Vedant.
            </span>
          </span>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">01. About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">02. Skills</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">03. Experience</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">04. Work</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">05. Contact</a>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-lg border border-cyan-500/50 text-cyan-400 text-sm font-medium hover:bg-cyan-500/10 transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_25px_rgba(6,182,212,0.3)]"
          >
            <FileText className="w-4 h-4" /> Resume
          </motion.button>
        </div>
      </motion.nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 space-y-40 relative z-10">
        
        {/* HERO SECTION */}
        <section className="min-h-[75vh] flex flex-col justify-center">
          <motion.div 
            variants={staggerContainer} initial="hidden" animate="show"
            className="space-y-6"
          >
            <motion.h2 variants={fadeUp} className="text-cyan-400 font-mono flex items-center gap-2">
              <span className="h-px w-8 bg-cyan-500/50"></span>
              Hi, my name is
            </motion.h2>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-100">
              Vedant Deshmukh.
            </motion.h1>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600">
              I build intelligent AI systems.
            </motion.h1>
            <motion.p variants={fadeUp} className="max-w-2xl text-lg text-slate-400 leading-relaxed font-light">
              I'm an AI engineering student at VIT. I bridge the gap between raw data and real-world impact by building intelligent recommendation systems, predictive models, and data-driven dashboards.
            </motion.p>
            <motion.div variants={fadeUp} className="pt-8 flex items-center gap-6">
              <motion.a 
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                href="#projects" 
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold hover:from-cyan-400 hover:to-emerald-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)]"
              >
                Check out my work!
              </motion.a>
              <div className="flex gap-4">
                <a href="https://github.com/vedant4687" target="_blank" rel="noreferrer" className="p-3 text-slate-400 hover:text-cyan-400 transition-colors">
                  <FaGithub className="w-7 h-7" />
                </a>
                <a href="https://www.linkedin.com/in/deshmukh-vedant/" target="_blank" rel="noreferrer" className="p-3 text-slate-400 hover:text-cyan-400 transition-colors">
                  <FaLinkedin className="w-7 h-7" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ABOUT & ACADEMIC SECTION */}
        <motion.section 
          id="about" className="scroll-mt-28 space-y-12"
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-slate-100"><span className="text-cyan-400 font-mono text-xl mr-2">01.</span> About & Academics</h2>
            <div className="h-px bg-slate-800 flex-1 max-w-sm"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={fadeUp} className="space-y-6 text-slate-400 leading-relaxed font-light">
              <p>
                Hello! My name is Vedant Deshmukh, and my passion lies at the intersection of data, machine learning, and artificial intelligence. My journey into tech started when I realized the power of data to solve complex, real-world problems. 
              </p>
              <p>
                Currently, I am diving deep into modern AI architectures, focusing heavily on Retrieval-Augmented Generation (RAG) pipelines, Large Language Models (LLMs), and Explainable AI (XAI). I love turning raw datasets into actionable insights and robust predictive models.
              </p>
              <p>
                When I'm not training models or writing Python scripts in Jupyter notebooks, I'm continuously exploring the latest advancements in the generative AI space.
              </p>
            </motion.div>

            {/* Academic Timeline */}
            <motion.div variants={fadeUp} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-50"></div>
              <div className="relative border border-slate-800 bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 space-y-8">
                <div className="flex items-center gap-3 text-cyan-400 mb-6">
                  <GraduationCap className="w-6 h-6" />
                  <h3 className="text-xl font-bold text-slate-100">Education Track</h3>
                </div>
                
                <div className="relative border-l-2 border-slate-800 ml-3 space-y-10">
                  {/* Timeline Item 1 */}
                  <div className="relative pl-8">
                    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></span>
                    <h4 className="text-lg font-bold text-slate-200">Integrated M.Tech in AI</h4>
                    <p className="text-cyan-400 text-sm font-mono mt-1">Vellore Institute of Technology (VIT), Bhopal • 2022 - 2027</p>
                    <p className="text-sm text-slate-400 mt-3 font-light leading-relaxed">
                      Deep dive into Artificial Intelligence, Machine Learning, and Data Science. <br/> 
                      <span className="text-emerald-400 font-medium">CGPA: 7.98</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* SKILLS SECTION */}
        <motion.section 
          id="skills" className="scroll-mt-28 space-y-12"
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-slate-100"><span className="text-cyan-400 font-mono text-xl mr-2">02.</span> Technical Arsenal</h2>
            <div className="h-px bg-slate-800 flex-1 max-w-sm"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* AI/ML */}
            <motion.div variants={fadeUp} whileHover={{ y: -5 }} className="group p-8 rounded-2xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800/50 hover:border-cyan-500/30 transition-all space-y-6 relative overflow-hidden flex flex-col h-[420px]">
              <div className="absolute top-0 right-0 p-32 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-colors pointer-events-none"></div>
              <div className="w-14 h-14 shrink-0 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                <BrainCircuit className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-200 shrink-0">Machine Learning & AI</h3>
              
              {/* Scrollable list */}
              <ul className="flex-1 overflow-y-auto pr-2 space-y-4 text-slate-400 font-light scroll-smooth">
                {aiSkills.map(skill => (
                  <li key={skill.name} className="flex items-center gap-3 hover:text-cyan-400 transition-colors">
                    <skill.icon className="w-5 h-5 text-cyan-500 shrink-0"/> {skill.name}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Data Analytics */}
            <motion.div variants={fadeUp} whileHover={{ y: -5 }} className="group p-8 rounded-2xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800/50 hover:border-emerald-500/30 transition-all space-y-6 relative overflow-hidden flex flex-col h-[420px]">
              <div className="absolute top-0 right-0 p-32 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-colors pointer-events-none"></div>
              <div className="w-14 h-14 shrink-0 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                <BarChart3 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-200 shrink-0">Data & Analytics</h3>
              
              {/* Scrollable list */}
              <ul className="flex-1 overflow-y-auto pr-2 space-y-4 text-slate-400 font-light scroll-smooth">
                {dataSkills.map(skill => (
                  <li key={skill.name} className="flex items-center gap-3 hover:text-emerald-400 transition-colors">
                    <skill.icon className="w-5 h-5 text-emerald-500 shrink-0"/> {skill.name}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Programming & Tools */}
            <motion.div variants={fadeUp} whileHover={{ y: -5 }} className="group p-8 rounded-2xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800/50 hover:border-purple-500/30 transition-all space-y-6 relative overflow-hidden flex flex-col h-[420px]">
              <div className="absolute top-0 right-0 p-32 bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/10 transition-colors pointer-events-none"></div>
              <div className="w-14 h-14 shrink-0 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                <Terminal className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-200 shrink-0">Programming & Tools</h3>
              
              {/* Scrollable list */}
              <ul className="flex-1 overflow-y-auto pr-2 space-y-4 text-slate-400 font-light scroll-smooth">
                {toolSkills.map(skill => (
                  <li key={skill.name} className="flex items-center gap-3 hover:text-purple-400 transition-colors">
                    <skill.icon className="w-5 h-5 text-purple-500 shrink-0"/> {skill.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* EXPERIENCE SECTION */}
        <motion.section 
          id="experience" className="scroll-mt-28 space-y-12"
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-slate-100"><span className="text-cyan-400 font-mono text-xl mr-2">03.</span> Work Experience</h2>
            <div className="h-px bg-slate-800 flex-1 max-w-sm"></div>
          </motion.div>

          <div className="space-y-8">
            {/* Internship 1 */}
            <motion.div variants={fadeUp} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-emerald-500/5 rounded-2xl blur-xl transition-all opacity-50"></div>
              <div className="relative border border-slate-800 bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 hover:border-cyan-500/30 transition-all">
                <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-100">Data Analyst Intern</h3>
                    <p className="text-cyan-400 font-mono mt-1">S. S. Heavy Equipments Pvt. Ltd. • Pune</p>
                  </div>
                  <div className="px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 text-sm font-mono whitespace-nowrap self-start md:self-center">
                    Summer 2025
                  </div>
                </div>
                <ul className="space-y-4 text-slate-400 font-light leading-relaxed">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5"/> 
                    <span>Analyzed operational data across 15+ equipment units, identifying failure patterns to reduce downtime by 10-15%.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5"/> 
                    <span>Defined 5 core KPIs and engineered 3 interactive dashboards to track utilization trends for cross-functional stakeholders.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5"/> 
                    <span>Automated field data extraction via optimized SQL queries, eliminating 10+ hours of manual data entry per week.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5"/> 
                    <span>Identified a digital-presence gap and independently developed a prototype company website (HTML, CSS, JS), successfully pitching the digital transformation initiative to senior leadership.</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* PROJECTS SECTION */}
        <motion.section 
          id="projects" className="scroll-mt-28 space-y-12"
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-slate-100"><span className="text-cyan-400 font-mono text-xl mr-2">04.</span> Featured Projects</h2>
            <div className="h-px bg-slate-800 flex-1 max-w-sm"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project Card 1 */}
            <motion.div variants={fadeUp} whileHover={{ y: -8 }} className="group relative rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden hover:border-cyan-500/40 transition-all flex flex-col shadow-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]">
              <div className="p-8 space-y-5 flex-1 relative z-10">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <p className="text-cyan-400 font-mono text-sm">Artificial Intelligence</p>
                    <h3 className="text-2xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">AI Reward Platform</h3>
                  </div>
                  <div className="flex gap-4 text-slate-400">
                    <a href="https://github.com/vedant4687" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors"><FaGithub className="w-6 h-6"/></a>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed font-light">
                  Architected a full-stack AI recommendation product from 0-to-1. Integrated Google Gemini 2.5 Flash and real-time FX APIs to generate context-aware reward suggestions across global markets.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {['FastAPI', 'Gemini AI', 'Streamlit', 'Product Thinking'].map(tech => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Project Card 2 */}
            <motion.div variants={fadeUp} whileHover={{ y: -8 }} className="group relative rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden hover:border-emerald-500/40 transition-all flex flex-col shadow-lg hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]">
              <div className="p-8 space-y-5 flex-1 relative z-10">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <p className="text-emerald-400 font-mono text-sm">Data Analytics</p>
                    <h3 className="text-2xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">Global Stock Market Dashboard</h3>
                  </div>
                  <div className="flex gap-4 text-slate-400">
                    <a href="https://github.com/vedant4687" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors"><FaGithub className="w-6 h-6"/></a>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed font-light">
                  Engineered an interactive 4-page Power BI dashboard analyzing 69 stocks across 12 sectors over a 10-year period to provide business intelligence on global market trends.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {['Power BI', 'DAX', 'Python', 'yfinance'].map(tech => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Project Card 3 */}
            <motion.div variants={fadeUp} whileHover={{ y: -8 }} className="group relative rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden hover:border-purple-500/40 transition-all flex flex-col shadow-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]">
              <div className="p-8 space-y-5 flex-1 relative z-10">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <p className="text-purple-400 font-mono text-sm">Machine Learning</p>
                    <h3 className="text-2xl font-bold text-slate-100 group-hover:text-purple-400 transition-colors">ChurnSense - Customer Retention</h3>
                  </div>
                  <div className="flex gap-4 text-slate-400">
                    <a href="https://github.com/vedant4687" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors"><FaGithub className="w-6 h-6"/></a>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed font-light">
                  Deployed an end-to-end churn prediction model achieving 0.81 AUC and 98% recall on 440K+ records, using SHAP to surface top churn drivers for retention targeting.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {['Python', 'XGBoost', 'SHAP', 'Streamlit'].map(tech => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Project Card 4 */}
            <motion.div variants={fadeUp} whileHover={{ y: -8 }} className="group relative rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden hover:border-amber-500/40 transition-all flex flex-col shadow-lg hover:shadow-[0_0_30px_rgba(245,158,11,0.1)]">
              <div className="p-8 space-y-5 flex-1 relative z-10">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <p className="text-amber-400 font-mono text-sm">Time-Series Modeling</p>
                    <h3 className="text-2xl font-bold text-slate-100 group-hover:text-amber-400 transition-colors">Sales Forecaster</h3>
                  </div>
                  <div className="flex gap-4 text-slate-400">
                    <a href="https://github.com/vedant4687" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors"><FaGithub className="w-6 h-6"/></a>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed font-light">
                  Engineered a robust sales forecasting system trained on 1M+ records to optimize inventory planning. Benchmarked Prophet and XGBoost, and built a Streamlit interface for scenario simulations.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {['Python', 'Prophet', 'XGBoost', 'Modeling'].map(tech => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </motion.section>

        {/* CONTACT SECTION */}
        <motion.section 
          id="contact" className="scroll-mt-28 space-y-12"
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-slate-100"><span className="text-cyan-400 font-mono text-xl mr-2">05.</span> Get In Touch</h2>
            <div className="h-px bg-slate-800 flex-1 max-w-sm"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={fadeUp} className="space-y-8">
              <p className="text-slate-400 text-lg leading-relaxed font-light">
                I'm currently looking for new opportunities in AI, ML, and Data Science. Whether you have a question, a project idea, or just want to say hi, my inbox is always open!
              </p>
              
              <div className="space-y-6 pt-4">
                <div className="flex items-center gap-6 text-slate-300 group cursor-pointer" onClick={() => window.open('mailto:vsd4687@gmail.com', '_blank')}>
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center border border-slate-800 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all shadow-lg">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-mono mb-1">Email</p>
                    <span className="font-semibold text-lg group-hover:text-cyan-400 transition-colors">vsd4687@gmail.com</span>
                  </div>
                </div>
                <div className="flex items-center gap-6 text-slate-300 group cursor-pointer" onClick={() => window.open('https://www.linkedin.com/in/deshmukh-vedant/', '_blank')}>
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center border border-slate-800 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-all shadow-lg">
                    <FaLinkedin className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-mono mb-1">LinkedIn</p>
                    <span className="font-semibold text-lg group-hover:text-emerald-400 transition-colors">deshmukh-vedant</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form variants={fadeUp} className="space-y-5 bg-slate-900/40 border border-slate-800 p-8 rounded-2xl backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 opacity-50"></div>
              
              <div className="space-y-2">
                <label className="text-sm font-mono text-cyan-400">01. Name</label>
                <input type="text" className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-5 py-4 text-slate-100 focus:outline-none focus:border-cyan-500 focus:bg-slate-900 transition-all shadow-inner" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-mono text-cyan-400">02. Email</label>
                <input type="email" className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-5 py-4 text-slate-100 focus:outline-none focus:border-cyan-500 focus:bg-slate-900 transition-all shadow-inner" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-mono text-cyan-400">03. Message</label>
                <textarea rows={4} className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-5 py-4 text-slate-100 focus:outline-none focus:border-cyan-500 focus:bg-slate-900 transition-all resize-none shadow-inner" placeholder="Hello, I'd like to talk about..."></textarea>
              </div>
              <button type="button" className="w-full bg-cyan-500/10 border border-cyan-500/50 hover:bg-cyan-500 hover:text-slate-950 text-cyan-400 font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all mt-6 shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]">
                <Send className="w-5 h-5" /> Send Message
              </button>
            </motion.form>
          </div>
        </motion.section>

      </main>

      <footer className="mt-32 border-t border-slate-900 py-10 text-center text-sm text-slate-500 font-mono relative z-10 bg-slate-950/50">
        <p className="hover:text-cyan-400 transition-colors cursor-pointer">Built with Next.js, Tailwind & Framer Motion</p>
        <p className="mt-2">© {new Date().getFullYear()} Vedant Deshmukh. All rights reserved.</p>
      </footer>
    </div>
  );
}
