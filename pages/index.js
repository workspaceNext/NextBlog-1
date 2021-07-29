import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p> Hello everyone! My name is Test, during undergrad I majored in
                    Computer Science and fell in love with how coding and technological innovations continued to push the boundaries of what's possible.</p>
                <p>
                    This was built using a tutorial which you can find here:{' '}
                    (<a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
            </section>
        </Layout>
    )
}
