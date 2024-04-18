import { useParams } from "react-router-dom"
import LangingFeatures from "./components/LandingPageComponents/LandingPageFeatures"
import LandingHERO from "./components/LandingPageComponents/LandingPageHero"
import Testimonials from "./components/LandingPageComponents/LandingPageTestimonials"


export default function LandingPage(){
    return(<>
        <LandingHERO />
        <LangingFeatures/>
        <Testimonials/>
    </>)
}