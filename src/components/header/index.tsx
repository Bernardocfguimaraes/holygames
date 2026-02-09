import logoImg from "@/../public/logo.png"
import Image from "next/image"
import Link from "next/link"
import { LiaGamepadSolid } from 'react-icons/lia'

export function Header() {
    return (
        <header className="fixed w-full h-24 top-0 z-50 bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800 shadow-lg px-6">
            <div className="max-w-7xl mx-auto flex justify-between items-center h-full">

                <div className="flex items-center gap-6">
                    <Link href="/" className="block shrink-0 group relative">                                             
                        <Image
                            src={logoImg}
                            alt="Logo HolyGames"
                            quality={100}
                            priority
                            className="relative w-32 sm:w-44 border border-zinc-800 rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-105 invert-75 hover:invert-100"
                        />
                    </Link>

                    <div className="hidden md:flex items-center h-10 border-l border-zinc-700 pl-6">
                        <span className="text-zinc-400 font-medium italic text-sm tracking-wide leading-tight hover:text-zinc-50 duration-300 transition-all">
                            "Quem não gosta <br/> de jogos?"
                        </span>
                    </div>
                </div>

                {/* --- LADO DIREITO --- */}
                <div className="flex items-center gap-8">
                    
                    <nav className="hidden sm:flex items-center gap-6">
                        <Link 
                            href="/" 
                            className="text-lg font-bold text-zinc-300 hover:text-white transition-colors relative group"
                        >
                            Games
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-violet-500 shadow-[0_0_8px_#8b5cf6] transition-all group-hover:w-full"></span>
                        </Link>

                        <Link 
                            href="/profile" 
                            className="text-lg font-bold text-zinc-300 hover:text-white transition-colors relative group"
                        >
                            Perfil
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-violet-500 shadow-[0_0_8px_#8b5cf6] transition-all group-hover:w-full"></span>
                        </Link>
                    </nav>
                    
                    <Link 
                        href="/profile" 
                        className="group bg-zinc-800 border border-zinc-700 p-2.5 rounded-xl shadow-lg hover:border-violet-500 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all"
                    >
                        <LiaGamepadSolid 
                            size={28} 
                            className="text-violet-200 group-hover:text-violet-400 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300" 
                        />
                    </Link>
                </div>

            </div>
        </header>
    )
}