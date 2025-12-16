import {useEffect, useRef} from "react";


const Hero = () => {
    const videoRef = useRef();

    useEffect(() => {
        if(videoRef.current) videoRef.current.playbackRate =2;
    }, []);


    return (
        <section id="hero">
            <div>
                <h1>MacBook pro</h1>
                <img src="/title.png" alt="Macbook title" />
            </div>
            <video  ref ={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />
            <button>Bye</button>
            <p>From Rs:75,000 or Rs:7,600/mo for 12 months</p>
        </section>
    )
}
export default Hero
