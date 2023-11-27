import React from 'react';
import './Portfolio.css';

export default function Portfolio() {
  return (
    <section id='portfolio'>
        <h1>Portfolio</h1>
        <div className='projects'>
          <div className='project0'>
            <h2>This Website</h2>
            <p>I created this website from scratch from the structure to the design using React and CSS</p>
          </div>
          <div className='project1'>
            <h2>Portfolio Project — <i>created a webservice using an API</i></h2>
            <p>A collaborative project with two  cohort members using Python, JavaScript, html, CSS, and Flask to create routes to serve keyword driven health articles.</p>
            <ul>
              <li>I Worked on the API logic/code to retrieve and parse the retrieved health articles using Python.</li>
              <li>I Integrated the API logic with the Flask route code that displayed the articles relevant to a user submitted keyword.</li>
              <li>I Created the frontend logic that generated a unique user id used to log in and sign up users into the system using JavaScript.</li>
              <li>I Assisted in debugging the backend logic that was implemented using SQLAlchemy.</li>
            </ul>
          </div>
          <div className='project2'>
            <h2>Airbnb Clone project — <i>created a working clone of an Airbnb website</i></h2>
            <p>The project was a collaborative effort with a fellow ALX student completed and saved on GitHub.</p>
            <ul>
              <li>The first task of the project was to create  the Console, an interpreter that manipulates classes like the User, Place, City, Reviews, etc.</li>
              <li>In addition, the project entailed creating a base model in Python OOP (Object Oriented Programming), which was the superclass with key attributes.</li>
              <li>First created static web pages using HTML5 and CSS, then later added dynamic features using JavaScript. This part of the project was accomplished individually.</li>
              <li>Deployed the final project on two nginx servers supported by a load balancer using Haproxy.</li>
              <li>All the DevOps tasks in between were completed individually as well, including the deploying stage.</li>
              <li>Individually performed Haproxy and Nginx configurations to meet the expected requirements.</li>
            </ul>
          </div>
          <div className='project3'>
            <h2>Sorting algorithms projects — <i>completed different sorting algorithms and analyzed their time and space complexity</i></h2>
            <ul>
              <li>Deep understanding of various sorting algorithms: bubble sort, insertion sort, selection sort, quick sort.</li>
              <li>I can recreate the same in other languages, like Python and JavaScript.</li>
            </ul>
          </div>
          <div className='project4'>
            <h2>Data Structures projects — <i>completed an array of data structure projects in C, Python, and JavaScript</i></h2>
            <ul>
              <li>Great understanding of  various data structures in C - arrays, singly linked lists, doubly linked lists, stacks, queues, binary trees, hash tables, etc, in Python - lists, tuples, sets, dictionaries, etc.</li>
            </ul>
          </div>
          <div className='project5'>
            <h2>Basic C Printf Project — <i>created a printf project in C to appreciate the language's many functions</i></h2>
            <li>Recreated the C version of the printf function from scratch to show my understanding of low level concepts.</li>
            <li>Available on GitHub.</li>
          </div>
          <div className='project6'>
            <h2>Simple Shell Project in C — <i>created a simple shell in C language to emulate a UNIX-like shell</i></h2>
            <li>Recreated the shell to show an understanding of low level concepts.
                Also available on GitHub.
            </li>
          </div>
        </div>
    </section>
  )
}
