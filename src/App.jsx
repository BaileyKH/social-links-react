import profilePic from '/src/assets/avatar-jessica.jpeg'

function App() {

  return (
    <>
      <main className="flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center bg-grayEight w-[350px] h-[550px] rounded-lg py-3.5 px-6">
          <img src={profilePic} alt="Headshot portrait of Jessica Randall" className='w-[100px] rounded-full my-1.5'/>
          <div className='text-center mt-2.5'>
            <h1 className='text-3xl font-bold'>Jessica Randall</h1>
            <h2 className='text-accentGreen font-semibold text-[17px] mt-1'>London, United Kingdom</h2>
          </div>
          <p className='text-sm mt-6 mb-2.5'>"Front-end developer and avid reader."</p>
          <div className='flex flex-col justify-center items-center w-full'>
            <a href="https://www.github.com" target="_blank" aria-label="GitHub" className='social-links'>GitHub</a>
            <a href="https://www.frontendmentor.io" target="_blank" aria-label="Frontend Mentor" className='social-links'>Frontend Mentor</a>
            <a href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn" className='social-links'>LinkedIn</a>
            <a href="https://www.x.com" target="_blank" aria-label="Twitter" className='social-links'>Twitter</a>
            <a href="https://www.instagram.com" target="_blank" aria-label="Instagram" className='social-links'>Instagram</a>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
