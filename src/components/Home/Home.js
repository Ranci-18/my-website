import React from 'react';
import picture from '../../Assets/Frank2.jpg';
import './Home.css';


export default function Home() {
  return (
    <>
      <div id='home'>
        <h1>Home</h1>
      </div>
      <div className='home'>
        <img src={picture} alt='' width={'180px'} height={'180px'} ></img>
        <div className='home-content'>
          <p>
          <i>
          <strong>Hi! My name is Frank. Welcome to my website!!</strong> <br /> <br />
          <strong>I am a <u>FullStack Software developer</u></strong> -- with a specialization on the front-end. <br /> <br />
                Loves to write code, learning about new technologies and solving problems. <br /> <br />
                If you're a problem solver,
                it means you love puzzles, which is why my second favorite hobby is playing <a href='https://www.chess.com/member/misty_knight'>Chess!</a>
            </i>
          </p>
        </div>
      </div>
    </>
  )
}
