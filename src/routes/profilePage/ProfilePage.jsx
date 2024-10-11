import React from 'react';
import './profilePage.scss';
import List from '../../components/list/List';
import Chat from '../../components/chat/Chat';

const ProfilePage = () => {
    return (
        <div className="profilePage">
            <div className="details">
                <div className="wrapper">
                    <div className="info">
                            <div className='first'>
                                <img src="/user.jpg" alt="" />
                                <div className='afirst'>
                                    <span className='title'>Username</span>
                                    <span className='value'>Kio San</span>
                                    <span className='title'>Address</span>
                                    <span className='value'>Samakhushi Kathmandu</span>

                                </div>
                            </div>
                            <div>
                                <span className='title'>E-mail</span>
                                <span className='value'>kiosan@gmail.com</span>
                                <span className='title'>Phone no</span>
                                <span className='value'>9800265875</span>
                            </div>
                    </div>
                    <div className="buttons">
                        <button>Update Profile</button>
                        <button>Create New Post</button>
                    </div>
                    <div className="title">
                        <h4>My Posts</h4>
                    </div>
                    <List />
                    <div className="title">
                        <h4>Saved List &#129505;</h4>
                    </div>
                    <List />
                </div>
            </div>
            <div className="chatContainer">
                <div className="wrapper">
                    <Chat />
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;