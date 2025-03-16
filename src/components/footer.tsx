import Link from "next/link"

export function Footer() {
    return (
        <footer className="p-5 sm:p-10 w-full max-w-screen-xl grid grid-cols-1 gap-2 text-[10px] sm:text-sm text-graysecondary">
            <span>caioviniciusml</span>
            <div className="flex items-center justify-between">
                <div className="grid grid-cols-1 gap-1 sm:gap-2">
                    <span>Full Stack Software Engineer</span>
                    <span>devcaioviniciusml@gmail.com</span>
                </div>
                <div className="flex gap-5 sm:gap-10">
                    <div className="grid grid-cols-1 gap-1 sm:gap-2">
                        <Link href={'/experience'}>
                            Experience
                        </Link>
                        <Link href={'/projects'}>
                            Projects
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 gap-1 sm:gap-2">
                        <Link href={"https://github.com/caioviniciusml"} target="_blank">
                            GitHub
                        </Link>
                        <Link href={"https://www.linkedin.com/in/caioviniciusml/"} target="_blank">
                            LinkedIn
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}