// Codes By Mahdi Tasha
// A Function That Holds Chat Component Elements And It Props
function Chat(props) {
    return (
        <div className={props.className}>
            <div className={props.profilePicClassName} style={{backgroundColor: props.profileColor}}></div>
            <div>
                <h2>{props.name}</h2>
                <h3 className={'c-light-black'}>Last Seen : {props.lastSeen}</h3>
            </div>
        </div>
    );
}

// Exporting Chat Component
export default Chat;