import Banner from '../banner/Banner'
import Benefits from '../benefits/Benefits'
import Footer from '../footer/Footer'
import Services from '../services/Services'
import './LandingPage.scss'
export default function LandingPage() {
    const banner = {
        headline: 'Hacemos que la ropa te quede',
        subheadline: 'Perfecta',
        subheadline2: `En La Costurería, transformamos y entallamos tus \\
         prendas, cuidando cada detalle de las costuras.`,
        button: 'Agenda tu cita',
        buttonLink: '#',
        bkgImage: 'https://lh3.googleusercontent.com/pw/AP1GczMIjAVuEUR37xHO_Sen-HCb6_KoIzDocmbnda5_3QiTeWid3xbCohL3m1IkvJ5gk97Dlzmd4QbLaMisrUsMgKATH4Bf3w2kGmqq6pycES7-XACbMmDyJ1FAsHQ-eVwWvUr25Zm8qDxy_P8hKDLSnCiN=w1599-h1066-s-no-gm?authuser=0',
        slider: [
            {
                picture: 'https://lh3.googleusercontent.com/pw/AP1GczMIjAVuEUR37xHO_Sen-HCb6_KoIzDocmbnda5_3QiTeWid3xbCohL3m1IkvJ5gk97Dlzmd4QbLaMisrUsMgKATH4Bf3w2kGmqq6pycES7-XACbMmDyJ1FAsHQ-eVwWvUr25Zm8qDxy_P8hKDLSnCiN=w1599-h1066-s-no-gm?authuser=0',
                link: '#'
            },
            {
                picture: 'https://lh3.googleusercontent.com/pw/AP1GczMIjAVuEUR37xHO_Sen-HCb6_KoIzDocmbnda5_3QiTeWid3xbCohL3m1IkvJ5gk97Dlzmd4QbLaMisrUsMgKATH4Bf3w2kGmqq6pycES7-XACbMmDyJ1FAsHQ-eVwWvUr25Zm8qDxy_P8hKDLSnCiN=w1599-h1066-s-no-gm?authuser=0',
                link: '#'
            },
            {
                picture: 'https://lh3.googleusercontent.com/pw/AP1GczMIjAVuEUR37xHO_Sen-HCb6_KoIzDocmbnda5_3QiTeWid3xbCohL3m1IkvJ5gk97Dlzmd4QbLaMisrUsMgKATH4Bf3w2kGmqq6pycES7-XACbMmDyJ1FAsHQ-eVwWvUr25Zm8qDxy_P8hKDLSnCiN=w1599-h1066-s-no-gm?authuser=0',
                link: '#'
            }
        ]
    }

    const benefits = {
        headline: '¿Por qué confiar en nosotros?',
        card1: {
            subheadline: '+15 años de experiencia',
            picture: 'https://lh3.googleusercontent.com/pw/AP1GczMn9_s8_ul0c-p7QZUutLNR7QoY9RVO5KaLlsSZjRf18wo3-xsl8UHg1zv52Du52ghPOpwTxiiEFEkWnt_jviQILb2p3D1J99tbGB4I9fNGbSp0AQY2Pyaqwuye-YhPbH0a25NpwfVzDJV6Ny0RxX7H=w800-h800-s-no-gm?authuser=0',
            description: `En ajustes, entalles y \\
        transformación de prendas.`
        },
        card2: {
            subheadline: 'Asesoría Personalizada',
            picture: 'https://lh3.googleusercontent.com/pw/AP1GczN4KbmgXp-YyQ7lNxB32ZVURyE77K0Q1x702MTlhiAS77zn_oVi-PL6LgeK6YaklIpI6thk7cMh7PbGW6VBPwUTwI1zm1Ijq-MAHI97Wvfed0Mf5wSGHfkE-5Fqxo9hxP_yhONO_4nVMRz-gMuMNVkx=w775-h800-s-no-gm?authuser=0',
            description: `Por un equipo experto en imagen y \\
        sastres de alta costura.`
        },
        card3: {
            subheadline: 'Servicio a domicilio',
            picture: 'https://lh3.googleusercontent.com/pw/AP1GczNQ0ucS3o7AghmEZDn6j37MYVPeXb6pbEK2CuRwn5BAOisUmgFWv7ogcc8nST39gpvP6K4tqhrvgjhBHWoPykutPAjJA7ZcxEnrG1Iy9YNu4nDXoZyZAImAbXCBbbDKwzbhkxCnWtsFyW0J4vUGd6Rb=w800-h800-s-no-gm?authuser=0',
            description: `Recíbenos desde la \\
        comodidad de tu hogar.`
        }

    }
    const services = {
        headline: 'Conoce nuestros Servicios',
        service1: {
            subheadline: 'Entalle y Ajuste',
            picture: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQrFOSmiy3msFYJLdKbFIK4MTEsXkd8u2s3lzT88BNDwrRlAC1y',
            description: '**Bastas, cintura, mangas, hombros y largos** en prendas como pantalones, camisas, casacas, blazers y vestidos.'
        },
        service2: {
            subheadline: 'Arreglo y transformación',
            picture: 'https://img.freepik.com/foto-gratis/sastre-femenino-midiendo-camisa-clientes-masculinos_23-2148834114.jpg',
            description: 'Reemplazos, aplicaciones, **cambio de cierres, refuerzo de costuras** y reposición de botones.'
        },
        service3: {
            subheadline: 'Prendas Delicadas',
            picture: 'https://img.freepik.com/foto-gratis/mujer-haciendo-chaqueta_23-2148898080.jpg',
            description: 'Transformaciones en prendas delicadas, **prendas sastreras, vestidos de fiesta** y prendas de **cuero y seda**.'
        }
    }

    const footer = {
        headline: '#QueTeQuedePerfecto',
        subheadline: `Tracemos juntos la mejor versión de ti,\\
        tracemos juntos tu estilo.`,
        button: "Agenda tu cita",
        buttonLink: '#',
        igLink: '#',
        inLink: '#',
        wsp: '+ 51 956 720 981',
        mail: 'marketing@lacostureria.com'
    }
    return (
        <div>
            <Banner {...banner} />
            <Benefits {...benefits} />
            <Services {...services} />
            <Footer {...footer} />
        </div>
    )
}
