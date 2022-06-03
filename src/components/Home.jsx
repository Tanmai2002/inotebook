import { useContext } from "react"
import React from 'react'
import NoteContext from "../context/notes/noteContext"

export default function Home() {
    const con=useContext(NoteContext);

  return (
    <div>Home{con.name}</div>
  )
}
