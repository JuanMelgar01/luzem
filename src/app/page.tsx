'use client'
import { sesiones } from '@/data/sesiones'
import styles from '@/styles/hom.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section className={styles.contenedorHome}>
        <div className={styles.contBienvenida}>
          <h2 className={styles.textBien}>Bienvenido</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, aliquid quae porro praesentium quidem fuga illum laboriosam debitis est, explicabo recusandae error in, voluptates omnis! Asperiores ut odio libero magnam!</p>
          <div>Galeria</div>
          <div>Contacto</div>
        </div>
        <div className={styles.contFrase}>
          <h2>Lo que el viento se llevó</h2>
        </div>
      </section>
      <section className={styles.franjaNombre}>
        <div className={styles.nombre}>
          <h2>Luzem Fotografía</h2>
        </div>
      </section>
      <section className={styles.categorias}>
        {sesiones.map(sesion =>(
          <div key={sesion.id} className={styles.contenedorSesion}>
            <Link href={sesion.enlace}>
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
        )) }
      </section>
    </>
  )
}