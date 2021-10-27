import { Container } from './styles';
import api from '../../pages/api/api';
import { useEffect, useState } from 'react'



export function ModalDate(props) {
  /*const [users, setUsers] = useState([]);

  
  useEffect(() => {
    api.get("?results=1").then((data) => {
      setUsers(data.data.results)
     
    })
 
    //eslint-disable-next-line 
  },[])
*/
  return (
    <Container>
    

               <div>

                 <img src={props.picture}>
                   
                 </img>
               
                  <h3>
                   name: {props.nameComplete}
                  </h3>
                      
                  <br />
                             
                   <h5>
                     Gender: {props.gender}
                    </h5>  

                    <br />

                    <h5>
                     Birth: {props.dateFirst}
                    </h5> 

                    <br />
                      
                    <h5>
                     email: {props.email}
                    </h5> 

                    <br />
                      
                    <h5>
                     id: {props.id}
                    </h5> 

                    <br />
                      
                    <h5>
                     cell: {props.cell}
                    </h5> 

                    <br />
                      
                    <h5>
                     nat:
                     {props.nat}
                    </h5> 

                    <br />
                      
                    <h5>
                     location:
                     {props.location}
                    </h5> 
                                
                        
                      

          </div>
            
             
       

          
       
     
  </Container>
      
      
   
  );

};


