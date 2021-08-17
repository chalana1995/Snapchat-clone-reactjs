import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './Chats.css';
import SearchIcon from '@material-ui/icons/Search';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import { auth, db } from './firebase';
import Chat from './Chat';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/appSlice';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { useHistory } from 'react-router-dom';
import { resetCameraImage } from './features/cameraSlice';

function Chats() {

    const [posts, setPosts] = useState([]);
    const user = useSelector(selectUser);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            })))
        )
    }, [])

    const takeSnap = () => {
        dispatch(resetCameraImage())
        history.push('/')
    }

    console.log(posts);

    return (
        <div className="chats">
            <div className="chats__header">
                <Avatar
                    src={user.profilepic}
                    onClick={() => auth.signOut()}
                    className="chats__avatar" />
                <div className="chats__search">
                    <SearchIcon className="chats__searchIcon" />
                    <input type="text" placeholder="Friends" />
                </div>
                <ChatBubbleIcon className="chats__chatIcon" />
            </div>
            <div className="chat__posts">
                {posts.map(
                    ({
                        id,
                        data: { imageUrl, userName, timestamp, read, profilepic }
                    }) => (
                        <Chat
                            key={id}
                            id={id}
                            imageUrl={imageUrl}
                            userName={userName}
                            timestamp={timestamp}
                            read={read}
                            profilepic={profilepic}
                        />
                    ))}
            </div>
            <RadioButtonUncheckedIcon
                className="chats__takepicIcon"
                onClick={takeSnap}
                fontSize="large"
            />
        </div>
    )
}

export default Chats
