

// Note: Replace ProductCard with your actual component
import ProductCard from '@/components/product-card'

export default function BlurredCtaSection() {
  return (
    // 1. Make the section a relative container for the absolute background
    <section className="mb-10 md:mb-18 relative overflow-hidden px-4">
      {/* --- THE BLURRED BACKGROUND LAYER --- */}
      <div
        className="absolute inset-0 bg-[url('/img/bg-cta-dark.webp')] bg-center bg-no-repeat 
          bg-black/50        bg-cover blur-sm"
      >
      </div>

      {/* --- THE SHARP FOREGROUND CONTENT LAYER --- */}
      <div className="max-w-7xl mx-auto mt-4 md:mt-8 pb-4 md:pb-8 relative z-10">
        {/* The z-10 ensures all content in this div appears above the absolute background */}
        <h2 className="text-4xl font-extrabold text-white text-center mb-12 tracking-tight">
          Featured Articles
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          <ProductCard
            title="Premium Headphones"
            description="Experience crystal-clear audio with our latest noise-cancelling technology. Perfect for music lovers and professionals alike."
            imageSrc="/img/cardImg.webp"
            imageAlt="Premium wireless headphones"
            buttonText="Learn More"
            //onButtonClick={handleProductClick}
          />

          <ProductCard
            title="Smart Watch"
            description="Stay connected and track your fitness goals with our advanced smartwatch featuring heart rate monitoring and GPS."
            imageSrc="/img/cardImg.webp"
            imageAlt="Modern smartwatch"
          />
          <ProductCard
            title="Laptop Stand"
            description="Ergonomic aluminum laptop stand designed to improve posture and increase productivity during long work sessions."
            imageSrc="/img/cardImg.webp"
            imageAlt="Adjustable laptop stand"
            buttonText="Buy Now"
            //onButtonClick={() => alert('Adding to cart...')}
          />
          <ProductCard
            title="Premium Earbuds"
            description="Experience crystal-clear audio with our latest noise-cancelling technology. Perfect for music lovers and professionals alike."
            imageSrc="/img/cardImg.webp"
            imageAlt="Premium wireless headphones"
            buttonText="Learn More"
            //onButtonClick={handleProductClick}
          />
        </div>
      </div>
    </section>
  )
}