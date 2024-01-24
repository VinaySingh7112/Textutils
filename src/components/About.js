
import React from 'react';
function About(props) {
    // const [mystyle,setMyStyle] =useState({
    //     color: 'white',
    //     backgroundColor: 'black'
    // })
   
    let mystyle={
        color:props.mode ==='dark'?'white':'#042743',
        backgroundColor:props.mode ==='dark'?'rgb(36 74 104)':'white'
    }
    return (
        <div className='container p-4 rounded ' style={{color:props.mode ==='dark'?'white':'#042743'}}>
            <h2  style={{color:props.mode ==='dark'?'white':'#042743'}}>About Us</h2>
            <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            HTML and CSS
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            <h4>HTML (Hypertext Markup Language):</h4> 
                              HTML is the standard markup language used to create the structure and content of web pages. It consists of a set of elements (tags) that are used to define different types of content, such as headings, paragraphs, lists, links, images, forms, and more. HTML elements are organized in a hierarchical structure, forming the Document Object Model (DOM) that browsers use to render web pages.
                            <h4>CSS (Cascading Style Sheets):</h4>
                              CSS is a stylesheet language used to describe the presentation and styling of HTML elements on a web page. It enables developers to control aspects like colors, fonts, spacing, layout, and more. By separating the content (HTML) from the presentation (CSS), web developers can create consistent and visually appealing designs across their websites.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            JavaScript
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                        JavaScript is a high-level, interpreted programming language primarily used for creating dynamic and interactive content on websites. It was created by Brendan Eich while he was working at Netscape Communications and was first introduced in 1995 as a way to add client-side scripting capabilities to web browsers. Since then, JavaScript has become one of the most widely used programming languages for web development.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        React Js
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                        React (sometimes stylized as React.js or ReactJS) is an open-source JavaScript library for building user interfaces (UIs). It was developed by Facebook and later maintained by both Facebook and a community of individual developers and companies. React was designed to simplify the process of creating interactive and dynamic UIs for web applications.
                        
                        </div>
                    </div>
                </div>
              
            </div>
           
        </div>
    );
}

export default About;
