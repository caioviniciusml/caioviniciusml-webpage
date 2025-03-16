import { ProjectCard } from "@/components/projectCard";

export default function Projects() {
  return (
    <div className="grid grid-cols-1 gap-10 sm:gap-20">
      <div>
        <h1 className="text-white text-4xl font-bold">Projects</h1>
        <p className="pt-5 text-justify text-grayprimary text-base lg:text-xl">This section showcases my personal projects, highlighting my expertise and skills developing web applications using modern technologies such as React, Next.js, TypeScript, Node.js, Express.js and more.</p>
      </div>
      <div className="grid grid-cols-1 gap-10 md:gap-20">
        <ProjectCard
          title="Poomu"
          desc="A Web-based Pomodoro application built with TypeScript and React. It provides an intuitive and efficient way to manage productivity using the Pomodoro technique and a task manager helping you to track your duties." 
          img="/wolf.jpg"
          target="/"
          tags={['HTML 5', 'CSS 3', 'TypeScript', 'Figma', 'Git', 'Arch Linux', 'GitHub']}/>
        <ProjectCard
          title="Country Info"
          desc="A Web-based Pomodoro application built with TypeScript and React. It provides an intuitive and efficient way to manage productivity using the Pomodoro technique and a task manager helping you to track your duties." 
          img="/wolf.jpg"
          target="/"
          tags={['HTML 5', 'CSS 3', 'TypeScript', 'Figma', 'Git', 'GitHub']}/>
        <ProjectCard
          title="Recipe Book"
          desc="A Web-based Pomodoro application built with TypeScript and React. It provides an intuitive and efficient way to manage productivity using the Pomodoro technique and a task manager helping you to track your duties." 
          img="/wolf.jpg"
          target="/"
          tags={['HTML 5', 'CSS 3', 'TypeScript', 'Arch Linux', 'GitHub']}/>
        <ProjectCard
          title="Instabytes"
          desc="A Web-based Pomodoro application built with TypeScript and React. It provides an intuitive and efficient way to manage productivity using the Pomodoro technique and a task manager helping you to track your duties." 
          img="/wolf.jpg"
          target="/"
          tags={['HTML 5', 'CSS 3', 'TypeScript', 'Node.js', 'Git', 'Arch Linux', 'GitHub', 'Express.js']}/>
        <ProjectCard
          title="Movie Picker"
          desc="A Web-based Pomodoro application built with TypeScript and React. It provides an intuitive and efficient way to manage productivity using the Pomodoro technique and a task manager helping you to track your duties." 
          img="/wolf.jpg"
          target="/"
          tags={['HTML 5', 'CSS 3', 'TypeScript', 'Arch Linux', 'GitHub']}/>
      </div>
    </div>
  );
}
