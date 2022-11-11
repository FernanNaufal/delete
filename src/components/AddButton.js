import React from "react";
import{Link} from "react-router-dom";
import {FiPlus} from "react-icons/fi";

function AddButton(){
    return(
        <div className="homepage__action">
            <Link to='/add'>
                <button type="button" className="action" title="Tambah">{<FiPlus />}</button>
            </Link>
        </div>
    )
}
export default AddButton;