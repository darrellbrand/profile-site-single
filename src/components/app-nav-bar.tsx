"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./theme-toggle";

export function AppNavBar() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-2" />
        </div>
    );
}

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >

            <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="Home">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="#home">Home</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Projects">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="#android">Android</HoveredLink>
                        <HoveredLink href="#web">Web</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="About">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="#profile">Profile</HoveredLink>
                        <HoveredLink href="#contact">Contact</HoveredLink>
                        <HoveredLink href="#skills">Skills</HoveredLink>
                    </div>
                </MenuItem>
              
                <ModeToggle></ModeToggle>
            </Menu>
        </div>
    );
}
