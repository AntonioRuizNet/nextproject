import type { NextPage } from 'next'
import Link from 'next/link'
import { ModalCharacter } from './Modal/ModalCharacter'

const Navigation: NextPage = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
                <div className="container-fluid">
                    <Link href="/"><a className="navbar-brand">Rick and Morty</a></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link href="/"><a className="nav-link active" aria-current="page">Inicio</a></Link>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <ModalCharacter />
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation