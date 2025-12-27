import { ArrowRight } from 'lucide-react'

export default function FourSectionPurple() {
  return (
    <section
      id="features"
      className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="group bg-fuchsia-100 hover:bg-linear-to-r from-purple-400 via-pink-500 to-red-500 rounded-2xl p-8 transition-all duration-300 border border-purple-200 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/20">
            <div className="w-56 h-48 mb-6 bg-linear-to-r from-gray-50 via-gray-100 to-gray-50 rounded-xl flex items-center justify-center mx-auto group-hover:bg-white/10 transition-all duration-300">
              <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                ⌖
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-white transition-colors duration-300">
              Easy to Use
            </h3>
            <p className="text-gray-600 group-hover:text-white/90 mb-6 leading-relaxed transition-colors duration-300">
              Solve data problems with ease. Drag-and-drop interface and
              AI-guided data automation enables anyone to analyze, discover, and
              share insights.
            </p>
            <a
              href="/"
              className="text-purple-600 group-hover:text-white inline-flex items-center space-x-2 font-medium transition-colors duration-300"
            >
              <span>Learn More</span>
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={16}
              />
            </a>
          </div>

          {/* Feature 2 */}
          <div className="group  bg-fuchsia-100 hover:bg-linear-to-r from-purple-400 via-pink-500 to-red-500 rounded-2xl p-8 transition-all duration-300 border border-purple-200 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/20">
            <div className="w-56 h-48 mb-6 bg-linear-to-r from-gray-50 via-gray-100 to-gray-50 rounded-xl flex items-center justify-center mx-auto group-hover:bg-white/10 transition-all duration-300">
              <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                &#x26AB;
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-white transition-colors duration-300">
              Automate Data at Scale
            </h3>
            <p className="text-gray-600 group-hover:text-white/90 mb-6 leading-relaxed transition-colors duration-300">
              Go from menial tasks to meaningful work. Eliminate repetitive work
              and manual errors with data automation and repeatable workflows.
            </p>
            <a
              href="/"
              className="text-purple-600 group-hover:text-white inline-flex items-center space-x-2 font-medium transition-colors duration-300"
            >
              <span>Learn More</span>
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={16}
              />
            </a>
          </div>

          {/* Feature 3 */}
          <div className="group bg-fuchsia-100 hover:bg-linear-to-r from-purple-400 via-pink-500 to-red-500  rounded-2xl p-8 transition-all duration-300 border border-purple-200 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/20">
            <div className="w-56 h-48 mb-6 bg-linear-to-r from-gray-50 via-gray-100 to-gray-50 rounded-xl flex items-center justify-center mx-auto group-hover:bg-white/10 transition-all duration-300">
              <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                &#x2318;
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-white transition-colors duration-300">
              Boost Data Analytics Productivity
            </h3>
            <p className="text-gray-600 group-hover:text-white/90 mb-6 leading-relaxed transition-colors duration-300">
              Prep less and deliver more. Self-service data prep and automated
              data analytics help analysts accelerate business impact.
            </p>
            <a
              href="/"
              className="text-purple-600 group-hover:text-white inline-flex items-center space-x-2 font-medium transition-colors duration-300"
            >
              <span>Learn More</span>
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={16}
              />
            </a>
          </div>

          {/* Feature 4 */}
          <div className="group bg-fuchsia-100 hover:bg-linear-to-r from-purple-400 via-pink-500 to-red-500 rounded-2xl p-8 transition-all duration-300 border border-purple-200 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/20">
            <div className="w-56 h-48 mb-6 bg-linear-to-r from-gray-50 via-gray-100 to-gray-50 rounded-xl flex items-center justify-center mx-auto group-hover:bg-white/10 transition-all duration-300">
              <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                ⨀
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-white transition-colors duration-300">
              Ensure Governance
            </h3>
            <p className="text-gray-600 group-hover:text-white/90 mb-6 leading-relaxed transition-colors duration-300">
              Multi-layered governance you can trust. Proven and robust security
              and governance features that support IT compliance.
            </p>
            <a
              href="/"
              className="text-purple-600 group-hover:text-white inline-flex items-center space-x-2 font-medium transition-colors duration-300"
            >
              <span>Learn More</span>
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={16}
              />
            </a>
          </div>
        </div>

        <div className="text-center mt-16">
          <button
            type="button"
            className="relative overflow-hidden rounded-2xl px-8 py-3 text-lg font-semibold text-white shadow-xl hover:shadow-2xl hover:shadow-fuchsia-500/30 transition-all duration-300 hover:scale-105 active:scale-95 sm:px-12 sm:py-4 sm:text-xl lg:px-16 lg:py-5 lg:text-2xl"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-pink-600" />
            <span className="relative z-10 tracking-wide">
              Learn More About the Platform
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
// import { ArrowRight } from 'lucide-react'

// export default function FourSectionPurple() {
//   return (
//     <section
//       id="features"
//       className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white"
//     >
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Feature 1 */}
//           <div className="group bg-gradient-to-br from-purple-100 via-pink-50 to-fuchsia-100 hover:bg-gradient-to-br hover:from-fuchsia-600 hover:to-pink-600 rounded-2xl p-8 transition-all duration-300 border border-purple-200 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/20">
//             <div className="w-56 h-48 mb-6 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 rounded-xl flex items-center justify-center mx-auto group-hover:bg-white/10 transition-all duration-300">
//               <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
//                 ⌖
//               </div>
//             </div>
//             <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-white transition-colors duration-300">
//               Easy to Use
//             </h3>
//             <p className="text-gray-600 group-hover:text-white/90 mb-6 leading-relaxed transition-colors duration-300">
//               Solve data problems with ease. Drag-and-drop interface and
//               AI-guided data automation enables anyone to analyze, discover, and
//               share insights.
//             </p>
//             <a
//               href="/"
//               className="text-purple-600 group-hover:text-white inline-flex items-center space-x-2 font-medium transition-colors duration-300"
//             >
//               <span>Learn More</span>
//               <ArrowRight
//                 className="group-hover:translate-x-1 transition-transform"
//                 size={16}
//               />
//             </a>
//           </div>

//           {/* Feature 2 */}
//           <div className="group bg-gradient-to-br from-purple-100 via-pink-50 to-fuchsia-100 hover:bg-gradient-to-br hover:from-fuchsia-600 hover:to-pink-600 rounded-2xl p-8 transition-all duration-300 border border-purple-200 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/20">
//             <div className="w-56 h-48 mb-6 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 rounded-xl flex items-center justify-center mx-auto group-hover:bg-white/10 transition-all duration-300">
//               <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
//                 &#x26AB;
//               </div>
//             </div>
//             <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-white transition-colors duration-300">
//               Automate Data at Scale
//             </h3>
//             <p className="text-gray-600 group-hover:text-white/90 mb-6 leading-relaxed transition-colors duration-300">
//               Go from menial tasks to meaningful work. Eliminate repetitive work
//               and manual errors with data automation and repeatable workflows.
//             </p>
//             <a
//               href="/"
//               className="text-purple-600 group-hover:text-white inline-flex items-center space-x-2 font-medium transition-colors duration-300"
//             >
//               <span>Learn More</span>
//               <ArrowRight
//                 className="group-hover:translate-x-1 transition-transform"
//                 size={16}
//               />
//             </a>
//           </div>

//           {/* Feature 3 */}
//           <div className="group bg-gradient-to-br from-purple-100 via-pink-50 to-fuchsia-100 hover:bg-gradient-to-br hover:from-fuchsia-600 hover:to-pink-600 rounded-2xl p-8 transition-all duration-300 border border-purple-200 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/20">
//             <div className="w-56 h-48 mb-6 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 rounded-xl flex items-center justify-center mx-auto group-hover:bg-white/10 transition-all duration-300">
//               <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
//                 &#x2318;
//               </div>
//             </div>
//             <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-white transition-colors duration-300">
//               Boost Data Analytics Productivity
//             </h3>
//             <p className="text-gray-600 group-hover:text-white/90 mb-6 leading-relaxed transition-colors duration-300">
//               Prep less and deliver more. Self-service data prep and automated
//               data analytics help analysts accelerate business impact.
//             </p>
//             <a
//               href="/"
//               className="text-purple-600 group-hover:text-white inline-flex items-center space-x-2 font-medium transition-colors duration-300"
//             >
//               <span>Learn More</span>
//               <ArrowRight
//                 className="group-hover:translate-x-1 transition-transform"
//                 size={16}
//               />
//             </a>
//           </div>

//           {/* Feature 4 */}
//           <div className="group bg-gradient-to-br from-purple-100 via-pink-50 to-fuchsia-100 hover:bg-gradient-to-br hover:from-fuchsia-600 hover:to-pink-600 rounded-2xl p-8 transition-all duration-300 border border-purple-200 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/20">
//             <div className="w-56 h-48 mb-6 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 rounded-xl flex items-center justify-center mx-auto group-hover:bg-white/10 transition-all duration-300">
//               <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
//                 ⨀
//               </div>
//             </div>
//             <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-white transition-colors duration-300">
//               Ensure Governance
//             </h3>
//             <p className="text-gray-600 group-hover:text-white/90 mb-6 leading-relaxed transition-colors duration-300">
//               Multi-layered governance you can trust. Proven and robust security
//               and governance features that support IT compliance.
//             </p>
//             <a
//               href="/"
//               className="text-purple-600 group-hover:text-white inline-flex items-center space-x-2 font-medium transition-colors duration-300"
//             >
//               <span>Learn More</span>
//               <ArrowRight
//                 className="group-hover:translate-x-1 transition-transform"
//                 size={16}
//               />
//             </a>
//           </div>
//         </div>

//         <div className="text-center mt-16">
//           <button
//             type="button"
//             className="relative overflow-hidden rounded-2xl px-8 py-3 text-lg font-semibold text-white shadow-xl hover:shadow-2xl hover:shadow-fuchsia-500/30 transition-all duration-300 hover:scale-105 active:scale-95 sm:px-12 sm:py-4 sm:text-xl lg:px-16 lg:py-5 lg:text-2xl"
//           >
//             <span className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-pink-600" />
//             <span className="relative z-10 tracking-wide">
//               Learn More About the Platform
//             </span>
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }
// import { ArrowRight } from 'lucide-react'
// // hover:scale-105 active:scale-95
// export default function FourSectionPurple() {
//   return (
//     <>
//       <section
//         id="features"
//         className="py-24  md:py-32 px-4 sm:px-6 lg:px-8 bg-white"
//       >
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {/* Feature 1 */}
//             <div className="group bg-linear-to-br from-rose-400 via-fuchsia-500 to-indigo-500 hover:backdrop-blur-sm rounded-2xl p-8 hover:bg-opacity-25 transition-all duration-300 border border-slate-300/50 hover:border-cyan-500/50">
//               <div className="w-56 h-48 mb-6 bg-linear-to-r from-gray-50 via-gray-100 to-gray-50 rounded-xl flex items-center justify-center mx-auto">
//                 <div className="text-6xl">⌖</div>
//               </div>
//               <h3 className="text-2xl font-bold mb-4 text-white">
//                 Easy to Use
//               </h3>
//               <p className="text-slate-300 mb-6 leading-relaxed">
//                 Solve data problems with ease. Drag-and-drop interface and
//                 AI-guided data automation enables anyone to analyze, discover,
//                 and share insights.
//               </p>
//               <a
//                 href="/"
//                 className="text-white hover:text-cyan-300 inline-flex items-center space-x-2 group"
//               >
//                 <span>Learn More</span>
//                 <ArrowRight
//                   className="group-hover:translate-x-1 transition-transform"
//                   size={16}
//                 />
//               </a>
//             </div>

