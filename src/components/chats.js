// Codes By Mahdi Tasha
// A Function Component That Holds Left Side middle Side Component
// Importing Part
import Chat from './chat';
import Modal from "./Modal";

// A Function To Show Modal
function showModal(modalId) {document.getElementById(modalId).classList.remove('show-on-click');}

function Chats() {
    return (
        <div className={'chats shadow rounded p-1 w-50 h-100 ov-scroll scroll-none bg-white'}>
            <Modal id={'modal1'}><h5 className={'c-light-black w-100 d-flex jc-center ai-center'}>There Is Nothing To Show</h5></Modal>
            <div className={'d-inline-flex w-100 jc-sb ai-center mt-1 mb-1'}>
                <h2 className={'c-light-black'}>Chats</h2>
                <button onClick={() => {showModal('modal1')}} className={'w-3rem h-3rem bg-none border-none circle transition hover-bg-light-black'}><i className="bi bi-three-dots"></i></button>
            </div>
            <form action="#">
                <div className={'bg-light rounded d-inline-flex w-100 p-1 mb-1'}>
                    <input className={'bg-none border-none w-100 mr-1'} type="text" placeholder={'Search'}/>
                    <button className={'bg-none border-none'}><i className="bi bi-search"></i></button>
                </div>
            </form>
            <ul className={'list-unstyled ov-scroll scroll-none'}>
                <li><Chat profilePicClassName={'h-4rem w-4rem bg-img-no-repeat bg-img-size-cover mr-1 circle'} className={'chat-component bg-none border-none d-inline-flex ai-center mb-1 p-1 w-100 cur-p hover-bg-light-black rounded active'} name={'Dwayne'} profileColor={'yellow'} lastSeen={'5 Minute Ago'} /></li>
                <li><Chat profilePicClassName={'h-4rem w-4rem bg-img-no-repeat bg-img-size-cover mr-1 circle'} className={'chat-component bg-none border-none d-inline-flex ai-center mb-1 p-1 w-100 cur-p hover-bg-light-black rounded'} name={'Ali'} profileColor={'orange'} lastSeen={'Yesterday'} /></li>
                <li><Chat profilePicClassName={'h-4rem w-4rem bg-img-no-repeat bg-img-size-cover mr-1 circle'} className={'chat-component bg-none border-none d-inline-flex ai-center mb-1 p-1 w-100 cur-p hover-bg-light-black rounded'} name={'Mohamad'} profileColor={'red'} lastSeen={'Online'} /></li>
                <li><Chat profilePicClassName={'h-4rem w-4rem bg-img-no-repeat bg-img-size-cover mr-1 circle'} className={'chat-component bg-none border-none d-inline-flex ai-center mb-1 p-1 w-100 cur-p hover-bg-light-black rounded'} name={'Reza'} profileColor={'blue'} lastSeen={'Online'} /></li>
                <li><Chat profilePicClassName={'h-4rem w-4rem bg-img-no-repeat bg-img-size-cover mr-1 circle'} className={'chat-component bg-none border-none d-inline-flex ai-center mb-1 p-1 w-100 cur-p hover-bg-light-black rounded'} name={'Ali Reza'} profileColor={'green'} lastSeen={'5 Minute Ago'} /></li>
                <li><Chat profilePicClassName={'h-4rem w-4rem bg-img-no-repeat bg-img-size-cover mr-1 circle'} className={'chat-component bg-none border-none d-inline-flex ai-center mb-1 p-1 w-100 cur-p hover-bg-light-black rounded'} name={'Morteza'} profileColor={'pink'} lastSeen={'10 Minute Ago'} /></li>
                <li><Chat profilePicClassName={'h-4rem w-4rem bg-img-no-repeat bg-img-size-cover mr-1 circle'} className={'chat-component bg-none border-none d-inline-flex ai-center mb-1 p-1 w-100 cur-p hover-bg-light-black rounded'} name={'Keyvan'} profileColor={'skyblue'} lastSeen={'2 Minute Ago'} /></li>
                <li><Chat profilePicClassName={'h-4rem w-4rem bg-img-no-repeat bg-img-size-cover mr-1 circle'} className={'chat-component bg-none border-none d-inline-flex ai-center mb-1 p-1 w-100 cur-p hover-bg-light-black rounded'} name={'Mahdi'} profileColor={'brown'} lastSeen={'30 Minute Ago'} /></li>
            </ul>
        </div>
    );
}

// Exporting Chats Component
export default Chats;