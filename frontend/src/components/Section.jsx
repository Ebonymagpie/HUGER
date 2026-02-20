function Section({children},id) {
    return ( 
        <>
            <section id={id} className="w-full">
                {children}
            </section>
        </>
     );
}

export default Section;