import React , {useState ,useEffect}from 'react'
import logo from '../assests/logo.jpeg'
import {useNavigate} from 'react-router-dom'
const options = {
    method: 'get',
    headers : {
        Accept : 'application/json',
        Authorization : 'Bearer xbYBAk9W9KqE2lMbR47EB8zQ9u9PIktwOzLGEpcr6DsFf43q3YsWVEXpkvaYNuIh'
    }
}

function Home() {

    const [searchIcon ,setsearchIcon] =useState('');

    const navigate =useNavigate();

    const searchclick=()=>{
        navigate(`/searchpage/${searchIcon}`);
    }
  return (
    <div>
        <div className='vh-100 d-flex justify-content-center align-items-center text-center'>
       <div>
        <img src={logo} alt="logo" />
            <div className='input-group input-group-lg bg-light'>
             <input type="text" className="form-control px-5 bg-light" placeholder='Search for icons'
             onChange={(e)=>{setsearchIcon(e.target.value)}} />
             <button className='btn btn-lg btin-outline-light text-dark' onClick={searchclick}><i className='bi bi-search'></i></button>  
            </div>
         <div className='m-3'>
            <p className='text-secondary'> Popular searcges : Instagram , facebook , Arrow , Phone</p>
            <h5> Search through 5,749,082 icons and illustration</h5>
         </div>
        </div>
        </div>
    </div>
  )
}

export default Home