//             {/* Feature 2 */}
//             <div className="group bg-linear-to-br from-rose-400 via-fuchsia-500 to-indigo-500 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-800/80 transition-all duration-300 border border-slate-700/50 hover:border-orange-500/50">
//               <div className="w-56 h-48 mb-6 bg-linear-to-r from-gray-50 via-gray-100 to-gray-50 rounded-xl flex items-center justify-center mx-auto">
//                 <div className="text-6xl">&#x26AB;</div>
//               </div>
//               <h3 className="text-2xl font-bold mb-4 text-white">
//                 Automate Data at Scale
//               </h3>
//               <p className="text-slate-300 mb-6 leading-relaxed">
//                 Go from menial tasks to meaningful work. Eliminate repetitive
//                 work and manual errors with data automation and repeatable
//                 workflows.
//               </p>
//               <a
//                 href="/"
//                 className="text-white hover:text-cyan-300 inline-flex items-center space-x-2 group"
//               >
//                 <span>Learn More</span>
//                 <ArrowRight
//                   className="group-hover:translate-x-1 transition-transform"
//                   size={16}
//                 />
//               </a>
//             </div>

//             {/* Feature 3 */}
//             <div className="group bg-linear-to-br from-rose-400 via-fuchsia-500 to-indigo-500 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-800/80 transition-all duration-300 border border-slate-700/50 hover:border-blue-500/50">
//               <div className="w-56 h-48 mb-6 bg-linear-to-r from-gray-50 via-gray-100 to-gray-50 rounded-xl flex items-center justify-center mx-auto">
//                 <div className="text-6xl">&#x2318;</div>
//               </div>
//               <h3 className="text-2xl font-bold mb-4 text-white">
//                 Boost Data Analytics Productivity
//               </h3>
//               <p className="text-slate-300 mb-6 leading-relaxed">
//                 Prep less and deliver more. Self-service data prep and automated
//                 data analytics help analysts accelerate business impact.
//               </p>
//               <a
//                 href="/"
//                 className="text-white hover:text-cyan-300 inline-flex items-center space-x-2 group"
//               >
//                 <span>Learn More</span>
//                 <ArrowRight
//                   className="group-hover:translate-x-1 transition-transform"
//                   size={16}
//                 />
//               </a>
//             </div>

