import React from 'react';
import { motion } from 'motion/react';

import { Code, Coffee, Heart } from 'lucide-react';
import profileImage from "../assets/arefin.jpg";
import cvFile from "../assets/Arefin_Ahmed_CV.pdf"
import { Download, Eye } from "lucide-react";



export function About() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-2 border-blue-400/30 p-4 flex items-center justify-center overflow-hidden">
                <img 
                  src={profileImage} 
                  alt="Arefin Ahmed" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-blue-400/20 rounded-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Graduate Computer Science Engineer passionate about AI & data-driven solutions
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              I am a Computer Science and Engineering graduate with hands-on experience in machine learning, deep learning, natural language processing, and data analysis. I enjoy building intelligent, data-driven solutions that transform complex datasets into meaningful insights and real-world impact.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Through academic and practical projects, I have worked on end-to-end machine learning workflows, including data preprocessing, feature engineering, model deployment, training, evaluation, and data visualization. In addition to my AI and data-focused skills, I have a solid foundation in frontend web technologies such as HTML, CSS, JavaScript, and PHP, enabling me to build interactive user interfaces and integrate data-driven applications effectively.
            </p>
            

            <div className="flex items-center space-x-6 text-gray-400">
              <div className="flex items-center space-x-2">
                <Code className="text-blue-400" size={20} />
                <span>Strong problem-solving skills</span>
              </div>
              <div className="flex items-center space-x-2">
                <Coffee className="text-purple-400" size={20} />
                <span>Continuous learner</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="text-pink-400" size={20} />
                <span>Passionate about AI & data</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-lg border border-blue-400/20"
            >
              <p className="text-blue-300 italic">
                "Transforming data into intelligence, and ideas into impact."
              </p>

            </motion.div>


            <div className="flex flex-wrap gap-6 mt-6">

              {/* View CV */}
              <motion.a
                href={cvFile}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                className="
                  inline-flex items-center gap-2
                  px-6 py-3 rounded-xl
                  backdrop-blur-lg bg-white/10
                  border border-blue-400/30
                  text-white font-semibold
                  shadow-[0_0_20px_rgba(59,130,246,0.4)]
                  hover:bg-white/20
                  transition-all duration-300
                "
              >
                <Eye size={18} />
                View CV
              </motion.a>


              <motion.a
                href={cvFile}
                download="Arefin_Ahmed_CV.pdf"
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold"
              >
                <Download size={18} />
                Download CV
              </motion.a>
          </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
