import Banner from "../components/banner/Banner"
import Benefits from "../components/benefits/Benefits"
import Footer from "../components/footer/Footer"
import Formulary from "../components/formulary/Formulary"
import Services from "../components/services/Services"

export type iPages = {
    whatsapp_link: string,
    banner: {
        headline: string,
        button_link: string,
        button: string,
        background_image: string
        slider: {
            link: string,
            picture: string
        }[],
        subheadline2: string,
        subheadline: string,
    },
    benefits: {
        headline: string,
        beneficios: {
            subheadline: string
            description: string,
            picture: string,
        }[],
    },
    services: {
        headline: string,
        servicios: {
            picture: string,
            description: string
        }[],
    },
    formulary: {
        headline_1: string,
        headline_2: string
        steps: string[],
        button: "ENVIAR",
    },
    footer: {
        headline: string,
        whatsapp: string,
        ig_link: string,
        libro_de_reclamaciones: string,
        button: string,
        in_link: string,
        subheadline: string,
        mail: string,
        button_link: string
    }
}

export const bannerConv = (data: iPages) => {
    const { button, button_link, headline, slider, subheadline, subheadline2, background_image } = data.banner
    return {
        button,
        buttonLink: button_link,
        headline,
        slider,
        subheadline,
        subheadline2,
        bkgImage: background_image
    } as React.ComponentProps<typeof Banner>
}

export const benefitsConv = (data: iPages) => {
    const { beneficios, headline } = data.benefits
    return {
        headline,
        card1: beneficios[0],
        card2: beneficios[1],
        card3: beneficios[2]
    } as React.ComponentProps<typeof Benefits>
}

export const servicesConv = (data: iPages) => {
    const { headline, servicios } = data.services
    return {
        headline,
        service1: servicios[0],
        service2: servicios[1],
        service3: servicios[2]
    } as React.ComponentProps<typeof Services>
}

export const formularyConv = (data: iPages) => {
    const { button,headline_1,headline_2,steps } = data.formulary
    return {
        headline1: headline_1,
        headline2: headline_2,
        button,
        steps
    } as React.ComponentProps<typeof Formulary>
}

export const footerConv = (data: iPages) => {
    const { button,button_link,headline,ig_link,in_link,mail,subheadline,whatsapp, libro_de_reclamaciones } = data.footer
    return {
        button,
        buttonLink: button_link,
        headline,
        igLink: ig_link,
        inLink: in_link,
        mail,
        subheadline,
        wsp:whatsapp,
        libro_de_reclamaciones
    } as React.ComponentProps<typeof Footer>
}