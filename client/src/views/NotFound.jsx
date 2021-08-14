import React from "react";
import { Link } from "@reach/router";
import Notstyle from "./Notstyle.css"
import Not from "./Not"

const NotFound = () => {


    return (

        <bodynot>
            <div className="text">
                <br></br><br></br><br></br>
                <div>ERROR</div>
                <h1>404</h1>
                <hr></hr>
                <div>Page Not Found</div>
                <br></br><br></br><br></br>
                <Link to="/login" style={{ color: "white" }}>please click here to login and create photo</Link>
            </div>
            <div className="astronautbake">
                <img src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png"
                    className="src" alt="" />

            </div>
        </bodynot>
    );
}
export default NotFound;