


const Circle: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-white relative overflow-hidden">
      {/* Abstract Shape - Bottom Left Angle */}
      <div className="absolute bottom-0 left-0 w-2/5 h-4/5 pointer-events-none">
        <div
          className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-blue-400 to-purple-400 opacity-95"
          style={{
            clipPath: 'polygon(0 30%, 100% 0, 100% 100%, 0 100%)',
            borderTopRightRadius: '300px',
          }}
        />
      </div>

      {/* Right Side Gradient Background - Flows Naturally */}
      <div className="absolute top-0 right-0 w-3/5 h-full pointer-events-none">
        <div
          className="absolute top-0 right-0 w-full h-2/3 bg-gradient-to-bl from-cyan-200/50 via-cyan-100/30 to-transparent"
          style={{ borderBottomLeftRadius: '200px' }}
        />
      </div>

      {/* Purple Curve Element - Bottom Right */}
      <div className="absolute top-0 right-0 w-64 h-full pointer-events-none">
        <svg
          className="absolute top-32 -right-20 w-96 h-96"
          viewBox="0 0 200 400"
          fill="none"
        >
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

      {/* Navigation */}
      <nav className="relative z-50 flex justify-between items-center px-16 py-8">
        {/* <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Codeco.tech
        </div>
        <div className="flex gap-12 items-center">
          <a
            href="#home"
            className="text-gray-400 hover:text-gray-600 transition-colors text-lg"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-400 hover:text-gray-600 transition-colors text-lg"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-gray-700 font-semibold hover:text-gray-900 transition-colors text-lg"
          >
            Contact
          </a>
        </div> */}
      </nav>

      {/* Main Content Container */}
      <div className="relative z-10 flex items-center justify-between px-16 py-8 min-h-[calc(100vh-120px)]">
        {/* LEFT SIDE - THE CIRCLE (HERO ELEMENT) */}
        <div className="relative w-1/2 flex items-center justify-center">
          {/* Decorative Outer Circles */}
          <div className="absolute">
            <div
              className="w-[620px] h-[620px] rounded-full border-[6px] border-teal-400/40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"
              style={{ animationDuration: '3s' }}
            />
            <div className="w-[590px] h-[590px] rounded-full border-[6px] border-cyan-400/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>

          {/* MAIN CIRCLE - Your Custom Video Goes Here */}
          <div className="relative z-10 w-[560px] h-[560px]">
            <div className="absolute inset-0 rounded-full overflow-hidden bg-white shadow-2xl">
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

                {/* Fallback placeholder */}
                {/* <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-100 to-cyan-100">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white/50 flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-purple-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <title>icon</title>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-500 font-semibold text-lg">
                      Your Circular Videos
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          {/* Globe Icon Badge - Bottom Left of Circle */}
          <div className="absolute bottom-12 left-16 z-20 w-36 h-36 rounded-full bg-white shadow-2xl flex items-center justify-center border-[6px] border-sky-400">
            <svg
              className="w-20 h-20 text-sky-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <title>icon</title>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
          </div>

          {/* Codeco.tech Label - Bottom Left */}
          <div className="absolute -bottom-8 left-8 z-20 text-white text-3xl font-bold drop-shadow-2xl">
            Codeco.tech
          </div>
        </div>

        {/* RIGHT SIDE - Content (No boxes, just flowing text) */}
        <div className="w-1/2 pl-20 space-y-10">
          {/* Pre-Business Badge */}
          <div className="inline-block">
            <span className="bg-white text-purple-600 font-bold text-xl px-8 py-3 rounded-full shadow-lg border-2 border-purple-200">
              Pre-Business
            </span>
          </div>

          {/* Main Heading - Gradient Text */}
          <h1 className="text-[120px] font-sans leading-[0.95] tracking-tight">
            <span className="block bg-linear-to-r from-pink-400 via-blue-400 to-cyan-400  bg-clip-text text-transparent">
              Everything
            </span>

            <span className="block bg-linear-to-r from-pink-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Built In
            </span>
          </h1>

          {/* Download Button */}
          <div className="pt-6">
            <button
              type="button"
              className="group relative px-16 py-5 text-2xl font-bold text-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_20px_60px_rgba(168,85,247,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-linear-to-r from-purple-600 via-purple-500 to-cyan-400" />
              <div className="absolute inset-0 bg-linear-to-r from-cyan-400 via-purple-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 tracking-wide">Download</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Circle

