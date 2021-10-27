
import { useState } from 'react'

import  Modal  from 'react-modal';
import { ModalDate } from '../ModalDate';
import { TableLine } from './styles';

function TableOne(props) {

  const [modalUser, setModalUser] = useState(false);

  function handleOpenModal(){
    setModalUser(true);
  }

  function handleCloseModal(){
    setModalUser(false);
  }  

  return (
      <TableLine>
        <td>
          <p>
          {props.name}
          </p>
        </td>

        <td>
          <p>
        {props.gender}
          </p>
        </td>

        <td>
          <p>
              {props.dateFirst} 
          </p>
        </td>

        <td>
          <button 
          type="button" 
          onClick={handleOpenModal}
          >
            view
          </button>
      
          <Modal 
            isOpen={modalUser}
            onRequestClose={handleCloseModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            >
            
              <ModalDate  
                picture={props.picture}
                name={props.name}
                nameComplete={props.nameComplete}
                gender={props.gender}
                dateFirst={props.dateFirst}
                email={props.email}
                id={props.id}
                cell={props.cell}
                nat={props.nat}
                location={props.location}
                />
            
          </Modal>
        
        </td>

      </TableLine>
    
      
  );
};

export default TableOne;
