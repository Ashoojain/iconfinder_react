import React , {useState , useEffect }from 'react'


const options = {
    method: 'get',
    headers : {
        Accept : 'application/json',
        Authorization : 'Bearer xbYBAk9W9KqE2lMbR47EB8zQ9u9PIktwOzLGEpcr6DsFf43q3YsWVEXpkvaYNuIh'
    }
}
function Header() {
 const [styles , setstyles] = useState([]);
 const [category , setcategory] = useState([]);
   
    useEffect(()=>{
   
        fetch('http://cors-anywhere.herokuapp.com/https://api.iconfinder.com/v4/categories?count=10', options)
        .then(response => response.json())
        .then(response => {return response}).then(
            function (response) {
                setcategory(response.categories);
            }
        )
        .catch(err => console.error(err));


        fetch('http://cors-anywhere.herokuapp.com/https://api.iconfinder.com/v4/styles?count=10', options)
       .then(response => response.json())
       .then(response =>{return response}).then(
        function (response) {
            setstyles(response.styles);
        }
       )
        .catch(err => console.error(err));
    },[])
  return (
    <nav className="navbar navbar-expand-lg bg-white">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#">Navbar</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Icon Sets</a>
        </li>
       
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Categories
          </a>
          <ul className="dropdown-menu dropdown-menu-dark">

            {
                category.map(category=>
                    <li key={category.identifier}><a className="dropdown-item" href="#">{category.name}</a></li>
                )
            }
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Styles
          </a>
          <ul className="dropdown-menu dropdown-menu-dark">
                 {
                    styles.map(style=><li key={style.identifier}><a className="dropdown-item" href="#">{style.name}</a></li>)
                 }
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header
