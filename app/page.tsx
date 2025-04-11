import Home from "./home";
// import Author from "./author";
import Project from "./project";
import Contact from "./contact";

export default function Page() {
  return (
    <div className="flex flex-col items-center space-y-80">
      <Home />

      {/* <Author /> */}

      <Project />

      <Contact />
    </div>
  );
}
