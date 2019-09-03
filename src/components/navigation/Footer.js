import React from 'react';

const Footer = () => {
  return (
    // <footer className="page-footer grey darken-3">
    //     <div className="container">
    //         <div className="row">
    //                 <div>
    //                 <p className="grey-text text-lighten-4 left">All data is pulled from the Riot Games API. A valid internet connection is required.</p>
    //                 </div>
    //         </div>
    //     </div>
    //     <div className="footer-copyright grey darken-4">
    //         <div className="container">
    //         <p className="left">Copyright © 2019 Harry Nguon</p>
    //         <p className="right">All data is pulled from the Riot Games API. A valid internet connection is required.</p>
    //         </div>
    //     </div>
    // </footer>


    <footer className="grey">
        <div className="container section">
            <div className="center grey-text text-lighten-4">
                All data is pulled from the Riot Games API. A valid internet connection is required.
                
            </div>
        </div>
        <div className="section grey darken-1 no-padding">
        <div className="center grey-text text-lighten-2">Copyright © 2019 Harry Nguon</div>
        </div>
        
    </footer>


    // <footer className="page-footer grey no-padding">
    //     {/** Footer requires two components in the framework, so colour both the same colour as only using one */}
    //     <div className="footer-copyright grey">
    //         <div className="container">
    //                 <div className="col l6">
    //                     <p className="left">All data is pulled from the Riot Games API. A valid internet connection is required.</p>
    //                 </div>
    //                 <div className="col l6">
    //                     <p className="right">Copyright © 2019 Harry Nguon</p>
    //                 </div> 
    //         </div>
    //     </div>
    // </footer>
  );
}

export default Footer;
