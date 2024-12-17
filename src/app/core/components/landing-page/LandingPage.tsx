import { ComponentProps, useEffect, useState } from 'react'
import Utils from '../../../shared/Utils/Utils'
import TestValues from '../../Utils/TestValues'
import Banner from '../banner/Banner'
import Benefits from '../benefits/Benefits'
import Footer from '../footer/Footer'
import Formulary from '../formulary/Formulary'
import NavbarC from '../navbar/NavbarC'
import Services from '../services/Services'
import './LandingPage.scss'
import { collection, getDocs } from 'firebase/firestore'
import db from '../../Utils/firebase'
import { bannerConv, benefitsConv, footerConv, formularyConv, iPages, servicesConv } from '../../Utils/Interfaces'

export default function LandingPage() {
    const q = collection(db, 'pages')
    const [loaded, setLoaded] = useState(false)
    const [banner, setBanner] = useState<ComponentProps<typeof Banner>>()
    const [benefits, setBenefits] = useState<ComponentProps<typeof Benefits>>()
    const [services, setServices] = useState<ComponentProps<typeof Services>>()
    const [formulary, setFormulary] = useState<ComponentProps<typeof Formulary>>()
    const [footer, setFooter] = useState<ComponentProps<typeof Footer>>()
    const testV = TestValues
    useEffect(() => {
        getDocs(q).then((v) => {
            v.forEach((e) => {
                const res = e.data() as iPages
                setBanner(bannerConv(res))
                setBenefits(benefitsConv(res))
                setServices(servicesConv(res))
                setFormulary(formularyConv(res))
                setFooter(footerConv(res))
            })
        }).then(() => setLoaded(true))
    }, [])
    return (
        <div>
            <div className='wsp'>
                <a href="#">
                    <button>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" alt="whatsapp imagen" />
                    </button>
                </a>
            </div>
            <NavbarC />
            <section >
                {Utils.asyncComponent(Banner, banner, loaded)}
            </section>
            <section>
                {Utils.asyncComponent(Benefits, benefits, loaded)}
            </section>
            <section>
                {Utils.asyncComponent(Services, services, loaded)}
            </section>
            <section>
                {Utils.asyncComponent(Formulary, formulary, loaded)}
            </section>
            <section>
                {Utils.asyncComponent(Footer, footer, loaded)}
            </section>
        </div>
    )
}
