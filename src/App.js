// Codes By Mahdi Tasha
// Importing Part
import LeftSide from './components/left-side';
import './style.css';
import MiddleSide from "./components/middle-side";
import RightSide from "./components/right-side";

// A Function Component That Is Root Of Our React App
function App() {
    return (
        <div className="App bg-red d-inline-flex w-100">
            <LeftSide/>
            <MiddleSide/>
            <RightSide yourColor={'#ff0000'}/>
        </div>
    );
}

// Exporting App Component
export default App;