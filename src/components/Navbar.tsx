"use client";

import styles from '@/styles/navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    const pathname = usePathname();
    const isActive = (path: string): boolean => {
        return pathname === path
    }

    return (
        <section className={styles.contenedorCabecera}>
            <Image src="/images/Atardecer familia.jpg"
                alt="Fondo atardecer"
                fill
                priority
                style={{ objectFit: 'cover', zIndex: -1 }}
            />
            <div className={styles.contMenuRedes}>
                <div className={styles.contMenuLogo}>
                    <div className={styles.contMenu}>
                        <div className={styles.menuMv} onClick={toggleMenu}>
                            <div /><div /><div />
                        </div>
                        <nav className={`${styles.menu} ${menuOpen ? styles.open : ''}`}>
                            <ul>
                                <li className={`${isActive('/') ? styles.active : ''}`}><Link href='/' onClick={toggleMenu} >Inicio</Link></li>
                                <li className={`${styles.dropdown} ${isActive('/sesiones') ? styles.active : ''}`}><Link href='#' onClick={toggleMenu} >Sesiones</Link>
                                    <ul className={styles.submenu}>
                                        <li className={`${isActive('/sesiones') ? styles.active : ''}`}><Link href='/sesiones/familia' onClick={toggleMenu} >Familia </Link></li>
                                        <li className={`${isActive('/sesiones') ? styles.active : ''}`}><Link href='/sesiones/recien-nacido' onClick={toggleMenu} >Recién Nacido </Link></li>
                                        <li className={`${isActive('/sesiones') ? styles.active : ''}`}><Link href='/sesiones/parto' onClick={toggleMenu} >Parto </Link></li>
                                    </ul>
                                </li>
                                <li className={`${isActive('/portfolio') ? styles.active : ''}`}><Link href='/portfolio' onClick={toggleMenu} >Portfolio</Link></li>
                                <li className={`${isActive('/sobre-mi') ? styles.active : ''}`}><Link href='/sobre-mi' onClick={toggleMenu} >Sobre mí</Link></li>
                                <li className={`${isActive('/contacto') ? styles.active : ''}`}><Link href='/contacto' onClick={toggleMenu} >Contacto</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className={styles.contLogo}>
                        <div>
                            <Image src="/images/LogoLuzem.png"
                                alt="Logo Luzem"
                                width={150}
                                height={56}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.contRedes}>
                    <div className={styles.redes} />
                    <div className={styles.redes} />
                    <div className={styles.redes} />
                    <div className={styles.redes} />
                </div>
            </div>



        </section>

    )
}