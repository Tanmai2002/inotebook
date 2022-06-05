import NoteContext from "./noteContext";
import { useState,useEffect } from "react";
import getAllNotesApi,{deleteNoteApi,updateNoteApi} from "./ApiCalls";
const NoteState=(props)=>{
    
      const auth='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI5OTg1ZTI5MzU2NWY2NmFkNTYxY2JlIn0sImlhdCI6MTY1NDQxNDc2OX0.bOJSaCVdFLFK1emCzmXXgE6DEtfrblNfi4N7Lqw7MMg';
      
      const [notes, setnotes] = useState([]);
      const getNotes=async ()=>{
        const allNotes=await getAllNotesApi(auth);
        setnotes(allNotes);
      };

     
      
      
      const addNote=(note)=>{
        const Tnote={
          "_id": "6299e60084db9450afd40d40",
          "user": "629985e293565f66ad561cbe",
          "title": note.title,
          "description": note.description,
          "tag": note.tag,
          "date": "2022-06-03T10:44:16.150Z",
          "__v": 0
        }
        setnotes(notes.concat(Tnote));

      }

      const deleteNote=async (id)=>{
        await deleteNoteApi(auth,id);
        getNotes();
      }
      const updateNote= async (id,title,description,tag)=>{
        for(var i=0;i<notes.length;i++){
          if(notes[i]._id==id){
            const e=await updateNoteApi(auth,id,title,description,tag)
          }
        }
        getNotes();
      }
return(
    <NoteContext.Provider value={{notes,addNote,deleteNote,getNotes,updateNote}}>
    {props.children}
</NoteContext.Provider>
)
}
export default NoteState;