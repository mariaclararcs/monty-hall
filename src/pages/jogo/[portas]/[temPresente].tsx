import Porta from "../../../components/Porta"
import { useEffect, useState } from "react"
import { atualizarPortas, criarPortas } from "../../../functions/portas"
import styles from "../../../styles/Jogo.module.css"
import Link from "next/link"
import { useRouter } from "next/router"


export default function Jogo() {
  const router = useRouter()

  const [ portas, setPortas ] = useState([])
  const [ valido, setValido ] = useState(false)

  useEffect(() => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente

    setPortas(criarPortas(portas, temPresente))
  }, [router?.query])

  useEffect(() => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente
    
    const qtdePortasValidas = portas >= 3 && portas <= 100
    const temPresenteValido = temPresente >= 1 && temPresente <= portas

    setValido(qtdePortasValidas && temPresenteValido)
  }, [portas])

  function renderizarPortas() {
    return portas.map(porta => {
      return <Porta key={porta.numero} value={porta}
        onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
    })
  }
    
    return (
        <div id={styles.jogo}>
            <div className={styles.array}>
                {valido ? 
                  renderizarPortas() :
                  <h2 style={{fontSize: "2rem"}}>Valores Inválidos!</h2>
                }
            </div>
            <div className={styles.botoes}>
                <Link href="/">
                    <button>Reiniciar Jogo</button>
                </Link>
            </div>
      </div>
    )
}