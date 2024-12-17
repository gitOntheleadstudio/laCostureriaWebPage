import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import './NavbarC.scss'
export default function NavbarC() {
  return (
    <Navbar maxWidth='full' isBlurred={false} style={{backgroundColor:"unset"}} classNames={{wrapper:"navbarC"}}>
      <NavbarBrand>
        <img src="/LOGO_REDUCIDO_MORADO.png" alt="logo" />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center" style={{gap: "3rem"}}>
        <NavbarItem>
          <Link color="foreground" href="#">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#services">
            Servicios
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} radius='full' color='primary' href='#formulary'>Contactanos</Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
