import Home from './home';
import Skills from './skills';
import Contact from './contact';
import Author from './author';

export default function Page() {

  return (
    <div className='flex flex-col items-center'>

      <Home />

      <Skills />

      <Contact />

      <Author />

    </div>
  );
}
