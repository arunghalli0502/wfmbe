import { Link } from "react-router-dom";

const CarDisplaylist = ({cars, title}) => {

    console.log(cars);
    return (  
        <>
              
            <div className="bltitle"><h1>{title}</h1></div>
           <div className="bikelistContainer">
            {
                cars.map(  (car)=>{
                    return(
                        <div className="bike" key={car.car_id}>
                                <Link to={`/cardetails${car.car_id}`}>
                                <img src={"data:image/jpeg;base64,"+car.image.imagedata} alt="" />  
                                <div className="blinfo">
                                    <h3>{car.company} {car.model}</h3>
                                    <h4>Rs. {car.price}</h4>
                                    <h4>For:  {car.sell_rent}</h4>
                                </div> 
                                </Link>                        
                            <div className="bbtn">
                            <button className="bbtn1 btn btn-outline-primary">Remove</button>
                            <Link className="cardbtn btn btn-outline-primary" to={`/updatecar${car.car_id}`}  car={car}><span className="bbtn1">Update</span></Link>
                            </div>
                        </div>
                    )
                } )
            }
           </div>
        </>

    );
}
 
export default CarDisplaylist;