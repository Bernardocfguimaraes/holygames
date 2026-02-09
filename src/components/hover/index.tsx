import Link from "next/link"
import { BsGithub } from 'react-icons/bs' 

export function Footer() {
    return (
        <footer className="w-full bg-zinc-900 border-t border-zinc-800 py-8 mt-14">
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
                
                <Link 
                    href="https://github.com/Bernardocfguimaraes" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group flex flex-col items-center transition-all duration-300"
                > 
                   <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-950 border border-zinc-800 group-hover:border-violet-500 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-500">
                        
                        <BsGithub 
                            size={20} 
                            className="text-zinc-400 group-hover:text-white transition-colors"
                        />
                        
                        <h1 className="font-bold text-lg text-zinc-300 group-hover:text-white transition-colors">
                            Bernardo Guimarães
                        </h1>
                   </div>

                   <p className="text-[10px] mt-3 uppercase tracking-[0.2em] text-zinc-500 font-bold group-hover:text-violet-400 transition-colors">
                        © Direitos Reservados
                   </p>

                </Link>

            </div>
        </footer>
    )
}