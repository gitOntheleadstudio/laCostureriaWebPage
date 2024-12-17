import { Markdown } from '@firecms/ui'
import './Services.scss'
import { useState } from 'react'
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
    return (
        <div className='services' id='services' >
            <h1>{headline}</h1>
            <div className="services-box">
                <div className="services-header">
                    <button onClick={() => setPivot(1)}>
                        <h2 className={pivot === 1 ? 'active' : ''}>{service1.subheadline}</h2>
                    </button>
                    <button onClick={() => setPivot(2)}>
                        <h2 className={pivot === 2 ? 'active' : ''}>{service2.subheadline}</h2>
                    </button>
                    <button onClick={() => setPivot(3)}>
                        <h2 className={pivot === 3 ? 'active' : ''}>{service3.subheadline}</h2>
                    </button>
                </div>
                <div className="cards" onClick={() => setPivot(0)}>
                    <div className={`card ${pivot === 1 ? 'active' : ''}`}>
                        <img src={service1.picture} alt="Imagen servicio" />
                        <p><Markdown source={service1.description} /></p>
                    </div>
                    <div className={`card ${pivot === 2 ? 'active' : ''}`}>
                        <img src={service2.picture} alt="Imagen servicio" />
                        <p><Markdown source={service2.description} /></p>
                    </div>
                    <div className={`card ${pivot === 3 ? 'active' : ''}`}>
                        <img src={service3.picture} alt="Imagen servicio" />
                        <p><Markdown source={service3.description} /></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
