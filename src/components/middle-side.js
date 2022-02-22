// Codes By Mahdi Tasha
// Importing Part
import Chats from "./chats";
import Texts from './texts';

// A Function Component That Holds Middle Side Side Elements Of Page
function MiddleSide() {
    return (
        <div className="MiddleSide w-70 d-inline-flex bg-light rounded m-1 p-2 ov-scroll scroll-none" style={{height: '94vh'}}>
            <Chats />
            <Texts />
        </div>
    );
}

// Exporting MiddleSide Component
export default MiddleSide;