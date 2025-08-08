import Image from "next/image"
import Link from "next/link"
import styles from '@/styles/hom.module.css'
import { sesiones } from '@/data/sesiones'

export default function ListadoGalerias() {
    const scrollTop = () => {
        window.scrollTo(0,0)
    }
    return (
        <>
            <section className={styles.categorias}>
                {sesiones.map(sesion => (
                    <div key={sesion.id} className={styles.contenedorSesion}>
                        <Link href={sesion.enlace} onClick={scrollTop}>
                            <div className={styles.imgWrapper}>
                                <Image src={sesion.imagen}
                                    alt={sesion.descripcion}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                                <h3 className={styles.sesionTitulo}>{sesion.titulo}</h3>
                            </div>
                        </Link>

                    </div>
                ))}
            </section>
        </>

    )
}