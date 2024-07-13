import SkillsItem from "../ui/SkillsItem";

function Skills() {
  return (
    <div className="bg-new-2 flex h-screen max-w-6xl flex-col text-gray-300 md:mx-auto">
      <div className="ml-3 pt-20 md:pb-10">
        {" "}
        <span className="text-3xl font-bolder tracking-tighter transition-all duration-700 ease-in-out hover:text-third-new md:text-5xl">
          Technologies I'm Working On &darr;
        </span>
      </div>
      <div className="md ml-6 mt-2 h-5/6 flex-wrap md:flex md:flex-col md:gap-x-10">
        <SkillsItem text="Programming Languages :">
          <p className="hover:text-third-new">&rarr; JavaScript</p>
          <p className="hover:text-third-new">&rarr; Java</p>
          <p className="hover:text-third-new">&rarr; Python</p>
        </SkillsItem>
        <SkillsItem text="Web Development :">
          <span className="hover:text-third-new">
            Html5, CSS3, Styled-Components
          </span>
        </SkillsItem>
        <SkillsItem text="Libraries/Frameworks :">
          <p className="hover:text-third-new">&rarr; ReactJS</p>
          <p className="hover:text-third-new">&rarr; ReduxJS</p>
          <p className="hover:text-third-new">&rarr; ReactQuery</p>
          <p className="hover:text-third-new">&rarr; TailwindCSS</p>
        </SkillsItem>
        <SkillsItem text={"Database :"}>
          <p className="hover:text-third-new">&rarr; Oracle SQL</p>
          <p className="hover:text-third-new">&rarr; PostgreSQL</p>
        </SkillsItem>
        <SkillsItem text={"Version Control :"}>
          <p className="hover:text-third-new">&rarr; Git</p>
          <p className="hover:text-third-new">&rarr; Github</p>
        </SkillsItem>
        <SkillsItem text={"Others :"}>
          <p className="hover:text-third-new">&rarr; Supabase</p>
          <p className="hover:text-third-new">&rarr; Firebase</p>
          <p className="hover:text-third-new">&rarr; VS Code</p>
          <p className="hover:text-third-new">&rarr; MS-Office</p>
        </SkillsItem>
      </div>
    </div>
  );
}

export default Skills;
