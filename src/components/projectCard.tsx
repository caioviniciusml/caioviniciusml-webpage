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
        <Link className="min-h-[400px] border border-graythird grid grid-cols-1 md:grid-cols-2 group rounded-3xl bg-graybg overflow-hidden" href={target}>
            <div className="h-64 md:h-auto relative overflow-hidden">
                <Image
                    src={img}
                    style={{
                        objectFit: "cover",
                        objectPosition: "center",
                        transition: "transform .2s",
                    }}
                    alt={`Showcase About the ${title} Project`}
                    fill>
                </Image>
            </div>
            <div className="py-10 px-5 md:px-10 flex flex-col gap-5 md:gap-10 text-white">
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
            </div>
        </Link>
    )
}