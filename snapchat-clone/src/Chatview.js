import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Chatview.css';
import { selectSelectedImage } from './features/appSlice';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

function Chatview() {

    const selectImage = useSelector(selectSelectedImage);
    const history = useHistory();



    useEffect(() => {
        if (!selectImage) {
            exit();
        }
    }, [selectImage])


    const exit = () => {
        history.replace('/chats')
    }

    return (
        <div className="chateview">
            <img src={selectImage} onClick={exit} alt="" />
            <div className="chateview__timer">
                <CountdownCircleTimer
                    isPlaying
                    duration={10}
                    strokeWidth={6}
                    size={50}
                    colors={[
                        ['#004777', 0.33],
                        ['#F7B801', 0.33],
                        ['#A30000', 0.33],
                    ]}
                >
                    {({ remainingTime }) => {
                        if (remainingTime === 0) {
                            exit()
                        }

                        return remainingTime
                    }}
                </CountdownCircleTimer>
            </div>
        </div>
    )
}

export default Chatview
