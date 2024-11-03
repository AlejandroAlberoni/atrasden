import Spline from '@splinetool/react-spline/next';
import { Space_Grotesk } from 'next/font/google'
import { Righteous } from 'next/font/google';

//const splineScene = "https://prod.spline.design/p4iP4wTGWNRNkBXe/scene.splinecode"
//const splineScene = "https://prod.spline.design/ZA7tlSHuDNKipbn8/scene.splinecode"
const splineScene = "https://prod.spline.design/oLwbthR5P4hZa54G/scene.splinecode"

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
      <Spline className='absolute place-self-center w-auto' scene={splineScene} />
      <div className='flex flex-col select-none'>
        <div className={`${righteous.className} absolute mt-4 w-full text-xl text-center text-white text-nowrap z-[-1]`}>
          A. T. R. A.
        </div>
        <div className={`${spaceGrotesk.className} text-center text-white text-[36px] lg:text-[48px] mt-[50%] lg:mt-20 mx-10 lg:mx-0 antialiased z-10 pointer-events-none`}>
          <p>Welcome to my personal and portfolio website.</p>
          <p>I’m a computer science bachelor located in Brazil.</p>
        </div>
        <div className={`${spaceGrotesk.className} mt-[50vh] lg:mt-[20%] text-[36px] lg:text-[48px] text-white mx-10 z-10 pointer-events-none`}>
          <p className='text-center lg:text-justify'>
            &quot;This project blends creativity with purpose, showcasing my skills in web design, front-end, and back-end development while serving as a practical tool in my daily life.&ldquo;
          </p>
          <p className='float-end lg:mr-40 mt-10 lg:mt-0 '>-ChatGPT</p>
        </div>
      </div>
    </div>
  );
}
