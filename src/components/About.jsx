import React from 'react';
import Computer from '../assest/computer.JPG';

const About = () => {
  return (
    <div className="">
      <h1 className="underline text-3xl font-bold bg-white pl-[3rem] pt-8">About Me.</h1>
      <div className="grid md:grid-cols-2 gap-4 sm:grid-cols-1 bg-white p-[3rem]">
        <div className="p-4">
          <p>
          I'm <span className='text-blue-700 font-bold'>Aiwerioghene Adesuwa</span>, a passionate <span className='text-blue-700 font-bold'>Front-End Developer</span>. I'm dedicated to crafting user interfaces that truly connect with people. 
          The world of coding excites me, offering endless possibilities. 
          I believe small details create big impacts, so I pour my heart into perfecting user experiences.
          <br></br>
          <br></br>

          Specializing in front-end development, I create <span className='text-blue-700 font-bold'>delightful websites</span> that engage users. Whether sleek e-commerce platforms or interactive storytelling sites, 
          I transform designs into <span className='text-blue-700 font-bold'>responsive web apps</span>. Creating seamless, enjoyable user experiences across devices is my core skill.
          <br></br>
          <br></br>

          But beyond the technical aspects, what truly fuels my passion for coding is the opportunity to collaborate. I firmly believe that the best results are achieved through teamwork and shared vision. 
          <br></br>
          <br></br>
          I am excited to collaborate with you, to listen to your ideas, understand your goals, and work together to bring them to life. Let's embark on this journey together, and together, let's create web experiences that leave an indelible mark on users!

          </p>
        </div>
        <div className="p-4 flex justify-center items-center">
          <img src={Computer} alt='img' className='lg:w-[440px] h-[300px] md:w-[390px] sm:w-[490px] sm:h-[390px]' />
        </div>
      </div>
    </div>
  );
};

export default About;
