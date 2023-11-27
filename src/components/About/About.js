import React from 'react';
import './About.css';


export default function About() {
  return (
    <section id='about'>
        <h1>About Me</h1>
        <h2>Personal Bio</h2>
        <div className='divStyle2'>
          <p>
            First and foremost, I am a doer. Yes, I love learning about new technologies
            but I love implementing them in projects even more.<br /><br />
            I am a self-motivated, hardworking and goal-oriented individual with
            a keen eye for detail and a strong desire to learn and grow. I am
            a team player and a natural leader who is always willing to share
            knowledge and help others grow.<br /><br />
            I am also a creative thinker and
            problem solver who is always looking for ways to improve processes
            and make things better. I am a fast learner and a quick study who
            can adapt to any environment and any situation.<br /><br />
            I am also a
            perfectionist who is always looking for ways to improve and
            perfect my craft. I am also a great communicator and a good
            listener who is always willing to listen and learn from others.
          </p>
        </div>
        <h2>Professional Bio</h2>
        <div className='divStyle1'>
          <p>My professional interests have always been driven by 
            my passion for science and technology and my desire to 
            build products that fulfil a purpose and a specific need.
          <br /><br />
            I have a background in Engineering and programming; however,
            over the years I have developed a deeper passion for Software
            Engineering and all things IT.
          <br /><br />
            That attraction to technology
            paved my path to training as a FullStack Software Developer. In
            the process, I have learned and professionally worked with C, Python and
            its associated backend frameworks as well as JavaScript and its host of
            web frontend technologies (CSS, HTML, SASS/SCSS, next.js, React, etc).
          </p>
        </div>
        <div className='divStyle3'>
          <p>Apart from Software Engineering, I have equally deep interests in Network Security.
            I am taking online courses in Network Security and have plans to get into Ethical Hacking
            in the Networking realm. I already possess considerable knowledge and experience in Networking
            and penetration testing, which I have been able to fulfil via an internship opportunity. As a
            cybersecurity professional, I have:
          </p>
          <ul>
            <li>Accomplished static analysis via different tools but mostly using MobSF, which I find is a comprehensive tool for performing such an analysis.</li>
            <li>Analyzed application reports to understand the overall scope of how secure or insecure applications are.</li>
            <li>Written scripts using Python to automate certain processes. For instance, I wrote a script that automates the scanning processes of the MobSF framework
              and gives you a comprehensive overview of the mid, high, and extreme points of weakness of an application. Without reading through the report,
              you immediately get to know how the app performs on the security scale. The script uses the MobSF scan API and is available on my GitHub.
            </li>
            <li>Performed dynamic analysis of an application using genymotion.</li>
          </ul>
          <div>
          <p>I have also used these tools:</p>
            <ul>
              <li>SQLmap.</li>
              <li>ZAP.</li>
              <li>OpenDoor (web app scanner).</li>
            </ul>
          </div>
        </div>
    </section>
  )
}
