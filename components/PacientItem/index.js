import { Container } from './styles';
import api from '../../pages/api/api';
import { useEffect, useState } from 'react'
import TableOne from '../TableOne';





function PacientItem(props) {

  const [users, setUsers] = useState([]);

 
  useEffect(() => {
    api.get("?results=1").then((data) => {
      setUsers(data.data.results)
     
    })
 
    //eslint-disable-next-line 
  },[])

  return (
    <Container>
           
                  {users?.map((gender) => (
                    <TableOne 
                    picture={gender.picture.large}
                    name={gender.name.first}
                    surname={gender.name}
                    gender={gender.gender}
                    dateFirst={gender.dob.date}
                    />
  
                     ))}
    
    </Container>
  );
};

export default PacientItem;
