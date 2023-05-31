"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
interface props {
  children: React.ReactNode;
}
export const ToptoBottom = ({ children }: props) => {
    
  return (
    <div>
      <motion.div
       initial={{ opacity: 0, x : -40 }}
       whileInView={{ opacity: 1, x: 0 }}
       viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </div>
  );
};
