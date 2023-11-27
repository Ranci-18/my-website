import React from 'react';
import resume from '../../Assets/Resume.pdf';
import './Resume.css';

export default function Resume() {
  return (
    <section id='resume'>
        <h1>CV</h1>
        <div className='education'>
          <h2>Educational Overview</h2>
          <h3>ALX Africa — Full Stack Developer/Software Engineering Training</h3>
          <p>Underwent Software Engineering training at ALX Africa - a foundation designed to increase the pool of Full-Stack software engineers and programmers in the African continent. At ALX, I have redefined my appetite to build useful products in the same way Electrical and Control Engineering does in enforcing my curiosity and capacity to take things apart, fix them, and put them back together again. At ALX:</p>
          <ul>
            <li>I delved into low level programming, particularly in the C programming language.</li>
            <li>I completed basic projects in C including final projects in re-inventing the printf function in C and re-inventing the basic shell in C, which was no easy feat. Both projects can be found in my GitHub.</li>
            <li>I gained an appeal to high level languages after successfully completing C, particularly JavaScript and Python.</li>
            <li>I learned scripting in Python and functional programming, both of which I am proficient in, having completed such tasks as the N-queens problem among numerous others.</li>
            <li>Coming from C and into high level languages, I delved into data structures and algorithms, including gaining an understanding of which searching and sorting algorithms are efficient from their time complexity. This is also something I am good at.</li>
            <li>Going into JavaScript made me understand its essence as a programming language of the frontend powering all web browsers.</li>
            <li>Adding to my knowledge of JavaScript, I gained proficiency in jQuery, React, and Expressjs.</li>
            <li>I have completed different projects in HTML5 and CSS, and completed all requirements of responsive web design with a mobile-first approach when designing and building applications.</li>
            <li>I have satisfied all requirements pertaining to backend development and DevOps as well, having delved into the use of Flask, working with Nginx, and deployed an AirBnB website that we developed in two different servers, including hosting a load balancer server between them.</li>
            <li>Delved into DevOps and system design.</li>
          </ul>
        </div>
        <p><u>Download full resume</u></p>
        <a href={resume} download>
        <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 384 512"><path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"/></svg>
        </a>
    </section>
  )
}
