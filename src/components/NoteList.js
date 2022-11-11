import React from "react";
import PropTypes from 'prop-types';
import NoteItemBody from "./NoteItemBody";


function NoteList({notes}){
    return (
        notes.length ? 
        <section className="notes-list">
            {
                notes.map((note) => (
                    <NoteItemBody
                    key={note.id}
                    id={note.id}
                    archived={note.archived}
                    {...note} />
                ))
            }
        </section> : 
        <section className="notes-list-empty">
            <p className="notes-list__empty">Tidak ada catatan</p>
        </section>
);
  }
  
  NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  }
  
  export default NoteList;