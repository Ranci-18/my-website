import React from 'react';
import './Process.css';

export default function Process() {
  return (
    <section id='process'>
        <h1>My Process</h1>
        <p>Using my website, which I created using React:</p>
        <div className='process'>
          <ul>
            <li>I used Figma to create a baseline design of what I wanted my website to look like</li>
            <li>I created my project repository using the react create tool on the terminal.</li>
            <li>I organized my project structure down to the different components I needed to render</li>
            <li>I created test files for each component to shallow render them and test they rendered correctly/without errors</li>
            <li>I added the necessary content for the different components.</li>
            <li>I then jumped into the design work for each component using CSS.</li>
            <li>I optimized the project as a whole, adding final touches to it.</li>
            <li>I had to change the build process to use <u>webpack</u> since I am familiar on the right way to set up the configuration file</li>
          </ul>
        </div>
    </section>
  )
}
