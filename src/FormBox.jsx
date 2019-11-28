import React from 'react';

const FormBox = () => {
  return (
      <div className="FormBox">
        <section className="form-box-one">

        </section>
        {/* <picture className="form-box-image">
          <img className="form-image" src='/asset1.jpg' alt=""/>
        </picture> */}
        <section className="form-box-second">
          
          <form className="form-box">
            <img src="./asset3.png"></img>
            <h1 className="login-title">Register</h1>
            <div className="box-input">
              <h3 className="label-floating">Full Name</h3>
              <input className="input-login" id="full-name" type="text"/>
            </div>
            <div className="box-input">
              <h3 className="label-floating">E-mail</h3>
              <input className="input-login" id="full-name" type="text"/>
            </div>
            <div className="box-input">
              <h3 className="label-floating">Password</h3>
              <input className="input-login" id="full-name" type="text"/>
              <button className="form-button">REGISTER</button>
            </div>
          </form>   
        </section>
      </div>
  );
};

export default FormBox;