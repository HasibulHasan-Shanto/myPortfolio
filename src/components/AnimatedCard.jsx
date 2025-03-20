// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function AnimatedBorderCard() {
//   const [hover, setHover] = useState(false);

//   return (
//     <div
//       onMouseEnter={() => setHover(true)}
//       onMouseLeave={() => setHover(false)}
//       className="relative p-[2px] rounded-2xl max-w-md mx-auto overflow-hidden"
//     >
//       {/* Border Animation */}
//       <motion.div
//         animate={
//           hover
//             ? {
//                 backgroundPosition: ["0% 0%", "100% 100%"], // Left-bottom to right-top
//                 opacity: 1, // Show border on hover
//               }
//             : {
//                 opacity: 0, // Hide border on mouse leave
//               }
//         }
//         transition={{ duration: 4, ease: "linear", repeat: Infinity }}
//         className="absolute inset-0 w-full h-full rounded-2xl pointer-events-none"
//         style={{
//           background: "linear-gradient(135deg, #ff0080, #8000ff, #00ffff, #ff0080)", // Left-bottom to right-top
//           backgroundSize: "200% 200%", // Adjusted for diagonal movement
//           padding: "2px",
//           borderRadius: "16px",
//           maskImage: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
//           WebkitMaskComposite: "destination-out",
//           maskComposite: "exclude",
//           opacity: 0, // Initial opacity (hidden)
//         }}
//       ></motion.div>

//       {/* Inner Content Box */}
//       <div className="relative bg-[#111] rounded-2xl p-6">
//         <h2 className="text-xl font-bold mb-2 text-white">01. Success Architects</h2>
//         <p className="text-gray-400">
//           Business consulting consultants provide expert advice to improve business performance and efficiency.
//         </p>
//       </div>
//     </div>
//   );
// }