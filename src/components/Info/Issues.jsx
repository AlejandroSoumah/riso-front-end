const TextBox = () => {
  return (
    <section id="services" className="services-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
             <h2 style= {{ marginBottom: '20px' }}><strong>Issues We Address</strong></h2>
  
            <div className="heading-line"></div>
            <div className="section-subtitle">
            <p style={{ fontSize: '18px' }}>Riso utilizes state-of-the-art technology to tackle some of the greatest challenges in the existing commodity markets. </p>
              <br /> 
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-box" style={{ width: '400px', height: '100px' }}>
              <h5>
                <i className="icon-desktop icon-left"></i> Less Market Manipulation
              </h5>
              
            </div>
          </div>
          <div className="col-md-4">
          <div className="text-box" style={{ width: '400px', height: '100px' }}>
              <h5>
                <i className="icon-pencil icon-left"></i> Grow Developing Economies
              </h5>
            </div>
          </div>
          <div className="col-md-4">
          <div className="text-box" style={{ width: '400px', height: '100px' }}>
              <h5>
                <i className="icon-strategy icon-left"></i> Protect Local Producers from Predatory Practices
              </h5>
            </div>
          </div>
          <div className="col-md-4">
          <div className="text-box" style={{ width: '400px', height: '100px' }}>
              <h5>
                 Efficiency
              </h5>
            </div>
          </div>
          <div className="col-md-4">
          <div className="text-box" style={{ width: '400px', height: '100px' }}>
              <h5>
                <i className="icon-tools-2 icon-left"></i> Environmental Benefits
              </h5>
            </div>
          </div>
          <div className="col-md-4" style = {{ marginBottom: '30px' }}>
          <div className="text-box" style={{ width: '400px', height: '100px' }}>
              <h5>
                <i className="icon-heart icon-left"></i> Easy to Navigate
              </h5>
            </div>
          </div>
          <div>
          <h2 style= {{ marginBottom: '20px' }}><strong>Behind the Scenes</strong></h2>
          <p style={{ fontSize: '18px' }}>Welcome to our website! Riso is founded by Mansa Capital, a passionate team dedicated to providing high-quality products and services. Our mission is to make a positive impact in the world by delivering innovative solutions that meet their needs.</p>
          <p style={{ fontSize: '18px' }}>At our company, we value novelty, innovation, and transparency. We work together to achieve our goals and continuously strive for improvement. Whether you're a customer, investor, or employee, we want to ensure that your experience with us is exceptional.</p>
          <p style={{ fontSize: '18px' }}>Feel free to explore our socials and contact us if you have any questions or feedback. We'd love to hear from you!</p>
        </div>
        </div>
      </div>
    </section>
  );
};

export default TextBox;