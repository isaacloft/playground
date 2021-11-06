// import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  var currentdate = new Date();
  var dateTime = currentdate.getFullYear() + '/' + (currentdate.getMonth() + 1) + '/' + currentdate.getDate() + ' @ ' + currentdate.getHours() + ':' + currentdate.getMinutes() + ':' + currentdate.getSeconds();
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>{dateTime}</h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <Link href='/whiteboard' passHref>
              <h2>Whiteboard</h2>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
