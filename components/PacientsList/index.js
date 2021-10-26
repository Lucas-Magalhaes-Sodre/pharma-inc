import { Container } from './styles';
import PacientItem from '../PacientItem';
import api from '../../pages/api/api';
import { useEffect, useState } from 'react'


function PacientsList() {

  const [users, setUsers] = useState([]);

  
  useEffect(() => {
    api.get("?results=50").then((data) => {
      setUsers(data.data.results)
     
    })
 
    //eslint-disable-next-line 
  },[])
  console.log(users?.map((gender) => (
        (gender)
  )));

  return (
    <Container>
    
    {users?.map((data)=> (
      
          <PacientItem data={data}/>
        ))}
      
      </Container> 
  );
};

export default PacientsList;
