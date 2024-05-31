import React, { useRef } from 'react';
import styles from './index.module.scss';
import { useGSAP } from '@gsap/react';
import gsap, { Power2 } from 'gsap';

const ImageReveal = () => {
  const container = useRef();
  const image = useRef();
  const imageReveal = useRef();

  const tl = gsap.timeline();

  useGSAP(() => {
    tl.fromTo(
      container.current as any,
      { opacity: 0, duration: 2 },
      { opacity: 1, duration: 5 }
    );

    // tl.to(container.current as any, 0, { css: { visibility: 'visible' } }).to(
    //   imageReveal.current as any,
    //   1.4,
    //   { width: '0%', ease: Power2.easeInOut});
  });

  return (
    <section className={styles.main}>
      <div ref={container as any} className={`${styles.container}`}>
        <>
          <div className={`${styles.imgContainer}`}>
            <img src={'assets/imageReveal/people.jpg'} alt='people' />
          </div>
        </>
      </div>
    </section>
  );
};

export default ImageReveal;
