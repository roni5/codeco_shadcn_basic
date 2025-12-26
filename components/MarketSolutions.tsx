import Link from 'next/link'
import Image from 'next/image'

export default function MarketSolutions() {
  return (

    <section className="mb-16 md:mb-24 lg:mb-32">
        <div className="container mx-auto px-4 lg:px-8 mb-12 md:mb-16">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-foreground">
            Marketing solutions for{' '}
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              every business
            </span>
          </h3>
        </div>

        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative group">
            <div
              className="absolute inset-0 rounded-3xl p-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                backgroundImage:
                  'linear-gradient(var(--border-angle), var(--color-primary), var(--color-secondary), var(--color-accent), var(--color-primary))',
                backgroundSize: '300% 100%',
                animation: 'rotate-border 4s linear infinite',
              }}
           />
            <div className="relative bg-linear-to-br from-background to-muted/10 rounded-3xl p-8 md:p-12 border border-border group-hover:border-transparent transition-colors duration-500">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                <div className="lg:w-1/3">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="w-16 h-16 rounded-2xl bg-linear-to-br from-secondary to-accent inline-flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="w-8 h-8 text-primary-foreground"
                        ><title>analytics icon</title>
                          <path d="M3 3v18h18" />
                          <path d="m19 9-5 5-4-4-3 3" />
                        </svg>
                      </span>
                      <h4 className="text-2xl md:text-3xl font-bold text-foreground">
                        Analytics
                      </h4>
                    </div>
                    <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
                      Understand your customers so you can deliver better
                      experiences.
                    </p>
                    <Link
                      href="/about"
                      className="inline-flex items-center gap-2 text-primary hover:text-secondary font-semibold text-lg transition-colors group"
                    >
                      Learn more about Analytics
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="group-hover:translate-x-1 transition-transform"
                      ><title>arrow right icon</title>
                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                      </svg>
                    </Link>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <div className="relative rounded-2xl overflow-hidden">
                    <Image
                      src="/img/osaka02.jpg"
                      alt="Analytics"
                      className="w-full rounded-2xl"
                      width={768}
                      height={400}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
