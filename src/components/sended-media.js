// Codes By Mahdi Tasha
// Importing part
import MediasDownload from './medias-download';

// Variables
let tap = 0;

// A Function Component That Holds Sended Medias Components Element
function SendedMedia(props) {
    if (props.hasItems) {
        return (
            <div className={'w-100 mb-dot5'}>
                <button id={'hasItemBtn'} onClick={() => {
                    tap ++;
                    if (tap % 2 !== 0) {
                        document.getElementById('medias-download-list').style.opacity = '100%';
                        document.getElementById('medias-download-list').style.height = 'auto';
                        document.getElementById('hasItemBtn').classList.replace('rounded', 'rounded-top');
                    } else {
                        document.getElementById('medias-download-list').style.height = '0';
                        document.getElementById('medias-download-list').style.opacity = '0';
                        document.getElementById('hasItemBtn').classList.replace('rounded-top', 'rounded');
                    }
                }} style={{backgroundColor: props.backgroundColor}} className={'w-100 transition d-inline-flex jc-sb ai-center p-dot5 border-none rounded'}>
                    <div className={'d-flex ai-center SendedMediaBtn'}>
                        <div className={'bg-white'}
                             className={'mr-1 w-3rem h-3rem d-flex bg-white circle jc-center ai-center'}>
                            <i style={{color: props.iconColor}} className={props.icon}></i>
                        </div>
                        <h4 className={'fw-normal'}>{props.title}</h4>
                    </div>
                    <i className="bi bi-chevron-down"></i>
                </button>
                <ul id={'medias-download-list'} className={'list-unstyled bg-purple rounded-bottom ov-hidden transition opacity-0 h-0'}>
                    <li><MediasDownload title={'Mockup_design.zip'} icon={'bi-file-earmark-zip'}/></li>
                    <li><MediasDownload title={'Feedback.docx'} icon={' bi-filetype-docx'}/></li>
                    <li><MediasDownload title={'Wirframe.zip'} icon={'bi-file-earmark-zip'}/></li>
                    <li><MediasDownload title={'Client_Requirements.txt'} icon={'bi-filetype-txt'}/></li>
                    <li><MediasDownload title={'New_project_brief.pdf'} icon={' bi-filetype-pdf'}/></li>
                </ul>
            </div>
        );
    } else return (
        <div className={'w-100'}>
            <button style={{backgroundColor: props.backgroundColor}} className={'w-100 d-inline-flex jc-sb ai-center p-dot5 border-none rounded mb-dot5'}>
                <div className={'d-flex ai-center SendedMediaBtn'}>
                    <div className={'bg-white'}
                         className={'mr-1 w-3rem h-3rem d-flex bg-white circle jc-center ai-center'}>
                        <i style={{color: props.iconColor}} className={props.icon}></i>
                    </div>
                    <h4 className={'fw-normal'}>{props.title}</h4>
                </div>
            </button>
        </div>
    );
}

// Exporting SendedMedia Component
export default SendedMedia;