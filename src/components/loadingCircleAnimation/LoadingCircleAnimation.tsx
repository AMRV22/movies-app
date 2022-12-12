import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import circleAnimation from "../../assets/lottie/circle_loading.json"

type LoadingProps = {
    size: number
}

const LoadingCircleAnimation = ({ size }: LoadingProps) => {
    let lottieRef = React.useRef<Player>(null);

    return (

        <Player
            ref={lottieRef}
            autoplay={true}
            loop={true}
            controls={true}
            src={circleAnimation}
            style={{ height: `${size}px`, width: `${size}px` }}
        ></Player>

    )
}

export default LoadingCircleAnimation;
