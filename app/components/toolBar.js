import Link from 'next/link';
import '../globals.css'


export default function Toolbar() {

    return (
    <div style = {{ width : '100%', paddingTop: '20px'}}>

        <h2 style= {{
        
            borderTop: '1.5px solid white',
            textAlign: 'left',
        }}></h2>

<p style= {{color: 'white', fontSize: '24px', fontFamily: 'League Spartan', paddingTop: '8px', paddingBottom: '8px'}}><span className='link'><Link href='/'>home</Link></span> <span className='link'><Link href='/favorites'>favorites</Link></span> <span className='link'><Link href="/message">biography</Link></span> <span className='link'><Link href='/wine'>wine</Link></span> <span className='link'><Link href='/contact'>contact</Link></span> </p>

<h2 style= {{
            borderTop: '1.5px solid white',
            textAlign: 'left', 
}}></h2>

    </div>
    )
};
