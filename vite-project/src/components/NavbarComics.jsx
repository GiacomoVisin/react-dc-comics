export default function NavbarComics ({element}){
    

    return(
         <li> <a href={element.link} target="_blank" className={element.active ? "active" : ""}> {element.name} </a> </li>
    )
}