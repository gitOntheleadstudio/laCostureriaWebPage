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
    mail: string
}) {
    const { button, buttonLink, headline, igLink, inLink, mail, subheadline, wsp } = _
    return (
        <div className='footer'>
            <h1>{headline}</h1>
            <h2><Markdown source={subheadline} /></h2>
            <Button as={Link} href={buttonLink} radius='full' color='primary'>{button}</Button>
            <div className="social">
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
            </div>
        </div>
    )
}
