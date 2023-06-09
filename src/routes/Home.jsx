import React from 'react'
import Card from '../components/Card'
import { Link } from 'react-router-dom'
import linuxLogo from '../linux-svgrepo-com.svg'
import Test from './Test'

function Home() {
  return (
    <>
      <div className='py-36 px-20 flex justify-center bg-gray-800'>
        <div>
          <h1 className='text-white font-semibold text-5xl'>The QuizAPI includes a wide number of questions</h1>
        </div>
        <div>
          <p class="mt-4 text-lg text-gray-100">
            Test your knowledge or easily embed a quiz on your website with the Quiz API
          </p>
        </div>
      </div>
      <div className='mt-24'>
        <h1 className='flex justify-center mt-8 text-3xl'>Our Topics</h1>
        <h1 className='flex justify-center my-14  text-lg'>Test your skills with our top topics with a variaty of questions set for beginners and seniors alike!</h1>
      </div>
      <div className='flex mx-52 my-5 flex-wrap justify-evenly'>
        <Link to="/test"><Card title="Linux" url={linuxLogo}/></Link>
        <Card title="BASH" url="https://upload.wikimedia.org/wikipedia/commons/4/4b/Bash_Logo_Colored.svg" />
        <Card title="Javascript" url="https://picsum.photos/seed/1840/1000/600" />
        <Card title="Docker" url="https://picsum.photos/seed/1840/1000/600" />
        <Card title="HTML" url="https://picsum.photos/seed/1840/1000/600" />
        <Card title="MySQL" url="https://picsum.photos/seed/1840/1000/600" />
        <Card title="PHP" url="https://picsum.photos/seed/1840/1000/600" />
        <Card title="WordPress" url="https://picsum.photos/seed/1840/1000/600" />
      </div>
    </>
  )
}

export default Home