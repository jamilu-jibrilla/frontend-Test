import  { useState, useEffect } from 'react';

//styles
import './styles/App.scss'

//components
import Login from "./component/Login"
import Nav from "./component/Nav"
import Card from './component/Card'
import Sidebar from "./component/Sidebar"
import UserCard from './component/UserCard';
import Pagination from './component/Pagination';

//icons
import rightArrow from "../src/assets/main/left-arror.png"
import leftArrow from "../src/assets/main/right-arrow.png"
import icon from "./assets/main/user-icon.png"
import icon2 from "./assets/main/icon2.png"
import icon3 from "./assets/main/icon3.png"
import icon4 from "./assets/main/icon4.png"
import filter from "./assets/main/filter-results-button.png"


function App() {
  
  const icons = [icon, icon2, icon3, icon4]
  // urls 
  const url = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
  const url2 = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/:id"

  //state
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [pages, setPage] = useState(10)
  const [pageLimit, setPageLimit] = useState(5)
  const [currentPage, setCurrentPage] = useState(1)
  
  //functions
  
  const goToNextPage = () => {
    setCurrentPage(page => page + 1)
  }

  const goToPreviousPage = () => {
      setCurrentPage(page => page - 1)
  }

  const changePage = (e) => {
      let pageNum =  Number(e.target.textContent)
      setCurrentPage(pageNum)
  }

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
      return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
}


  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) return response.json();
      })
      .then(res => {
        window.localStorage.setItem('users', JSON.stringify(res));
        let data = JSON.parse(window.localStorage.getItem('users'));
        setUsers(data)
      })
      .catch((error) => setError(error.message));
  }, []);


if (error) return <h1>{error}</h1>;

  return (
    <div className="App">
      
      <Nav />
      <main >
        <Sidebar />
        <div className="main">
          
          <h1>Users</h1>
          
          <section className="cards">
            {icons.map (icon => (
              <Card key={icon} icon={icon} />
            ))}
          </section>


          <section className='wrapper'>

              <table>
              <thead>
                <tr>
                  <th>organization <img src={filter} alt="" /></th>
                  <th>username <img src={filter} alt="" /></th>
                  <th>email <img src={filter} alt="" /></th>
                  <th>phone number <img src={filter} alt="" /></th>
                  <th>date joined <img src={filter} alt="" /></th>
                  <th>status <img src={filter} alt="" /></th>
                  <th></th>
                </tr>
              </thead>

              <Pagination
                data={users}
                RenderComponent={UserCard}
                pageLimit={pageLimit}
                dataLimit={10}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />

            </table>
            <div className='pagination'>
                {/* previous button */}
                <img
                  src={leftArrow}
                    onClick={goToPreviousPage}
                    className={`prev ${currentPage === 1 ? 'disabled' : ''}`}                
                />

                {/* show page numbers */}
                {getPaginationGroup().map((item, index) => (
                    <span
                    key={index}
                    onClick={changePage}
                    className={`paginationItem ${currentPage === item ? 'active' : null}`}
                    >
                    <span>{item}</span>
                    </span>
                ))}

                {/* next button */}
                <img
                  src={rightArrow}
                    onClick={goToNextPage}
                    className={`next ${currentPage === pages ? 'disabled' : ''}`}
                />
            </div>

          </section>

        </div>
      </main>
    </div>
  )
}

export default App
