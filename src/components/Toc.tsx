import styles from "./Toc.module.css";

export default function TableOfContent() {
  return <div className={styles.wrap}>
    <div className={styles.header}>
      <div>
        최근 읽은 글
      </div>
    </div>
    <div className={styles.hr} />
    <ul>
      <li>
        현재 기능 개발 중
      </li>
    </ul>
  </div>
}