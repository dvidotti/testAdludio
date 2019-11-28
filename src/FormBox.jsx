import React from 'react';

const FormBox = () => {
  return (
      <div className="FormBox">
        <section className="form-box-one">
          <section className="form-box-one--text">
            <div className="section-one--text">
              <h1 className="section-one--title">REDIFINING MOBILE ADVERTISING</h1>
            </div>
            <div>
              <p className="section-one--paragraphs" >Please use this form to register</p>
              <p className="section-one--paragraphs">If you are a member, please <a className="link">login</a></p>
            </div>
            </section>
        </section>
        <section className="form-box-second">
          
          <form className="form-box">
            <img className="image-logo" src="./asset3.png"></img>
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
              <input className="input-login" id="full-name" type="password"/>
            </div>
            <button className="btn-login">REGISTER</button>
            <button className="btn-login--google">
              <img className="btn-icon" src="/google_icon.png" alt=""/>
              <div className="btn-box--text">
                <h3 className="btn-text" >Sign in with Google</h3>
              </div>
              </button>
          </form>   
        </section>
      </div>
  );
};

export default FormBox;