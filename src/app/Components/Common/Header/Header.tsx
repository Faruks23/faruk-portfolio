import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react';
import React from 'react';
import { AcmeLogo } from './AcmeLogo';
import Link from 'next/link';

const Header = () => {

  const NavLink = [
    {
      name: 'Home',
      path: '/'
    },
    
    {
      name: 'Services',
      path: '#service'
    },
    {
      name: 'Portfolio',
      path: '#portfolio'
    },
    {
      name: 'About',
      path: '#about'
    },
    {
      name: 'Skill',
      path: '#skill'
    },
  ]

  return (
    <div>
      <Navbar   className=' sd-1 bg-2 !gap-20 fixed top-0 left-0 w-full z-40'>
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">Faruk</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {NavLink.map(link => {
            return (
              <>
                <NavbarItem>
                  <Link color="foreground" href={link.path}>
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

    </div>
  );
};

export default Header;