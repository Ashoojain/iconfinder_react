import React , {useState, useEffect}from 'react'
import {useParams} from 'react-router-dom';
import logo from '../assests/logo.jpeg'
import IconCard from './IconCard';

const options = {
    method: 'GET',
    headers : {
        Accept : 'application/json',
        Authorization : 'Bearer xbYBAk9W9KqE2lMbR47EB8zQ9u9PIktwOzLGEpcr6DsFf43q3YsWVEXpkvaYNuIh'
    }
}

function SearchPage() {

    const {iconName} =useParams();
    const  [iconresult, seticonresult] =useState();
    const [styles , setstyles] =useState();
    const [pricefilter , setpricefilter] =useState('All');
    const [stylefilter , setstylefilter] =useState('All');


    
    useEffect(()=>{
   
        fetch(`http://cors-anywhere.herokuapp.com/https://api.iconfinder.com/v4/icons/search?query=${iconName}&count=10`, options)
        .then(response => response.json())
        // .then(response => {return response}).then(
        //     function (response) {
        //         seticonresult(response);
        //     }
        // )
        .then(response=>seticonresult(response))
        .catch(err => console.error(err));


        fetch('http://cors-anywhere.herokuapp.com/https://api.iconfinder.com/v4/styles?count=10', options)
       .then(response => response.json())
    //    .then(response =>{return response}).then(
    //     function (response) {
    //         setstyles(response.styles);
    //     }
    //    )
       .then(response=>setstyles(response.styles))
        .catch(err => console.error(err));
    },[])
  return (
    <div>
      <nav className='navbar navbar-expand=lg navbar-light bg-white'>
         <a href='#' className='navbar-brand'>
            <img src={logo} alt='logo' />
         </a>

         <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <form className='form-inline my-2 my-lg-0'>
                <input type="text" className='form-control mr-sm-2' placeholder='Search' aria-label='search' />
                <button className='btn'><i className='bi bi-search'></i></button>
            </form>
            </div>

      </nav>
      { iconresult ? (
        <div> 
            <div className='sidebar'>
                <p>Filters</p>
                <div className='pricefilter'></div>
                <label>
                    <input type='radio' name='' id='' value='free' checked={pricefilter =='free' ? true :false}
                    onChange={e=>setpricefilter(e.target.value)} />
                    Free
                </label>
                <label>
                    <input type='radio' name='' id='' value='premium' checked={pricefilter =='premium' ? true :false}
                    onChange={e=>setpricefilter(e.target.value)} />
                    Premium
                </label>
                <label>
                    <input type='radio' name='' id='' value='All' checked={pricefilter =='All' ? true :false}
                    onChange={e=>setstylefilter(e.target.value)} />
                    All
                </label>

                {
                    // styles ? styles.map((style,index)=>{
                        styles ? styles.map(style=> <label><input type='radio' name='' id='' value={style.identifier} checked={stylefilter == style.identifier ? true :false}
                        onChange={e=>setstylefilter(e.target.value)} />
                       {style.name}
                    </label>
                    ) : null
                }
                </div>

                <div className='content'> 
                  <h2> {iconName} Icons</h2>
               
                  <div className='showIcons'>
                    {
                        iconresult.icons.map((icon,index)=>{
                            
                            if(pricefilter=='All' && stylefilter =='All') 
                        return <IconCard key={index} url={icon.raster_sizes[1].formats[0].preview_url} tags={icon.tags} raster={icon.raster_sizes} premium={icon.is_premium} />                      
                        })
                    }
                    </div>
                </div>
        </div>
      ) : (
        <div>
          <h1 className='text-dark'>Loading...</h1>     
        </div>
      )
    }
    </div>
  )
}

export default SearchPage
