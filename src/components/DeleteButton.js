import React from "react";
import {FiTrash2} from "react-icons/fi";
import PropTypes from "prop-types";

function DeleteButton ({id, onDelete}){
    return <button className="action" type="button" title="Hapus" id={id} onClick={() => onDelete(id)} ><FiTrash2/></button>
}
DeleteButton.propTypes = {
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
}
export default DeleteButton;

