import { useState } from 'react'
import reactLogo from './assets/logo.svg'
import './App.css'



function App() {

  const [content, setContent] = useState(MainMenu)

  return (
    <>
      <header className='navbar'>
        <h1 onClick={(e) => {
          e.preventDefault();
          setContent(MainMenu)
        }}>TrackX</h1>

        <div className='links'>
          <a onClick={(e) => {
            e.preventDefault();
            setContent(MainMenu)
          }} href="#">Home Page</a>

          <a onClick={(e) => {
            e.preventDefault();
            setContent(About)
          }} href="#">About</a>

          <a onClick={(e) => {
            e.preventDefault();
            setContent(Contact)
          }} href="#">Contact</a>
        </div>
      </header>

      <main className='main'>
        {content}
      </main>
    </>
  )
}


function MainMenu() {

  return (
    <>
      <div className='main-menu'>
        <h1 className='wellcome'>Wellcome to App</h1>
        <div className='logo-container'>
          <img src={reactLogo} className="App-logo" alt="logo" />
        </div>

      </div>
    </>
  )
}

function About() {
  return (
    <>
      <div className="about">
        <h1>About App</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi voluptates ab expedita praesentium est, aliquid blanditiis nulla possimus inventore culpa minima necessitatibus non totam mollitia iste, odit adipisci, error iure.
          Consequatur accusamus molestias nulla possimus delectus, voluptatum facere molestiae natus tenetur voluptas optio ipsa similique quibusdam iure ipsam unde id beatae excepturi mollitia esse ratione sit! Dolorum explicabo quibusdam pariatur.
          Ex quae debitis assumenda dolorem maxime molestiae dolor atque, odit sit voluptatem quod. Molestias maxime vitae reprehenderit quaerat tempore laborum laudantium necessitatibus, explicabo blanditiis quos at autem fugit voluptatum eius.
        </p>
      </div>
    </>
  )
}

function Contact() {
  return (
    <>
      <div className="contact">
        <h1>Contact</h1>
        <table>
          <tr>
            <th>Mail: </th>
            <td>trackx@info</td>
          </tr>
          <tr>
            <th>
              Phone:
            </th>
            <td>
              0850-369-25-14
            </td>
          </tr>
          <tr>
            <th>
              Web: 
            </th>
            <td>
              www.trackx.com
            </td>
          </tr>
          <tr>
            <th>
              Address: 
            </th>
            <td>
              Şişli / İstanbul
            </td>
          </tr>
        </table>
      </div>
    </>
  )
}

export default App
