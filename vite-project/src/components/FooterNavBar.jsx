export default function FooterNavBar({ obj }) {

    return (
        <li key={obj.id}> <a href={obj.link} target="_blank"> <img alt={obj.text} title={`Vai su ` + obj.text + ` DC`} src={obj.img}></img> </a></li>

    )

}