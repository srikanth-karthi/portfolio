import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend Developer</h4>
                <h5>Kanavu – Startup Village</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
             Contributed to the development of an enterprise-grade construction
              management platform. Worked across backend APIs and DevOps pipelines
              to deliver scalable, production-ready solutions in a startup environment.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Engineer</h4>
                <h5>Presidio</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
               Working on a variety of DevOps and cloud migration projects. Responsible
              for infrastructure automation, CI/CD implementation, and system optimization
              across hybrid and cloud-native environments.
            </p>
          </div>
 
        </div>
      </div>
    </div>
  );
};

export default Career;
