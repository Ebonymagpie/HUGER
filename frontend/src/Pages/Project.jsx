import Header from "../components/Header";
import Footer from "../components/Footer";
import Section from "../components/Section";
import { useParams } from "react-router";
import { useEffect } from "react";


function Project() {

    const param = useParams();

    const cardData = {
    1: { title: "Card One", content: "This is the first card." },
    2: { title: "Card Two", content: "This is the second card." },
    3: { title: "Card Three", content: "This is the third card." },
    }[param.id];

    useEffect(() => {
        console.log(param.id);
        
    },[])
    
    return ( 
    <>
    <Header />

        <Section>
            <div className="min-h-screen w-full flex flex-col align-center">
                <div className="m-2 drop-shadow-xl/20 bg-huger-main-100 text-huger-text w-full rounded-2xl p-5 text-right text-2xl md:text-4xl min-h-16">
                    {cardData.title}
                </div>
                <div className="m-2 drop-shadow-xl/20 bg-huger-main-100 text-huger-text w-full rounded-2xl p-5 text-right text-xl md:text-2xl min-h-[40vh]">
                    {cardData.content}
                </div>
                <div className="m-2 drop-shadow-xl/20 bg-huger-main-100 text-huger-text w-full rounded-2xl p-5 text-right min-h-[50vh]">
                    
                </div>
            </div>
            
        </Section>

    <Footer />
    </> );
}

export default Project;