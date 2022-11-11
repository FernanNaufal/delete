import React from "react";
import {addNote} from "../utils/api";
import { useNavigate } from "react-router-dom";
import NoteInput from "../components/NoteInput";

function AddNotePage() {
  const navigate = useNavigate();
 
  function onAddNoteHandler(note) {
    addNote(note);
    navigate('/');
  }
 
    return (
        <section className="add-new-page">
          <h2>Tambah catatan</h2>
          <NoteInput addNote = {onAddNoteHandler}/>
        </section>
      )
}
export default AddNotePage;