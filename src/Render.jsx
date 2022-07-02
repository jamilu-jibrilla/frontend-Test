import { BrowserRouter as Router, Route, Routes,  } from "react-router-dom";
import App from "./App"
import Login from "./component/Login";
import Details from "./component/Details";
const Render = () => {
    return(
        <div className="Render">
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="/home" element={< App/>} />
                <Route path="/home/:id" element={< Details/>} />
            </Routes>
        </div>
    )
}

export default Render