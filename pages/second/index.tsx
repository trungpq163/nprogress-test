// second.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function SecondPage({ data }: any) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Second page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Second page</h1>
        <p className={styles.description}>
          This is the second page. Go to{' '}
          <Link href="/">
            <a>Home</a>
          </Link>
        </p>

        <div className={styles.grid}>
          {data.map((user) => (
            <div className={styles.card} key={user.id}>
              <h2>{user.name} &rarr;</h2>
              <p>Works in {user.company.name}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return {
    props: {
      data: data.slice(0, 4),
    },
  };
};
