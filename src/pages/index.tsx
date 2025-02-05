import PortaModel from "@/models/door"
import Porta from "@/components/Door"
import { useState } from "react"


export default function Home() {
  const [ p1, setP1 ] = useState(new PortaModel(1))

  return (
    <div style={{display: "flex"}}>
      <Porta value={p1} onChange={novaPorta => setP1(novaPorta)} />
    </div>
  )
}