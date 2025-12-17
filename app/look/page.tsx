

export default function Lookpage() {
  return (
    <div className="min-h-screen bg-base-bg text-base-fg">
      <main className="mx-auto max-w-4xl space-y-8 px-6 py-38">
        <section className="rounded-3xl border border-cyan-100  bg-linear-to-r from-amber-400 via-rose-400 to-pink-500 p-8 drop-shadow-2xl  ">
          <h1 className="text-2xl font-semibold tracking-tight">
            Minimal, spacious layout with soft color accents
          </h1>

          <p className="mt-3 text-base text-base-muted">
            Lots of white space; color only in accents.
          </p>

          <div className="mt-6 inline-flex gap-3">
            <button
              type="button"
              className="rounded-full border border-purple-200 bg-linear-to-r from-rose-600 via-pink-400 to-orange-400  px-5 py-2 text-sm font-medium text-gray-950 shadow-sm  hover:from-rose-500 hover:via-pink-400 hover:to-purple-300 Hover:border-purple-200 transition-all duration-500 hover:scale-105 "
            >
              Primary
            </button>
            {/* border-amber-100 Secondary Button */}
            <button
              type="button"
              className="rounded-full border  border-amber-300  bg-linear-to-r from-rose-500 via-orange-400 to-amber-400 px-5 py-2 text-sm font-medium text-organge-900 hover:from-rose-500 hover:via-pink-400 hover:to-amber-600 Hover:border-purple-200 transition-all duration-500 hover:scale-105"
            >
              Secondary
            </button>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-linear-to-r from-orange-200 via-red-400 to-pink-600 px-3 py-1 text-xs font-medium text-organge-900 ">
              sunset
            </span>
            <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-500">
              pink
            </span>
            <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-500">
              purple
            </span>
            <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-400">
              amber
            </span>
          </div>
        </section>
        <div className="space-y-3 rounded-3xl border border-cyan-100 bg-sky-50/60 p-6">
          <div className="inline-flex gap-2">
            <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-500">
              Cyan
            </span>
            <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-500">
              Pink
            </span>
            <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-500">
              Purple
            </span>
            <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-400">
              Amber
            </span>
          </div>

          <button type="button" className="rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-white">
            Sky primary
          </button>
        </div>
      </main>
    </div>
  )
}
