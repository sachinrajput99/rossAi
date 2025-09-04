"use client";

import { motion } from "framer-motion";

const steps = [
  { id: 1, title: "User speaks to agent via app, browser, or phone call" },
  { id: 2, title: "User speech is streamed from device to agent" },
  { id: 3, title: "Agent receives user speech and runs your custom business logic" },
  { id: 4, title: "Agent responds back to the user" },
];

export default function Timeline() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {steps.map((step, i) => (
        <section
          key={step.id}
          className="h-screen flex flex-col items-center justify-center snap-start bg-gray-900 text-white"
        >
          {/* Animation for each step */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6 max-w-lg text-center px-6"
          >
            <div className="h-16 w-16 flex items-center justify-center rounded-full border-2 border-cyan-400 text-2xl font-bold">
              {step.id}
            </div>
            <h2 className="text-3xl font-semibold">{step.title}</h2>
          </motion.div>
        </section>
      ))}

     
    </div>
  );
}

