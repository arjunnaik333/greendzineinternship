import logo from "./logo.svg";
import "./App.css";
import React, { useState,useEffect } from "react";

function App() {

  const [pictures,setPictures]=useState([])
  const [search,setSearch]=useState("")
  
  const url = "https://reqres.in/api/users?page=2";

  const getData = async () => {
    const allData = await fetch("https://reqres.in/api/users?page=2", {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resp = await allData.json();
setPictures(resp.data)
    console.log(resp);
    
  };
console.log(pictures)
  useEffect(()=>{
  getData()
},[search])

 const handleSearch=()=>{
  console.log(
  pictures.filter((i)=>i.first_name===search)
  )
  setPictures( pictures.filter((i)=>i.first_name.toLowerCase()===search.toLowerCase()))
 }

  return (
    <div className="App">
      <div className="search_bar">
        <input
          className="input_data"
          onChange={(e)=>{setSearch(e.target.value)}}
        />
        <button 
        onClick={handleSearch}>Search</button>
      </div>
      <div>
       {pictures.map((i)=>(
          <div className="emp_list">
            <img id="7" src={i.avatar} />
            <h1>{i.first_name}</h1>
          </div>
       
  
       ))
       }
           </div>
    </div>
  );
}

export default App;
