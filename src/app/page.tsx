'use client'
import styles from '@/styles/hom.module.css'
import ListadoGalerias from '@/components/ListadoGalerias'
import Image from 'next/image'

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
          <Image src="/images/fotosConMama.jpg"
                alt="fotografía para el recuerdo"
                fill
                style={{ objectFit: 'cover',zIndex: -1 }}/>
          <h2>Lo que la memoria olvida, la fotografía recuerda</h2>
        </div>
      </section>
      <section className={styles.franjaNombre}>
        <div className={styles.nombre}>
          <h2>Luzem Fotografía</h2>
        </div>
      </section>
      <ListadoGalerias/>
    </>
  )
}