// Codes By Mahdi Tasha

// A Function Component That Holds MediaDownload Components, Elements
function MediasDownload(props) {
    return (
        <a href={'#'} className={'text-decoration-none'}>
            <button style={{backgroundColor: '#E8EEF8'}} className={'w-100 scroll-auto scroll-y-hidden scroll-styled-right-side none d-inline-flex jc-sb ai-center p-dot5 border-none'}>
                <div className={'d-flex ai-center SendedMediaBtn'}>
                    <div className={'mr-1 w-3rem h-3rem d-flex bg-white circle jc-center ai-center'}>
                        <i style={{color: '#A8BDE6'}} className={props.icon}></i>
                    </div>
                    <h4 className={'fw-normal mr-1'}>{props.title}</h4>
                </div>
                <i className="bi bi-download mr-1"></i>
            </button>
        </a>
    );
}

// Exporting MediasDownload Component
export default MediasDownload;