// Codes By Mahdi Tasha
// A Function Component That Holds Left Side Elements Of Page
function LeftSide() {
    return (
        <div className="LeftSide minh-100vh w-10 d-flex flex-d-c jc-sa ai-center bg-blue">
            <a className={'left-side-btns'} href="#"><i className="bi c-white bi-xbox fs-2"></i></a>
            <div className={'d-flex flex-d-c w-100'}>
                <a className={'w-100'} href="#"><button className={'border-none left-side-btn-hover transition bg-none left-side-btns jc-start p-1 w-100 c-white'}><i className="bi fs-2 bi-file-check"></i></button></a>
                <a className={'w-100'} href="#"><button className={'border-none left-side-btn-hover transition bg-none left-side-btns jc-start p-1 w-100 c-white'}><i className="bi fs-2 bi-calendar-week"></i></button></a>
                <a className={'w-100'} href="#"><button className={'border-none left-side-btn-hover transition bg-none left-side-btns active jc-start p-1 w-100 c-white'}><i className="bi fs-2 bi-chat-left-dots"></i></button></a>
                <a className={'w-100'} href="#"><button className={'border-none left-side-btn-hover transition bg-none left-side-btns jc-start p-1 w-100 c-white'}><i className="bi fs-2 bi-bell"></i></button></a>
                <a className={'w-100'} href="#"><button className={'border-none left-side-btn-hover transition bg-none left-side-btns jc-start p-1 w-100 c-white'}><i className="bi fs-2 bi-person-plus"></i></button></a>
                <a className={'w-100'} href="#"><button className={'border-none left-side-btn-hover transition bg-none left-side-btns jc-start p-1 w-100 c-white'}><i className="bi fs-2 bi-gear"></i></button></a>
            </div>
        </div>
    );
}

// Exporting LeftSide Component
export default LeftSide;