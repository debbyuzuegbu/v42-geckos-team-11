import InstaFilter from "./InstaFilter"

function Filter() {
    return (
        <div className="filterData">
            <div className="nav">
                <p 
                    value="instaFilter" 
                    className="navLink"
                 >
                        Insta Filter
                </p>
            </div>
            <div>
                <InstaFilter />
            </div>
        </div>
    )
}

export default Filter