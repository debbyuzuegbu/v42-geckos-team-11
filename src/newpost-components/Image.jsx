import { useState, useContext,  useRef } from "react"
import logo from "../assets/upload.svg"
import { FilterContext } from "../components/NewPost"
import "../Styles/instagram.css"


function Image() {
    const uploadInputRef = useRef(null)
    const [imageFile, setImageFile] = useState(null)
    const { filterType } = useContext(FilterContext)

    function handleClick() {
        uploadInputRef.current && uploadInputRef.current.click()
    }

    const handleChange = (e) => {
        setImageFile(URL.createObjectURL(e.target.files[0]))
    }

    const renderImage = () => {
        return <div className="uploaded-image">
            <img src={imageFile} alt="" className={`newImage ${filterType}`}/>
        </div>
    }

    return (
        <div className="imageData">
           <form action="" className="upload-form">
            <div className="image-box" onClick={handleClick}>
                <input type="file" 
                accept="image/*"
                onChange={handleChange}
                ref={uploadInputRef}/>
                {imageFile ? renderImage() : 
                <p className="fileLabel"><img src={logo} alt="" />Choose a file</p>}
            </div>
            <p>Accepted files are: png, jpeg, svg</p>
            <textarea name=""
            placeholder="Description" 
            id="" cols="10" rows="3" />
            <button className="postBtn">Create Post</button>
            </form>
        </div>
    )
}

export default Image