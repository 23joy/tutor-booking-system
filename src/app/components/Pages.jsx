import { Bars } from '@gravity-ui/icons';
import { Button, Dropdown, Link } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';

const pages = [
    { name: "Home", link: "/" },
    { name: "Tutors", link: "/tutors" },
    { name: "MyTutors", link: "/myTutors" },
    { name: "MyBooking", link: "/myBooking" },
    {name:"AddTutors",link:"/addTuitors"}
]

const Pages = () => {
    const router=useRouter();
    return (
        <Dropdown>
            <Button isIconOnly aria-label="Menu" variant="secondary" className={'lg:hidden'}>
                <Bars className="outline-none" />
            </Button>
            <Dropdown.Popover>
                <Dropdown.Menu
                    onAction={(key) => router.push(key)}
                >
                    {pages.map((page) => (
                        <Dropdown.Item
                            key={page.link}
                            id={page.link}
                        >
                            {page.name}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown>
    );
};

export default Pages;