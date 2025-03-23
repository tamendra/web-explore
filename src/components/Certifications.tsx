import React from 'react';
import Slider from 'react-slick'; // Import the Slider component from react-slick
import { FaExternalLinkAlt } from 'react-icons/fa'; // Import a link icon
import "slick-carousel/slick/slick.css"; // Import slick-carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import slick-carousel theme styles

interface Certification {
  name: string;
  date: string;
  logo: string;
  link: string;
}

const certifications: Certification[] = [
  {
    name: "Software Engineer - Hackerrank",
    date: "2024",
    logo: "https://cdn.worldvectorlogo.com/logos/hackerrank.svg",
    link: "https://www.hackerrank.com/certificates/ea974e7c0b39",
  },
  {
    name: "Data Structures and Algorithms Specialization - University of California, San Diego",
    date: "2022",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/UCSD_logo.svg",
    link: "https://coursera.org/share/3614e52111f0c952ef7ded90f6b9d4b7",
  },
  {
    name: "Programming for Everybody (with Python) - University of Michigan",
    date: "2020",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Michigan_Wolverines_logo.svg",
    link: "https://coursera.org/share/f602829c7e457c8d9a0668d597d9c5cf",
  },
];

function Certifications() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Number of cards visible at once
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="App-section" id="certifications">
      <h2 className="App-section-title">Certifications</h2>
      <Slider {...settings} className="App-certifications-carousel">
        {certifications.map((certification, index) => (
          <div className="App-certification-item" key={index}>
            <div className="App-certification-card">
              <img
                src={certification.logo}
                alt={`${certification.name} logo`}
                className="App-certification-logo"
              />
              <div className="App-certification-content">
                <h3 className="App-certification-name">{certification.name}</h3>
                <span className="App-certification-date">{certification.date}</span>
                <a
                  href={certification.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="App-certification-link"
                  aria-label={`View certificate for ${certification.name}`}
                >
                  View Certificate {FaExternalLinkAlt({ className: "App-certification-link-icon" })}
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Certifications;