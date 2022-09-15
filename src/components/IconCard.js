import Modal from 'react-modal'
import logo from '../assests/logo.jpeg'
import React from 'react'
import { Link } from 'react-router-dom';

function IconCard(props) {

    const customstyles = {
        content : {
            top: '50%',
            left:'45%',
            right:'auto',
            bottom: 'auto',
            paddingleft:'150px',
            paddingRight:'150px',
            transform : 'translate(-50%,-50%)',
            background :'#252424',
            color: '#fff'
        }
    }
let subtitle;
    const [modalIsopen , setisopen] =React.useState(false);

    function openmodal(){
        setisopen(false)
subtitle.style.color='#f00';
    }

    function closemodal(){
        setisopen(false)

    }

    console.log(props);
  return (
    <div>
     {
        props.url ? (
            <div>
            <ul  type='none'>
            <li><img src={props.url} alt='logo' /><span>{props.tags[0]}</span><Link to='/'>Back</Link> </li>
            </ul>
            </div>

            
        ) : null
     }
     </div>
  )
}

export default IconCard
