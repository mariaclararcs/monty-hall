import styles from "@/styles/Porta.module.css"

interface PortaProps {
    selecionada?: boolean
}

export default function Porta({ selecionada }: PortaProps) {
    const classeSelecionada = selecionada ? styles.selecionada : ''

    return (
        <div className={styles.area}>
            <div className={`${styles.frame} ${classeSelecionada}`}>
                <div className={styles.porta}>
                    <div className={styles.numero}>3</div>
                    <div className={styles.macaneta}></div>
                </div>
            </div>
            <div className={styles.piso}></div>
        </div>
    );
}
