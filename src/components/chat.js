// Codes By Mahdi Tasha
// A Function That Holds Chat Component Elements And It Props
function Chat(props) {
    return (
        <div id={props.id} className={props.className} onClick={() => {
            const chat1 = document.getElementById('chat1');
            const chat2 = document.getElementById('chat2');
            const chat3 = document.getElementById('chat3');

            const chat4 = document.getElementById('chat4');
            const chat5 = document.getElementById('chat5');
            const chat6 = document.getElementById('chat6');

            const chat7 = document.getElementById('chat7');
            const chat8 = document.getElementById('chat8');

            if (chat1.classList.contains('active')) {chat1.classList.remove('active');}
            else if (chat2.classList.contains('active')) {chat2.classList.remove('active')}
            else if (chat3.classList.contains('active')) {chat3.classList.remove('active')}

            else if (chat4.classList.contains('active')) {chat4.classList.remove('active')}
            else if (chat5.classList.contains('active')) {chat5.classList.remove('active')}
            else if (chat6.classList.contains('active')) {chat6.classList.remove('active')}

            else if (chat7.classList.contains('active')) {chat7.classList.remove('active')}
            else if (chat8.classList.contains('active')) {chat8.classList.remove('active')}
            document.getElementById(props.id).classList.add('active');
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