// import axios from "axios";
import axios from "axios";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Bikedetails from "./Bikedetails";
import Updatemodel from "./Updatemodel";

const BikeDisplaylist = ({bikes, title}) => {

    console.log(bikes);
    console.log(title);

    let history=useHistory()
//    let[rem, setRem]=useState(false)

//    if(rem===true)
//    {
    // let handleremove=(id)=>
    // {
    //     console.log("remove function excuted");
    //     alert("remove function excuted")
        // axios.delete("http://localhost:9091/bike/removebyid/"+id)
        // .then( (res)=>{
        //     console.log(res);
        //     if(res.status===200)
        //     {
        //         alert("deleted successfully")
        //         history.goBack();
        //     }
        //     else
        //     {
        //         alert("delete Un-successful")
        //     }
        // } )
    // }
//    }

let handleDeleteBike=(id)=>
{
    alert("deleting operation....")
    console.log(id);
    axios.delete("http://localhost:9091/bike/removebyid/"+id)
    .then((x)=>{  console.log(x);})
}


 
    return ( 
        <>   
            <div className="bltitle"><h1>{title}</h1></div>
           <div className="bikelistContainer">
            {
                bikes.map(  (bike)=>{
                    return(
                        <div className="bike" key={bike.bike_id}>
                            <Link to={`/bikedetails${bike.bike_id}`}>
                                <img src={"data:image/jpeg;base64,"+bike.image.imagedata} alt="" />  
                                <div className="blinfo">
                                    <h3>{bike.companyname} {bike.model}</h3>
                                    <h4><span>Price: Rs. </span> {bike.price}</h4>
                                    <h4><span>Added For: </span>  {bike.sell_rent}</h4>
                                </div>   
                            </Link>                      
                            <div className="bbtn">
                           
                           
                            <button className="bbtn1 cardbtn btn btn-outline-primary"  onClick={()=>{handleDeleteBike(bike.bike_id)}}  >Remove</button>
                            {/* <button className="bbtn1 cardbtn btn btn-outline-primary"  onClick={()=>{<Updatemodel/>}}  >Update</button> */}
                            <Link className="cardbtn btn btn-outline-primary" to={`/updatebike${bike.bike_id}`} ><span className="bbtn1">Update</span></Link>
                            
                            </div>
                        </div>
                    )
                } )
            }
           </div>
        </>
        
     );
}
 
export default BikeDisplaylist;