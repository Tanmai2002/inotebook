import React from "react";
import { useContext } from "react";
import NoteContext from "../context/notes/noteContext";

export default function Notes() {
  const con = useContext(NoteContext);
  const { notes, setNotes } = con;

  return (
    <div>
      <h3>Your Notes</h3>
     
      <div className="row">
      {notes.map((note,key) => {
        return <NoteItem key={key} note={note} />;
      })}
      </div>
    </div>
  );
}

const NoteItem = (props) => (
  
    <div class="card m-3" style={{width:"20rem"}}>
  <div class="card-body">
    <h5 class="card-title">{props.note.title}</h5>
    <p class="card-text">{props.note.description}</p>
    <p class="card-text"><small class="text-muted">{props.note.tag}</small></p>
  </div>
</div>
);
