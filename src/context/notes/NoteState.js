import NoteContext from "./noteContext";
const NoteState=(props)=>{
    const name="Tamne";
    const address="temp";
return(
    <NoteContext.Provider value={{name,address}}>
    {props.children}
</NoteContext.Provider>
)
}
export default NoteState;