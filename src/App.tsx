 import { Suspense, useState } from 'react';
import './App.css'
import type { devStackType } from './type/type';
import Nav from './component/Nav';
import Banner from './component/Banner';

import Technologies from './component/technologies/Technologies';
import Footer from './component/Footer';


const dataFetch = async():Promise<devStackType[]> =>{
    const res = await fetch("/data.json");
    const data = await res.json();
    return data
}


function App() {
  
const [promiseData] = useState(()=>dataFetch())

const [selectedTech, setSelectedTech] = useState<devStackType[]>([])
  
  return (
    <>
      <Nav ></Nav>
      <Banner></Banner>
      <Suspense fallback={<p>Loading...</p>}>
        <Technologies selectedTech={selectedTech} setSelectedTech={setSelectedTech} promiseData={promiseData}></Technologies>
      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App