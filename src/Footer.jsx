import React from 'react';
const Footer = () =>{
    return (
        <>
        <footer className="bg-info text-center text-white">

 
  <div className="text-center p-3" style={{backgroundColor:'#3498db'}}>
    © 2022 Copyright | Created with 🤍 by Abhay
    <span className="ms-4"></span>
       <a
        className="btn btn-primary btn-floating m-1"
        style={{backgroundColor: '#3b5998'}}
        href="https://www.facebook.com/profile.php?id=100013741877081"
        target="_blank"
        role="button"
        ><i className="fab fa-facebook-f"></i
      ></a>

      <a
        className="btn btn-primary btn-floating m-1"
        style={{backgroundColor: '#dd4b39'}}
        href="#!"
        target="_blank"
        role="button"
        ><i className="fab fa-google"></i
      ></a>

      <a
        className="btn btn-primary btn-floating m-1"
        style={{backgroundColor: '#ac2bac'}}
        href="https://www.instagram.com/abhay_ps1/"
        target="_blank"
        role="button"
        ><i className="fab fa-instagram"></i
      ></a>

      <a
        className="btn btn-primary btn-floating m-1"
        style={{backgroundColor: '#0082ca'}}
        href="https://www.linkedin.com/in/abhay-juneja-a3a605171/"
        target="_blank"
        role="button"
        ><i className="fab fa-linkedin-in"></i
      ></a>

      <a
        className="btn btn-primary btn-floating m-1"
        style={{backgroundColor: '#333333'}}
        href="https://github.com/Abhay-p1"
        target="_blank"
        role="button"
        ><i className="fab fa-github"></i
      ></a>
  </div>

</footer>
        </>
    );

}
export default Footer;