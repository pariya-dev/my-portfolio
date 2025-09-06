"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="relative py-20 px-6 mt-20">
      <div className="max-w-screen-md mx-auto">
        <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden bg-accent relative mb-6 md:mb-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/pry.jpg"
              alt="Profile"
              fill
              className="object-cover"
            />
          </motion.div>



          {/* Content */}
          <motion.div
            className="flex-1 md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Badge variant="secondary" className="mb-4">
              About Me
            </Badge>

            <h2 className="text-3xl font-bold mb-4 tracking-tight">
              Personal Info
            </h2>

            <div className="text-muted-foreground mb-6 text-justify">
              Full Name: Pariya Singchalad<br />
              Nickname: Tae<br />
              Age: 24<br />
              <a href="https://line.me/ti/p/HK6H5VJTOg">Line: pry101001</a><br />
              <a href="mailto:pariyasingchalad@gmail.com">Email: pariyasingchalad@gmail.com</a><br />
              <a href="tel:+66955021922">Phone: +66 95-502-1922</a><br />
              Location: Khonkaen, Thailand
            </div>


            <div className="flex flex-wrap gap-4 justify-start">
              <Button className="rounded-full">
                <Link href="/projects">
                  Lets Continue To Projects
                </Link>
              </Button>

              <Button variant="outline" className="rounded-full" asChild>
                <a href="/Pariya_Singchalad_Resume_TH.pdf" download>
                  <Download className="mr-2" />
                  Download Resume
                </a>
              </Button>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
