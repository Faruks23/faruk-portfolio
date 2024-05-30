import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react';
import React from 'react';
import { AcmeLogo } from './AcmeLogo';
import Link from 'next/link';
import MobileNave from './MobileNave';
import { FaAddressBook, FaHome, FaProjectDiagram, FaServicestack } from 'react-icons/fa';

export const NavLink = [
  {
    name: 'Home',
    path: '/',
    icon: <FaHome className=' text-green-600'></FaHome>,
  },

  {
    name: 'Services',
    path: '#service',
     icon: <FaServicestack className=' text-green-600'></FaServicestack>,
  },
  {
    name: 'Portfolio',
    path: '#portfolio',
    icon: <FaProjectDiagram className=' text-green-600'></FaProjectDiagram>,
  },
  {
    name: 'About',
    path: '#about',
    icon: <FaAddressBook className=' text-green-600'></FaAddressBook>,
  },
  {
    name: 'Skill',
    path: '#skill'
  },
]
const Header = () => {



  return (
    <div>
      <Navbar   className=' sd-1 bg-2 !gap-20 fixed top-0 left-0 w-full z-40'>
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit hover-underline-animation">Faruk</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {NavLink.map(link => {
            return (
              <>
                <NavbarItem>
                  <Link data-aos="zoom-in"
                    data-aos-offset="50"
                    data-aos-delay="50"
                    data-aos-duration='1000' color="foreground" className='hover-underline-animation uppercase text-[#c4cfde]' href={link.path}>
                    {link.name}
                  </Link>
                </NavbarItem>
              </>
            )
          })}
         
          {/* <NavbarItem isActive>
            <Link href="/" aria-current="page">
              Portfolio
            </Link>
          </NavbarItem> */}
         
        </NavbarContent>
        <NavbarContent justify="end">
          
          <NavbarItem>
            <Button as={Link} href="#contact" className='  rounded-md bg-transparent text-green-500 in-sd-1 font-bold'>
              Contact 
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <MobileNave></MobileNave>

    </div>
  );
};

export default Header;