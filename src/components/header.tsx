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
import { useState } from "react"

export function Header() {
    const [openNav, setOpenNav] = useState(false)

    return (
        <header className="py-5 flex justify-between items-center">
            <Link href={'/'}>
                caioviniciusml
            </Link>
            <nav className="hidden sm:flex gap-10 text-lg text-grayprimary font-medium">
                <Link href={'/experience'} className="hover:text-white">
                    Experience
                </Link>
                <Link href={'/projects'} className="hover:text-white">
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
                            <SheetTitle className="mt-5 flex flex-col items-start gap-2 text-lg text-white font-normal">
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