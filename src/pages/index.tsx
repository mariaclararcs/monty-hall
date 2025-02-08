import Link from "next/link"
import Card from "../components/Card"
import styles from "../styles/Formulario.module.css"
import InputNumero from "@/components/InputNumero"
import { useState } from "react"

export default function Formulario() {
  const [qtdePortas, setQtdePortas] = useState(3)
  const [comPresente, setComPresente] = useState(2)

  return (
    <div className={styles.formulario}>
      <div>
        <Card bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <InputNumero text="Qtde Portas"
            value={qtdePortas}
            onChange={novaQtde => setQtdePortas(novaQtde)} />
        </Card>
      </div>
      <div>
        <Card>
          <InputNumero text="Porta com Presente"
            value={comPresente}
            onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)} />
        </Card>
        <Card bgcolor="#28a085">
          <Link href={`/jogo/${qtdePortas}/${comPresente}`} className={styles.link}>
            <h2>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  )
}
