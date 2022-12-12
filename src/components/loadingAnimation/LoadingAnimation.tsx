import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import paperPlaneAnimation from "../../assets/lottie/paperplane_animation.json"

type LoadingProps = {
    size: number
}

const LoadingAnimation = ({ size }: LoadingProps) => {
    let lottieRef = React.useRef<Player>(null);

    return (
        <Player
            ref={lottieRef} // set the ref to your class instance
            autoplay={true}
            loop={true}
            controls={true}
            src={paperPlaneAnimation}
            style={{ height: `${size}px`, width: `${size}px` }}
        ></Player>
    )
}

export default LoadingAnimation;
