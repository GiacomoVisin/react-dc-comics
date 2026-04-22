export default function ComicCard({item}) {


    return (
        <div className="card w-60 mt-3  border-0 bg-transparent">
            <img title={item.title} src={item.thumb} alt={item.series} className="img-fluid" />
            <p className="text-white uppercase pt-2"> {item.series} </p>
        </div>


    )
}

