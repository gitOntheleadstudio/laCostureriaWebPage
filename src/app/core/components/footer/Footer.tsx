import { Button, Link } from '@nextui-org/react'
import './Footer.scss'
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import { Markdown } from '@firecms/ui'
export default function Footer(_: {
    headline: string,
    subheadline: string,
    button: string,
    buttonLink: string,
    igLink: string,
    inLink: string,
    wsp: string,
    mail: string,
    libro_de_reclamaciones: string
}) {
    const { button, buttonLink, headline, igLink, inLink, mail, subheadline, wsp, libro_de_reclamaciones } = _
    return (
        <div className='footer'>
            <div className="footer-bkg-image">
                <img src="./footer.svg" alt="" />
            </div>
            <h1 className='text-foreground-50'>{headline}</h1>
            <h2><Markdown className='text-foreground-50' source={subheadline} /></h2>
            <Button as={Link} href={buttonLink} radius='full' className='bg-foreground-50 text-primary'>{button}</Button>
            <div className="social">
                <div className="social-left">
                    <p className='text-primary-50'>ON the Lead Studio 2025</p>
                </div>
                <div className='social-right'>
                    <div className="icons">
                        <a href={igLink}><FaInstagram /></a>
                        <a href={inLink}><FaLinkedin /></a>
                    </div>
                    <div className='text'>
                        <FaWhatsapp /><p>{wsp}</p>
                    </div>
                    <div className='text'>
                        <IoIosMail /><p>{mail}</p>
                    </div>
                    <div className='lrv'>
                        <a href={libro_de_reclamaciones}>
                            <img width={'200px'} src="/lrv.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
