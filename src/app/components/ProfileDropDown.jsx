'use client'
import { authClient } from "@/lib/auth-client";
import { ArrowRightFromSquare, Gear, Person } from "@gravity-ui/icons";
import { Avatar, Button, Dropdown, Input, Label, Surface, TextField } from "@heroui/react";
import { Link } from "lucide-react";

export function ProfileDropDown({ user }) {

    const handleLogOut = async (e) => {
        await authClient.signOut();
    }
    return (
        <Dropdown >
            <Dropdown.Trigger className="rounded-full">
                <Avatar>
                    <Avatar.Image alt="John Doe" src={user?.image} />
                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
            </Dropdown.Trigger>
            <Dropdown.Popover>
                <div className="p-5">
                    <div className="flex items-center gap-2">
                        <Avatar size="sm">
                            <Avatar.Image
                                alt={user?.name}
                                src={user?.image}
                            />
                            <Avatar.Fallback delayMs={600}>{user?.name.charAt(0)}</Avatar.Fallback>
                        </Avatar>
                        <div className="flex flex-col gap-0">
                            <p className="text-sm leading-5 font-medium">{user?.name}</p>
                            <p className="text-xs leading-none text-muted">{user?.email}</p>
                        </div>
                    </div>
                </div>
                <div className="p-5 flex justify-between items-center">
                    <Button onClick={handleLogOut}>Log Out <ArrowRightFromSquare className="size-3.5 text-danger" /></Button>
                </div>
            </Dropdown.Popover>
        </Dropdown>
    );
}

