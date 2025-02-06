import Porta from "@/components/Door"
import { useState } from "react"
import { atualizarPortas, criarPortas } from "@/functions/doors"
import styles from "@/styles/Game.module.css"
import Link from "next/link"


export default function Jogo() {
  const [ portas, setPortas ] = useState(criarPortas(5, 2))

  function renderizarPortas() {
    return portas.map(porta => {
      return <Porta key={porta.numero} value={porta}
        onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
    })
  }
    
    return (
        <div id={styles.jogo}>
            <div className={styles.array}>
                {renderizarPortas()}
            </div>
            <div className={styles.botoes}>
                <Link href="/">
                    <button>Reiniciar Jogo</button>
                </Link>
            </div>
      </div>
    )
}