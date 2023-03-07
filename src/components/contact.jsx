import React from 'react';

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
        </>
    );
}

export default Contact;