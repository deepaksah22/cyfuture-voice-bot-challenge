
"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { BriefcaseIcon, Users, Lightbulb, GraduationCap } from "lucide-react"

const EligibilitySection = () => {
  return (
    <section id="eligibility" className="section-padding px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-white z-[-1]" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600">
            Eligibility Criteria
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Participation is open exclusively to <span className="text-blue-600 font-semibold">Indian residents</span>{" "}
            who are <span className="text-blue-600 font-semibold">18 years or older</span> at the time of registration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-white shadow-lg border-0 overflow-hidden group relative hover:shadow-xl transition-all duration-300">
              <div className="absolute h-1 top-0 inset-x-0 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-8">
                <div className="flex items-center gap-5 mb-5">
                  <div className="p-3 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 flex items-center justify-center">
                    <BriefcaseIcon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Working Professionals</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Step up and apply your expertise to create AI-driven solutions that address pressing social challenges
                  and spark innovation.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-white shadow-lg border-0 overflow-hidden group relative hover:shadow-xl transition-all duration-300">
              <div className="absolute h-1 top-0 inset-x-0 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-8">
                <div className="flex items-center gap-5 mb-5">
                  <div className="p-3 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 flex items-center justify-center">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Social Entrepreneurs</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Bring your vision to life by leveraging AI to create scalable, impactful solutions for underserved
                  communities.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-white shadow-lg border-0 overflow-hidden group relative hover:shadow-xl transition-all duration-300">
              <div className="absolute h-1 top-0 inset-x-0 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-8">
                <div className="flex items-center gap-5 mb-5">
                  <div className="p-3 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 flex items-center justify-center">
                    <Lightbulb className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Technologists</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Use your technical skills to develop cutting-edge AI solutions that make a tangible difference in
                  real-world problems.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-white shadow-lg border-0 overflow-hidden group relative hover:shadow-xl transition-all duration-300">
              <div className="absolute h-1 top-0 inset-x-0 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-8">
                <div className="flex items-center gap-5 mb-5">
                  <div className="p-3 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Students</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Dive into hands-on experience and collaborate with experts to create AI solutions that drive social
                  good.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default EligibilitySection
