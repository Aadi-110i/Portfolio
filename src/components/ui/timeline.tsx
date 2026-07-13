import {
  useScroll,
  useTransform,
  motion,
} from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface TimelineEntry {
  title: string
  content: React.ReactNode
}

const TimelineItem = ({
  item,
  heightTransform,
  totalHeight,
}: {
  item: TimelineEntry
  heightTransform: any
  totalHeight: number
}) => {
  const itemRef = useRef<HTMLDivElement>(null)
  const [itemTop, setItemTop] = useState(0)

  // Measure this item's dot position relative to the timeline container
  useEffect(() => {
    if (itemRef.current) {
      // offsetTop of the dot inside the timeline container
      setItemTop(itemRef.current.offsetTop + itemRef.current.offsetHeight / 2)
    }
  }, [totalHeight])

  // Color transitions exactly when heightTransform (px) reaches this item's top
  const color = useTransform(
    heightTransform,
    [itemTop - 4, itemTop + 4],
    ['rgba(61,48,37,0.25)', '#ef6d58']
  )

  const dotBg = useTransform(
    heightTransform,
    [itemTop - 4, itemTop + 4],
    ['rgba(61,48,37,0.2)', '#ef6d58']
  )

  const dotScale = useTransform(
    heightTransform,
    [itemTop - 4, itemTop + 4],
    [1, 1.5]
  )

  return (
    <div className="flex justify-start pt-10 md:pt-40 md:gap-10">
      <div
        ref={itemRef}
        className="flex flex-col md:flex-row z-40 items-center self-center max-w-xs lg:max-w-sm md:w-full"
      >
        {/* Animated dot */}
        <div
          className="h-10 absolute left-3 md:left-3 w-10 rounded-full flex items-center justify-center"
          style={{ background: 'var(--color-bg)' }}
        >
          <motion.div
            className="h-4 w-4 rounded-full p-2"
            style={{
              backgroundColor: dotBg,
              scale: dotScale,
            }}
          />
        </div>

        {/* Year label — desktop */}
        <motion.h3
          className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold"
          style={{
            color,
            fontFamily: 'var(--font-heading)',
          }}
        >
          {item.title}
        </motion.h3>
      </div>

      <div className="relative pl-20 pr-4 md:pl-4 w-full">
        {/* Year label — mobile */}
        <motion.h3
          className="md:hidden block text-2xl mb-4 text-left font-bold"
          style={{
            color,
            fontFamily: 'var(--font-heading)',
          }}
        >
          {item.title}
        </motion.h3>
        {item.content}
      </div>
    </div>
  )
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      setHeight(rect.height)
    }
  }, [ref])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  })

  // Pixel-based height of the progress line (0 → full height)
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <div className="w-full font-sans md:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <TimelineItem
            key={index}
            item={item}
            heightTransform={heightTransform}
            totalHeight={height}
          />
        ))}

        <div
          style={{ height: height + 'px' }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px]"
        >
          {/* Background line */}
          <div
            className="absolute inset-0 w-full"
            style={{
              background: 'linear-gradient(to bottom, transparent, var(--color-muted), transparent)',
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
            }}
          />

          {/* Animated coral progress line */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
              background: 'linear-gradient(to top, #ef6d58, #f09080, transparent)',
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full"
          />
        </div>
      </div>
    </div>
  )
}
