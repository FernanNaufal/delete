import React from "react";
import { showFormattedDate } from "../utils";
import PropTypes from "prop-types";
import DeleteButton from "./DeleteButton"

function FullNote({id, title, createdAt, body, onDelete}){
    return(
        <>
            <h3 className="detail-page__title">{title}</h3>
            <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
            <p className="detail-page__body">{body}</p>
            <section className="detail-page__action">
                 <DeleteButton id={id} onDelete={onDelete} />
            </section>
        </>
    );
}
FullNote.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default FullNote;