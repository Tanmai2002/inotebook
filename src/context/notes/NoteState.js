import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState=(props)=>{
    const notesIni=[
        {
          "_id": "6299b7ff797d72115375c78d",
          "user": "629985e293565f66ad561cbe",
          "title": "sample1",
          "description": "MyNote1",
          "tag": "test",
          "date": "2022-06-03T07:27:59.510Z",
          "__v": 0
        },
        {
          "_id": "6299b800797d72115375c78f",
          "user": "629985e293565f66ad561cbe",
          "title": "sample1",
          "description": "MyNote1",
          "tag": "test",
          "date": "2022-06-03T07:28:00.216Z",
          "__v": 0
        },
        {
          "_id": "6299e5f884db9450afd40d3e",
          "user": "629985e293565f66ad561cbe",
          "title": "Amazing Note",
          "description": "this is note that is to be saved and displayed.",
          "tag": "XYZ",
          "date": "2022-06-03T10:44:08.702Z",
          "__v": 0
        },
        {
          "_id": "6299e60084db9450afd40d40",
          "user": "629985e293565f66ad561cbe",
          "title": "Amazing Noterr",
          "description": "this is note that is to be saved and displayed.",
          "tag": "General",
          "date": "2022-06-03T10:44:16.150Z",
          "__v": 0
        }
      ];
      const [notes, setnotes] = useState(notesIni);
return(
    <NoteContext.Provider value={{notes,setnotes}}>
    {props.children}
</NoteContext.Provider>
)
}
export default NoteState;