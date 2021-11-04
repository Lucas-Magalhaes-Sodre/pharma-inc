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
      <header>
        <h1>Pharma Inc</h1>
      </header>

      <main>     
      <PacientItem /> 
      </main>

      <footer>
        Pharma Inc
      </footer>
    </Container>
    </>
  )
}
