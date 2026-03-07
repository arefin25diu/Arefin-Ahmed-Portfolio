import React from "react";
import { motion } from "framer-motion";

/* ===== Import your certificate images ===== */

import unitar from "../assets/un.jpg";
import ibmDs from "../assets/datascience.jpg";
import ctiCert from "../assets/cyber.jpg";
import aiFund from "../assets/ibm.jpg";
import dataAnalytics from "../assets/cisco.jpg";


export function Achievement() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Achievements
          </h2>
        </motion.div>



        {/* ===== CARD 3 ===== */}
        <Card
          image={ibmDs}
          title="Data Science Foundations — Level 2"
          date="Dec 30, 2025"
          desc="Strengthened knowledge of statistics, data analytics workflows, and data-driven problem solving through IBM Skills Network."
          tags={["Data Science","Analytics","Statistics"]}
        />

        {/* ===== CARD 8 ===== */}
        <Card
          image={dataAnalytics}
          title="Data Analytics Essentials"
          date="Dec 30, 2025"
          desc="Cisco Networking Academy certification covering the data analytics process, data preparation, basic statistics, and hands-on analysis using tools like Excel, SQL, and Tableau."
          tags={["Data Analytics","SQL","Tableau","Excel"]}
        />



        {/* ===== CARD 6 ===== */}
        <Card
          image={aiFund}
          title="Artificial Intelligence Fundamentals"
          date="Dec 20, 2025"
          desc="IBM SkillsBuild credential covering AI concepts, ethics, and real-world intelligent system applications."
          tags={["AI Fundamentals","Ethics","Intelligent Systems"]}
        />

          {/* ===== CARD 7 ===== */}
          <Card
            image={ctiCert}
            title="Cyber Threat Intelligence 101"
            date="Feb 11, 2026"
            desc="arcX Foundation Level certification covering cyber threat intelligence fundamentals, threat analysis techniques, and security intelligence practices."
            tags={["Cybersecurity","Threat Intelligence","CTI"]}
          />
        {/* ===== CARD 2 ===== */}
        <Card
          image={unitar}
          title="Introduction to Sustainable Development in Practice"
          date="Nov 17, 2025"
          desc="UNITAR & UNDP certification focused on sustainability principles, global development goals, and environmental responsibility."
          tags={["Sustainability","SDG","Environment"]}
        />

      </div>
    </section>
  );
}


/* ========= DO NOT TOUCH DESIGN — SAME CARD ========= */

function Card({ image, title, date, desc, tags }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="
        grid md:grid-cols-2 gap-12 items-center
        backdrop-blur-xl
        bg-white/5
        border border-white/10
        rounded-2xl
        p-8
        shadow-[0_0_40px_rgba(59,130,246,0.15)]
        overflow-hidden
        mb-16
      "
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="w-full max-w-full overflow-hidden rounded-xl"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-contain rounded-xl"
        />
      </motion.div>

      <div className="space-y-5 min-w-0">
        <h3 className="text-2xl md:text-3xl font-bold text-white">
          {title}
        </h3>

        <p className="text-gray-400 text-sm">
          {date}
        </p>

        <p className="text-gray-300 leading-relaxed">
          {desc}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map(tag => (
            <span
              key={tag}
              className="
                px-3 py-1
                bg-blue-500/20
                text-blue-300
                text-sm
                rounded-full
                border border-blue-400/30
                transition hover:bg-blue-500/30
              "
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
