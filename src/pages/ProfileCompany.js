import { useContext, useState } from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import EditProfileCompany from "../components/EditProfileCompany"
import ProjectContext from "../utils/ProjectContext"
import { AiFillEdit } from "react-icons/ai"
import { MdLocalOffer } from "react-icons/md"
import "./Profile2.css"
import CompanyProject from "../components/CompanyProject"
import ProjectOffer from "../components/ProjectOffer"
function ProfileCompany() {
  const { profileCompany } = useContext(ProjectContext)
  const [editShow, setEditShow] = useState(false)
  if (!profileCompany) return <h1>Loading...</h1>
  console.log(profileCompany)
  return (
    <div class="o">
      <div class="snip1515">
        <div class="profile-image">
          <img src={profileCompany.logo} />
        </div>
        <div class="figcaption">
          <h3>{profileCompany.companyName}</h3>
          <p>{profileCompany.aboutUs}</p>
          -----------------------------
          <h4>{profileCompany.email}</h4>
          <div class="icons">
            <button class="btns" onClick={() => setEditShow(true)}>
              <AiFillEdit />
            </button>
            <br />
            <EditProfileCompany show={editShow} setShow={setEditShow} profileCompany={profileCompany} />

            <a href="https://twitter.com/sabic?lang=ar-x-fm">
              {" "}
              <i class="ion-social-twitter"></i>
            </a>
          </div>
          <div>
            <h4>My Offers</h4>

            {profileCompany?.offers.map(offer => (
              <ProjectOffer project={offer.projectName} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCompany
