import React, { useEffect, useState } from 'react';
import loading from'../../../logos/loading.gif'
import ApartmentCardChild from '../ApartmentCardChild/ApartmentCardChild';
const ApartmentCard = () => {
    const[apartments,setApartments]=useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/allapartment')
        .then(response =>response.json())
        .then(data =>{
            if(data){
                setApartments(data)
                console.log(data)
            }
        })
    },[])
    return (
        <div style={{backgroundColor:' #E5E5E5'}} className="pt-3">
            <div className="flex-column mb-3 text-center">
                <small>House Rent</small>
                <h2>Discover the latest Rent</h2>
                <h2>available today</h2>
            </div>
            <section className="row w-75 m-auto ">
                {
                    apartments.length===0?<img src={loading} alt=""/>:apartments.map(apartment=><ApartmentCardChild apartment={apartment} key={apartment._id}></ApartmentCardChild>)
                }
            </section>
        </div>
    );
};

export default ApartmentCard;