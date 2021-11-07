import './App.css';
import Search from "./components/Search";
import List from "./components/List";
import {useState} from "react";

function App() {
    const init = {
        users: [],
        isFirst: true,
        isLoading:false,
        err:''
    }
    const [userState, setUserState] = useState(init);
    return (
        <div className="container">
            <Search setUserState={setUserState}/>
            <List users={userState}/>
        </div>
    );
}

export default App;
