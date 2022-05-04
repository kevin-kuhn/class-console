import Head from 'next/head'

import { IMeta } from '../../models'

import styles from './styles.module.css'

interface Props {
  meta: IMeta
  classItems: React.ReactNode
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ meta, classItems, children }) => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Head>
      <header className={styles.header}> COLOCAR ICONE ALEATORIO AQUI </header>
      <section className={styles.section}>
        <aside className={styles.aside}>{classItems}</aside>
        <main className={styles.main}>{children}</main>
      </section>
    </>
  )
}

export default Layout
