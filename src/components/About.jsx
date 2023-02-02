import { useState, useEffect, useRef } from "react";
import useIcons from "../useIcons";
import devs from "../devData";
import Feature from "./UI/Feature";

const About = () => {
  const [featureImages, setFeatureImages] = useState(() => []);
  const { linkedinIcon, twitterIcon, githubIcon } = useIcons();

  // Fetching data from Unsplash
  useEffect(() => {
    fetch(
      `https://api.unsplash.com/photos/random/?query=feelings&count=5&orientation=landscape&client_id=hjRE5t2RVXBqp561CfadH4aoW5oMSuEhDXsDxFJJ_nU`
    )
      .then((res) => res.json())
      .then((data) => {
        setFeatureImages(data);
      })
      .catch((err) => console.error(err));
  }, []);

  // Dynamically rendering project contributors
  const contributors = devs.map((dev) => (
    <div key={dev.id} className="dev">
      <h5>{dev.name}</h5>
      <div className="icons">
        <a href={dev.linkedin}>{linkedinIcon}</a>
        <a href={dev.twitter}>{twitterIcon}</a>
        <a href={dev.github}>{githubIcon}</a>
      </div>
    </div>
  ));

  // Passing featureImages as props to the feature component
  const features = featureImages.map((feature) => (
    <Feature key={feature.id} feature={feature} />
  ));

  return (
    <section className="about">
      <div className="about-hero-text">
        <h1>Feelz - Validate your feelings</h1>
        <p>
          Feelz is a social media app that allows you to share your feelings and
          mood with an image.
        </p>
      </div>
      <div className="about-feature">
        <div className="feature-card">{features[0]}</div>

        <div className="feature-text">
          <h2>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Doloremque, molestias?
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            nihil iusto eos consectetur, optio et aliquam deserunt. Qui, commodi
            repellat culpa obcaecati repudiandae ipsum autem omnis laborum quia
            explicabo rerum!
          </p>
        </div>
      </div>
      <div className="about-feature about-feature-2">
        <div className="feature-card">{features[1]}</div>

        <div className="feature-text">
          <h2>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Doloremque, molestias?
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            nihil iusto eos consectetur, optio et aliquam deserunt. Qui, commodi
            repellat culpa obcaecati repudiandae ipsum autem omnis laborum quia
            explicabo rerum!
          </p>
        </div>
      </div>
      <div className="about-feature">
        <div className="feature-card">{features[2]}</div>

        <div className="feature-text">
          <h2>Built by</h2>
          <p>
            Built by a bunch of enthusiastic frontend developers for the Chingu
            voyage 42. You can connect and get to know us better
          </p>
          <div className="devs">{contributors}</div>
        </div>
      </div>
    </section>
  );
};

export default About;
