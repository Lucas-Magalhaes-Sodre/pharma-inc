import Head from 'next/head'
import PacientsList from '../components/PacientsList';
import { useEffect, useState } from 'react'
import api from './api/api';


export default function Home() {

  /*const [users, setUsers] = useState([]);

  
  useEffect(() => {
    api.get("?results=50").then((data) => {
      setUsers(data.data.results)
     
    })
 
    //eslint-disable-next-line 
  },[])
  console.log(users?.map((gender) => (
        (gender)
  )));*/

  return (
    <div>
      <Head>
        <h1>Pharma Inc</h1>
      </Head>

      <main>
        
         
      <div>
       
      
      
      <PacientsList />
    
       
         
     
      </div>
       
         
        
      </main>

      <footer>
       
      </footer>
    </div>
  )
}
