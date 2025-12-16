const Option: React.FC = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-2/3 h-full">
        <div className="absolute top-0 right-0 w-full h-1/2 bg-linear-to-bl from-cyan-200/40 to-transparent rounded-bl-[200px]" />
        <div className="absolute top-20 right-0 w-1/2 h-96 bg-linear-to-l from-cyan-300/30 to-transparent rounded-l-full" />
      </div>

      {/* Purple Curve on Right */}
      <div className="absolute top-0 right-0 w-96 h-screen">
        <svg
          className="absolute top-20 right-0 h-1/3 w-auto"
          viewBox="0 0 200 400"
          fill="none"
        >
          <title>icon</title>
          <path
            d="M200 0 Q150 200 200 400 L200 0 Z"
            fill="url(#purpleGradient)"
            opacity="0.3"
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

      {/* Blue/Purple Gradient Wave on Left */}
      <div className="absolute bottom-0 left-0 w-2/5 h-3/4">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-400 via-purple-400 to-blue-400 opacity-90 rounded-tr-[300px]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex justify-between items-center px-12 py-8">
        {/* <div className="text-3xl font-bold bg-linear-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Codeco.tech
        </div>
        <div className="flex gap-12 items-center">
          <a
            href="#home"
            className="text-white/70 hover:text-white transition-colors text-lg"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white/70 hover:text-white transition-colors text-lg"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-white font-semibold hover:text-white/80 transition-colors text-lg"
          >
            Contact
          </a>
        </div> */}
      </nav>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-12 pt-12 pb-24">
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* Left Side - Circle Video Container */}
          <div className="relative">
            {/* Outer Decorative Circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[600px] h-[600px] rounded-full border-4 border-teal-400/50 absolute" />
              <div className="w-[580px] h-[580px] rounded-full border-4 border-cyan-400/60 absolute" />
            </div>

            {/* Main Circle Video Container */}
            <div className="relative w-[560px] h-[560px] mx-auto">
              <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl border-8 border-white">
                {/* Video Placeholder - Replace with your custom circular video */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    {/* Replace src with your circular cutout video */}
                    <source src="video/phone-light.mp4" type="video/mp4" />
                    {/* Fallback image */}
                    <div className="w-full h-full bg-linear-to-br from-purple-400 to-cyan-400 flex items-center justify-center">
                      <span className="text-white text-2xl font-semibold">
                        Your Video Here
                      </span>
                    </div>
                  </video>
                </div>
              </div>

              {/* Globe Icon Badge */}
              <div className="absolute bottom-8 left-8 w-32 h-32 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-cyan-300">
                <svg
                  className="w-16 h-16 text-cyan-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </div>
            </div>

            {/* Bottom Left Codeco.tech Badge */}
            <div className="absolute -bottom-16 left-12 text-white text-2xl font-semibold drop-shadow-lg">
              Codeco.tech
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8 pr-24">
            <div className="inline-block">
              <span className="text-purple-600 font-bold text-xl bg-white px-6 py-2 rounded-full shadow-md">
                Pre-Business
              </span>
            </div>

            <h1 className="text-8xl font-black leading-tight">
              <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 bg-clip-text text-transparent">
                Everything
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-cyan-300 bg-clip-text text-transparent">
                Built In
              </span>
            </h1>

            <button
              type="button"
              className="group relative px-12 py-4 text-xl font-bold text-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-cyan-400" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Download</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Option