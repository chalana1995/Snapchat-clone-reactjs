import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './Chats.css';
import SearchIcon from '@material-ui/icons/Search';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import { db } from './firebase';
import Chat from './Chat';

function Chats() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            })))
        )
    }, [])

    console.log(posts);

    return (
        <div className="chats">
            <div className="chats__header">
                <Avatar className="chats__avatar" />
                <div className="chats__search">
                    <SearchIcon />
                    <input type="text" placeholder="Friends" />
                </div>
                <ChatBubbleIcon />
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
        </div>
    )
}

export default Chats
