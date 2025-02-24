import { Markdown } from '@firecms/ui'
import './Benefits.scss'
export default function Benefits(_: {
    headline: string,
    card1: {
        subheadline: string,
        picture: string,
        description: string
    },
    card2: {
        subheadline: string,
        picture: string,
        description: string
    },
    card3: {
        subheadline: string,
        picture: string,
        description: string
    }
}) {
    const { headline, card1, card2, card3 } = _
    return (
        <div className='benefits'>
            <h1>{headline}</h1>
            <div className="cards">
                <div className="card">
                    <img src={card1.picture} alt="imagen del beneficio" />
                    <h2>{card1.subheadline}</h2>
                    <Markdown source={card1.description} />
                </div>
                <div className="card">
                    <img src={card2.picture} alt="imagen del beneficio" />
                    <h2>{card2.subheadline}</h2>
                    <Markdown source={card2.description} />
                </div>
                <div className="card">
                    <img src={card3.picture} alt="imagen del beneficio" />
                    <h2>{card3.subheadline}</h2>
                    <Markdown source={card3.description} />
                </div>
            </div>
        </div>
    )
}
