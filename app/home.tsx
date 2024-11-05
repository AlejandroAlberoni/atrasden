import Spline from '@splinetool/react-spline'
import { Space_Grotesk, Righteous } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    weight: ['700'],
})
const righteous = Righteous({
    subsets: ['latin'],
    weight: ['400'],
})

const Home = async function () {
    const splineScene = "https://prod.spline.design/jt8RnVQ10Yms6wvT/scene.splinecode"
    // MATRIX CUBE SCENE
    //const splineScene = "https://prod.spline.design/H-tPD6CSV3Q69LNQ/scene.splinecode"

    // INTERATIVE CUBE GRID
    //const splineScene = "https://prod.spline.design/GGySFwbF34NgDPU0/scene.splinecode"
    return (
        <section id='home'>
            <Spline className='absolute' scene={splineScene} />
            <div className='flex flex-col select-none'>

                <div className={`${righteous.className} absolute mt-4 w-full text-xl text-center text-white text-nowrap z-[-1]`}>
                    A. T. R. A.
                </div>

                <div className={`${spaceGrotesk.className} mx-10 lg:mx-0 text-center text-white text-[36px] lg:text-[48px] mt-[50%] lg:mt-20 antialiased z-[2] pointer-events-none`}>
                    <p>Welcome to my personal and portfolio website.</p>
                    <p>I&apos;m a computer science bachelor located in Brazil.</p>
                </div>

                <div className={`${spaceGrotesk.className} mx-10 mt-[50vh] lg:mt-[20%] text-[36px] lg:text-[48px] text-white z-[2] pointer-events-none`}>
                    <p className='text-center lg:text-justify'>
                        &quot;This project blends creativity with purpose, showcasing my skills in web design, front-end, and back-end development while serving as a practical tool in my daily life.&ldquo;
                    </p>
                    <p className='float-end lg:mr-40 mt-10 lg:-mt-3'>-ChatGPT</p>
                </div>

                <div className='absolute bottom-0 h-14 w-full bg-black z-[1]' /> {/* hider wrapper */}
            </div>
        </section>
    )
}

export default Home