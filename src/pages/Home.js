import "../css/Home.css"
import img from "../assets/pugal.JPG"
function Home() {
  return(
    <>
     <div className="home-content">
      <p>Hello! I'am <br/> 
      <b>PUGALENDHI N </b><br/>
      <span className="m">M</span> <span className="e">E</span> <span className="r">R</span> <span className="n">N</span>   <br/>
      Full stack Web developer</p> <br/>
       <div >
       <img src={img}  alt="img" className="image-me"/>
    </div>
    </div> 

   
    </>
   
  );
}

export default Home;