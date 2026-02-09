import { GameProps } from '@/utils/types/game'
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { Container } from '@/components/container';
import { Label } from './components/label';
import { GameCard } from '@/components/GameCard';
import { Metadata } from 'next';
import { BsCalendarEvent,  BsTags } from 'react-icons/bs'; 

interface PropsParams {
    params: Promise<{
        id: string;
    }>
}

export async function generateMetadata({ params }: PropsParams): Promise<Metadata> {
    try {
        const { id } = await params;
        const response: GameProps = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`, {
            next: { revalidate: 60 }
        })
        .then((res) => res.json())
        .catch(() => null);

        if (!response) {
            return { title: "HolyGames - Jogos Incríveis" };
        }

        return {
            title: `HolyGames - ${response.title}`,
            description: `${response.description.slice(0, 100)}...`,
            openGraph: {
                title: `HolyGames - ${response.title}`,
                images: [response.image_url]
            },
        };

    } catch (err) {
        return { title: "HolyGames" };
    }
}

async function getData(id: string) {
    try {
        const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`, { cache: "no-store" })
        return res.json();
    } catch (err) {
        throw new Error("Failed to fetch data")
    }
}

async function getGameSorted() {
    try {
        const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game_day`, { cache: "no-store" })
        return res.json();
    } catch (err) {
        throw new Error("Failed to fetch data")
    }
}

export default async function Game({
    params
}: {
    params: Promise<{ id: string }>
}) {

    const { id } = await params;
    const data: GameProps = await getData(id)
    const sortedGame: GameProps = await getGameSorted();

    if (!data) {
        redirect("/")
    }

    return (
        <main className="w-full text-zinc-50 min-h-screen bg-zinc-950 pb-20">
            
            <div className='w-full h-125 relative group'>
                <Image
                    className='object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-700'
                    src={data.image_url}
                    alt={data.title}
                    priority={true}
                    fill={true}
                    quality={100}
                    sizes="100vw"
                />
                
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>

                <div className="absolute bottom-10 left-0 w-full">
                    <Container>
                         <h1 className='font-extrabold text-4xl sm:text-5xl drop-shadow-lg text-white mb-2'>
                            {data.title}
                        </h1>
                        <span className="inline-block px-3 py-1 bg-violet-600/80 backdrop-blur-sm rounded text-xs font-bold uppercase tracking-widest text-white border border-violet-500/50">
                            Detalhes do Jogo
                        </span>
                    </Container>
                </div>
            </div>

            <Container>
                <div className="grid md:grid-cols-[2fr_1fr] gap-10 mt-10">
                    
                    {/* COLUNA ESQUERDA: Descrição */}
                    <div className="flex flex-col gap-6">
                        <div>
                            <h2 className='font-bold text-2xl text-white mb-4 flex items-center gap-2'>
                                <span className="w-1.5 h-6 bg-violet-500 rounded-full"></span>
                                Descrição
                            </h2>
                            <p className='text-zinc-300 text-lg leading-relaxed text-justify'>
                                {data.description}
                            </p>
                        </div>
                    </div>

                    {/* COLUNA DIREITA: Ficha Técnica (Sidebar) */}
                    <aside className="flex flex-col gap-8 bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 h-fit">
                    
                        <div>
                            <h3 className="text-zinc-400 font-bold uppercase text-sm mb-3 flex items-center gap-2">
                                <BsCalendarEvent className="text-violet-500"/> Lançamento
                            </h3>
                            <p className="text-white font-medium text-lg border-l-2 border-zinc-700 pl-3">
                                {data.release}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-zinc-400 font-bold uppercase text-sm mb-3 flex items-center gap-2">
                                <BsTags className="text-violet-500"/> Gêneros
                            </h3>
                            <div className='flex gap-2 flex-wrap text-zinc-950'>
                                {data.categories.map((item) => (
                                    <Label name={item} key={item} />
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-zinc-400 font-bold uppercase text-sm mb-3 flex items-center gap-2">
                                <span className="text-violet-500">🎮</span> Plataformas
                            </h3>
                            <div className='flex gap-2 flex-wrap text-zinc-950'>
                                {data.platforms.map((item) => (
                                    <Label name={item} key={item} />
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>

                <div className="mt-20 border-t border-zinc-800 pt-10">
                    <h2 className='font-bold text-2xl text-white mb-6'>
                        Você também pode gostar
                    </h2>
                    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                        <GameCard data={sortedGame} />
                    </div>
                </div>
                
            </Container>
        </main>
    )
}