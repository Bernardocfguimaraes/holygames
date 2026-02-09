import { Container } from "@/components/container";
import { BannerSkeleton, GameCardSkeleton } from "@/skeleton"

export default function Loading() {
  return (
    <main className="w-full pt-8">
      <Container>
        
        {/* --- 1. SKELETON DO JOGO DO DIA --- */}
        <div className="flex items-center gap-3 mb-5">
            <div className="w-1.5 h-6 bg-zinc-800 rounded-full animate-pulse"></div>
            <div className="h-6 w-48 bg-zinc-800 rounded animate-pulse"></div>
        </div>

        <BannerSkeleton />

        {/* --- 2. SKELETON DA BARRA DE PESQUISA --- */}
        <div className="mt-10 mb-12">
            <div className="w-full h-12 bg-zinc-900 rounded-lg border border-zinc-800 animate-pulse"></div>
        </div>

        {/* --- 3. SKELETON DO GRID DE JOGOS --- */}
        <div className="flex items-center gap-3 mb-6 border-l-4 border-zinc-800 pl-4">
             <div className="h-8 w-64 bg-zinc-800 rounded animate-pulse"></div>
        </div>

        <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-16">
          {Array.from({ length: 8 }).map((_, index) => (
            <GameCardSkeleton key={index} />
          ))}
        </section>

      </Container>
    </main>
  );
}