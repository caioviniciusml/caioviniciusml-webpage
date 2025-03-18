'use client'
import Link from "next/link"
import Image from "next/image"
import {
    Sheet,
    SheetContent,
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
                <Image
                    className="w-48 sm:w-60"
                    src={'/brand.png'}
                    width={750}
                    height={146}
                    alt="Caioviniciusml Brand">
                </Image>
            </Link>
            <nav className="hidden sm:flex gap-5 md:gap-10 text-xl text-grayprimary font-medium">
                <Link href={'/'} className="border-b-2 border-black hover:border-white hover:text-white">
                    Home
                </Link>
                <Link href={'/experience'} className="border-b-2 border-black hover:border-white hover:text-white">
                    Experience
                </Link>
                <Link href={'/projects'} className="border-b-2 border-black hover:border-white hover:text-white">
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
                    <SheetContent className="p-5 py-10 w-60 flex flex-col gap-5 text-xl font-bold text-white bg-black border-graysecondary ">
                        <SheetTitle className="self-center">
                            <Image
                                src={'/logo.svg'}
                                width={32}
                                height={32}
                                alt="Caioviniciusml Brand">
                            </Image>
                        </SheetTitle>
                        <Link href={'/'} onClick={() => setOpenNav(!openNav)}>
                            Home
                        </Link>
                        <Link href={'/experience'} onClick={() => setOpenNav(!openNav)}>
                            Experience
                        </Link>
                        <Link href={'/projects'} onClick={() => setOpenNav(!openNav)}>
                            Projects
                        </Link>
                    </SheetContent>
                </Sheet>
            </nav>
        </header>
    )
}