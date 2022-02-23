// Codes By Mahdi Tasha
// A Function That Holds Chat Component Elements And It Props
function Chat(props) {
    return (
        <div className={props.className} onClick={() => {
            alert('Clicked')
        }}>
            <div className={props.profilePicClassName} style={{backgroundColor: props.profileColor}}></div>
            <div>
                <h2>{props.name}</h2>
                {(props.lastSeen === 'Online') ? <h3 className={'c-blue'}>{props.lastSeen}</h3> : <h3 className={'c-light-black'}>Last Seen {props.lastSeen}</h3>}
            </div>
        </div>
    );
}

// Exporting Chat Component
export default Chat;