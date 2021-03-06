import  { useState } from 'react';

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
import rightArrow from "../Public/assets/main/left-arror.png"
import leftArrow from "../Public/assets/main/right-arrow.png"
import icon from "../Public/assets/main/user-icon.png"
import icon2 from "../Public/assets/main/icon2.png"
import icon3 from "../Public/assets/main/icon3.png"
import icon4 from "../Public/assets/main/icon4.png"
import filter from "../Public/assets/main/filter-results-button.png"


const App = ({users})=> {
  const icons = [icon, icon2, icon3, icon4]

  //state  
  const [pages, setPage] = useState(10)
  const [pageLimit, setPageLimit] = useState(5)
  const [currentPage, setCurrentPage] = useState(1)
  const [display, setDisplay] = useState(false)

  
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



  return (
    <div className="App">
      
      <Nav setDisplay={setDisplay}/>
      <main >
        <Sidebar display={display} />
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