//             {/* Feature 4 */}
//             <div className="group bg-linear-to-br from-rose-400 via-fuchsia-500 to-indigo-500 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-800/80 transition-all duration-300 border border-slate-700/50 hover:border-green-500/50">
//               <div className="w-56 h-48 mb-6 bg-linear-to-r from-gray-50 via-gray-100 to-gray-50 rounded-xl flex items-center justify-center mx-auto">
//                 <div className="text-6xl">⨀</div>
//               </div>
//               <h3 className="text-2xl font-bold mb-4 text-white">
//                 Ensure Governance
//               </h3>
//               <p className="text-slate-300 mb-6 leading-relaxed">
//                 Multi-layered governance you can trust. Proven and robust
//                 security and governance features that support IT compliance.
//               </p>
//               <a
//                 href="/"
//                 className="text-white hover:text-cyan-300 inline-flex items-center space-x-2 group"
//               >
//                 <span>Learn More</span>
//                 <ArrowRight
//                   className="group-hover:translate-x-1 transition-transform"
//                   size={16}
//                 />
//               </a>
//             </div>
//           </div>

//           <div className="text-center mt-16">
//             <button
//               type="button"
//               className="relative overflow-hidden rounded-2xl px-8 py-3 text-lg font-semibold text-white shadow-xl  hover:shadow-2xl hover:shadow-indigo-700/30 transition-all duration-300 hover:scale-105 active:scale-95  sm:px-12 sm:py-4 sm:text-xl lg:px-16 lg:py-5 lg:text-2xl"
//             >
//               <span className="absolute inset-0 bg-linear-to-r focus from-rose-400 via-fuchsia-500 to-indigo-500   " />
//               <span className="relative z-10 tracking-wide ">
//                 Learn More About the Platform
//               </span>
//             </button>
//             {/* <button
//               type="button"
//               className="px-8 py-4 bg-linear-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300"
//             >
//               Learn More About the Platform
//             </button> */}
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }