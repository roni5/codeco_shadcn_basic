import Image from 'next/image'

const Insights: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 md:mt-1">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* ================= LEFT: IMAGE ================= */}
          <div className="lg:w-1/2">
            {/* 
              IMPORTANT:
              These wrapper divs are preserved intentionally.
              Do NOT collapse them — they belong to other layouts.
            */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden">
                <Image
                  src="/img/working-on-laptops.jpeg"
                  alt="Get better insights to drive your business."
                  className="w-full rounded-3xl"
                  width={768}
                  height={500}
                  priority={false}
                />
              </div>
            </div>
          </div>

          {/* ================= RIGHT: CONTENT ================= */}
          <div className="lg:w-1/2">
            <h3 className="mb-8 text-3xl font-bold md:mb-12 md:text-4xl lg:text-5xl bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent">
              Get better insights to drive your business.
            </h3>

            <ul className="space-y-8 md:space-y-10">
              {/* Item 1 */}
              <li className="group">
                <div className="flex gap-4 rounded-2xl p-6 transition-all duration-300 hover:bg-muted/10 md:gap-6">
                  <div className="shrink-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary transition-transform duration-300 group-hover:scale-110 md:h-16 md:w-16">
                      <svg
                        viewBox="0 0 45 45"
                        className="h-8 w-8 text-primary-foreground md:h-9 md:w-9"
                        aria-hidden
                      >
                        <path
                          d="m27.6 14.8 2.9 2.9-6.2 6.3-5.1-5.1-9.5 9.5 1.8 1.8 7.7-7.7 5.1 5.1 8.1-8.1 2.9 2.9v-7.7h-7.7z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-3 text-xl font-bold md:text-2xl">
                      Grow your business with solutions for all of your needs.
                    </h4>
                    <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                      Our free analytics and optimisation tools help you grow
                      your business with smarter marketing.
                    </p>
                  </div>
                </div>
              </li>

              {/* Item 2 */}
              <li className="group">
                <div className="flex gap-4 rounded-2xl p-6 transition-all duration-300 hover:bg-muted/10 md:gap-6">
                  <div className="shrink-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary to-accent transition-transform duration-300 group-hover:scale-110 md:h-16 md:w-16">
                      <svg
                        viewBox="0 0 45 45"
                        className="h-8 w-8 text-primary-foreground md:h-9 md:w-9"
                        aria-hidden
                      >
                        <path
                          d="m33.2 29.5-9.1-9.1a6.42 6.42 0 0 0-1.5-6.9 6.61 6.61 0 0 0-7.4-1.3l4.3 4.3-3 3-4.4-4.3a6.54 6.54 0 0 0 8.2 8.9l9.1 9.1a1 1 0 0 0 1.4 0l2.3-2.3a.9.9 0 0 0 .1-1.4z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-3 text-xl font-bold md:text-2xl">
                      Easy-to-use tools.
                    </h4>
                    <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                      Simple tools with powerful insights enable you to spend
                      less time analysing data and more time delighting
                      customers.
                    </p>
                  </div>
                </div>
              </li>

              {/* Item 3 */}
              <li className="group">
                <div className="flex gap-4 rounded-2xl p-6 transition-all duration-300 hover:bg-muted/10 md:gap-6">
                  <div className="shrink-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-primary transition-transform duration-300 group-hover:scale-110 md:h-16 md:w-16">
                      <svg
                        viewBox="0 0 45 45"
                        className="h-8 w-8 text-primary-foreground md:h-9 md:w-9"
                        aria-hidden
                      ><title>checklist icon</title>  
                        <path
                          d="m25 20h-16v2.67h16zm0-5.34h-16v2.67h16zm-16 13.34h10.68v-2.66h-10.68zm26-6 2 2-9.3 9.35-6-6 2-2 4 4z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-3 text-xl font-bold md:text-2xl">
                      Big results for smaller budgets.
                    </h4>
                    <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                      Access free and self-service solutions that take your
                      marketing to new heights at little to no cost.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Insights


// export default function Insights() {
//   return (
//     <>
//       <div className="lg:w-1/2">
//         <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 bg-linear-to-r from-primary via-foreground to-accent bg-clip-text text-transparent">
//           Get better insights to drive your business.
//         </h3>

//         <ul className="space-y-8 md:space-y-10">
//           <li className="relative group">
//             <div className="flex gap-4 md:gap-6 p-6 rounded-2xl hover:bg-muted/10 transition-all duration-300">
//               <div className="shrink-0">
//                 <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 45 45"
//                     className="w-8 h-8 md:w-9 md:h-9 text-primary-foreground"
//                     role="img"
//                     aria-label="zig zag up arrow icon"
//                   >
//                     <path
//                       d="m27.6 14.8 2.9 2.9-6.2 6.3-5.1-5.1-9.5 9.5 1.8 1.8 7.7-7.7 5.1 5.1 8.1-8.1 2.9 2.9v-7.7h-7.7z"
//                       fill="currentColor"
//                     />
//                   </svg>
//                 </div>
//               </div>
//               <div>
//                 <h4 className="text-xl md:text-2xl font-bold mb-3 text-foreground">
//                   Grow your business with solutions for all of your needs.
//                 </h4>
//                 <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
//                   Our free analytics and optimisation tools help you grow your
//                   business with smarter marketing.
//                 </p>
//               </div>
//             </div>
//           </li>

//           <li className="relative group">
//             <div className="flex gap-4 md:gap-6 p-6 rounded-2xl hover:bg-muted/10 transition-all duration-300">
//               <div className="flex-shrink-0">
//                 <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 45 45"
//                     className="w-8 h-8 md:w-9 md:h-9 text-primary-foreground"
//                     role="img"
//                     aria-label="settings icon"
//                   >
//                     <path
//                       d="m33.2 29.5-9.1-9.1a6.42 6.42 0 0 0-1.5-6.9 6.61 6.61 0 0 0-7.4-1.3l4.3 4.3-3 3-4.4-4.3a6.54 6.54 0 0 0 8.2 8.9l9.1 9.1a1 1 0 0 0 1.4 0l2.3-2.3a.9.9 0 0 0 .1-1.4z"
//                       fill="currentColor"
//                     />
//                   </svg>
//                 </div>
//               </div>
//               <div>
//                 <h4 className="text-xl md:text-2xl font-bold mb-3 text-foreground">
//                   Easy-to-use tools.
//                 </h4>
//                 <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
//                   Simple tools with powerful insights enable you to spend less
//                   time analysing data and more time delighting customers.
//                 </p>
//               </div>
//             </div>
//           </li>

//           <li className="relative group">
//             <div className="flex gap-4 md:gap-6 p-6 rounded-2xl hover:bg-muted/10 transition-all duration-300">
//               <div className="flex-shrink-0">
//                 <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 45 45"
//                     className="w-8 h-8 md:w-9 md:h-9 text-primary-foreground"
//                     role="img"
//                     aria-label="checklist icon"
//                   >
//                     <path
//                       d="m25 20h-16v2.67h16zm0-5.34h-16v2.67h16zm-16 13.34h10.68v-2.66h-10.68zm26-6 2 2-9.3 9.35-6-6 2-2 4 4z"
//                       fill="currentColor"
//                     />
//                   </svg>
//                 </div>
//               </div>
//               <div>
//                 <h4 className="text-xl md:text-2xl font-bold mb-3 text-foreground">
//                   Big results for smaller budgets.
//                 </h4>
//                 <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
//                   Access free and self-service solutions that take your
//                   marketing to new heights at little to no cost to your
//                   business.
//                 </p>
//               </div>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </>
//   )
// }
