import { Container } from './styles';
import { format } from 'date-fns'
import Spinner from 'react-loader-spinner'
import TableOne from '../TableOne';
import { useContext, useState } from 'react'
import { UserContext} from '../../context/UserContext'

function PacientItem() {

  const {
    handleNextPage,
    users,
    loading
  } = useContext(UserContext);

  const [search, setSearch] = useState("");

  return (
    <Container>

      <input
      type="text"
      placeholder="Search..."
      onChange={(event) => {
        setSearch(event.target.value)
      }}
      />
     
          <table>
              <thead>
                <tr>
                    <th>
                      <h3>Name</h3>
                    </th>

                    <th>
                    <h3>Gender</h3>
                    </th>

                    <th>
                    <h3>Birth</h3>
                    </th>

                    <th>
                    <h3>Actions</h3>
                    </th>
                </tr>
              </thead>
              <tbody>
                {users?.filter((user) => {
                  if(search == ""){
                    return user
                  } else if (user.name.first.toLowerCase().includes(search.toLowerCase())){
                    return user
                  }
                }).map((user) => (
                  <TableOne 
                    key={user.login.uuid}
                    picture={user.picture.large}
                    name={user.name.first}
                    nameComplete={`${ user.name.first } ${ user.name.last }`}
                    gender={user.gender}
                    dateFirst={format(new Date(String(user.dob.date)), "dd-MM-yyyy")}
                    setPage={handleNextPage}
                    email={user.email}
                    id={user.id.value}
                    cell={user.cell}
                    nat={user.nat}
                    location={`${user.location.city}, ${user.location.state}, ${user.location.country}`}
                  />

                  ))}
              </tbody>
          </table>

          {loading ? 
            <Spinner 
                type="Circle"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} 
              /> 
              : 
            <button className="buttonLoading" onClick={handleNextPage}>Loading More</button>
          }
    
    </Container>
  );
};

export default PacientItem;
