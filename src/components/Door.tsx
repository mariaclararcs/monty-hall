import PortaModel from "@/models/door"
import styles from "@/styles/Door.module.css"

interface PortaProps {
    value: PortaModel
    onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props: PortaProps){
    const porta = props.value
    const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada : ''

    const alternarSelecao = e => props.onChange(porta.alternarSelecao())
    const abrir = e => {
        e.stopPropagation()
        props.onChange(porta.abrir())
    }

    function renderizarPorta() {
        return (
            <div className={styles.porta} onClick={alternarSelecao}>
                <div className={styles.numero}>{porta.numero}</div>
                <div className={styles.macaneta} onClick={abrir}></div>
            </div>
        )
    }

    return (
        <div className={styles.area}>
            <div className={`${styles.frame} ${selecionada}`}>
                {porta.aberta ? false : renderizarPorta()}
            </div>
            <div className={styles.piso}></div>
        </div>
    )
}