"use-client" 

import { UserButton } from "@clerk/nextjs"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { SearchInput } from "./search-input";

export const NavbarRoutes = () => {
    const pathname =usePathname();

    const isTeacherPage = pathname?.startsWith("/teacher");
    const isPlayerPage = pathname?.includes("/chapter");
    const isSearchPage = pathname === "/search";
    
    return (
        <>
            {isSearchPage && (
                <div className="hidden md:block">
                    <SearchInput />
                </div>
            )}
            <div className="flex gap-x-2 ml-auto">
                {isTeacherPage || isPlayerPage ? (
                    <Link href="/">
                        <Button className="sm" variant="ghost">
                            <LogOut className="h-4 w-4 mr-2"/>
                                Quitter
                        </Button>
                    </Link>
                ) : (
                    <Link href="/teacher/courses">
                        <Button className="sm" variant="ghost">
                            Mode Professeur
                        </Button>
                    </Link>
                )}
                <UserButton 
                    afterSignOutUrl="/"
                />
            </div>
        </>
    )
}