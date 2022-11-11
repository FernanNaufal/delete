import React from "react";
import {showFormattedDate} from "../utils/index";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import DeleteButton from "./DeleteButton";

function NoteItemBody({id, title, body, createdAt, onDelete}){
    return (
        <div className="note-item">
             <h3 className="note-item__title"><Link to={`/notes/${id}`}>{title}</Link></h3>
            <p className="note-item__createdAt"> {showFormattedDate(createdAt)}</p>
            <p className='note-item__body'>{body}</p>
            <DeleteButton/>

            
        </div>
    );
}

NoteItemBody.propTypes={
    id: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    createdAt: PropTypes.string,
    onDelete: PropTypes.func,
}
export default NoteItemBody;
    