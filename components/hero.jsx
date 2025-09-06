"use client";

import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 pt-6 overflow-hidden">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12"
        )}
      />
      <motion.div
        className="relative z-[1] text-center max-w-screen-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Badge className="rounded-full border-none">
          IT Support | Web Developer
        </Badge>
        <motion.h1
          className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          Pariya Singchalad
        </motion.h1>
        <motion.p
          className="mt-6 text-[17px] md:text-lg"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          I love fixing computer problems and coding. I enjoy learning new technologies and making simple, useful, and easy-to-use solutions.          </motion.p>
        <motion.div
          className="mt-12 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        >
          <Button size="lg" className="rounded-full text-base">
            <Link href="/about">See More About Me</Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
