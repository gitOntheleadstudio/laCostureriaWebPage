import { Markdown } from '@firecms/ui'
import './Services.scss'
import { useEffect, useRef, useState } from 'react'
import useScreenOrientation from '../../../shared/Utils/hooks/useScreenOrientation'
export default function Services(_: {
    headline: string,
    service1: {
        subheadline: string,
        picture: string,
        description: string
    },
    service2: {
        subheadline: string,
        picture: string,
        description: string
    },
    service3: {
        subheadline: string,
        picture: string,
        description: string
    }
}) {
    const { headline, service1, service2, service3 } = _
    const [pivot, setPivot] = useState(4)
    const servicesBox = useRef(null)
    const cardRef = useRef(null)
    const orientation = useScreenOrientation()
    useEffect(() => {
        const box: HTMLDivElement = servicesBox.current!
        const card: HTMLDivElement = cardRef.current!
        let intervalId = setInterval(() => {
            if (orientation === "portrait-primary") {
                if (box.scrollLeft === card.offsetWidth * 2) {
                    box.scrollLeft = 0
                }
                else {
                    box.scrollLeft += card.offsetWidth
                }
            }
        }, 5000);
        return () => clearInterval(intervalId)
    }, [])
    return (
        <div className='services' id='services' >
            <h1>{headline}</h1>
            <div className="services-box" >
                <div className="cards" onClick={() => setPivot(0)} ref={servicesBox}>
                    <div className='cardGroup' ref={cardRef}>
                        <h2>{service1.subheadline}</h2>
                        <div className={`card ${pivot === 1 ? 'active' : ''}`}>
                            <img src={service1.picture} alt="Imagen servicio" />
                            <Markdown source={service1.description} />
                        </div>
                    </div>
                    <div className='cardGroup'>
                        <h2>{service2.subheadline}</h2>
                        <div className={`card ${pivot === 2 ? 'active' : ''}`}>
                            <img src={service2.picture} alt="Imagen servicio" />
                            <Markdown source={service2.description} />
                        </div>
                    </div>
                    <div className='cardGroup'>
                        <h2>{service3.subheadline}</h2>
                        <div className={`card ${pivot === 3 ? 'active' : ''}`}>
                            <img src={service3.picture} alt="Imagen servicio" />
                            <Markdown source={service3.description} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
