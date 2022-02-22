// Codes By Mahdi Tasha
// A Function Component That Holds Texts
function Massage(props) {
    return (
        <>
            {
                (props.fromYou)
                    ?
                    <div dir={'rtl'} className={'w-100 d-inline-flex ai-end w-100 mb-1'}>
                        <div className={'w-3rem h-3rem ml-1 circle'} style={{backgroundColor: props.profileBackgroundColor}}></div>
                        <div className={'bg-pink rounded-left-and-top-right h-100 w-80 h-100 p-1 shadow'}>
                            <p className={'d-flex jc-start c-white'}>{props.massage}</p>
                        </div>
                    </div>
                    :
                    <div dir={'ltr'} className={'w-100 d-inline-flex ai-end w-100 mb-1'}>
                        <div className={'w-3rem h-3rem mr-1 circle'} style={{backgroundColor: props.profileBackgroundColor}}></div>
                        <div className={'bg-white rounded-right-and-top-left h-100 w-80 h-100 p-1 shadow'}>
                            <p className={'d-flex jc-start'}>{props.massage}</p>
                        </div>
                    </div>
            }
        </>
    );
}

// Exporting MiddleSide Component
export default Massage;