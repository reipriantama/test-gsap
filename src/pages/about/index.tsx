import Image from 'next/image';
import BgThunder from '@/assets/aboutUs/thunder.svg';

const About = () => {
  return (
    <div
      style={{ backgroundImage: 'url("/assets/aboutUs/thunder.svg")' }} // pastikan ekstensi file benar
      className='w-[100vh] h-[100vh] bg-cover bg-center '
    >
      <h1 className=' text-4xl p-4'>
        About <sup>(02)</sup>
      </h1>
      {/* <BgThunder /> */}
    </div>
  );
};

export default About;
