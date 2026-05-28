"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main style={{ background: "black", color: "white", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
      
      <motion.h1 initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:0.6}} style={{fontSize:"3rem"}}>
        AI Electrical Systems Portfolio
      </motion.h1>

      <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}}>
        Predictive Maintenance • Smart Grid • AI Diagnostics
      </motion.p>

    </main>
  );
}
