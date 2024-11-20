'use client'
import ToolBar from './components/Toolbar'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';
import './globals.css'

const handleDragStart = (e) => e.preventDefault();

const items = [
	<img src="/entree1.jpg" onDragStart={handleDragStart} role="presentation" />,
	<img src="/entree2.jpg" onDragStart={handleDragStart} role="presentation" />,
  <img src="/entree3.jpg" onDragStart={handleDragStart} role='presentation' />,
  <img src="/entree4.jpg" onDragStart={handleDragStart} role='presentation' />,
  <img src="/entree5.jpg" onDragStart={handleDragStart} role='presentation' />,
  <img src="/entree6.jpg" onDragStart={handleDragStart} role='presentation' />,
];

const responsive = {
  0: { items: 1 },
  568: { items:2 },
  1024: { items: 3 },
};


export default function Home() {
  return (

<main>
<head>
<link rel="icon" href="/FullLogo_NoBuffer.ico" type="image/png" sizes="32x32" /></head>
        <div className='header'>
        <img className='logo' src='/FullLogo_NoBuffer.png' width="10" height="20"></img>
          <h1>Chef Jeff's Recipes</h1>
          </div>


<div><ToolBar/></div>
<div><AliceCarousel mouseTracking items={items} autoPlay={true} autoPlayInterval={4000} infinite={true} disableButtonsControls={true} disableDotsControls ={true}
responsive={responsive} /></div>





      </main>

  );
}
