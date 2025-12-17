const Circle: React.FC = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-white to-white relative overflow-hidden">
      {/* Abstract Shape - Bottom Left Angle - Hidden on mobile */}
      <div className="hidden lg:block absolute bottom-0 left-0 w-2/5 h-3/5 pointer-events-none">
        <div
          className="absolute inset-0 bg-transparent opacity-95 bg-[radial-gradient(125%_125%_at_50%_90%,#fff_40%,#7c3aed_100%)]"
          style={{
            clipPath: 'polygon(0 50%, 75% 0, 50% 50%, 0 90%)',
            borderTopRightRadius: '10px',
          }}
        />
      </div>

      {/* Right Side Gradient Background - Hidden on mobile */}
      <div className="hidden lg:block absolute top-0 right-0 w-3/5 h-full pointer-events-none">
        <div
          className="absolute top-0 right-0 w-full h-2/3 bg-[radial-gradient(125%_125%_at_50%_90%,#fff_40%,#7c3aed_100%)] rounded-full"
          style={{
            clipPath: 'polygon(0 50%, 75% 0, 50% 50%, 0 90%)',
            borderTopRightRadius: '10px',
          }}
        />
      </div>

      {/* Purple Curve Element - Bottom Right - Hidden on mobile */}
      <div className="hidden lg:block absolute top-0 right-0 w-68 h-full pointer-events-none">
        <svg
          className="absolute top-32 -right-26 w-96 h-96"
          viewBox="0 0 200 400"
          fill="none"
        >
          <title>Purple Decorative Curve</title>
          <path
            d="M200 0 Q120 200 200 400 L200 0 Z"
            fill="url(#purpleGradient)"
            opacity="0.4"
          />
          <defs>
            <linearGradient
              id="purpleGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-16 py-6 sm:py-8 lg:py-12 lg:min-h-[90vh] pt-24 sm:pt-28 lg:pt-12 gap-4 lg:gap-0">
        {/* LEFT SIDE - THE CIRCLE (HERO ELEMENT) */}
        <div className="relative lg:w-1/2 flex items-center justify-center">
          {/* Decorative Outer Circles - Hidden on mobile */}
          <div className="hidden lg:block absolute">
            <div
              className="w-[620px] h-[620px] rounded-full border-[6px] border-rose-500/40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"
              style={{ animationDuration: '3s' }}
            />
            <div
              className="w-[640px] h-[640px] rounded-full border-4 border-purple-400/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"
              style={{ animationDuration: '4s' }}
            />
            <div
              className="w-[660px] h-[660px] rounded-full border-2 border-cyan-400/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"
              style={{ animationDuration: '5s' }}
            />
          </div>

          {/* MAIN CIRCLE - Your Custom Video Goes Here */}
          <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[558px] lg:h-[564px]">
            <div className="absolute inset-0 rounded-full overflow-hidden bg-white shadow-xl lg:shadow-2xl">
              {/* YOUR CIRCULAR VIDEO PLACEHOLDER */}
              <div className="w-full h-full bg-transparent flex items-center justify-center relative">
                {/* This is where your circular cutout video will go */}
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/img/elephant-alone.svg"
                >
                  {/* REPLACE WITH YOUR CUSTOM CIRCULAR VIDEO */}
                  <source src="video/phone-light.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

          {/* Globe Icon Badge - Bottom Left of Circle */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-8 lg:bottom-4 lg:left-12 z-20 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full bg-white shadow-xl lg:shadow-2xl flex items-center justify-center border border-gray-300">
            <svg
              className="w-10 h-10 sm:w-14 sm:h-14 lg:w-20 lg:h-20 text-amber-100"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <title>icon</title>
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
                fill="#64748b"
              />
            </svg>
          </div>
        </div>

        {/* RIGHT SIDE - Content (No boxes, just flowing text) */}
        <div className="lg:w-1/2 lg:pl-16 space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left">
          {/* Pre-Business Badge */}
          <div className="inline-block">
            <button
              type="button"
              className="rounded-full border border-amber-300 bg-linear-to-r from-rose-500 via-orange-400 to-amber-400 px-4 py-2 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium text-orange-900 hover:from-rose-500 hover:via-pink-400 hover:to-amber-600 hover:border-purple-200 transition-all duration-500 hover:scale-105"
            >
              Pre-Business
            </button>
          </div>

          {/* Main Heading - Gradient Text */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[120px] font-flex leading-[0.95] tracking-tight">
            <span
              className="bg-[linear-gradient(to_right,white,#a5b4fc,#c084fc)]
         bg-clip-text
         text-transparent
         [-webkit-text-fill-color:transparent]
         [-webkit-text-stroke:1px_#9ca3af]"
            >
              Every Thing
            </span>

            <span className="block bg-linear-to-r from-rose-500 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              Built In
            </span>
          </h1>

          {/* Download Button */}
          <div className="pt-4 sm:pt-6">
            <button
              type="button"
              className="group relative px-8 py-3 sm:px-12 sm:py-4 lg:px-16 lg:py-5 text-lg sm:text-xl lg:text-2xl font-bold text-white rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl hover:shadow-[0_20px_60px_rgba(168,85,247,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-linear-to-r from-rose-600 via-pink-400 to-orange-400" />
              <div className="absolute inset-0 border-purple-200 bg-linear-to-r from-rose-600 via-pink-400 to-orange-400 px-5 py-2 text-sm font-medium text-gray-950 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 tracking-wide">Download</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Circle
// const Circle: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-white relative overflow-hidden">
//       {/* Abstract Shape - Bottom Left Angle - Hidden on mobile */}
//       <div className="hidden lg:block absolute bottom-0 left-0 w-2/5 h-3/5 pointer-events-none">
//         <div
//           className="absolute inset-0 bg-transparent opacity-95 bg-[radial-gradient(125%_125%_at_50%_90%,#fff_40%,#7c3aed_100%)]"
//           style={{
//             clipPath: 'polygon(0 50%, 75% 0, 50% 50%, 0 90%)',
//             borderTopRightRadius: '10px',
//           }}
//         />
//       </div>

//       {/* Right Side Gradient Background - Hidden on mobile */}
//       <div className="hidden lg:block absolute top-0 right-0 w-3/5 h-full pointer-events-none">
//         <div
//           className="absolute top-0 right-0 w-full h-2/3 bg-[radial-gradient(125%_125%_at_50%_90%,#fff_40%,#7c3aed_100%)] rounded-full"
//           style={{
//             clipPath: 'polygon(0 50%, 75% 0, 50% 50%, 0 90%)',
//             borderTopRightRadius: '10px',
//           }}
//         />
//       </div>

//       {/* Purple Curve Element - Bottom Right - Hidden on mobile */}
//       <div className="hidden lg:block absolute top-0 right-0 w-68 h-full pointer-events-none">
//         <svg
//           className="absolute top-32 -right-26 w-96 h-96"
//           viewBox="0 0 200 400"
//           fill="none"
//         >
//           <title>Purple Decorative Curve</title>
//           <path
//             d="M200 0 Q120 200 200 400 L200 0 Z"
//             fill="url(#purpleGradient)"
//             opacity="0.4"
//           />
//           <defs>
//             <linearGradient
//               id="purpleGradient"
//               x1="0%"
//               y1="0%"
//               x2="100%"
//               y2="100%"
//             >
//               <stop offset="0%" stopColor="#a855f7" />
//               <stop offset="100%" stopColor="#6366f1" />
//             </linearGradient>
//           </defs>
//         </svg>
//       </div>

//       {/* Main Content Container */}
//       <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-16 py-6 sm:py-8 lg:py-12 min-h-[85vh] lg:min-h-[90vh] pt-24 sm:pt-28 lg:pt-12 gap-6 lg:gap-0">
//         {/* LEFT SIDE - THE CIRCLE (HERO ELEMENT) */}
//         <div className="relative lg:w-1/2 flex items-center justify-center">
//           {/* Decorative Outer Circles - Hidden on mobile */}
//           <div className="hidden lg:block absolute">
//             <div
//               className="w-[620px] h-[620px] rounded-full border-[6px] border-rose-500/40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"
//               style={{ animationDuration: '3s' }}
//             />
//             <div
//               className="w-[640px] h-[640px] rounded-full border-4 border-purple-400/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"
//               style={{ animationDuration: '4s' }}
//             />
//             <div
//               className="w-[660px] h-[660px] rounded-full border-2 border-cyan-400/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"
//               style={{ animationDuration: '5s' }}
//             />
//           </div>

//           {/* MAIN CIRCLE - Your Custom Video Goes Here */}
//           <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[558px] lg:h-[564px]">
//             <div className="absolute inset-0 rounded-full overflow-hidden bg-white shadow-xl lg:shadow-2xl">
//               {/* YOUR CIRCULAR VIDEO PLACEHOLDER */}
//               <div className="w-full h-full bg-transparent flex items-center justify-center relative">
//                 {/* This is where your circular cutout video will go */}
//                 <video
//                   className="w-full h-full object-cover"
//                   autoPlay
//                   loop
//                   muted
//                   playsInline
//                   poster="/img/elephant-alone.svg"
//                 >
//                   {/* REPLACE WITH YOUR CUSTOM CIRCULAR VIDEO */}
//                   <source src="video/phone-light.mp4" type="video/mp4" />
//                 </video>
//               </div>
//             </div>
//           </div>

//           {/* Globe Icon Badge - Bottom Left of Circle */}
//           <div className="absolute bottom-2 left-4 sm:bottom-4 sm:left-8 lg:bottom-4 lg:left-12 z-20 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full bg-white shadow-xl lg:shadow-2xl flex items-center justify-center border border-gray-300">
//             <svg
//               className="w-10 h-10 sm:w-14 sm:h-14 lg:w-20 lg:h-20 text-amber-100"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <title>icon</title>
//               <path
//                 d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
//                 fill="#64748b"
//               />
//             </svg>
//           </div>
//         </div>

//         {/* RIGHT SIDE - Content (No boxes, just flowing text) */}
//         <div className="lg:w-1/2 lg:pl-16 space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left">
//           {/* Pre-Business Badge */}
//           <div className="inline-block">
//             <button
//               type="button"
//               className="rounded-full border border-amber-300 bg-linear-to-r from-rose-500 via-orange-400 to-amber-400 px-4 py-2 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium text-orange-900 hover:from-rose-500 hover:via-pink-400 hover:to-amber-600 hover:border-purple-200 transition-all duration-500 hover:scale-105"
//             >
//               Pre-Business
//             </button>
//           </div>

//           {/* Main Heading - Gradient Text */}
//           <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[120px] font-flex leading-[0.95] tracking-tight">
//             <span
//               className="bg-[linear-gradient(to_right,white,#a5b4fc,#c084fc)]
//          bg-clip-text
//          text-transparent
//          [-webkit-text-fill-color:transparent]
//          [-webkit-text-stroke:1px_#9ca3af]"
//             >
//               Every Thing
//             </span>

//             <span className="block bg-linear-to-r from-rose-500 via-orange-400 to-amber-400 bg-clip-text text-transparent">
//               Built In
//             </span>
//           </h1>

//           {/* Download Button */}
//           <div className="pt-4 sm:pt-6">
//             <button
//               type="button"
//               className="group relative px-8 py-3 sm:px-12 sm:py-4 lg:px-16 lg:py-5 text-lg sm:text-xl lg:text-2xl font-bold text-white rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl hover:shadow-[0_20px_60px_rgba(168,85,247,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
//             >
//               <div className="absolute inset-0 bg-linear-to-r from-rose-600 via-pink-400 to-orange-400" />
//               <div className="absolute inset-0 border-purple-200 bg-linear-to-r from-rose-600 via-pink-400 to-orange-400 px-5 py-2 text-sm font-medium text-gray-950 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//               <span className="relative z-10 tracking-wide">Download</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Circle
// const Circle: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-white relative overflow-hidden">
//       {/* Abstract Shape - Bottom Left Angle - Hidden on mobile */}
//       <div className="hidden lg:block absolute bottom-0 left-0 w-2/5 h-3/5 pointer-events-none">
//         <div
//           className="absolute inset-0 bg-transparent opacity-95 bg-[radial-gradient(125%_125%_at_50%_90%,#fff_40%,#7c3aed_100%)]"
//           style={{
//             clipPath: 'polygon(0 50%, 75% 0, 50% 50%, 0 90%)',
//             borderTopRightRadius: '10px',
//           }}
//         />
//       </div>

//       {/* Right Side Gradient Background - Hidden on mobile */}
//       <div className="hidden lg:block absolute top-0 right-0 w-3/5 h-full pointer-events-none">
//         <div
//           className="absolute top-0 right-0 w-full h-2/3 bg-[radial-gradient(125%_125%_at_50%_90%,#fff_40%,#7c3aed_100%)] rounded-full"
//           style={{
//             clipPath: 'polygon(0 50%, 75% 0, 50% 50%, 0 90%)',
//             borderTopRightRadius: '10px',
//           }}
//         />
//       </div>

//       {/* Purple Curve Element - Bottom Right - Hidden on mobile */}
//       <div className="hidden lg:block absolute top-0 right-0 w-68 h-full pointer-events-none">
//         <svg
//           className="absolute top-32 -right-26 w-96 h-96"
//           viewBox="0 0 200 400"
//           fill="none"
//         >
//           <title>Purple Decorative Curve</title>
//           <path
//             d="M200 0 Q120 200 200 400 L200 0 Z"
//             fill="url(#purpleGradient)"
//             opacity="0.4"
//           />
//           <defs>
//             <linearGradient
//               id="purpleGradient"
//               x1="0%"
//               y1="0%"
//               x2="100%"
//               y2="100%"
//             >
//               <stop offset="0%" stopColor="#a855f7" />
//               <stop offset="100%" stopColor="#6366f1" />
//             </linearGradient>
//           </defs>
//         </svg>
//       </div>

//       {/* Main Content Container */}
//       <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-16 py-6 sm:py-8 lg:py-12 min-h-[85vh] lg:min-h-[90vh] pt-24 sm:pt-28 lg:pt-12">
//         {/* LEFT SIDE - THE CIRCLE (HERO ELEMENT) */}
//         <div className="relative w-full lg:w-1/2 flex items-center justify-center mb-2 sm:mb-3 lg:mb-0">
//           {/* Decorative Outer Circles - Hidden on mobile */}
//           <div className="hidden lg:block absolute">
//             <div
//               className="w-[620px] h-[620px] rounded-full border-[6px] border-rose-500/40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"
//               style={{ animationDuration: '3s' }}
//             />
//             <div
//               className="w-[640px] h-[640px] rounded-full border-4 border-purple-400/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"
//               style={{ animationDuration: '4s' }}
//             />
//             <div
//               className="w-[660px] h-[660px] rounded-full border-2 border-cyan-400/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"
//               style={{ animationDuration: '5s' }}
//             />
//           </div>

//           {/* MAIN CIRCLE - Your Custom Video Goes Here */}
//           <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[558px] lg:h-[564px]">
//             <div className="absolute inset-0 rounded-full overflow-hidden bg-white shadow-xl lg:shadow-2xl">
//               {/* YOUR CIRCULAR VIDEO PLACEHOLDER */}
//               <div className="w-full h-full bg-transparent flex items-center justify-center relative">
//                 {/* This is where your circular cutout video will go */}
//                 <video
//                   className="w-full h-full object-cover"
//                   autoPlay
//                   loop
//                   muted
//                   playsInline
//                   poster="/img/elephant-alone.svg"
//                 >
//                   {/* REPLACE WITH YOUR CUSTOM CIRCULAR VIDEO */}
//                   <source src="video/phone-light.mp4" type="video/mp4" />
//                 </video>
//               </div>
//             </div>
//           </div>

//           {/* Globe Icon Badge - Bottom Left of Circle */}
//           <div className="absolute bottom-2 left-4 sm:bottom-4 sm:left-8 lg:bottom-4 lg:left-12 z-20 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full bg-white shadow-xl lg:shadow-2xl flex items-center justify-center border border-gray-300">
//             <svg
//               className="w-10 h-10 sm:w-14 sm:h-14 lg:w-20 lg:h-20 text-amber-100"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <title>icon</title>
//               <path
//                 d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
//                 fill="#64748b"
//               />
//             </svg>
//           </div>
//         </div>

//         {/* RIGHT SIDE - Content (No boxes, just flowing text) */}
//         <div className="w-full lg:w-1/2 lg:pl-16 space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left">
//           {/* Pre-Business Badge */}
//           <div className="inline-block">
//             <button
//               type="button"
//               className="rounded-full border border-amber-300 bg-linear-to-r from-rose-500 via-orange-400 to-amber-400 px-4 py-2 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium text-orange-900 hover:from-rose-500 hover:via-pink-400 hover:to-amber-600 hover:border-purple-200 transition-all duration-500 hover:scale-105"
//             >
//               Pre-Business
//             </button>
//           </div>

//           {/* Main Heading - Gradient Text */}
//           <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[120px] font-flex leading-[0.95] tracking-tight">
//             <span
//               className="bg-[linear-gradient(to_right,white,#a5b4fc,#c084fc)]
//          bg-clip-text
//          text-transparent
//          [-webkit-text-fill-color:transparent]
//          [-webkit-text-stroke:1px_#9ca3af]"
//             >
//               Every Thing
//             </span>

//             <span className="block bg-linear-to-r from-rose-500 via-orange-400 to-amber-400 bg-clip-text text-transparent">
//               Built In
//             </span>
//           </h1>

//           {/* Download Button */}
//           <div className="pt-4 sm:pt-6">
//             <button
//               type="button"
//               className="group relative px-8 py-3 sm:px-12 sm:py-4 lg:px-16 lg:py-5 text-lg sm:text-xl lg:text-2xl font-bold text-white rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl hover:shadow-[0_20px_60px_rgba(168,85,247,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
//             >
//               <div className="absolute inset-0 bg-linear-to-r from-rose-600 via-pink-400 to-orange-400" />
//               <div className="absolute inset-0 border-purple-200 bg-linear-to-r from-rose-600 via-pink-400 to-orange-400 px-5 py-2 text-sm font-medium text-gray-950 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//               <span className="relative z-10 tracking-wide">Download</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Circle
// const Circle: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-white relative overflow-hidden">
//       {/* Abstract Shape - Bottom Left Angle - Hidden on mobile */}
//       <div className="hidden lg:block absolute bottom-0 left-0 w-2/5 h-3/5 pointer-events-none">
//         <div
//           className="absolute inset-0 bg-transparent opacity-95 bg-[radial-gradient(125%_125%_at_50%_90%,#fff_40%,#7c3aed_100%)]"
//           style={{
//             clipPath: 'polygon(0 50%, 75% 0, 50% 50%, 0 90%)',
//             borderTopRightRadius: '10px',
//           }}
//         />
//       </div>

//       {/* Right Side Gradient Background - Hidden on mobile */}
//       <div className="hidden lg:block absolute top-0 right-0 w-3/5 h-full pointer-events-none">
//         <div
//           className="absolute top-0 right-0 w-full h-2/3 bg-[radial-gradient(125%_125%_at_50%_90%,#fff_40%,#7c3aed_100%)] rounded-full"
//           style={{
//             clipPath: 'polygon(0 50%, 75% 0, 50% 50%, 0 90%)',
//             borderTopRightRadius: '10px',
//           }}
//         />
//       </div>

//       {/* Purple Curve Element - Bottom Right - Hidden on mobile */}
//       <div className="hidden lg:block absolute top-0 right-0 w-68 h-full pointer-events-none">
//         <svg
//           className="absolute top-32 -right-26 w-96 h-96"
//           viewBox="0 0 200 400"
//           fill="none"
//         >
//           <title>Purple Decorative Curve</title>
//           <path
//             d="M200 0 Q120 200 200 400 L200 0 Z"
//             fill="url(#purpleGradient)"
//             opacity="0.4"
//           />
//           <defs>
//             <linearGradient
//               id="purpleGradient"
//               x1="0%"
//               y1="0%"
//               x2="100%"
//               y2="100%"
//             >
//               <stop offset="0%" stopColor="#a855f7" />
//               <stop offset="100%" stopColor="#6366f1" />
//             </linearGradient>
//           </defs>
//         </svg>
//       </div>

//       {/* Main Content Container */}
//       <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-16 py-6 sm:py-8 lg:py-12 min-h-[85vh] lg:min-h-[90vh] pt-16 sm:pt-20 lg:pt-12">
//         {/* LEFT SIDE - THE CIRCLE (HERO ELEMENT) */}
//         <div className="relative w-full lg:w-1/2 flex items-center justify-center mb-4 sm:mb-6 lg:mb-0">
//           {/* Decorative Outer Circles - Hidden on mobile */}
//           <div className="hidden lg:block absolute">
//             <div
//               className="w-[620px] h-[620px] rounded-full border-[6px] border-rose-500/40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"
//               style={{ animationDuration: '3s' }}
//             />
//             <div
//               className="w-[640px] h-[640px] rounded-full border-4 border-purple-400/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"
//               style={{ animationDuration: '4s' }}
//             />
//             <div
//               className="w-[660px] h-[660px] rounded-full border-2 border-cyan-400/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"
//               style={{ animationDuration: '5s' }}
//             />
//           </div>

//           {/* MAIN CIRCLE - Your Custom Video Goes Here */}
//           <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[558px] lg:h-[564px]">
//             <div className="absolute inset-0 rounded-full overflow-hidden bg-white shadow-xl lg:shadow-2xl">
//               {/* YOUR CIRCULAR VIDEO PLACEHOLDER */}
//               <div className="w-full h-full bg-transparent flex items-center justify-center relative">
//                 {/* This is where your circular cutout video will go */}
//                 <video
//                   className="w-full h-full object-cover"
//                   autoPlay
//                   loop
//                   muted
//                   playsInline
//                   poster="/img/elephant-alone.svg"
//                 >
//                   {/* REPLACE WITH YOUR CUSTOM CIRCULAR VIDEO */}
//                   <source src="video/phone-light.mp4" type="video/mp4" />
//                 </video>
//               </div>
//             </div>
//           </div>

//           {/* Globe Icon Badge - Bottom Left of Circle */}
//           <div className="absolute bottom-2 left-4 sm:bottom-4 sm:left-8 lg:bottom-4 lg:left-12 z-20 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full bg-white shadow-xl lg:shadow-2xl flex items-center justify-center border border-gray-300">
//             <svg
//               className="w-10 h-10 sm:w-14 sm:h-14 lg:w-20 lg:h-20 text-amber-100"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <title>icon</title>
//               <path
//                 d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
//                 fill="#64748b"
//               />
//             </svg>
//           </div>
//         </div>

//         {/* RIGHT SIDE - Content (No boxes, just flowing text) */}
//         <div className="w-full lg:w-1/2 lg:pl-16 space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left">
//           {/* Pre-Business Badge */}
//           <div className="inline-block">
//             <button
//               type="button"
//               className="rounded-full border border-amber-300 bg-linear-to-r from-rose-500 via-orange-400 to-amber-400 px-4 py-2 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium text-orange-900 hover:from-rose-500 hover:via-pink-400 hover:to-amber-600 hover:border-purple-200 transition-all duration-500 hover:scale-105"
//             >
//               Pre-Business
//             </button>
//           </div>

//           {/* Main Heading - Gradient Text */}
//           <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[120px] font-flex leading-[0.95] tracking-tight">
//             <span
//               className="bg-[linear-gradient(to_right,white,#a5b4fc,#c084fc)]
//          bg-clip-text
//          text-transparent
//          [-webkit-text-fill-color:transparent]
//          [-webkit-text-stroke:1px_#9ca3af]"
//             >
//               Every Thing
//             </span>

//             <span className="block bg-linear-to-r from-rose-500 via-orange-400 to-amber-400 bg-clip-text text-transparent">
//               Built In
//             </span>
//           </h1>

//           {/* Download Button */}
//           <div className="pt-4 sm:pt-6">
//             <button
//               type="button"
//               className="group relative px-8 py-3 sm:px-12 sm:py-4 lg:px-16 lg:py-5 text-lg sm:text-xl lg:text-2xl font-bold text-white rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl hover:shadow-[0_20px_60px_rgba(168,85,247,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
//             >
//               <div className="absolute inset-0 bg-linear-to-r from-rose-600 via-pink-400 to-orange-400" />
//               <div className="absolute inset-0 border-purple-200 bg-linear-to-r from-rose-600 via-pink-400 to-orange-400 px-5 py-2 text-sm font-medium text-gray-950 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//               <span className="relative z-10 tracking-wide">Download</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Circle
// const Circle: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-white relative overflow-hidden">
//       {/* Abstract Shape - Bottom Left Angle - Hidden on mobile */}
//       <div className="hidden lg:block absolute bottom-0 left-0 w-2/5 h-3/5 pointer-events-none">
//         <div
//           className="absolute inset-0 bg-transparent opacity-95 bg-[radial-gradient(125%_125%_at_50%_90%,#fff_40%,#7c3aed_100%)]"
//           style={{
//             clipPath: 'polygon(0 50%, 75% 0, 50% 50%, 0 90%)',
//             borderTopRightRadius: '10px',
//           }}
//         />
//       </div>

//       {/* Right Side Gradient Background - Hidden on mobile */}
//       <div className="hidden lg:block absolute top-0 right-0 w-3/5 h-full pointer-events-none">
//         <div
//           className="absolute top-0 right-0 w-full h-2/3 bg-[radial-gradient(125%_125%_at_50%_90%,#fff_40%,#7c3aed_100%)] rounded-full"
//           style={{
//             clipPath: 'polygon(0 50%, 75% 0, 50% 50%, 0 90%)',
//             borderTopRightRadius: '10px',
//           }}
//         />
//       </div>

//       {/* Purple Curve Element - Bottom Right - Hidden on mobile */}
//       <div className="hidden lg:block absolute top-0 right-0 w-68 h-full pointer-events-none">
//         <svg
//           className="absolute top-32 -right-26 w-96 h-96"
//           viewBox="0 0 200 400"
//           fill="none"
//         >
//           <title>Purple Decorative Curve</title>
//           <path
//             d="M200 0 Q120 200 200 400 L200 0 Z"
//             fill="url(#purpleGradient)"
//             opacity="0.4"
//           />
//           <defs>
//             <linearGradient
//               id="purpleGradient"
//               x1="0%"
//               y1="0%"
//               x2="100%"
//               y2="100%"
//             >
//               <stop offset="0%" stopColor="#a855f7" />
//               <stop offset="100%" stopColor="#6366f1" />
//             </linearGradient>
//           </defs>
//         </svg>
//       </div>

//       {/* Main Content Container */}
//       <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-16 py-6 sm:py-8 lg:py-12 min-h-[85vh] lg:min-h-[90vh]">
//         {/* LEFT SIDE - THE CIRCLE (HERO ELEMENT) */}
//         <div className="relative w-full lg:w-1/2 flex items-center justify-center mb-4 sm:mb-6 lg:mb-0">
//           {/* Decorative Outer Circles - Hidden on mobile */}
//           <div className="hidden lg:block absolute">
//             <div
//               className="w-[620px] h-[620px] rounded-full border-[6px] border-rose-500/40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"
//               style={{ animationDuration: '3s' }}
//             />
//             <div
//               className="w-[640px] h-[640px] rounded-full border-4 border-purple-400/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"
//               style={{ animationDuration: '4s' }}
//             />
//             <div
//               className="w-[660px] h-[660px] rounded-full border-2 border-cyan-400/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"
//               style={{ animationDuration: '5s' }}
//             />
//           </div>

//           {/* MAIN CIRCLE - Your Custom Video Goes Here */}
//           <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[558px] lg:h-[564px]">
//             <div className="absolute inset-0 rounded-full overflow-hidden bg-white shadow-xl lg:shadow-2xl">
//               {/* YOUR CIRCULAR VIDEO PLACEHOLDER */}
//               <div className="w-full h-full bg-transparent flex items-center justify-center relative">
//                 {/* This is where your circular cutout video will go */}
//                 <video
//                   className="w-full h-full object-cover"
//                   autoPlay
//                   loop
//                   muted
//                   playsInline
//                   poster="/img/elephant-alone.svg"
//                 >
//                   {/* REPLACE WITH YOUR CUSTOM CIRCULAR VIDEO */}
//                   <source src="video/phone-light.mp4" type="video/mp4" />
//                 </video>
//               </div>
//             </div>
//           </div>

//           {/* Globe Icon Badge - Bottom Left of Circle */}
//           <div className="absolute bottom-2 left-4 sm:bottom-4 sm:left-8 lg:bottom-4 lg:left-12 z-20 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full bg-white shadow-xl lg:shadow-2xl flex items-center justify-center border border-gray-300">
//             <svg
//               className="w-10 h-10 sm:w-14 sm:h-14 lg:w-20 lg:h-20 text-amber-100"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <title>icon</title>
//               <path
//                 d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
//                 fill="#64748b"
//               />
//             </svg>
//           </div>
//         </div>

//         {/* RIGHT SIDE - Content (No boxes, just flowing text) */}
//         <div className="w-full lg:w-1/2 lg:pl-16 space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left">
//           {/* Pre-Business Badge */}
//           <div className="inline-block">
//             <button
//               type="button"
//               className="rounded-full border border-amber-300 bg-linear-to-r from-rose-500 via-orange-400 to-amber-400 px-4 py-2 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium text-orange-900 hover:from-rose-500 hover:via-pink-400 hover:to-amber-600 hover:border-purple-200 transition-all duration-500 hover:scale-105"
//             >
//               Pre-Business
//             </button>
//           </div>

//           {/* Main Heading - Gradient Text */}
//           <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[120px] font-flex leading-[0.95] tracking-tight">
//             <span
//               className="bg-[linear-gradient(to_right,white,#a5b4fc,#c084fc)]
//          bg-clip-text
//          text-transparent
//          [-webkit-text-fill-color:transparent]
//          [-webkit-text-stroke:1px_#9ca3af]"
//             >
//               Every Thing
//             </span>

//             <span className="block bg-linear-to-r from-rose-500 via-orange-400 to-amber-400 bg-clip-text text-transparent">
//               Built In
//             </span>
//           </h1>

//           {/* Download Button */}
//           <div className="pt-4 sm:pt-6">
//             <button
//               type="button"
//               className="group relative px-8 py-3 sm:px-12 sm:py-4 lg:px-16 lg:py-5 text-lg sm:text-xl lg:text-2xl font-bold text-white rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl hover:shadow-[0_20px_60px_rgba(168,85,247,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
//             >
//               <div className="absolute inset-0 bg-linear-to-r from-rose-600 via-pink-400 to-orange-400" />
//               <div className="absolute inset-0 border-purple-200 bg-linear-to-r from-rose-600 via-pink-400 to-orange-400 px-5 py-2 text-sm font-medium text-gray-950 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//               <span className="relative z-10 tracking-wide">Download</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Circle
// const Circle: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-linear-to-br from-purple-50 via-white to-white relative overflow-hidden">
//       {/* Abstract Shape - Bottom Left Angle */}
//       <div className="absolute bottom-0 left-0 w-2/5 h-3/5 pointer-events-none">
//         <div
//           className="absolute inset-0 bg-transparent opacity-95 bg-[radial-gradient(125%_125%_at_50%_90%,#fff_40%,#7c3aed_100%)]"
//           style={{
//             clipPath: 'polygon(0 50%, 75% 0, 50% 50%, 0 90%)',
//             borderTopRightRadius: '10px',
//           }}
//         />
//       </div>

//       {/* Right Side Gradient Background - Flows Naturally */}
//       <div className="absolute top-0 right-0 w-3/5 h-full pointer-events-none">
//         <div
//           className="absolute top-0 right-0 w-full h-2/3 bg-[radial-gradient(125%_125%_at_50%_90%,#fff_40%,#7c3aed_100%)] rounded-full"
//           style={{
//             clipPath: 'polygon(0 50%, 75% 0, 50% 50%, 0 90%)',
//             borderTopRightRadius: '10px',
//           }}
//         />
//       </div>

//       {/* Purple Curve Element - Bottom Right */}
//       <div className="absolute top-0 right-0 w-68 h-full pointer-events-none">
//         <svg
//           className="absolute top-32 -right-26 w-96 h-96"
//           viewBox="0 0 200 400"
//           fill="none"
//         >
//           <title>Purple Decorative Curve</title>
//           <path
//             d="M200 0 Q120 200 200 400 L200 0 Z"
//             fill="url(#purpleGradient)"
//             opacity="0.4"
//           />
//           <defs>
//             <linearGradient
//               id="purpleGradient"
//               x1="0%"
//               y1="0%"
//               x2="100%"
//               y2="100%"
//             >
//               <stop offset="0%" stopColor="#a855f7" />
//               <stop offset="100%" stopColor="#6366f1" />
//             </linearGradient>
//           </defs>
//         </svg>
//       </div>

//       {/* Main Content Container */}
//       <div className="relative z-10 flex items-center justify-between px-16 py-8 min-h-[calc(100vh-120px)]">
//         {/* LEFT SIDE - THE CIRCLE (HERO ELEMENT) */}
//         <div className="relative w-1/2 flex items-center justify-center">
//           {/* Decorative Outer Circles */}
//           <div className="absolute">
//             <div
//               className="w-[620px] h-[620px] rounded-full border-[6px] border-rose-500/40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"
//               style={{ animationDuration: '3s' }}
//             />
//             <div
//               className="w-[640px] h-[640px] rounded-full border-4 border-purple-400/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"
//               style={{ animationDuration: '4s' }}
//             />
//             <div
//               className="w-[660px] h-[660px] rounded-full border-2 border-cyan-400/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"
//               style={{ animationDuration: '5s' }}
//             />
//           </div>

//           {/* MAIN CIRCLE - Your Custom Video Goes Here */}
//           <div className="relative z-10 w-[558px] h-[564px]">
//             <div className="absolute inset-0 rounded-full overflow-hidden bg-white shadow-1xl">
//               {/* YOUR CIRCULAR VIDEO PLACEHOLDER */}
//               <div className="w-full h-full bg-transparent flex items-center justify-center relative">
//                 {/* This is where your circular cutout video will go */}
//                 <video
//                   className="w-full h-full object-cover"
//                   autoPlay
//                   loop
//                   muted
//                   playsInline
//                   poster="/img/elephant-alone.svg"
//                 >
//                   {/* REPLACE WITH YOUR CUSTOM CIRCULAR VIDEO */}
//                   <source src="video/phone-light.mp4" type="video/mp4" />
//                 </video>
//               </div>
//             </div>
//           </div>

//           {/* Globe Icon Badge - Bottom Left of Circle */}
//           <div className="absolute bottom-4 left-12 z-20 w-32 h-32 rounded-full bg-white shadow-2xl flex items-center justify-center border border-gray-300">
//             <svg
//               className="w-20 h-20 text-amber-100"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <title>icon</title>
//               <path
//                 d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
//                 fill="#64748b"
//               />
//             </svg>
//           </div>
//         </div>

//         {/* RIGHT SIDE - Content (No boxes, just flowing text) */}
//         <div className="w-1/2 pl-16 space-y-8">
//           {/* Pre-Business Badge */}
//           <div className="inline-block">
//             <button
//               type="button"
//               className="rounded-full border  border-amber-300  bg-linear-to-r from-rose-500 via-orange-400 to-amber-400 px-5 py-2 text-sm font-medium text-organge-900 hover:from-rose-500 hover:via-pink-400 hover:to-amber-600 Hover:border-purple-200 transition-all duration-500 hover:scale-105"
//             >
//               Pre-Business
//             </button>
//           </div>

//           {/* Main Heading - Gradient Text */}
//           <h1 className="text-[120px] font-flex leading-[0.95] tracking-tight">
//             <span
//               className="bg-[linear-gradient(to_right,white,#a5b4fc,#c084fc)]
//          bg-clip-text
//          text-transparent
//          [-webkit-text-fill-color:transparent]
//          [-webkit-text-stroke:1px_#9ca3af]"
//             >
//               Every Thing
//             </span>

//             <span className="block bg-linear-to-r from-rose-500 via-orange-400 to-amber-400 bg-clip-text text-transparent">
//               Built In
//             </span>
//           </h1>

//           {/* Download Button */}
//           <div className="pt-6">
//             <button
//               type="button"
//               className="group relative px-16 py-5 text-2xl font-bold text-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_20px_60px_rgba(168,85,247,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
//             >
//               <div className="absolute inset-0  bg-linear-to-r from-rose-600 via-pink-400 to-orange-400" />
//               <div className="absolute inset-0 border-purple-200 bg-linear-to-r from-rose-600 via-pink-400 to-orange-400  px-5 py-2 text-sm font-medium text-gray-950 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//               <span className="relative z-10 tracking-wide">Download</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Circle

