// Codes By Mahdi Tasha
// Importing Part
import Chat from './chat';
import Massage from './massage';
import NewMessage from "./new-message";
import Modal from './Modal';

// A Function That Closes Modal
function showModal(modalId) {document.getElementById(modalId).classList.remove('show-on-click');}

// A Function That Sends New Massage
export function sendNewMessage() {
    if (document.getElementById('input-new-massage').value === '') {showModal('modal3')}
    else {
        const list_parent = document.createElement('li');
        const parent_div = document.createElement('div');
        parent_div.className = 'w-100 d-inline-flex ai-end w-100 mb-1';
        parent_div.dir = 'rtl';

        const profile_Image = document.createElement('div');
        profile_Image.className = 'w-3rem h-3rem ml-1 circle';
        profile_Image.style.backgroundColor = '#006cff';

        const text_holder = document.createElement('div');
        text_holder.className = 'bg-pink rounded-left-and-top-right h-100 w-80 h-100 p-1 shadow';

        const text = document.createElement('p');
        text.class = 'd-flex jc-start';
        text.style.color = 'white';
        text.innerText = document.getElementById('input-new-massage').value;

        text_holder.appendChild(text);
        parent_div.appendChild(profile_Image);
        parent_div.appendChild(text_holder);
        list_parent.appendChild(parent_div);

        document.getElementById('massages_list').appendChild(list_parent);
        document.getElementById('input-new-massage').value = '';
    }
}

// A Function Component That Holds Texts
function Texts() {
    return (
        <div className={'Texts ml-2 w-50 h-100 ov-scroll scroll-none'}>
            <Modal id={'modal3'}><h5 className={'c-light-black w-100 d-flex jc-center ai-center'}>Please Fill The Input To Send Message.</h5></Modal>
            <Modal id={'modal2'}><h5 className={'c-light-black w-100 d-flex jc-center ai-center'}>There Is Nothing To Show</h5></Modal>
             <div className={'d-inline-flex w-100 jc-sb ai-center'}>
                 <Chat noClickOfRightSide profilePicClassName={'w-3rem h-3rem bg-img-no-repeat bg-img-size-cover mr-1 circle'} className={'chat-component bg-none border-none d-inline-flex ai-center mb-1 p-1 w-80'} name={'Dwayne'} profileColor={'yellow'} lastSeen={'5 Minute Ago'}/>
                 <button onClick={() => {showModal('modal2')}} className={'w-3rem h-3rem bg-none border-none circle transition hover-bg-light-black'}><i className="bi bi-three-dots"></i></button>
            </div>
            <ul id={'massages_list'} className={'list-unstyled mt-1'}>
                <li><Massage fromYou massage={'Lurem Ipsue Dolor Sit Amet.Lurem Ipsue Dolor Sit Amet.'}  profileBackgroundColor={'#006cff'}/></li>
                <li><Massage massage={'Lurem Ipsue Dolor Sit Amet.'}  profileBackgroundColor={'#006cff'}/></li>
                <li><Massage fromYou massage={'Lurem Ipsue Dolor Sit Amet.Lurem Ipsue Dolor Sit Amet.Lurem Ipsue Dolor Sit Amet.Lurem Ipsue Dolor Sit Amet.Lurem Ipsue Dolor Sit Amet.Lurem Ipsue Dolor Sit Amet.'}  profileBackgroundColor={'#006cff'}/></li>
                <li><Massage fromYou massage={'Lurem Ipsue Dolor Sit Amet.Lurem Ipsue Dolor Sit Amet.Lurem Ipsue Dolor Sit Amet.Lurem Ipsue Dolor Sit Amet.Lurem Ipsue Dolor Sit Amet.Lurem Ipsue Dolor Sit Amet.'}  profileBackgroundColor={'#006cff'}/></li>
                <li><Massage  massage={'Lurem Ipsue Dolor Sit Amet.Lurem Ipsue Dolor Sit Amet.Lurem Ipsue Dolor Sit Amet.Lurem Ipsue Dolor Sit Amet.Lurem Ipsue Dolor Sit Amet.Lurem Ipsue Dolor Sit Amet.'}  profileBackgroundColor={'#006cff'}/></li>
                <li><Massage fromYou massage={'Lurem Ipsue Dolor Sit Amet.Lurem Ipsue Dolor Sit Amet.Lurem Ipsue Dolor Sit Amet.Lurem Ipsue Dolor Sit Amet.Lurem Ipsue Dolor Sit Amet.Lurem Ipsue Dolor Sit Amet.'}  profileBackgroundColor={'#006cff'}/></li>
            </ul>
            <NewMessage />
        </div>
    );
}

// Exporting MiddleSide Component
export default Texts;