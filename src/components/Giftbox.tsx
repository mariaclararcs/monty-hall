import styles from "@/styles/Giftbox.module.css"

export default function Presente() {
    return (
        <div className={styles.presente}>
            <div className={styles.tampa}></div>
            <div className={styles.caixa}></div>
            <div className={styles.fitavertical}></div>
            <div className={styles.fitahorizontal}></div>
        </div>
    )
}