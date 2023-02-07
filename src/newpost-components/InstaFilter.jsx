import { useContext } from "react"
import data from "./data"
import { FilterContext } from "../components/NewPost"

function InstaFilter() {
    const {filterType, setFilterType} = useContext(FilterContext)

    const handleOptionChange = (e) => setFilterType(e.target.value)
   
    const dataFilter = data.map(filterValue => <option value={filterValue.class} key={filterValue.id}>{filterValue.name}</option>)

    return (
        <div>
            <form action="">
                <select 
                    name="" 
                    id=""
                    className="select"
                    onChange={handleOptionChange}
                    value={filterType}
                    label="Filter">
                        {dataFilter}
                    </select>
            </form>
        </div>
    )
}

export default InstaFilter