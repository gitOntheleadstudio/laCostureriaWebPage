import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuToggle } from '@nextui-org/react'
import './NavbarC.scss'
import { useState } from 'react'
export default function NavbarC() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <Navbar maxWidth='full' disableAnimation onMenuOpenChange={setIsMenuOpen} isBlurred={false}
      style={{ background: isMenuOpen ? "#D0C1DA" : "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgb(0, 0, 0) 150%)" }}
      classNames={{ wrapper: "navbarC", base: "navbarB", menu: "navbarM" }}>
      <NavbarBrand>
        <img src="/LOGO_REDUCIDO_MORADO1.png" alt="logo" />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center" style={{ gap: "3rem" }}>
        <NavbarItem>
          <Link color="secondary" href="#">
            INICIO
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="secondary" href="#services">
            SERVICIOS
          </Link>
        </NavbarItem>
        <NavbarMenu className='items-center gap-6 h-screen' style={{ height: "100vh" }}>
          <NavbarItem>
            <Link className='text-3xl' color="secondary" href="#">
              INICIO
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className='text-3xl' color="secondary" href="#services">
              SERVICIOS
            </Link>
          </NavbarItem>
        </NavbarMenu>
      </NavbarContent>
      <NavbarItem>
        <Button as={Link} style={{fontSize: "1.2rem"}} radius='full' color='primary' href='#formulary'>AGENDA</Button>
      </NavbarItem>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden text-secondary"
      />
    </Navbar>
  )
}
