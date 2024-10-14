import styles from './style.module.css'

export default function Button(alt: string) {
  return <button className={styles.button}>{alt}</button>
}
