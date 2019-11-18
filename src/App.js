import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Intro from "./components/Intro/Intro";
import Sponsor from "./components/sponsors/Sponsor";
import Stat from "./views/Stat";
import Ville from "./views/Ville";
import ServicePlan from "./views/ServicePlan";


const tab = [
  { menu: "About us" },
  { menu: "Career" },
  {
    menu: "Departments",
    submenu: [
      "Marketing",
      "Customer sucess & sales",
      "It, Product,Design & UK",
      "Finance & Administration",
      "HR & more"
    ]
  }
];
const statArr = [
  {
    image: "https://www.docplanner.com/img/flag.png",
    title: "Leader in 10 countries",
    texte:
      "Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile"
  },
  {
    image: "https://www.docplanner.com/img/visits.png",
    title: "1.5 million appointments",
    texte: "booked last month"
  },
  {
    image: "https://www.docplanner.com/img/patients.png",
    title: "30 million unique patients",
    texte: "visit us every month"
  },
  {
    image: "https://www.docplanner.com/img/doctors.png",
    title: "2 million active doctors",
    texte: "trust in our solutions",
  }
];
const ville = [
  {image: "https://www.docplanner.com/images/warsaw.png", title: "Warsaw" },
  {image: "https://www.docplanner.com/images/barcelona.png",title: "Barcelona"},
  {image:"https://www.docplanner.com/images/istanbul.png", title:"Istanbul"},
  {image:"https://www.docplanner.com/images/rome.png", title:"Rome"},
  {image:"https://www.docplanner.com/images/mexico-city.png", title:"mexico-city"},
  {image:"https://www.docplanner.com/images/curitiba.png", title:"Curitiba"},
];
const info = [
  {
    title: "For patients",
    texte: "Find a doctor, book a visit and solve any health-related doubt",
    image: "https://www.docplanner.com/img/screen-marketplace@2x.png",
    country:["CHOOSE COUNTRY","ARGENTINA", "AUSTRALIA", "BRAZIL", "CHILE", "COLOMBIA", "CZECH", "FRANCE", "ITALY", "PERU POLAND", "ORTUGAL", "SPAIN", "TURKEY", "UK"]
    
}, 
{ title: "For doctors",
texte: "Save time managing visits and cut no-shows by half",
image: "https://www.docplanner.com/img/screen-saas@2x.png",
country:null
  }
];

function App() {
  return (
    <div className="App">
      <Header arr={tab} />
      <Intro />
      <ServicePlan info={info}/>
      <Sponsor />
      <Stat  statArr={ statArr} />
      <Ville ville={ville} />
      <Footer />
    </div>
  );
}

export default App;
