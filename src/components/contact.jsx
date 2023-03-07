import React from 'react';
import GreenTeam from './greenteam';


function Contact(){
    return(
        <>
        <h2>Feel free to Contact Us</h2>
        <h5>We welcome your suggestions</h5>
        <div className="contact-container">
            <form method='post'>
                <div className="container">
                    <div className="row">
                        <div className='col'><label>Name : </label> </div>
                        <div className='col'><input type="text" name="name"></input></div>
                    </div>
                    <div className="row">
                        <div className='col'><label>Email : </label> </div>
                        <div className='col'><input type="email" name="email"></input></div>
                    </div>
                    <div className="row">
                        <div className='col'><textarea name="suggestions" placeholder="Write your suggestions here"></textarea></div>
                    </div>
                    <div className="row">
                        <button type="button" class="btn btn-success">Success</button>
                    </div>
                </div>
                
                
            </form>
        </div>

        <hr style={{borderTop:"6px dotted grey" , width:"30vw", margin:"0 auto 10px", backgroundColor:"transparent"}}/>

        <h4>Reach the Developers directly</h4>
        <GreenTeam />
        </>
    );
}

export default Contact;