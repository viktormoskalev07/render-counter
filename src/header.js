import Link from "next/link";

const nav =[
    "swr-in-child"

    ,"props"
]
export const Header =()=>{

    return <header>
        <nav>
            {nav.map((item)=>{
               return <Link style={{padding:10 , margin:5}} href={item} key={item}>
                   {item}
                </Link>
            })}
        </nav>
    </header>
}