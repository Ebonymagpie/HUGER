import Header from "../components/Header";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Selector from "../components/Selector";
import { useEffect, useState } from "react";
import Projectcard from "../components/Projectcard";

let ABC = [{id: 0, group: "Physic"},{id: 1, group: "Physic"},{id: 2, group: "Physic"},{id: 3, group: "Computer"},{id: 4, group: "Physic"},{id: 5, group: "Physic"}]

function Groups() {

    const [chosen, setChosen] = useState("All");
    let filtered = (chosen == "All") ? ABC : ABC.filter(i => i.group == chosen)

    useEffect(() => {
        console.log(chosen);
        console.log(filtered);
        
    },[chosen, filtered])


    function check(e) {
        setChosen(e.target.value)
    }

    return ( 
    <>
        <Header />
        <div className="w-full flex align-center">
            <div className="flex flex-row-reverse m-2 rounded-3xl w-full bg-huger-main-100 drop-shadow-2xl p-2">
                <Selector onChange={(e) => check(e)} className="text-right border-2 border-huger-shadow hover:bg-huger-highlight rounded-3xl text-huger-text bg-huger-main-100 md:text-2xl p-1" />
            </div>
        </div>
            <Section>
                <div className="min-h-screen w-full bg-huger-main-100 rounded-3xl p-2 m-2 drop-shadow-2xl/10 grid grid-cols-2 md:grid-cols-4">
                    {filtered.map(e => {
                        return (
                            <Projectcard key={e.id} id={e.id} group={e.group} />
                        )  
                    })}
                </div>
            </Section>
        <Footer />
    </> );
}

export default Groups;