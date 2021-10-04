import styles from '../styles/Home.module.css'
import Header from '../components/Header';
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      next app!
	  <Header />
	  <Link href="/test/about"><a>about.js</a></Link>
    </div>
  )
}
