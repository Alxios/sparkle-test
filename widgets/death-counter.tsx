import { motion } from "framer-motion"
import { useRealtime } from "sparkle-react"

export default function Widget() {
  const [death] = useRealtime("death:count")

  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white backdrop-blur-md"
      >
        💀 Morts : {death ?? 0}
      </motion.div>
    </div>
  )
}
