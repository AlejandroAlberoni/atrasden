import Home from './home';
import Skills from './skills';
import Projects from './projects';
import Contact from './contact';

export default function Page() {

  return (
    <div className='flex flex-col items-center'>

      <Home /> 

      <Skills />

      <Projects />

      <Contact />

    </div>
  );
}
