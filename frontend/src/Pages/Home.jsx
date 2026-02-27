import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Section from "../components/Section";
import Footer from "../components/Footer";
import '../assets/style.css';


function Home() {

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
        const el = document.querySelector(location.hash);
        el?.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);


    return ( <>

    <Header />
    <Section id="Main">
        <div className="w-full">
            <div className="m-5 bg-huger-main-100 h-[80vh] rounded-2xl text-right p-5 text-huger-text ">
                <div>
                    <h1 className="text-2xl md:text-4xl font-fshahdad-display-extrabold">هوگر چیه؟</h1>
                    <p className="text-xl md:text-2xl font-fshahdad-display mt-2">هوگر یک جشنواره سالانست که از سال 1398 در حال برگذاریه</p>
                </div>
                <div>
                </div>
            </div>
        </div>
    </Section>
    <Section>
        <div className="w-full">
            <div className="m-5 bg-huger-main-100 h-full rounded-2xl text-right p-5 text-huger-text flex items-center justify-center  font-fshahdad-display">
                <button className="bg-huger-main drop-shadow-2xl text-huger-text border-2 pr-4 pl-4 rounded-4xl p-1 text-3xl"> ورورد </button>
            </div>
        </div>
    </Section>
    <Section>
        <div className="h-screen w-full" id="gallery">
            <div className="m-5 bg-huger-main-100 h-4/5 rounded-2xl text-right p-5 text-huger-text">
                
            </div>
        </div>
    </Section>
    <Footer />
    </> );
}

export default Home;