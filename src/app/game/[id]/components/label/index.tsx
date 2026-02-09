
interface LabelProps{
    name: string;
}


export function Label({ name }: LabelProps){
    return(
        <div
        className="grow py-1 px-3 bg-indigo-100 text-shadow-black text-center rounded-lg hover:font-bold duration-200 sm:grow-0">
            {name}
        </div>
    )
}