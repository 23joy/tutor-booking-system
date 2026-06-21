'use client'
import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Dropdown, Input, Label, Surface, TextField } from "@heroui/react";

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
                <Surface variant="default">
                    <form className="flex flex-col gap-4 p-10">
                        <TextField className="w-full" name="name" type="text" variant="secondary">
                            <Label>Name</Label>
                            <Input placeholder="Enter your name" />
                        </TextField>
                        <TextField
                            name="image"
                            type='url'
                        >
                            <Label>Photo_URL</Label>
                            <Input placeholder='Your image url' variant='secondary' className={'rounded-none'} />
                        </TextField>
                        <TextField className="w-full" name="email" type="email" variant="secondary">
                            <Label>Email</Label>
                            <Input placeholder="Enter your email" />
                        </TextField>
                        <TextField className="w-full" name="phone" type="tel" variant="secondary">
                            <Label>Phone</Label>
                            <Input placeholder="Enter your phone number" />
                        </TextField>
                        <div className="flex justify-between">
                            <Button onClick={handleLogOut} variant="danger">LogOut</Button>
                            <Button >Update</Button>
                        </div>
                    </form>
                </Surface>
            </Dropdown.Popover>
        </Dropdown>
    );
}

