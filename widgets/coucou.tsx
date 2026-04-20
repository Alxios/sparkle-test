import { motion } from "framer-motion"
import { useRealtime } from "sparkle-react"

export default function Widget() {
  const title = config("title", 16)
  const hidden = config("hidden",false)

  // On convertit en string pour la key React
  return !hidden && (
    <div className="flex h-screen w-full items-center justify-center bg-transparent">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="border border-white/10 bg-black/50 px-10 py-5 text-4xl font-bold text-white backdrop-blur-md"
      >
        {title}
      </motion.div>
    </div>
  )
}
