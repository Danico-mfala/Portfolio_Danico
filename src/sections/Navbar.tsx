import React from 'react';
import Link from 'next/link';
import Logo from '@/scss/components/Logo'; 

function Navbar() {
    const selectionLinks = [
        { name: "About", link: "/#about" },
        { name: "Experience", link: "/#experience" },
        { name: "Work", link: "/#work" },
        { name: "Contact", link: "/contact" }
    ];

    return (
        <nav>
            <div className="wrapper">
                <div className="brand">
                    <Link href="#">
                        <Logo />
                    </Link>
                </div>
                <div className="nav-items">
                    <ul className="nav-items-list">
                        {
                            selectionLinks.map(({ name, link }) => (
                                <li key={name} className='nav-items-list-item '>
                                    <Link href={link} className='nav-items-list-item-link'>{name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;