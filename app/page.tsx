import Home from "./home";
import Skills from "./skills";
import Project from "./project";
import Contact from "./contact";

export default function Page() {
  return (
    <div className="flex flex-col items-center space-y-80">
      <Home />

      <Skills />

      <Project />

      <Contact />
    </div>
  );
}
