import Link from "next/link"
import Image from "next/image"
import { techs } from "@/app/techs";

interface ProjectCardProps {
    title: string;
    desc: string;
    img: string;
    target: string;
    tags: string[];
}

export function ProjectCard({ title, desc, img, target, tags }: ProjectCardProps){
    return(        
        <Link className="min-h-[400px] grid grid-cols-1 md:grid-cols-2 group border border-graythird bg-graybg rounded-3xl overflow-hidden" href={target}>
            <div className="h-64 md:h-auto relative overflow-hidden">
                <Image
                    className="group-hover:scale-110 transition duration-300 ease-in-out"
                    src={img}
                    style={{
                        objectFit: "cover",
                        objectPosition: "center",
                    }}
                    alt={`Showcase About the ${title} Project`}
                    fill>
                </Image>
            </div>
            <div className="py-10 px-5 lg:px-10 flex flex-col gap-5 md:gap-10 text-white">
                <h2 className="text-4xl font-bold">{title}</h2>
                <p className="text-justify text-base">{desc}</p>
                <div className="flex flex-wrap gap-8">
                    {techs.map((tech) => {
                        if(tags.includes(tech.name)){
                            return(
                                <div key={tech.name} className="relative h-8 w-8" title={tech.name}>
                                    <Image
                                        src={tech.img}
                                        alt={`${tech.name} Icon`}
                                        fill>
                                    </Image>
                                </div>
                            )
                        }
                    })}
                </div>
                <span className="flex items-center gap-2 text-lg text-graysecondary underline">
                    Read More
                    <Image
                        src={"/arrow.svg"}
                        width={16}
                        height={16}
                        alt="Arrow Icon"></Image>
                </span>
            </div>
        </Link>
    )
}