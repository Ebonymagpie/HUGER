function Section({children},id, className) {
    return ( 
        <>
            <section id={id} className={`w-full` + className}>
                {children}
            </section>
        </>
     );
}

export default Section;