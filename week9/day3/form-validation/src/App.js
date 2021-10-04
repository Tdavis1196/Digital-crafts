import { useState } from "react"
import Signup from "./components/Signup"
import DB from "./components/DB"

function App() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [DOB, setDOB] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [zipcode, setZipCode] = useState("")
  const [username, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [userDetails, setUserDataList] = useState([])



  const SubmitButton = () => {
    setUserDataList([...userDetails,firstName + " " + lastName, DOB, address, city + ", " + state + " " + zipcode, username, email])
  } 
  
  
  
  return (
    <div className="App">
      <Signup SubmitButton= {SubmitButton} firstName = {setFirstName} lastName ={setLastName}
       DOB ={setDOB} address ={setAddress} city={setCity}  state={setState} zipcode={setZipCode}
        username={setUserName} email ={setEmail}/>
      <DB  list={userDetails}/>
      
    </div>
  );
}

export default App;