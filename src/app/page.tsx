import { Container } from "@/components/container";
import { GameProps } from "@/utils/types/game"
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightCircle } from 'react-icons/bs' 
import { Input } from '@/components/input'
import { GameCard } from "@/components/GameCard"
import { Footer } from "@/components/hover";

async function getDalyGame() {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game_day`, { next: { revalidate: 320 } })
    return res.json();
  } catch (err) {
    throw new Error("Failed to fetch data")
  }
}

async function getGamesData() {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=games`, { next: { revalidate: 320 } })
    return res.json();
  } catch (err) {
    throw new Error("Failed to fetch data")
  }
}

export default async function Home() {
  const dalyGame: GameProps = await getDalyGame();
  const data: GameProps[] = await getGamesData();

  return (
    <main className="w-full pt-8">
      <Container>
        
        <div className="flex items-center gap-3 mb-5">
            <span className="w-1.5 h-6 bg-violet-600 rounded-full shadow-[0_0_8px_#7c3aed]"></span>
            <h1 className="font-bold text-xl text-zinc-100 uppercase tracking-wide">
                Recomendação do Dia
            </h1>
        </div>

        <Link href={`/game/${dalyGame.id}`}>
          <section className="group w-full h-64 sm:h-80 md:h-96 lg:h-120 bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-violet-500/50 relative shadow-xl transition-all duration-300">
      
            <div className="absolute inset-0 w-full h-full">
               <Image
                src={dalyGame.image_url}
                alt={dalyGame.title}
                priority={true}
                quality={100}
                fill={true}
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw"
               />
            </div>

            <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-90"></div>

            <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10 flex justify-between items-end">
                <div className="flex flex-col gap-2 max-w-2xl">
                    <span className="w-fit text-violet-400 text-xs font-bold uppercase tracking-widest bg-zinc-950/60 backdrop-blur-md px-3 py-1 rounded border border-zinc-700/50">
                        Exclusivo
                    </span>
                    <p className="font-extrabold text-3xl sm:text-5xl text-white drop-shadow-lg leading-tight">
                        {dalyGame.title}
                    </p>
                </div>

                <div className="hidden sm:flex items-center gap-3 text-zinc-300 group-hover:text-violet-400 transition-colors">
                    <span className="text-sm font-medium opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                        Ver detalhes
                    </span>
                    <BsArrowRightCircle 
                        size={40} 
                        className="transition-transform duration-300 group-hover:scale-110"
                    />
                </div>
            </div>
          </section>
        </Link>

        <div className="mt-10 mb-12">
            <Input/>
        </div>

        <div className="flex items-center gap-3 mb-6 border-l-4 border-zinc-700 pl-4">
             <h2 className="text-2xl font-bold text-zinc-100">
                Jogos para conhecer
             </h2>
             <span className="text-zinc-500 text-sm font-medium pt-1">
                ({data.length} disponíveis)
             </span>
        </div>

        <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-16">
          {data.map((item) => (
            <GameCard key={item.id} data={item}/>
          ))}
        </section>

      </Container>
      
      <Footer/>
    </main>
  );
}