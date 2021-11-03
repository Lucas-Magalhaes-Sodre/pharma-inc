import Head from 'next/head'
import PacientItem from '../components/PacientItem';
import { Container } from './styles';

export default function Home() {

  return (
    <>
    <Head>
      <title>Pharma Inc</title>
    </Head>
    <Container>
      <div id="head">
        <h1>Pharma Inc</h1>
      </div>

      <main> 
         
      <div>
      
      <PacientItem />

      </div>
        
      </main>

      <footer>
        Pharma Inc
      </footer>
    </Container>
    </>
  )
}
