import "./App.css";
import Hotel from "./Hotel";
import HotelData from "./HotelData";




function App() {
  return (
    <>
      <div className="container">
        
        <h1 className="heading">Hotel Rooms</h1>
        {HotelData.map(data=>{
          return(
            <Hotel
            img={data.img}
            name={data.name}
            desc ={data.desc}
            />
          )
          
        })}

        
      </div>
    </>
  );
}

export default App;
