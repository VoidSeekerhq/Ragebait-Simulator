import { useState } from 'react'
import './App.css'

function App() {
  const [coords, setCoords] = useState({
    x: 0,
    y: 0
  })

  let x = coords.x
  let y = coords.y

  console.log(x, y)

  const getCoords = () => {
    let x = Math.floor(Math.random() * 1401) - 700;
    let y = Math.floor(Math.random() * 1401) - 700;

    return { x, y }
  }

  return (
    <>
      <style>{`
                @keyframes rotate {
                    100% {
                        transform: rotate(1turn);
                    }
                }
            
                .rainbow::before {
                    content: '';
                    position: absolute;
                    z-index: -2;
                    left: -50%;
                    top: -50%;
                    width: 200%;
                    height: 200%;
                    background-position: 100% 50%;
                    background-repeat: no-repeat;
                    background-size: 50% 30%;
                    filter: blur(6px);
                    background-image: linear-gradient(#FFF);
                    animation: rotate 4s linear infinite;
                }
            `}</style>

            <header className='flex fixed top-0 left-0 w-full items-center justify-center backdrop-blur-md bg-white/10 z-10 p-4'>
              <span className='text-4xl font-bold text-blue-950'>RAGEBAIT SIMULATOR</span>
            </header>

      <div className='flex flex-col w-full h-full items-center justify-center gap-5'>
        <h1 className='text-6xl font-bold text-blue-950'>NO CLICK KARKE DIKHA SALEY</h1>

        <div className='flex flex-row gap-3'>
          <div className="w-fit h-fit rainbow relative z-0 bg-white/15 overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100">
            <button className="px-8 text-sm py-3 text-white rounded-full font-medium bg-gray-900/80 backdrop-blur">
              Yes
            </button>
          </div>
          <button
            type="button"
            className="px-8 py-3 active:scale-95 text-sm text-white border border-gray-300 rounded-full bg-transparent transition-all duration-200 ease-out backdrop-blur-sm"
            onMouseEnter={() => setCoords(getCoords())}
            style={{
              transform: `translate(${x}%, ${y}%)`
            }}>
            <p className="mb-0.5">No</p>
          </button>
        </div>
      </div>
    </>
  )
}

export default App
