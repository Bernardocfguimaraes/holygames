import { Container } from "./components/container";


export function GameCardSkeleton() {
  return (
    <div className="w-full bg-zinc-900 rounded-xl p-4 border border-zinc-800 animate-pulse">
      <div className="w-full h-56 bg-zinc-800 rounded-lg mb-3"></div>
      
      <div className="flex justify-between items-center mt-3">
        <div className="h-5 w-3/4 bg-zinc-800 rounded"></div>
        <div className="h-6 w-6 bg-zinc-800 rounded-full"></div>
      </div>
    </div>
  )
}

export function BannerSkeleton() {
    return (
        <div className="w-full h-64 sm:h-80 md:h-96 lg:h-120 bg-zinc-900 rounded-2xl border border-zinc-800 animate-pulse relative overflow-hidden">
             <div className="absolute bottom-6 left-6 w-full pr-12">
                <div className="h-4 w-24 bg-zinc-800 rounded mb-3"></div>
                <div className="h-10 w-1/2 bg-zinc-800 rounded"></div>
             </div>
        </div>
    )
}