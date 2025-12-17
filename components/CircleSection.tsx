'use client'


const CircleSection: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-linear-to-br from-purple-50 via-white to-white pt-8 sm:pt-10 lg:pt-12">
      {/* Abstract Shape - Bottom Left Angle - Hidden on mobile */}
      <div className="pointer-events-none absolute bottom-0 left-0 hidden h-3/5 w-2/5 lg:block">
        <div
          className="absolute top-0 right-0 w-full h-2/3 bg-[radial-gradient(125%_125%_at_50%_90%,#fff_40%,#7c3aed_100%)] rounded-full"
          style={{
            clipPath: 'polygon(0 50%, 75% 0, 50% 50%, 0 90%)',
            borderTopRightRadius: '10px',
          }}
        />
      </div>

      {/* Right Side Gradient Background - Hidden on mobile */}
      <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-3/5 lg:block">
        <div
          className="absolute top-0 right-0 w-full h-2/3 bg-[radial-gradient(125%_125%_at_50%_90%,#fff_40%,#7c3aed_100%)] rounded-full"
          style={{
            clipPath: 'polygon(0 50%, 75% 0, 50% 50%, 0 90%)',
            borderTopRightRadius: '10px',
          }}
        />
        {/* <div className="absolute right-0 top-0 h-2/3 w-full rounded-full bg-[radial-gradient(125%_125%_at_50%_90%,#fff_40%,#7c3aed_100%)]" /> */}
      </div>

      {/* Purple Curve Element - Hidden on mobile */}
      <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-68 lg:block">
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
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:px-8 sm:py-10 lg:min-h-[90vh] lg:flex-row lg:gap-0 lg:px-16 lg:py-12">
        {/* LEFT SIDE */}
        <div className="relative flex items-center justify-center lg:w-1/2">
          {/* Decorative Outer Circles */}
          <div className="absolute hidden lg:block">
            <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[6px] border-rose-500/40 animate-pulse [animation-duration:3s]" />
            <div className="absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-purple-400/30 animate-pulse [animation-duration:4s]" />
            <div className="absolute left-1/2 top-1/2 h-[660px] w-[660px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-cyan-400/20 animate-pulse [animation-duration:5s]" />
          </div>

          {/* Main Circle */}
          <div className="relative z-10 h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96 lg:h-[564px] lg:w-[558px]">
            <div className="absolute inset-0 overflow-hidden rounded-full bg-white shadow-xl lg:shadow-2xl">
              <video
                className="h-full w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                poster="/img/elephant-alone.svg"
              >
                <source src="/video/phone-light.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Globe Badge */}
          <div className="absolute bottom-4 left-4 z-20 flex h-16 w-16 items-center justify-center rounded-full border border-gray-300 bg-white shadow-xl sm:bottom-6 sm:left-8 sm:h-24 sm:w-24 lg:bottom-4 lg:left-12 lg:h-32 lg:w-32">
            <svg
              className="h-10 w-10 sm:h-14 sm:w-14 lg:h-20 lg:w-20"
              viewBox="0 0 24 24"
              fill="#64748b"
            >
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
            </svg>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-4 text-center sm:space-y-6 lg:w-1/2 lg:pl-16 lg:space-y-8 lg:text-left">
          <button
            type="button"
            className="rounded-full border border-amber-300 bg-linear-to-r from-rose-500 via-orange-400 to-amber-400 px-4 py-2 text-xs font-medium text-orange-900 transition hover:scale-105 sm:px-5 sm:py-2 sm:text-sm"
          >
            Pre-Business
          </button>

          <h1 className="font-flex text-4xl leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl xl:text-[120px]">
            <span className="bg-[linear-gradient(to_right,white,#a5b4fc,#c084fc)] bg-clip-text text-transparent [-webkit-text-stroke:1px_#9ca3af]">
              Every Thing
            </span>
            <span className="block bg-linear-to-r from-rose-500 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              Built In
            </span>
          </h1>

          <div className="pt-4 sm:pt-6">
            <button
              type="button"
              className="relative overflow-hidden rounded-2xl px-8 py-3 text-lg font-bold text-white shadow-xl transition hover:scale-105 active:scale-95 sm:px-12 sm:py-4 sm:text-xl lg:px-16 lg:py-5 lg:text-2xl"
            >
              <span className="absolute inset-0 bg-linear-to-r from-rose-600 via-pink-400 to-orange-400" />
              <span className="relative z-10 tracking-wide">Download</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CircleSection
