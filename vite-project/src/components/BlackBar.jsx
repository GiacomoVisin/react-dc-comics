import comics from "../../dc-comics-2/comics"



function BlackBar() {
    return (

        <div className="blackbar">
            <div className="container">
                <div className="row">
                    {comics.map((item) => (
                        <div key={item.id} className="col-6 col-md-4 col-lg-2">
                            <div className="card w-60 mt-4 mb-1 border-0 bg-transparent">
                                <img src={item.thumb} alt={item.series} className="img-fluid" />
                                 <p className="text-white uppercase pt-2"> {item.series} </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}


export default BlackBar