import React, { useEffect, useRef } from 'react';
import Logo from '@/assets/logo/ArchiWeb.svg';
import { CiSearch } from 'react-icons/ci';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const Navbar = () => {
  // gsap.registerPlugin(useGSAP);

  const container = useRef();
  const logo = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      logo.current as any,
      {
        opacity: 0,
        x: -100,
      },
      {
        x: 0,
        duration: 1,
        opacity: 1,
        delay: 1,
      }
    );
    tl.fromTo(
      container.current as any,
      {
        y: -100,
        opacity: 0,
        // delay: 1,
      },
      {
        y: 0,
        duration: 1,
        opacity: 1,
      }
    );
  });

  useGSAP(() => {});

  return (
    <div className='text-primary flex justify-between px-[95px] py-[50px]'>
      <div
        ref={logo as any}
        className='font-Barlow text-[42px] font-semibold drop-shadow-2xl'
      >
        Animation
      </div>
      {/* <div ref={container as any} className='flex space-x-[100px] items-center'>
        <p className='text-xl cursor-pointer hover:font-bold'>Home</p>
        <p className='text-xl cursor-pointer hover:font-bold'>Projects</p>
        <p className='text-xl cursor-pointer hover:font-bold'>About</p>
        <p className='text-xl cursor-pointer hover:font-bold'>Contact</p>
        <CiSearch className='size-6' />
      </div> */}
      {/* <div>Navbar</div> */}
    </div>
  );
};

export default Navbar;
