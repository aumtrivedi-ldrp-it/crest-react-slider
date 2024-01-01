import './index.css'
import CardList from './component/CardList'

function App() {
  return (
    <>
      <div className='flex content-center items-center flex-col'>
        
        <div className='text-5xl bg-black-700 pt-20'>Photo gallery</div>
        <div className='text-1xl bg-black-700 pt-3 pb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elementum sapien non tincidunt mattis.</div>
        <CardList />
      </div>
    </>
  )
}

export default App
