import React from 'react'
import Card from '../components/Card'
import { Link } from 'react-router-dom'
import linuxLogo from '../linux-svgrepo-com.svg'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Home() {

  return (
    <>
    <Navbar />
      <div class='py-36 px-20 flex justify-center bg-gray-800'>
        <div>
          <h1 class='text-white font-semibold text-5xl'>The QuizAPI includes a wide number of questions</h1>
        </div>
        <div>
          <p class="mt-4 text-lg text-gray-100">
            Test your knowledge or easily embed a quiz on your website with the Quiz API
          </p>
        </div>
      </div>
      <div class='mt-24'>
        <h1 class='flex justify-center mt-8 text-3xl'>Our Topics</h1>
        <h1 class='flex justify-center my-14  text-lg'>Test your skills with our top topics with a variaty of questions set for beginners and seniors alike!</h1>
      </div>
      <div class='flex mx-52 my-5 flex-wrap justify-evenly'>
        <Link to='/test' state={{category:'linux',tags:'linux'}}><Card title="Linux" url={linuxLogo}/></Link>
        <Link to='/test' state={{category:'linux', tags:'kubernetes'}}><Card title="Kubernetes" url="https://upload.wikimedia.org/wikipedia/commons/4/4b/Bash_Logo_Colored.svg" /></Link>
        <Link to='/test' state={{category:'DevOps', tags:'devops'}}><Card title="DevOps" url="https://picsum.photos/seed/1840/1000/600" /></Link>
        <Link to='/test' state={{category:'Docker', tags:'docker'}}><Card title="Docker" url="https://picsum.photos/seed/1840/1000/600" /></Link>
        <Link to='/test' state={{category:'code', tags:'html'}}><Card title="HTML" url="https://picsum.photos/seed/1840/1000/600" /></Link>
        <Link to='/test' state={{category:'sql', tags:'mysql'}}><Card title="MySQL" url="https://picsum.photos/seed/1840/1000/600" /></Link>
        <Link to='/test' state={{category:'code', tags:'php'}}><Card title="PHP" url="https://picsum.photos/seed/1840/1000/600" /></Link>
        <Link to='/test' state={{category:'cms', tags:'wordpress'}}><Card title="WordPress" url="https://picsum.photos/seed/1840/1000/600" /></Link>
        <Link to='/test' state={{category:'code', tags:'laravel'}}><Card title="Laravel" url="https://picsum.photos/seed/1840/1000/600" /></Link>
        <Link to='/test' state={{category:'code', tags:'javascript'}}><Card title="JavaScript" url="https://picsum.photos/seed/1840/1000/600" /></Link>
        <Link to='/test' state={{category:'linux', tags:'bash'}}><Card title="Bash" url="https://picsum.photos/seed/1840/1000/600" /></Link>
      </div>
      <Footer />
    </>
  )
}

export default Home