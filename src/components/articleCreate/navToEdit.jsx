import React from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function NavToEdit ({ id, passIdToApp }) {
    const navigate = useNavigate();

    function redirection(id) {
        passIdToApp(id);
        navigate('/new-article/:' + id);
    }

    return (
        <button onClick={() => redirection(id)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md shadow-md">
            Modifier
        </button>
    );
}

export default NavToEdit;