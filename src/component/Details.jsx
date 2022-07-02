import star from "../assets/details/star.png"
import fullstar from "../assets/details/full-star.png"
import useravatar from "../assets/details/user-avatar.png"
import backArrow from "../assets/details/return-arr.png"

//styles

//components
import Nav from "../component/Nav"
import Card from '../component/Card'
import Sidebar from "../component/Sidebar"

//icons
import icon from "../assets/main/user-icon.png"
import icon2 from "../assets/main/icon2.png"
import icon3 from "../assets/main/icon3.png"
import icon4 from "../assets/main/icon4.png"


const Details = (props)=> {
    
  const icons = [icon, icon2, icon3, icon4]

  return (
    <div className="Details">
      
      <Nav />
      <main >
        <Sidebar />
        <section className='user-details'>
            <h3 className='back'>
            <img src={backArrow} alt="" />
                <a href="/Home">back to users</a>
            </h3>

            <div className='userheading'>
                <div className='heading'>
                    <h2>User Details</h2>
                </div>
                <div className='btn-holder'>
                    <button className='blacklist'>BLACKLIST USER</button>
                    <button className='activate'>ACTIVATE USER</button>
                </div>
            </div>

            <div className="user">
                <div className="up-sect">
                    <div className="section1">
                        <div className="image">
                            <img src={useravatar} alt="profile avatar" />
                        </div>
                        <div>
                            <h2>Grace Efiom</h2>
                            <p>adsdsfdf</p>
                        </div>
                    </div>
                    <div className="user-tier">
                        <h4> users tier</h4>
                        <div className="stars">
                        <img src={star} alt="start" />
                        <img src={star} alt="star" />
                        <img src={fullstar} alt="star" />
                        </div>
                    </div>
                    <div className="money-sect">
                        <h4>200,000,000</h4>
                        <p>23456providus bank</p>
                    </div>
                </div>
                <div className="links">
                    <h4 className="first-child"> General Details</h4>
                    <h4> Documents</h4>
                    <h4>Bank Details</h4>
                    <h4>Loans</h4>
                    <h4>Savings</h4>
                    <h4>App and system</h4>
                </div>

            </div>

            <div className="main-details">
                
                <div className="sects">
                    
                    <h2>Personal information</h2>
                    
                    <div className="group1">

                        <div className="mini-sect">
                            <h3>FULL NAME</h3>
                            <h5>Grace Effiom</h5>
                        </div>
                        
                        
                        <div className="mini-sect">
                            <h3>PHONE NUMBER</h3>
                            <h5>Grace Effiom</h5>
                        </div>

                        
                        <div className="mini-sect">
                            <h3>EMAIL ADDRESS</h3>
                            <h5>Grace Effiom</h5>
                        </div>

                        <div className="mini-sect">
                            <h3>BVN</h3>
                            <h5>Grace Effiom</h5>
                        </div>

                        <div className="mini-sect">
                            <h3>GENDER</h3>
                            <h5>Grace Effiom</h5>
                        </div>
                    </div>

                    <div className="group2">

                        <div className="mini-sect">
                            <h3>MARITAL STATUS</h3>
                            <h5>Grace Effiom</h5>
                        </div>


                        <div className="mini-sect">
                            <h3>CHILDREN</h3>
                            <h5>Grace Effiom</h5>
                        </div>

                        <div className="mini-sect">
                            <h3>TYPE OF RESIDENCE</h3>
                            <h5>Grace Effiom</h5>
                        </div>
                        
                    </div>

                </div>

                
                <div className="sects">
                    
                    <h2>EDUCATION and EMPLOYMENT</h2>
                    
                    <div className="group1">

                        <div className="mini-sect">
                            <h3>LEVEL OF EDUCATION</h3>
                            <h5>Grace Effiom</h5>
                        </div>
                        
                        
                        <div className="mini-sect">
                            <h3>EMPLOYMENT STATUS</h3>
                            <h5>Grace Effiom</h5>
                        </div>

                        
                        <div className="mini-sect">
                            <h3>SECTOR OF EMPLOYMENT</h3>
                            <h5>Grace Effiom</h5>
                        </div>

                        <div className="mini-sect">
                            <h3>DURATION OF EMPLOYMENT</h3>
                            <h5>Grace Effiom</h5>
                        </div>

                        <div className="mini-sect">
                            <h3>OFFICE MAIL</h3>
                            <h5>Grace Effiom</h5>
                        </div>
                    </div>

                    <div className="group2">

                        <div className="mini-sect">
                            <h3>MONTHLY INCOME</h3>
                            <h5>Grace Effiom</h5>
                        </div>


                        <div className="mini-sect">
                            <h3>LOAN REPAYMENT</h3>
                            <h5>Grace Effiom</h5>
                        </div>

                        <div className="mini-sect">
                            <h3>TYPE OF RESIDENCE</h3>
                            <h5>Grace Effiom</h5>
                        </div>
                        
                    </div>

                </div>


                
                <div className="sects">
                    
                    <h2>Socials</h2>
    

                    <div className="group2">

                        <div className="mini-sect">
                            <h3>TWITTER</h3>
                            <h5>Grace Effiom</h5>
                        </div>


                        <div className="mini-sect">
                            <h3>FACEBOOK</h3>
                            <h5>Grace Effiom</h5>
                        </div>

                        <div className="mini-sect">
                            <h3>INSTAGRAM</h3>
                            <h5>Grace Effiom</h5>
                        </div>
                        
                    </div>

                </div>



                
                <div className="sects">
                    
                    <h2>Guarantor</h2>
                    
                
                    <div className="group2">

                        <div className="mini-sect">
                            <h3>FULL NAME</h3>
                            <h5>Grace Effiom</h5>
                        </div>


                        <div className="mini-sect">
                            <h3>PHONE NUMBER</h3>
                            <h5>Grace Effiom</h5>
                        </div>



                        <div className="mini-sect">
                            <h3>EMAIL ADDRESS</h3>
                            <h5>Grace Effiom</h5>
                        </div>

                        <div className="mini-sect">
                            <h3>RELATIONSHIP</h3>
                            <h5>Grace Effiom</h5>
                        </div>
                        
                    </div>

                </div>

            </div>
        </section>
      </main>
    </div>
  )
}

export default Details
