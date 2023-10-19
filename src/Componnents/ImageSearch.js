import React, { useState , useEffect} from 'react'
import axios from "axios";
import './ImageSearch.css'
import Banner from '../Assets/imagexelsBanner.jpg'

const ImageSearch = ({setImages}) => {
    const [searchTerm,setSearchTerm]=useState('');
   

    // function implementSearch(){
    //     axios.get("",{
    //         params:{
    //             query:searchTerm
    //         },
    //         headers:{
    //             Authorization:""
    //         }
    //     })
    //     .then(response => console.log("Success",response.data.results))
    //     .catch(err =>console.log(err))

    // }

    useEffect(()=>{
        implementSearch()
    },[])
    //async and await
     async function implementSearch(){
        try{
        const response =await axios.get("https://api.unsplash.com/search/photos",{
            params:{
                query:searchTerm || "random",
                per_page:100,
            },
            headers:{
                Authorization:"Client-ID ysmiKdAp1kSvV86yR2-0sKpQ0KioFaii1YDesSRFlZI"
            }
        })
        setImages(response.data.results);
    }
    catch(err){
        console.log(err);
    }

    }
  return (
    <div>
        <img src={Banner} alt='' className='img'/>
        <input type='text' placeholder='Enter something...'
        onChange={e => setSearchTerm(e.target.value)}
        />
        <button onClick={implementSearch}>Search</button>
    </div>
  )
}

export default ImageSearch;