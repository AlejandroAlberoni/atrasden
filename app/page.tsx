import Spline from '@splinetool/react-spline/next';
import { Space_Grotesk } from 'next/font/google'
import { Righteous } from 'next/font/google';

// CUBE
const splineScene = "https://prod.spline.design/jt8RnVQ10Yms6wvT/scene.splinecode"

// MATRIX CUBE SCENE
//const splineScene = "https://prod.spline.design/H-tPD6CSV3Q69LNQ/scene.splinecode"

// INTERATIVE CUBE GRID
//const splineScene = "https://prod.spline.design/GGySFwbF34NgDPU0/scene.splinecode"
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['700'],
})
const righteous = Righteous({
  subsets: ['latin'],
  weight: ['400'],
})

export default function Home() {
  return (
    <div>
      <section id='#home'>

        <Spline className='absolute place-self-center w-auto' scene={splineScene} />
        <div className='flex flex-col select-none'>

          <div className={`${righteous.className} absolute mt-4 w-full text-xl text-center text-white text-nowrap z-[-1]`}>
            A. T. R. A.
          </div>

          <div className={`${spaceGrotesk.className} text-center text-white text-[36px] lg:text-[48px] mt-[50%] lg:mt-20 mx-10 lg:mx-0 antialiased z-[1] pointer-events-none`}>
            <p>Welcome to my personal and portfolio website.</p>
            <p>I’m a computer science bachelor located in Brazil.</p>
          </div>

          <div className={`${spaceGrotesk.className} mt-[50vh] lg:mt-[20%] text-[36px] lg:text-[48px] text-white mx-10 z-[1] pointer-events-none`}>
            <p className='text-center lg:text-justify'>
              &quot;This project blends creativity with purpose, showcasing my skills in web design, front-end, and back-end development while serving as a practical tool in my daily life.&ldquo;
            </p>
            <p className='float-end lg:mr-40 mt-10 lg:mt-0'>-ChatGPT</p>
          </div>

        </div>
      </section>
    </div>
  );
}
