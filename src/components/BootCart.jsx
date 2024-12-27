import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BootCart = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img 
              src="https://via.placeholder.com/150" 
              className="card-img-top" 
              alt="Card Image"
            />
            <div className="card-body">
              <h5 className="card-title">Card Title</h5>
              <p className="card-text">
                This is a quick example of a Bootstrap card with some basic text content.
              </p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BootCart;
