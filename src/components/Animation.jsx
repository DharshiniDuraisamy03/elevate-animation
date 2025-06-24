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
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <AnimatePresence mode="wait">
          {animate && (
            <motion.div
              onClick={startAnimation}
              className="cursor-pointer text-white flex flex-row items-center justify-center gap-12"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: -50 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
            >
              <div style={{ width: 0, height: 0 }}></div>
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
                style={{ color: "#FFFFFF" }}
              >
                <path
                  fill="#FFFFFF"
                  d="M62.43 122.88h-1.98c0-16.15-6.04-30.27-18.11-42.34C30.27 68.47 16.16 62.43 0 62.43v-1.98c16.16 0 30.27-6.04 42.34-18.14C54.41 30.21 60.45 16.1 60.45 0h1.98c0 16.15 6.04 30.27 18.11 42.34c12.07 12.07 26.18 18.11 42.34 18.11v1.98c-16.15 0-30.27 6.04-42.34 18.11C68.47 92.61 62.43 106.72 62.43 122.88z"
                />
              </motion.svg>

              <div style={{ width: 0, height: 0 }}>
                <svg
                  width="200"
                  height="174"
                  viewBox="0 0 400 174"
                  style={{
                    color: "#FFFFFF",
                    marginLeft: "-3rem",
                    marginTop: "-2.5rem",
                    opacity: 0,
                    animation: "showSvg 0.5s ease forwards 0.5s",
                  }}
                >
                  <defs>
                    <linearGradient
                      id="fillGradient"
                      x1="0%"
                      y1="100%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#FFFFFF">
                        <animate
                          attributeName="offset"
                          values="0;1"
                          dur="2s"
                          begin="1s"
                          fill="freeze"
                        />
                      </stop>
                      <stop offset="0%" stopColor="transparent">
                        <animate
                          attributeName="offset"
                          values="0;1"
                          dur="2s"
                          begin="1s"
                          fill="freeze"
                        />
                      </stop>
                    </linearGradient>
                  </defs>
                  <path
                    d="M0.5 2 L400 2 C334 14.1667 205.5 63.8 199.5 173 C192.5 63.8 64 14.1667 0.5 2 Z"
                    fill="url(#fillGradient)"
                    stroke="white"
                    strokeWidth="3"
                  />
                </svg>
              </div>

              <style>
                {`
                @keyframes showSvg {
                  from {
                    opacity: 0;
                  }
                  to {
                    opacity: 1;
                  }
                }
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
                className="text-white tracking-[0.4em] font-normal"
                style={{
                  color: "#FFFFFF",
                  marginLeft: "-7rem",
                  marginTop: "7rem",
                  fontSize: "3rem",
                  letterSpacing: "0.15em",
                  fontWeight: "400",
                }}
              >
                E L E V A T E
              </motion.h1>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* <button
        onClick={() => window.location.reload()}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 px-10 py-4 bg-blue-500 text-white text-xl rounded-lg hover:bg-blue-600 transition-colors font-semibold"
      >
        Replay
      </button> */}
    </>
  );
}

export default Animation;
