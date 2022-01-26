import axios from "axios"
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import ProjectContext from "./utils/ProjectContext"
import { toast, ToastContainer } from "react-toastify"
import { ChakraProvider } from "@chakra-ui/react"
import Signup from "./pages/Signup"
import Project from "./pages/Project"
import ProjectFeild from "./pages/projectFeild"
import Login from "./pages/Login"
import ProfileCompany from "./pages/ProfileCompany"
import ProfileUser from "./pages/ProfileUser"
import HomeUser from "./pages/HomeUser"
import HomeCompany from "./pages/HomeCompany"

function App() {
  const [projects, setProjects] = useState([])
  const [companies, setCompanies] = useState([])
  const [users, setUsers] = useState([])
  const [profileCompany, setProfileCompany] = useState(null)
  const [profileUsers, setProfileUsers] = useState(null)
  const navigate = useNavigate()
  const aboutRef = useRef(null)

  //get all project
  const getProjects = async () => {
    const response = await axios.get("http://localhost:5000/api/projects")
    setProjects(response.data)
  }

  //get all  company
  const getCompanies = async () => {
    const response = await axios.get("http://localhost:5000/api/companies")
    setCompanies(response.data)
  }

  // get all user
  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/api/auth/users")
    setUsers(response.data)
  }

  // get profile user
  const getUserProfile = async () => {
    const response = await axios.get("http://localhost:5000/api/auth/profile", {
      headers: {
        Authorization: localStorage.tokenUser,
      },
    })
    setProfileUsers(response.data)
  }

  //edit profile user
  const editProfileUser = async (e,userId) => {
    e.preventDefault()
    const form = e.target
    try {
      const profileBody = {
        userName: form.elements.userName.value,
        avatar: form.elements.avatar.value,
      }
      await axios.put(`http://localhost:5000/api/auth/profile/${userId}`, profileBody, {
        headers: {
          Authorization: localStorage.tokenUser,
        },
      })
      getUserProfile()
    } catch (error) {
      console.log(error)
    }
  }

  //get profile company
  const getCompanyProfile = async () => {
    const response = await axios.get("http://localhost:5000/api/companies/profile", {
      headers: {
        Authorization: localStorage.tokenCompany,
      },
    })
    setProfileCompany(response.data)
  }

  //edit profile company
  const editProfileCompany = async (e, companyId) => {
    e.preventDefault()
    const form = e.target
    try {
      const profileBody = {
        aboutUs: form.elements.aboutUs.value,
        companyName:form.elements.companyName.value,
        logo: form.elements.logo.value,
      }
      await axios.put(`http://localhost:5000/api/companies/profile/${companyId}`, profileBody, {
        headers: {
          Authorization: localStorage.tokenCompany,
        },
      })
      getCompanyProfile()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProjects()
    if (localStorage.tokenCompany) {
      getCompanyProfile()
    }
    if (localStorage.tokenUser) {
      getUserProfile()
    }
    getCompanies()
    getUsers()
  }, [])

  //user signup
  const signupUser = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        userName: form.elements.userName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      }

      await axios.post("http://localhost:5000/api/auth/signup/user", userBody)
      console.log("signup success")
      navigate("/login")
    } catch (error) {
      if (error.response) console.log(error.response.data)
      else console.log(error)
    }
  }

  //company signup

  const signupCompany = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const companyBody = {
        companyName: form.elements.companyName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      }

      await axios.post("http://localhost:5000/api/auth/signup/company", companyBody)
      console.log("signup success")
      navigate("/login")
    } catch (error) {
      if (error.response) console.log(error.response.data)
      else console.log(error)
    }
  }

  //login user
  const loginuser = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }

      const response = await axios.post("http://localhost:5000/api/auth/login", userBody)

      const token = response.data
      localStorage.tokenUser = token

      getUserProfile()
      console.log("login success")

      navigate("/")
    } catch (error) {
      if (error.response) toast.error("you are not user")
      else console.log(error)
    }
  }

  //login company
  const loginCompany = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const companyBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }

      const response = await axios.post("http://localhost:5000/api/companies/login", companyBody)

      const token = response.data
      localStorage.tokenCompany = token

      getCompanyProfile()
      console.log("login success")

      navigate("/")
    } catch (error) {
      if (error.response) toast.error("you are not company")
      else console.log(error)
    }
  }
  // logout all (company & user )
  const logout = () => {
    localStorage.removeItem("tokenUser")
    localStorage.removeItem("tokenCompany")
    setProfileCompany(null)
    setProfileUsers(null)
    console.log("logout success")
  }
  // make offers
  const makeOffers = async projectId => {
    try {

      await axios.post(`http://localhost:5000/api/offers/${projectId}`,{}, {
        headers: {
          Authorization: localStorage.tokenCompany,
        },
      })
      toast.success("done")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  // add user project
  const addUserProject = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const projectBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        image: form.elements.image.value,
        video: form.elements.video.value,
        date: form.elements.date.value,
        demoLink: form.elements.demoLink.value,
        gitHubLink: form.elements.gitHubLink.value,
        field: form.elements.field.value,
      }
      await axios.post(`http://localhost:5000/api/projects/add-project`, projectBody, {
        headers: {
          Authorization: localStorage.tokenUser,
        },
      })
      getProjects()
      toast.success("add project success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  // edit user project

  const editUserProject = async (e, projectId) => {
    e.preventDefault()
    try {
      const form = e.target

      const projectBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        image: form.elements.image.value,
        video: form.elements.video.value,
        date: form.elements.date.value,
        demoLink: form.elements.demoLink.value,
        gitHubLink: form.elements.gitHubLink.value,
        field: form.elements.field.value,
        // type: form.elements.type.value,
      }
      await axios.put(`http://localhost:5000/api/projects/editUser/${projectId}`, projectBody, {
        headers: {
          Authorization: localStorage.tokenUser,
        },
      })
      getProjects()
      toast.success("edit success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  //add company project
  const addCompanyProject = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const projectBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        image: form.elements.image.value,
        video: form.elements.video.value,
        date: form.elements.date.value,
        demoLink: form.elements.demoLink.value,
        gitHubLink: form.elements.gitHubLink.value,
        field: form.elements.field.value,
      }
      await axios.post(`http://localhost:5000/api/projects/add-project-company`, projectBody, {
        headers: {
          Authorization: localStorage.tokenCompany,
        },
      })
      getProjects()
      toast.success("add project success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //edit company project

  const editCompanyProject = async (e, projectId) => {
    e.preventDefault()
    try {
      const form = e.target

      const projectBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        image: form.elements.image.value,
        video: form.elements.video.value,
        date: form.elements.date.value,
        demoLink: form.elements.demoLink.value,
        gitHubLink: form.elements.gitHubLink.value,
        field: form.elements.field.value,
        // type: form.elements.type.value,
      }
      await axios.put(`http://localhost:5000/api/projects/${projectId}`, projectBody, {
        headers: {
          Authorization: localStorage.tokenCompany,
        },
      })
      getProjects()
      toast.success("edit success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  
  


  const store = {
    projects,
    aboutRef,
    signupUser,
    signupCompany,
    loginuser,
    loginCompany,
    logout,
    profileCompany,
    profileUsers,
    companies,
    users,
    makeOffers,
    addUserProject,
    addCompanyProject,
    editCompanyProject,
    editUserProject,
    editProfileUser,
    editProfileCompany,
    
  }
  return (
    <ProjectContext.Provider value={store}>
      <ToastContainer />
      <ChakraProvider />
      <Routes>
        <Route path="/" element={localStorage.tokenCompany ? <HomeCompany /> : <HomeUser />} />
        <Route
          path="/profile"
          element={localStorage.tokenCompany ? <ProfileCompany /> : localStorage.tokenUser ? <ProfileUser /> : null}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/project" element={<Project />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feild/:feildName" element={<ProjectFeild />} />
      </Routes>
    </ProjectContext.Provider>
  )
}

export default App
