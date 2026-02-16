import EventPage from "../components/sections/EventPage";
import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/Footer";


export default function Event(){
    return(
        <>
        <Navbar />
            <EventPage />
            <Footer />
        </>
    )
}