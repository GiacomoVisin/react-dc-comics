import ComicCard from "./ComicCard"



function BlackBar({ comics }) {
    return (

        <div className="blackbar">
            <div className="container">
                <button className="Series"> CURRENT SERIES </button>
                <div className="row g-1">
                    {comics.map((item) => (
                        <div key={item.id} className="col-6 col-md-4 col-lg-2">
                            <ComicCard item={item} />
                        </div>
                    ))}
                </div>
                <button className="Loading"> LOAD MORE </button>
            </div>
        </div>

    )
}


export default BlackBar