import { useNavigate } from "react-router";


function Projectcard({id, group}) {


    const navigate = useNavigate();

    function handleClick() {
        navigate(`/project/${id}`)
    }

    return ( 
        <>
            <div key={id} onClick={handleClick} className="bg-huger-main text-huger-text p-2 text-right m-2 rounded-xl">
                {group}
            </div>
        </>
     );
}

export default Projectcard;