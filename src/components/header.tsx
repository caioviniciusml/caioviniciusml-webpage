'use client'
import Link from "next/link"
import Image from "next/image"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useEffect, useState } from "react"

export function Header() {
    const [openNav, setOpenNav] = useState<boolean>(false)
    const [isAtTop, setIsAtTop] = useState<boolean>(true)

    useEffect(() => {
        window.addEventListener("scroll", () =>  {
            if (window.scrollY > 0) {
                setIsAtTop(false)
            } else {
                setIsAtTop(true)
            }
        })
    }, [])

    return (
        <header className={`p-5 sm:p-10 max-sm:sticky top-0 z-10 w-full max-w-screen-xl flex justify-between items-center bg-black max-sm:border-b ${isAtTop ? "border-black" : "border-graythird"} transition-all`}>
            <Link href={'/'}>
                caioviniciusml
            </Link>
            <nav className="hidden sm:flex gap-10 text-lg text-grayprimary font-medium">
                <Link href={'/'} className="hover:text-white border-b-2 border-black hover:border-white">
                    Home
                </Link>
                <Link href={'/experience'} className="hover:text-white border-b-2 border-black hover:border-white">
                    Experience
                </Link>
                <Link href={'/projects'} className="hover:text-white border-b-2 border-black hover:border-white">
                    Projects
                </Link>
            </nav>
            <nav className="sm:hidden flex items-center">
                <Sheet open={openNav} onOpenChange={setOpenNav}>
                    <SheetTrigger>
                        <Image
                            src={'/drawer.svg'}
                            width={50}
                            height={50}
                            style={{
                                height: "32px",
                                width: "32px"
                            }}
                            alt="Side Navbar Icon">
                        </Image>
                    </SheetTrigger>
                    <SheetContent className="bg-black border-graysecondary w-52">
                        <SheetHeader>
                            <SheetTitle className="mt-10 flex flex-col items-start gap-5 text-xl text-white">
                                <Link href={'/'} onClick={() => setOpenNav(!openNav)}>
                                    Home
                                </Link>
                                <Link href={'/experience'} onClick={() => setOpenNav(!openNav)}>
                                    Experience
                                </Link>
                                <Link href={'/projects'} onClick={() => setOpenNav(!openNav)}>
                                    Projects
                                </Link>
                            </SheetTitle>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </nav>
        </header>
    )
}