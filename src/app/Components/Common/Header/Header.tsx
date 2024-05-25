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
      name: 'Portfolio',
      path: '/portfolio'
    },
    {
      name: 'Services',
      path: '/services'
    },
    {
      name: 'About',
      path: '/about'
    },
    {
      name: 'Contact',
      path: '/contact'
    },
  ]

  return (
    <div>
      <Navbar shouldHideOnScroll={true}  className=' sd-1 bg-2'>
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
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
            <Button as={Link} href="#" className='  rounded-md bg-transparent text-green-500 in-sd-1'>
              Heir {"=>"}
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

    </div>
  );
};

export default Header;