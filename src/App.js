import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course";
import RealMadrid from "./images/simon-reza-GIzYHNnG5qg-unsplash.jpg";
import Arsenal from "./images/nelson-ndongala-aJGyrMNJUkM-unsplash.jpg";
import Manchester from "./images/nat-callaghan-IEmaR3ecfuY-unsplash.jpg";
import Barcelona from "./images/klemens-kopfle-sC6-09uEto8-unsplash.jpg";

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Football Team Cards</p>
          <p className="subtitle">For Football Fans </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <Course
                image={RealMadrid}
                title="Real Madrid"
                description="Real Madrid is one of the most iconic football clubs in Spain, with a rich history of success both domestically and internationally.This Team will be one of the brands of sports near future."
                subTitle="ForFootballFans.com"
              />
            </div>
            <div className="column">
              <Course
                image={Barcelona}
                title="Barcelona"
                description="Barcelona, their fierce rivals, also hail from Spain and are known for their stylish and possession-based play, making the El Clásico rivalry one of the most anticipated fixtures in world football. "
                subTitle="ForFootballFans.com"
              />
            </div>
            <div className="column">
              <Course
                image={Arsenal}
                title="Arsenal"
                description="Arsenal, based in North London, is renowned for their attractive attacking style and a strong English football tradition.This Team will be one of the brands of sports near future."
                subTitle="ForFootballFans.com"
              />
            </div>
            <div className="column">
              <Course
                image={Manchester}
                title="Manchester United"
                description="Manchester United, an Manchester football giant, boasts an impressive legacy of Premier League titles and Champions League triumphs, known for their formidable defenses and iconic red and black striped jerseys."
                subTitle="ForFootballFans.com"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
