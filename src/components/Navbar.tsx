import styles from '@/styles/navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    return (
        <div className={styles.contenedorCabecera}>
            <div>
                <Image src="/images/LogoLuzem.png"
                    alt="Logo Luzem"
                    width={150}
                    height={56}
                />
            </div>
            <div className={styles.menuMv} onClick={toggleMenu}>
                <div/><div/><div/>
            </div>
            <nav className={`${styles.menu} ${menuOpen ? styles.open : ''}`}>
                <ul>
                    <li><Link href='/'>Inicio</Link></li>
                    <li><Link href='/Sesiones'>Sesiones</Link></li>
                    <li><Link href='/Portfolio'>Portfolio</Link></li>
                    <li><Link href='/SobreMi'>Sobre mí</Link></li>
                    <li><Link href='/Contacto'>Contacto</Link></li>
                </ul>
            </nav>

        </div>

    )
}