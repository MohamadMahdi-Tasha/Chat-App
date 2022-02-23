// Codes By Mahdi tasha

// A Function That Closes Modal
function closeModal(modalId) {document.getElementById(modalId).classList.add('show-on-click');}

// A Function A Component That Holds Modal Element
function Modal(props) {
    return (
        <div className={'p-fixed top-0 transition left-0 w-100 h-100 d-flex jc-center ai-center bg-lighter-dark show-on-click'} id={props.id}>
            <div className={'bg-white rounded shadow w-35 ov-hidden'}>
                <div className={'w-100 d-flex jc-end ai-center'}><button onClick={() => {closeModal(props.id)}} className={'w-3rem mr-1 mt-1 h-3rem bg-none hover-bg-light-black circle border-none transition'}><i className={'bi bi-x-lg'}></i></button></div>
                <div className={'p-1'}>{props.children}</div>
                {(props.children.props.children === 'There Is Nothing To Show') ? null : <button onClick={() => {closeModal(props.id)}} className={'w-100 p-1 bg-blue c-white border-none active-bg-blue transition'}>Change</button>}
            </div>
        </div>
    );
}

// Exporting Modal Component
export default Modal;