import '../assets/style.css';

function Headerbutton({children}) {
    return ( 
        <>
            <button className="drop-shadow-xl/10 m-2 text-huger-text bg-huger-highlight p-2 sm:min-2-10 md:text-xl md:min-w-20 rounded-4xl">
                <p className='drop-shadow-huger-text/10'>{children}</p>
            </button>
        </>
     );
}

export default Headerbutton;