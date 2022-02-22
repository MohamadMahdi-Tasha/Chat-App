// Codes By Mahdi Tasha
import {sendNewMessage} from "./texts";

// A Function That Shows Open File PopUp
function importData() {
    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = () => {
        let files = Array.from(input.files);
        console.log(files[0].name);
    };
    input.click();
}

// A Function That Holds New Massage Components Element
function NewMessage() {
    return (
            <div className={'NewMessage mb-1 d-inline-flex top-0 bg-white border-light-black p-dot5 rounded w-100'}>
                <div className={'d-inline-flex w-100'}>
                    <button onClick={importData} className={'mr-1 w-3rem h-3rem circle border-none bg-light hover-bg-light-black'}><i className="bi bi-plus fs-1dot5"></i></button>
                    <input id={'input-new-massage'} onKeyDown={(key) => { if (key.key === 'Enter') {sendNewMessage()} }} className={'bg-none outline-none border-none'} placeholder={'Type A Message To Send'} type="text"/>
                </div>
                <div className={'d-inline-flex jc-end w-100'}>
                    <button className={'w-3rem h-3rem circle outline-none hover-bg-light-black bg-none border-none mr-dot5'}><i className="bi bi-emoji-smile"></i></button>
                    <button onClick={sendNewMessage} className={'w-3rem h-3rem circle outline-none hover-bg-light-black bg-light c-blue border-none'}><i className="bi bi-send"></i></button>
                </div>
            </div>
    );
}

// Exporting NewMessage Component
export default NewMessage;