import { Avatar } from '@material-ui/core';
import React from 'react';
import './Chat.css';
import StopRoundedIcon from '@material-ui/icons/StopRounded';
import ReactTimeago from 'react-timeago';

function Chat({ id, imageUrl, userName, timestamp, read, profilepic }) {
    return (
        <div className="chat">
            <Avatar className="chat__avatar" src={profilepic} />
            <div className="chat__info">
                <h4>{userName}</h4>
                <p>Tap to view - <ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()} /></p>
            </div>
            {!read && <StopRoundedIcon className="chat__readIcon" />}
        </div>
    )
}

export default Chat
