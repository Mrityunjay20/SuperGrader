import { useParams } from "react-router-dom"
import LangingFeatures from "./components/LandingPageFeatures"
import LandingHERO from "./components/LandingPageHero"
import Testimonials from "./components/LandingPageTestimonials"

export default function LandingPage(){
    return(<>
        <LandingHERO />
        <LangingFeatures/>
        <Testimonials/>
    </>)
}