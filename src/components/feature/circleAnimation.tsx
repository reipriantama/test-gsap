import { useGSAP } from '@gsap/react';
import gsap, { Power3 } from 'gsap';
import { useRef, useState } from 'react';

const CircleAnimation = () => {
  const text = useRef();
  const circleYellow = useRef();
  const circleRed = useRef();
  const circleBlue = useRef();

  const [activeCircle, setActiveCircle] = useState(null);

  const handleCircleClick = (circleRef: any) => {
    if (activeCircle === circleRef) {
      // Shrink the circle if it's already active
      gsap.to(circleRef.current, {
        width: 80,
        height: 80,
        ease: Power3.easeOut,
      });
      setActiveCircle(null);
    } else {
      // Expand the clicked circle and shrink the others
      gsap.to(circleRef.current, {
        width: 160,
        height: 160,
        ease: Power3.easeOut,
      });
      gsap.to(
        [circleYellow.current, circleRed.current, circleBlue.current].filter(
          (ref) => ref !== circleRef.current
        ),
        {
          width: 80,
          height: 80,
          ease: Power3.easeOut,
        }
      );
      setActiveCircle(circleRef as any);
    }
  };

  useGSAP(() => {
    gsap.from(text.current as any, {
      opacity: 0,
      duration: 1,
      y: -20,
      ease: Power3.easeOut,
    });
  });

  useGSAP(() => {
    gsap.from(circleYellow.current as any, {
      opacity: 0,
      x: 40,
      ease: Power3.easeOut,
    });
    gsap.from(circleRed.current as any, {
      opacity: 0,
      x: 40,
      ease: Power3.easeOut,
      delay: 0.2,
    });
    gsap.from(circleBlue.current as any, {
      opacity: 0,
      x: 40,
      ease: Power3.easeOut,
      delay: 0.4,
    });
  });

  return (
    <div className='space-y-10'>
      <div ref={text as any} className='flex justify-center items-center'>
        <div className=' '>
          <div className='z-10 '>
            <h1 className='text-[51px] font-bold drop-shadow-xl text-center'>
              Test Animation
            </h1>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center text-center gap-4'>
        <div
          onClick={() => handleCircleClick(circleYellow)}
          ref={circleYellow as any}
          className='w-20 h-20 rounded-full bg-yellow-500 cursor-pointer'
        ></div>
        <div
          onClick={() => handleCircleClick(circleRed)}
          ref={circleRed as any}
          className='w-20 h-20 rounded-full bg-red-500 cursor-pointer'
        ></div>
        <div
          onClick={() => handleCircleClick(circleBlue)}
          ref={circleBlue as any}
          className='w-20 h-20 rounded-full bg-blue-500 cursor-pointer'
        ></div>
      </div>
    </div>
  );
};

export default CircleAnimation;
