'use client' 
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { GameProps } from '@/utils/types/game'
import { BiRightArrowCircle } from 'react-icons/bi' 

interface GameCardProps {
  data: GameProps
}

export function GameCard({ data }: GameCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      
      className="w-full bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden hover:border-violet-500/50 hover:shadow-[0_0_20px_rgba(124,58,237,0.15)] transition-all group"
    >
      <Link href={`/game/${data.id}`}>
        <div className="relative w-full h-56 overflow-hidden">
            <motion.div
                className="w-full h-full"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
            >
                <Image
                  src={data.image_url}
                  alt={data.title}
                  fill={true}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                  quality={100}
                />
            </motion.div>

            <div className="absolute bottom-0 left-0 w-full h-20 bg-linear-to-t from-zinc-900 to-transparent"></div>
            
        </div>

        <div className="p-4 flex flex-col gap-2">
            <h2 className="font-bold text-white text-lg truncate group-hover:text-violet-400 transition-colors">
                {data.title}
            </h2>
            
            <div className="flex items-center justify-between mt-1">
                <p className="text-zinc-400 text-sm font-medium flex items-center gap-1">
                   Ver detalhes
                </p>
                <BiRightArrowCircle size={24} className="text-zinc-500 group-hover:text-violet-500 group-hover:translate-x-1 transition-all"/>
            </div>
        </div>
      </Link>
    </motion.div>
  )
}