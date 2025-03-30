import React, {useState}  from 'react'

export default function About() {
    const [myStyle, setMyStyle] = useState({
        darkFlag: false,
        color: 'black',
        backgroundColor: 'white',
        buttonText: 'Enable dark mode'
    });

    const changeModeColor = () =>{

        if(myStyle.darkFlag){
            setMyStyle({
                darkFlag: false,
                color: 'black',
                backgroundColor: 'white',
                buttonText: 'Enable dark mode'
            })
        }else{
            setMyStyle({
                darkFlag: true,
                color: 'white',
                backgroundColor: 'black',
                buttonText: 'Disable dark mode'
            })
        }
    
    }



  return (
    <div className="container" style={myStyle}>
        <h2 className="my-3">About Us</h2>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyse your text </strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body"  style={myStyle} >
                    TextUtils gives a way to analyse your text quickly & efficiently, be it word count or character count.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed"  style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body"  style={myStyle} >
                    TextUtils is a free character counter tool that provides instant character count & word count statistics.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser compatibility </strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body"  style={myStyle} >
                    Works fine with most of the web browsers like chrome, safari, firefox, opera.
                </div>
                </div>
            </div>
        </div>
        {/* <div className="container my-3" >
            <button type='button' className='btn btn-primary' onClick={changeModeColor}>{myStyle.buttonText}</button>
        </div> */}
    </div>
  )
}
