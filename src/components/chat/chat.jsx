import './chat.scss';
import { useState } from "react";

function Chat(){
    const [chat, setChat] = useState(true);
    return(
        <div className='chat'>'
            <div className='messages'>
                <h1>Messages</h1>
                <div className='message'>
                    <img src='/profile.png' alt='profile'></img>
                    <span>John Doe</span>
                    <p>Hello! We like your house</p>
                </div>

                <div className='message'>
                    <img src='/profile.png' alt='profile'></img>
                    <span>John Doe</span>
                    <p>Hey Dawg!</p>
                </div>

                <div className='message'>
                    <img src='/profile.png' alt='profile'></img>
                    <span>John Doe</span>
                    <p>Hello! We like your house</p>
                </div>
                <div className='message'>
                    <img src='/profile.png' alt='profile'></img>
                    <span>John Doe</span>
                    <p>Hello! We like your house</p>
                </div>
                <div className='message'>
                    <img src='/profile.png' alt='profile'></img>
                    <span>John Doe</span>
                    <p>Whoooohooo</p>
                </div>
                <div className='message'>
                    <img src='/profile.png' alt='profile'></img>
                    <span>John Doe</span>
                    <p>Helloooooe</p>
                </div>
            </div>
            {chat && (
            <div className='chatBox'>
                <div className='top'>
                    <div className='user'>
                        <img src='/profile.png' alt='user'></img>
                        <span>John Doe</span>
                    </div>
                    <span className='close' onClick={()=>setChat(null)}>X</span>
                </div>
                <div className='center'>
                    <div className='chatMessage'>
                        <p>HeyBruh! Sssuuup?</p>
                        <span>6 minutes ago</span>
                    </div>
                    <div className='chatMessage own'>
                        <p>HeyBruh! Sssuuup?</p>
                        <span>6 minutes ago</span>
                    </div>
                    <div className='chatMessage'>
                        <p>HeyBruh! Sssuuup?</p>
                        <span>6 minutes ago</span>
                    </div>
                    <div className='chatMessage own'>
                        <p>HeyBruh! Sssuuup?</p>
                        <span>6 minutes ago</span>
                    </div>
                    <div className='chatMessage'>
                        <p>HeyBruh! Sssuuup?</p>
                        <span>6 minutes ago</span>
                    </div>
                </div>
                <div className='bottom'>
                    <textarea></textarea>
                    <button>Send</button>
                </div>
            </div>
            )}
        </div>
    )
}

export default Chat;