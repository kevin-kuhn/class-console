import Head from 'next/head'

import { IMeta, IPrimaryChildren } from '../../models'
import { StudyList } from '../index'
import { AcademicIcon } from '../icons'

import styles from './styles.module.css'

interface Props {
  meta: IMeta | null
  studyList: IPrimaryChildren[]
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ meta, studyList, children }) => {
  return (
    <>
      <Head>
        <title>{meta?.title ?? 'Class'}</title>
        {meta?.description ? (
          <meta name="description" content={meta.description} />
        ) : null}
      </Head>
      <header className={styles.header}>
        <span>
          <AcademicIcon size={32} />
        </span>
      </header>
      <section className={styles.section}>
        <aside className={styles.aside}>
          <StudyList items={studyList} />
        </aside>
        <main className={styles.main}>{children}</main>
      </section>
    </>
  )
}

export default Layout
