// Codes By Mahdi Tasha
// Importing Part
import SendedMedia from "./sended-media";

// A Function Component That Holds Right Side Components Element
function RightSide(props) {
    return (
        <div className={'right-side bg-white m-1 w-20 p-1 shadow rounded ov-scroll scroll-none'} style={{height: '94vh'}}>
            <div className={'mb-1'}>
                <div className={'d-flex w-100 jc-center mt-1 mb-1'}><div className={'w-4rem h-4rem circle'} style={{backgroundColor: props.yourColor}} /></div>
                <h4 className={'w-100 d-flex jc-center'}>Mohamad Mahdi Tasha</h4>
                <h5 className={'w-100 d-flex jc-center c-light-black'}>Front End Developer</h5>
            </div>
            <SendedMedia backgroundColor={'#FEF5E6'} iconColor={'#F7C261'} icon={"bi bi-star"} title={'Starred Massages'} />
            <SendedMedia backgroundColor={'#E8EEF8'} iconColor={'#A8BDE6'} icon={"bi bi-file-earmark-text"} title={'File And Docs (43)'} hasItems/>
            <SendedMedia backgroundColor={'#FEF0F6'} iconColor={'#FBCCE2'} icon={"bi bi-image"} title={'Media'}/>
        </div>
    );
}

// Exporting RightSide Component
export default RightSide;