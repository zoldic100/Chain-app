import { Divider, Stack } from "@mui/material";
import Logo from "../../assets/logo.png";
import { RiMenu2Line } from "react-icons/ri";
import React from "react";
import { useState, useEffect } from "react";
import './NavBar.css'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#top", text: "Home" },
    { href: "#services", text: "services" },
    { href: "#about", text: "About" },
    { href: "#pricing", text: "Pricing" },
    { href: "#newsletter", text: "newsletter" },
    { href: "#sign_in", text: "Sing In Now" },
  ];
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldSetZ30 = scrollPosition > 0; // Change this condition based on when you want to update z-index

      setIsScrolled(shouldSetZ30);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    <div className={ ` nav-container flex 0  s h-20 border   bg-white sticky top-0 pt-10 px-8  lg:px-28 ${isScrolled ? "z-30" : "z-20"}`}>
     
        <nav className="w-full flex justify-between items-center pb-5">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>

          {/* Responsive Menu for Small Screens */}
          <div className="md:hidden">
            <button
              className="text-3xl font-extrabold"
              onClick={() => setIsOpen(!isOpen)}
            >
              <RiMenu2Line />
            </button>
          </div>

          {/* Links for Medium and Larger Screens */}
          <div className="hidden md:flex justify-between items-center gap-6 lg:gap-10 font-medium">
            {links.map((link, index) => (
              <React.Fragment key={index}>
                {index === 0 ? (
                  <a href={link.href} className="active">
                    {link.text}
                  </a>
                ) : index !== 5 ? (
                  <a href={link.href}>{link.text}</a>
                ) : (
                  <>
                  <Divider orientation="vertical" flexItem />
                  <div className="link-button text-blue-500">
                    <a href={link.href}>{link.text}</a>
                  </div>
                  </>
                )}
              </React.Fragment>
            ))}
          </div>
        </nav>
      </div>

      {/* Responsive Menu Content */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto bg-slate-100 p-3 text-center">
            {/* Include your responsive menu content here */}
            {links.map((link, index) => (
              <>
                {index !== 5 ? (
                  <>
                    <a
                      key={index}
                      href={link.href}
                      className="block py-3 border-b"
                    >
                      {link.text}
                    </a>

                    <Divider />
                  </>
                ) : (
                  <>
                    <div key={index} className="gradient-button">
                      <a
                        href={link.href}
                        className="link-button mt-2 w-fit block py-3 border-b text-blue-500"
                      >
                        {link.text}
                      </a>
                    </div>
                  </>
                )}
              </>
            ))}
          </div>
        </div>
      )}

      <Divider />
    </>
  );
};

export default NavBar;
