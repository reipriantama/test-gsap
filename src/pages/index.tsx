import CircleAnimation from '@/components/feature/circleAnimation';
import ImageReveal from '@/components/feature/imageReveal';
import Layout from '@/components/layouts';
import { useGSAP } from '@gsap/react';
import gsap, { Power3 } from 'gsap';
import { TweenLite } from 'gsap-trial/src/gsap-core';
import Image from 'next/image';
import { useRef, useState } from 'react';

export default function Home() {
  return (
    <Layout className=''>
      <CircleAnimation />
      <ImageReveal />
    </Layout>
  );
}
