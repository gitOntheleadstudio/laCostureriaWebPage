import './Banner.scss'
import Slider from 'react-slick'
import useScreenOrientation from '../../../shared/Utils/hooks/useScreenOrientation'
export default function Banner(_: {
    headline: string,
    subheadline: string,
    subheadline2: string,
    button: string,
    buttonLink: string,
    bkgImage: string
    slider: {
        picture: string,
        picture_portrait?: string,
        link: string
    }[]
}) {
    //const { bkgImage, button, buttonLink, headline, slider, subheadline, subheadline2 } = _
    const slider = _.slider
    const screenOrientation = useScreenOrientation()
    const slideSettings = {
        className: "sliderBanner",
        infinite: true,
        speed: 500,
        autoplay: true,
        dots: true,
        autoplaySpeed: 4000,
        pauseOnHover: false
    };
    return (
        <div className='banner'>
            <Slider {...slideSettings}>
                {
                    slider.map((e, i) => {

                        return (
                            <div key={`bannerPic-${i}`} className='banner-imgContainer'>
                                <a href={e.link}>
                                    {
                                        screenOrientation === "portrait-primary" ?
                                            <img className='banner-img' src={e.picture_portrait} alt="Banner picture" /> :
                                            <img className='banner-img' src={e.picture} alt="Banner picture" />
                                    }
                                </a>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}
/**
 * 
                <div className="banner-box">
                    <div className="banner-content" style={{ background: ` url(${bkgImage})` }}>
                        <h1>{headline}</h1>
                        <h2>{subheadline}</h2>
                        <h3><Markdown source={subheadline2}></Markdown></h3>
                        <Button radius='full' as={Link} href={buttonLink} color='primary'>{button}</Button>
                    </div>
                </div>
 */