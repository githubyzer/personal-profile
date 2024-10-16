import React from 'react';
import { FaReact } from 'react-icons/fa';

const About = () => {
  return (
    <div className="mt-5">
      <h1><b>About Yzer</b></h1>
      <p>
        I'm an 3rd Year Computer Science student from University of Cabuyao, 3CS-A with a passion for both programming and design. 
        My education background includes learning about algorithms, data structures, 
        and front-end development, as well as experience in freelance graphic design.
      </p>
      <h2><b>Random Facts About Yzer </b></h2>
      <p>
      <ul>
        <li>My MBTI personality type is <b>INTP-A</b>. Imaginative and curious, people with the INTP personality type can find endless fascination in the workings of their own mind.</li>
        <li>I am a dancer and a proud member of <a href="https://www.facebook.com/iddc.aca"><span><b>Indak Dangal Dance Company</b></span></a>.</li>
        <li>I have two cats named Sisa and Tambay.</li>
        <li>I am born on May 19, 2004 in Carmona, Cavite.</li>
        <li>I love music and stan multiple groups. 
        <a href="https://www.instagram.com/blackpinkofficial"><span> BLACKPINK</span></a>, 
        <a href="https://www.instagram.com/yg_treasure_official"><span> TREASURE</span></a>, and 
        <a href="https://www.instagram.com/meovv"><span> MEOVV</span></a> are my ultimates.
        </li>
      </ul>
      </p>
      <div className="made-with-react mt-5">
        <p>Made with<FaReact className="react-logo" /><a href="https://react.dev/"><span><b>React</b></span></a></p>
      </div>
    </div>
  );
};

export default About;
