import { useEffect, useState } from "react";
import Container from "../components/Shared/Container";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ShowCategory from "./ShowCategory";

const Home = () => {

  const [categories,setCategories]=useState([])
  const [active, setActive]= useState('Electric')
  useEffect(()=>{
    fetch(`https://toy-marketplace-server-ashen.vercel.app/${active}`)
    .then(res=>res.json())
    .then(data=>setCategories(data))
  },[active]);




  const handleElectricCars=(event)=>{
    event.preventDefault();
    setActive('Electric');
  }
  const handleRacingCars=(event)=>{
    event.preventDefault();
    setActive('Racing');
  }
  const handleJeep=(event)=>{
    event.preventDefault();
    setActive('Jeep');
  }


    return (
      <Container className="mb-12"> 
      <div className="flex flex-col sm:flex-row">
      <div className="carousel w-full sm:w-4/6 h-auto sm:h-3/6 flex">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://m.media-amazon.com/images/I/71bfTkP5e5L.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://m.media-amazon.com/images/I/71oyUfY8jCL._SL1500_.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://media.wired.com/photos/593268ce9be5e55af6c24a6a/master/w_1600%2Cc_limit/broon_F8_red.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://images.thdstatic.com/productImages/b3b51cf2-2591-47ed-9909-badee8be4e52/svn/blacks-tobbi-kid-cars-th17t0638-64_600.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="font-bold text-lg text-center justify-self-center py-8 sm:py-16">
          Welcome To Our Kids's Special Car Zone.<br></br> Here you can find the best products for your kids.

          <br />
          <img className="h-4/6 text-center pl-8" src="https://i.pinimg.com/originals/e7/20/5b/e7205b90eaf734abfd77d67a348c4c09.jpg" alt="" />
      </div>
      </div>

      <h3 className="font-bold text-xl mt-12 mb-8">Shop by Category</h3>
      <Tabs>
        <TabList>
          <Tab onClick={handleElectricCars}>Electric Toy Cars</Tab>
          <Tab onClick={handleRacingCars}>Racing Cars</Tab>
          <Tab onClick={handleJeep}>Jeep Cars</Tab>
        </TabList>
        <TabPanel>
        <div className='grid md:grid-cols-3'>
        {
          categories.slice(0,3).map(category => <ShowCategory
          key={category._id}
          category={category}
          ></ShowCategory>  )
        }
      </div>

        </TabPanel>
        <TabPanel>
        <div className='grid md:grid-cols-3'>
        {
          categories.slice(0,3).map(category => <ShowCategory
          key={category._id}
          category={category}
          ></ShowCategory>  )
        }
      </div>

        </TabPanel>
        <TabPanel>
        <div className='grid md:grid-cols-3'>
        {
          categories.slice(0,3).map(category => <ShowCategory
          key={category._id}
          category={category}
          ></ShowCategory>  )
        }
      </div>

        </TabPanel>
      </Tabs>
    </Container>
    );
  };
  
  export default Home;