import {
  HoverSlider,
  HoverSliderImage,
  HoverSliderImageWrap,
  TextStaggerHover,
} from "@/components/ui/animated-slideshow"

const SLIDES = [
  {
    id: "slide-1",
    title: "frontend dev",
    imageUrl:
      "https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?q=80&w=2486&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "slide-2",
    title: "backend dev",
    imageUrl:
      "https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "slide-6",
    title: "UI UX design",
    imageUrl:
      "https://images.unsplash.com/photo-1688733720228-4f7a18681c4f?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "slide-3",
    title: "video editing",
    imageUrl:
      "https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "slide-4",
    title: "SEO optimization",
    imageUrl:
      "https://images.unsplash.com/photo-1726066012698-bb7a3abce786?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]

export function HoverSliderDemo() {
  return (
    <HoverSlider className="min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 bg-[#faf9f5] text-[#3d3929]">
      <h3 className="mb-6 sm:mb-8 text-[rgb(201, 100, 66)] text-xs sm:text-sm font-medium capitalize tracking-wide text-[#c96442]">
        / our services
      </h3>
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12 max-w-7xl">
        <div className="flex flex-col space-y-2 sm:space-y-3 md:space-y-4 w-full lg:w-auto">
          {SLIDES.map((slide, index) => (
            <TextStaggerHover
              key={slide.title}
              index={index}
              className="cursor-pointer text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tighter leading-tight"
              text={slide.title}
            />
          ))}
        </div>
        <div className="w-full lg:w-auto flex items-center justify-center">
          <HoverSliderImageWrap className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg h-48 sm:h-64 md:h-80 lg:h-96">
            {SLIDES.map((slide, index) => (
              <div key={slide.id} className="w-full h-full">
                <HoverSliderImage
                  index={index}
                  imageUrl={slide.imageUrl}
                  src={slide.imageUrl}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </div>
            ))}
          </HoverSliderImageWrap>
        </div>
      </div>
    </HoverSlider>
  )
}
