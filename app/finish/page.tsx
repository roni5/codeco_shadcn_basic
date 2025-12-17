import CircleSection from '@/components/CircleSection'
import Insights from '@/components/insights'

export default function FinishPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <CircleSection />
      <Insights />
      {/* Future sections go here — clean boundaries */}
    </main>
  )
}
