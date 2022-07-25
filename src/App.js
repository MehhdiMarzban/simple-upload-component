import Upload from "./lib";
import {useState} from "react";
import "./app.css";
function App() {
    const [files, setFiles] = useState([]);
    return (
        <div className="App">
            <Upload files={files} setFiles={setFiles} multiple />
        </div>
    );
}

export default App;
