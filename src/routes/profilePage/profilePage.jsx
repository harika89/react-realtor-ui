import List from '../../components/list/list';
import './profilePage.scss';

function ProfilePage(){
    return(
        <div className='profilePage'>
            <div className='details'>
                <div className='wrapper'>
                    <div className='title'>
                        <h2>User Details</h2>
                        <button>Update Profile</button>
                    </div>
                    <div className='info'>
                        <span>Username: <b>John Doe</b></span>
                        <span>Email: <b>johndoe@hotmail.com</b></span>
                    </div>
                    <div className='title'>
                        <h2>My List</h2>
                        <button>Add new Listing</button>
                    </div>
                    <List></List>
                    <div className='title'>
                        <h2>Saved List</h2>
                    </div>
                    <List></List>

                </div>
            </div>
            <div className='chatContainer'>
                <div className='wrapper'>
                    <h1>Chat</h1>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;