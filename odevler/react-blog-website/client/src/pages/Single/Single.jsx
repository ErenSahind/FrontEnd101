import SideBar from "../../components/sidebar/SideBar"
import SinglePost from "../../components/singlepost/SinglePost"
import "./single.css"

function Single() {
    return (
        <div className="single">
            <SinglePost />
            <SideBar />
        </div>
    )
}

export default Single