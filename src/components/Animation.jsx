import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Animation() {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    startAnimation();
    const timer = setTimeout(() => {
      setAnimate(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  const startAnimation = () => {
    setAnimate(false);
    setTimeout(() => setAnimate(true), 50);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <AnimatePresence mode="wait">
        {animate && (
          <motion.div
            onClick={startAnimation}
            className="cursor-pointer text-white flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: -50 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <motion.svg
              width="100"
              height="100"
              viewBox="0 0 123 123"
              initial={{ scale: 0, x: -100, y: -100 }}
              animate={{
                scale: [0, 1.2, 1],
                rotate: 360,
                x: 0,
                y: 0,
              }}
              exit={{ scale: 0 }}
              transition={{
                duration: 1.2,
                times: [0, 0.6, 1],
                ease: "easeInOut",
                delay: 1.25,
              }}
              style={{ color: "#FFFFFF", marginLeft: "1rem" }}
            >
              <path
                fill="#FFFFFF"
                d="M62.43 122.88h-1.98c0-16.15-6.04-30.27-18.11-42.34C30.27 68.47 16.16 62.43 0 62.43v-1.98c16.16 0 30.27-6.04 42.34-18.14C54.41 30.21 60.45 16.1 60.45 0h1.98c0 16.15 6.04 30.27 18.11 42.34c12.07 12.07 26.18 18.11 42.34 18.11v1.98c-16.15 0-30.27 6.04-42.34 18.11C68.47 92.61 62.43 106.72 62.43 122.88z"
              />
            </motion.svg>

            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: "70px solid transparent",
                borderRight: "70px solid transparent",
                borderTop: "120px solid #FFFFFF",
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                outline: "2px solid #FF69B4",
                outlineOffset: "5px",
                opacity: 0,
                animation:
                  "drawBorder 0.5s ease-in-out 0.75s forwards, fillTriangle 0.5s ease-in-out 1.25s forwards",
              }}
            />

            <style>
              {`
                @keyframes drawBorder {
                  from {
                    border-top-color: transparent;
                    opacity: 1;
                  }
                  to {
                    border-top-color: rgba(255, 255, 255, 0.3);
                    opacity: 1;
                  }
                }
                @keyframes fillTriangle {
                  from {
                    border-top-color: rgba(255, 255, 255, 0.3);
                  }
                  to {
                    border-top-color: #FFFFFF;
                  }
                }
              `}
            </style>

            <motion.h1
              initial={{ opacity: 0, y: 50, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.5 }}
              transition={{ duration: 0.8, delay: 2 }}
              className="text-6xl font-bold text-white tracking-[0.4em]"
              style={{ color: "#FFFFFF", marginLeft: "-1.5rem" }}
            >
              E L E V A T E
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
      {/* <button
        onClick={() => window.location.reload()}
        className="fixed bottom-8 px-10 py-4 bg-blue-500 text-white text-xl rounded-lg hover:bg-blue-600 transition-colors font-semibold"
      >
        Reload Animation
      </button> */}
    </div>
  );
}

export default Animation;
