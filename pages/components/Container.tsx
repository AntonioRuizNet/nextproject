import type { NextPage } from 'next'
import Head from 'next/head'
import Navigation from './Navigation'
import { Global } from '../Constants'


const Container: NextPage = (props) => {
    return (
        <div>
            <Head>
                <title>{Global.Title}</title>
            </Head>
            <Navigation />
            <div className="container p-4">{props.children}</div>
        </div>
    )
}

export default Container