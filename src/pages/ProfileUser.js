import { useContext, useState } from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import EditProfileUser from "../components/EditProfileUser"
import ProjectContext from "../utils/ProjectContext"
import UserProject from "../components/UserProject"
import {AiFillEdit} from "react-icons/ai"
import "./Profile2.css"
import ProjectOffer from "../components/ProjectOffer"

function ProfileUser() {
  
  const { profileUsers } = useContext(ProjectContext)
  const [editShow, setEditShow] = useState(false)
  if (!profileUsers) return <h1>Loading...</h1>
  console.log(profileUsers)
  return (

<>
<div class="o">
    <div class="snip1515">
  <div class="profile-image"><img src={profileUsers.avatar} /></div>
  <div class="figcaption">
    <h3>{profileUsers.userName}</h3>
  
    
    -----------------------------
    <h4>{profileUsers.email}</h4>
    <div class="icons">
    
       <button class="btns"  onClick={() => setEditShow(true)}>
        <AiFillEdit/>
       </button><br/>
       <EditProfileUser show={editShow} setShow={setEditShow} profileUsers={profileUsers} />
      
      
    </div>
    <div>
       <h4>My Offers</h4>
       {profileUsers?.offers.map(offer=>(
   <ProjectOffer project={offer.projectName}/>
 ))} 
     
     
    </div>
  </div>
  
</div>


        
</div>


  </>
   
  )
}

export default ProfileUser
