import React from "react";
import { useContext,useEffect } from "react";
import NoteContext from "../context/notes/noteContext";

export default function Notes() {
  const con = useContext(NoteContext);
  
  const { notes,getNotes } = con;
  useEffect(() => {
    getNotes();
    
  },[]);

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

const NoteItem = (props) => {
  const con = useContext(NoteContext);
  const { deleteNote } = con;
  return(
  
    <div className="card m-3" style={{width:"20rem"}}>
  <div className="card-body">
    <h5 className="card-title">{props.note.title}</h5>
    <p className="card-text">{props.note.description}</p>
    <p className="card-text"><small className="text-muted">{props.note.tag}</small></p>
    <i className="fa fa-trash m-2" onClick={()=>{deleteNote(props.note._id)}}aria-hidden="true"></i>
    <i className="fa-solid fa-pen-to-square m-2"></i>

  </div>
</div>
  )
};
