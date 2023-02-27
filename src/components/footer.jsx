import React from 'react';
import './footer.css'

function Footer() {

    return (


        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="column1">
                        <h6>About Us</h6>
                        <p className="text-justify">Leafy Leaks LLP<br />LPU Phagwara</p>
                    </div>

                    <div className="column2">
                        <h6>Categories</h6>

                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>

                    </div>
                </div>
                <hr />
            </div>
            <div className="container">
            </div>
        </footer>

        // <div className='mainFoot'>

        //     <hr />
        //     <div className='foot1'>
        //         <h4>About Us</h4>
        //     </div>
        //     <div className='foot2'>
        //         <h4>Important Links</h4>
        //     </div>
        //     <div className='foot2'>
        //         <h4>Green Team</h4>
        //     </div>

        // </div>
    );
}

export default Footer;