import React from 'react';
import aboutImg from './about.png';


function About() {
  return (
    <main>
      <h1>About Us</h1>
      <section style={{ marginTop: '20px' }}>
        <p>
          Hi 👋 We’re four college students who care about personal finance, improving financial literarcy, and helping students save money.
        </p>
        <p>
        We want our app to help you track your earnings and spending so that you can gain deeper insights into your personal finances.
        </p>
        <p>
        We’ve tried out many apps to track our spending, such as Mint, NerdWallet, and Rockey Money, but they’ve all been both needlessly complicated and didn’t have the exact features we wanted. So, we created a simple and intuitive app with the most important features you would need to start your personal finance journey!
        </p>
        <img 
          src={aboutImg} alt="About" style={{ display: 'block', margin: '0 auto', marginTop: '30px', width: '300px',   height: 'auto' }} 
        />

      </section>
    </main>
  );
}

export default About;