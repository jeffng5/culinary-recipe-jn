import Link from 'next/link';


export default function Toolbar() {

    return (
    <div style = {{ width : '100%', paddingTop: '40px'}}>

        <h2 style= {{
        
            borderTop: '1.5px solid white',
            textAlign: 'left',
        }}></h2>

<p style= {{color: 'white', fontSize: '24px', fontFamily: 'League Spartan', paddingTop: '8px', paddingBottom: '8px'}}><h4><Link href='/'>home</Link></h4> <h4><Link href='/recipes'>recipes</Link></h4> <h4><Link href="/message">biography</Link></h4> <h4><Link href='/wine'>wine</Link></h4> <h4><Link href='/contact'>contact</Link></h4> </p>

<h2 style= {{
            borderTop: '1.5px solid white',
            textAlign: 'left', 
}}></h2>

    </div>
    )
};
