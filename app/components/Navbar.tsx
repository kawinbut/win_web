"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setmenuOpen] = useState(false);

    return (
    
        <nav className="navbar">    
                <div className="nav-container">
        
                    <Link href="/"className="logo">
                        ROBOT SHOP
                    </Link>

                    <button className="menu-btn" onClick={() => setmenuOpen(!menuOpen)}>
                        ☰
                    </button>

                    <ul className={menuOpen ? "nav-links active" : "nav-links" }>

                        <li>
                            <Link href="/about">Home</Link>
                        </li>
                        
                        <li>
                            <Link href="/about">About</Link>
                        </li>       
                        
                        <li>
                        <Link href="/contact">Contact</Link>
                        </li>  
                    
                        <li>
                            <Link href="/login">login</Link>
                        </li>
                        
                        <li>
                            <Link href="/register">register</Link>
                        </li>
                    </ul>
                </div>
        </nav>
  );
}