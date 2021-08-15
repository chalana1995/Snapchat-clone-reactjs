import React, { useCallback, useRef, useState } from 'react'
import Webcam from "react-webcam";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: "user"
};



function WebCamCapture() {


    const webCamRef = useRef(null);
    // const [image, setImage] = useState(null);


    const capture = useCallback(() => {
        const imageSrc = webCamRef.current.getScreenshot();
    }, [webCamRef])

    return (
        <div className="webcamCapture">
            <Webcam
                audio={false}
                height={videoConstraints.height}
                ref={webCamRef}
                screenshotFormat="image/jpeg"
                width={videoConstraints.width}
                videoConstraints={videoConstraints}
            />

            <RadioButtonUncheckedIcon
                className="webCamCapture__button"
                onClick={capture}
                fontSize="large"
            />
        </div>
    )
}

export default WebCamCapture
