import Head from 'next/head'
import { useState } from 'react'

import { IMeta, IPrimaryChildren } from '../../models'
import { StudyList } from '../index'
import { AcademicIcon, HamburguerIcon } from '../icons'

import styles from './styles.module.css'

interface Props {
  meta: IMeta | null
  studyList: IPrimaryChildren[]
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ meta, studyList, children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

	const onChangeStudy = () => {
		setIsMenuOpen(isMenuOpen => !isMenuOpen)
	}

  return (
    <>
      <Head>
        <title>{meta?.title ?? 'Class'}</title>
        {meta?.description ? (
          <meta name="description" content={meta.description} />
        ) : null}
      </Head>
      <header className={styles.header}>
        <span
          className={styles.hamburguer}
          onClick={onChangeStudy}
        >
          <HamburguerIcon size={32} />
        </span>
        <span>
          <AcademicIcon size={32} />
        </span>
      </header>
      <section className={styles.section}>
        <aside
          className={`${styles.aside} ${
            isMenuOpen ? styles.open : styles.close
          }`}
        >
          <StudyList items={studyList} onChangeStudy={onChangeStudy} />
        </aside>
        <main className={styles.main}>{children}</main>
      </section>
    </>
  )
}

export default Layout
