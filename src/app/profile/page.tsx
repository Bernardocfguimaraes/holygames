import { Container } from "@/components/container";
import Image from 'next/image'
import userImg from '../../../public/user.jpg' 
import { FaShareAlt, FaCog } from 'react-icons/fa'
import { FavoriteCard } from "./components/favorite";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Meu Perfil - HolyGames",
    description: "Perfil do usuário fictício"
}

export default function Profile() {
    return (
        <main className="w-full text-zinc-50 min-h-screen pb-10">
            <Container>

                <section className="mt-8 mb-12 bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-xl relative">
                    
                    <div className="w-full h-32 sm:h-48 bg-linear-to-r from-violet-900/40 via-zinc-900 to-zinc-950 relative">
                         <div className="absolute inset-0 bg-black/20"></div>
                    </div>

                    <div className="px-6 pb-6 flex flex-col sm:flex-row items-center sm:items-end -mt-16 sm:-mt-20 gap-6 relative z-10">
                        
                        <div className="relative group">
                            <Image
                                src={userImg}
                                alt="Imagem perfil do usuário"
                                className="rounded-2xl h-32 w-32 sm:h-44 sm:w-44 object-cover border-4 border-zinc-900 shadow-2xl group-hover:scale-105 transition-transform duration-300"
                            />
                            <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-zinc-900 rounded-full shadow-[0_0_10px_#22c55e]"></span>
                        </div>

                        <div className="flex-1 text-center sm:text-left mb-2">
                            <h1 className="font-bold text-3xl text-white mb-1">Perfil Fictício</h1>
                            <p className="text-zinc-400 font-medium text-sm flex items-center justify-center sm:justify-start gap-2">
                                <span className="bg-violet-500/10 text-violet-400 px-2 py-0.5 rounded border border-violet-500/20 text-xs uppercase tracking-wide">
                                    Membro VIP
                                </span>
                                <span>• Nível 42</span>
                            </p>
                        </div>

                        <div className="flex gap-3 mb-2">
                            <button className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-200 px-4 py-2.5 rounded-lg transition-all duration-300 hover:border-violet-500 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                                <FaCog size={18} />
                                <span className="hidden sm:inline text-sm font-bold">Configurações</span>
                            </button>
                            
                            <button className="bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-violet-400 px-4 py-2.5 rounded-lg transition-all duration-300  hover:text-white hover:border-violet-500">
                                <FaShareAlt size={18} />
                            </button>
                        </div>

                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-1.5 h-6 bg-violet-600 rounded-full shadow-[0_0_8px_#7c3aed]"></span>
                        <h2 className="font-bold text-xl text-zinc-100">
                            Jogos Favoritos
                        </h2>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                        <div className="w-full h-44">
                            <FavoriteCard />
                        </div>
                        <div className="w-full h-44">
                            <FavoriteCard />
                        </div>
                        <div className="w-full h-44">
                            <FavoriteCard />
                        </div>
                    </div>
                </section>

            </Container>
        </main>
    )
}