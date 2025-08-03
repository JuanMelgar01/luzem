import styles from '@/styles/navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    return (
        <div className={styles.contenedorCabecera}>
            <div>
                <Image src="/images/LogoLuzem.png"
                        alt="Logo Luzem"
                        width={150}
                        height={56}
                />
            </div>
            <nav className={styles.menu}>
            <ul>
                <li><Link href='/'>Inicio</Link></li>
                <li><Link href='/Sesiones'>Galeria</Link></li>
                <li><Link href='/Portfolio'>Portfolio</Link></li>
                <li><Link href='/SobreMi'>Sobre mí</Link></li>
                <li><Link href='/Contacto'>Contacto</Link></li>
            </ul>
        </nav>

        </div>
        
    )
}