import '../globals.css'
import ToolBar from '../components/Toolbar'

export default function message() {
    
    return (

<main>

        <div className='header'>
        <img className='logo' src='/FullLogo_NoBuffer.png' width="10" height="20"></img>
          <h1 className='header-1'>Chef Jeff's Recipes</h1>
          </div>
<div className='toolbar'>
<ToolBar/>
</div>
<div className='biography'>
Chef Jeff's message
    </div>
<div className= 'biography'>
Some of my favorite restaurants in Chinatown NYC were Jolly King, Jing Fong, Joe's Shanghai, and Hop Shing. My natural interest in other Asian cuisines in Jackson Heights / Flushing as well as the freshness and colors of sushi was a natural progression.
</div>
<div className= 'biography'>
Growing up in a multi-ethnic Italian-Irish community, while passing by Latino/Mexican neighborhoods as I took the train home from my high school while also spending time living in Mexico, expanded my culinary palette. 
</div>

<div className='biography'>
I experienced French cuisine with my culinary degree when I explored classical French culinary technique incorporated into my Asian heritage. I've worked in restaurants in Manhattan owned by Jean Georges, and Laurent Tourandel for three years after graduation. I feel like food is a reflection on my life and experiences, and the discovery of my soul in this melting pot of New York City.
</div>
</main>
    );
}