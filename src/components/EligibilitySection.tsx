
"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { BriefcaseIcon, Users, Lightbulb, GraduationCap } from "lucide-react"

const EligibilitySection = () => {
  return (
    <section id="eligibility" className="section-padding px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-white z-[-1]" />
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyfuture-primary to-cyfuture-accent">
            Eligibility Criteria
          </h2>
          <p className="text-base md:text-lg text-foreground/80 text-center">
  Participation is open exclusively to{" "}
  <span className="text-blue-600 font-semibold">Indian residents</span>{" "}
  who are{" "}
  <span className="text-blue-600 font-semibold">18 years or older</span> at the time of registration.{" "}
  The{" "}
  <span className="font-semibold text-blue-600">Team Leader</span> must register on behalf of the entire team, 
  which should consist of a minimum of{" "}
  <span className="font-semibold text-blue-600">2 members</span> and a maximum of{" "}
  <span className="font-semibold text-blue-600">4 members</span>, including the leader.
</p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div>
            <Card className="h-full bg-white shadow-lg border-0 overflow-hidden group relative hover:shadow-xl transition-all duration-300">
              <div className="absolute h-1 top-0 inset-x-0 bg-gradient-to-r from-cyfuture-primary to-cyfuture-accent"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-8">
                <div className="flex items-center gap-5 mb-5">
                  <div className="p-3 rounded-full bg-gradient-to-r from-cyfuture-primary/20 to-cyfuture-accent/20 flex items-center justify-center">
                    <BriefcaseIcon className="h-8 w-8 text-cyfuture-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Working Professionals</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Step up and apply your expertise to create AI-driven solutions that address pressing social challenges
                  and spark innovation.
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="h-full bg-white shadow-lg border-0 overflow-hidden group relative hover:shadow-xl transition-all duration-300">
              <div className="absolute h-1 top-0 inset-x-0 bg-gradient-to-r from-cyfuture-primary to-cyfuture-accent"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-8">
                <div className="flex items-center gap-5 mb-5">
                  <div className="p-3 rounded-full bg-gradient-to-r from-cyfuture-primary/20 to-cyfuture-accent/20 flex items-center justify-center">
                    <Users className="h-8 w-8 text-cyfuture-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Social Entrepreneurs</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Bring your vision to life by leveraging AI to create scalable, impactful solutions for underserved
                  communities.
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="h-full bg-white shadow-lg border-0 overflow-hidden group relative hover:shadow-xl transition-all duration-300">
              <div className="absolute h-1 top-0 inset-x-0 bg-gradient-to-r from-cyfuture-primary to-cyfuture-accent"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-8">
                <div className="flex items-center gap-5 mb-5">
                  <div className="p-3 rounded-full bg-gradient-to-r from-cyfuture-primary/20 to-cyfuture-accent/20 flex items-center justify-center">
                    <Lightbulb className="h-8 w-8 text-cyfuture-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Technologists</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Use your technical skills to develop cutting-edge AI solutions that make a tangible difference in
                  real-world problems.
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="h-full bg-white shadow-lg border-0 overflow-hidden group relative hover:shadow-xl transition-all duration-300">
              <div className="absolute h-1 top-0 inset-x-0 bg-gradient-to-r from-cyfuture-primary to-cyfuture-accent"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-8">
                <div className="flex items-center gap-5 mb-5">
                  <div className="p-3 rounded-full bg-gradient-to-r from-cyfuture-primary/20 to-cyfuture-accent/20 flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-cyfuture-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Students</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Dive into hands-on experience and collaborate with experts to create AI solutions that drive social
                  good.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EligibilitySection
