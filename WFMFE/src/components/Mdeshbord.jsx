import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AddRentCar from './AddRentCar';
import AddSaleCar from './AddSaleCar';
import BikeDisplaylist from './BikeDisplaylist';
import CarDisplaylist from './CarDisplaylist';
import './mdashbord.css';
import Mnav from './Mnav';
import Sidebar from './Sidebar';

const Mdeshbord = () => {
    let[bikes, setBikes]= useState();
    let[cars, setCars]= useState();
    const [merchantName,setMerchantName]=useState("");
    let {data}=useParams();
    // console.log(name);
    console.log(data);
    // console.log(name);
    const [addCar, setAddCar] = useState(false);
    const [addSaleCar, setAddSaleCar] = useState(false);
    const [totalCars, setTotalCars] = useState(false);
    const [rentCars, setRentCars] = useState(false);
    const [saleCars, setSaleCars] = useState(false);

    let show=()=>{
        setAddCar(true)

        setAddSaleCar(false)
        setTotalCars(false)
        setRentCars(false)
        setSaleCars(false)
    }
    let show2=()=>{
        setAddSaleCar(true)
        
        setAddCar(false)
        setTotalCars(false)
        setRentCars(false)
        setSaleCars(false)


    }
    let show3=()=>{
        setTotalCars(true)

        setAddSaleCar(false)
        setAddCar(false)
        setRentCars(false)
        setSaleCars(false)

    }
    let show4=()=>{
        setRentCars(true)

        setTotalCars(false)
        setAddSaleCar(false)
        setAddCar(false)
        setSaleCars(false)

    }
    let show5=()=>{
        setSaleCars(true)

        setRentCars(false)
        setTotalCars(false)
        setAddSaleCar(false)
        setAddCar(false)
    }
    useEffect(()=>{
        let merchantName1=localStorage.getItem("name");
        setMerchantName(merchantName1);
    },[])


 useEffect( ()=>{

   axios.get("http://localhost:9091/bike/getall", {  headers:{merchant_ids:data} })
    .then(  (response)=>{ 
         console.log(response.data);
        setBikes(response.data)
        } )

        axios.get("http://localhost:9091/car/getall", {  headers:{merchant_ids:data} })
        .then(  (response)=>{ 
            console.log(response.data);
            setCars(response.data)
            } )
 }, [] )

    
    return (
        <>    
        <Mnav/>
        <div className='Mdashbord '>
        
        <div className='sbar'>
            <Sidebar merchantName={merchantName}/>
        </div>
           <div className="mainboard">
            <div className="btnbar">
                <div className="btn btn1" onClick={show}> Add Bike</div>
                <div className="btn btn2" onClick={show2}>Add Car</div>
                <div className="btn btn3" onClick={show3}>Tolal Cars</div>
                {/* <div className="btn btn4" onClick={show4}>Cars for rent </div>
                <div className="btn btn5" onClick={show5}>Cars for sale</div> */}
            </div>
            <div className="showcase">
                { addCar===false && addSaleCar===false && 
                <section className='parent'>
                    <section className='child' >
                        <div className='rentvehical'>
                          { bikes && <BikeDisplaylist bikes={bikes} title="Bikes for sell and rent"></BikeDisplaylist>}
                          
                        </div>
                    </section>
                    <section className='child' >
                        <div className='soldvehical'>
                           { cars &&  <CarDisplaylist  cars={cars} title="Cars for sell and rent" ></CarDisplaylist> }
                        </div>
                    </section>
                </section>}
                {addCar  && <AddRentCar/>}
                {addSaleCar  && <AddSaleCar/>}
                {totalCars  && <h1>All Cars</h1>}
                {rentCars  && <h1>Cars For Rent</h1>}
                {saleCars  && <h1>Cars For Sale</h1>}
            </div>
           </div>
        </div>
        </>

    );
}

export default Mdeshbord;
