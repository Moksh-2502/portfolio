import React, {useContext} from "react";
import "./Certifications.scss";
import {certificationsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Certifications() {
  const {isDark} = useContext(StyleContext);
  if (!certificationsSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="certifications">
        <div className="certification-container">
          <div className="certification-header">
            <h1 className="certification-title">{certificationsSection.title}</h1>
            <p className="certification-subtitle">{certificationsSection.subtitle}</p>
          </div>
          <div className="certification-cards-div">
            {certificationsSection.certifications.map((cert, i) => {
              return (
                <CertificationCard
                  key={i}
                  isDark={isDark}
                  cardInfo={{
                    title: cert.title,
                    subtitle: cert.subtitle,
                    logo: cert.logo,
                    certificate_link: cert.certificate_link
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}

function CertificationCard({cardInfo, isDark}) {
  const {title, subtitle, logo, certificate_link} = cardInfo;
  
  return (
    <div className={isDark ? "dark-mode cert-card" : "cert-card"}>
      <div className="cert-card-body">
        {logo && (
          <div className="cert-card-img">
            <img
              className="cert-image"
              src={logo}
              alt={title}
            />
          </div>
        )}
        <div className="cert-card-text">
          <h2 className="cert-card-title">{title}</h2>
          <p className="cert-card-subtitle">{subtitle}</p>
        </div>
      </div>
      {certificate_link && (
        <div className="cert-card-footer">
          <a
            className="cert-card-button"
            href={certificate_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certificate
          </a>
        </div>
      )}
    </div>
  );
}
