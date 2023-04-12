import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleExiting } from "../store/exitAnimationSlice";
import { mainContentExit } from "../animations/mainContentExit";
import { mainContentEntrance } from "../animations/mainContentEntrance";
import Subtitle from "./subtitle";

function MainExperiences() {
  const exiting = useSelector((state) => state.exitAnimationSlice.exiting);
  const nextPage = useSelector((state) => state.exitAnimationSlice.nextPage);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    if (nextPage === "/experiences/") {
      dispatch(toggleExiting());
      const entranceAnim = mainContentEntrance();
      entranceAnim.play();
    } else if (exiting) {
      exit(nextPage);
    }
  }, [exiting]); // eslint-disable-line

  function exit(path) {
    const exitAnim = mainContentExit();
    setFocus(false);
    exitAnim.play();
    setTimeout(() => {
      dispatch(toggleExiting());
      //   exitAnim.time(0).kill();
      navigate(path);
    }, exitAnim.duration() * 1000);
  }

  const content = [
    [
      "Hack Reactor",
      "Immersed in 19 week program to develop core and practical software engineering skills. 1000+ hrs of full-stack coding experience in Python and JavaScript ES6+",
      "2022 - 2023",
    ],
    [
      "Advertise Purple",
      "Led SaaS platform development as a Product Manager. Introduced new robust frameworks and features that bolstered engagement and retention",
      "2021 - 2022",
    ],
    [
      "SessionM / Mastercard",
      "Designed, managed, and optimized rewards programs for industry leaders as a Senior Analyst. Redesigned productized loyalty reporting as Product Owner",
      "2017 - 2021",
    ],
    [
      "Dartmouth College",
      "Graduated with a B.A in both Economics and Japanese. Served as a James O. Freedman Presidential Scholar and Ambassador of the Guarini Student Board",
      "2013 - 2017",
    ],
    [
      "Tuck Business School",
      "Selected to participate in the Tuck Business Bridge Program for prospective business leaders",
      "2016",
    ],
  ];

  const detailContent = {
    "Hack Reactor": [
      "2022 - 2023",
      [
        "Immersed in a 19 week program to develop core and practical software engineering skills",
        "Over 1000 hrs of practical coding experience",
        "Programming Languages: Python 3, JavaScript ES6+, SQL, HTML5, CSS",
        "System Design: Microservices, Monoliths, Docker, Domain-driven design, Messaging, Test-driven design",
        "Back-End: Django 4, FastAPI,  PostgreSQL, MongoDB, Redshift, Apache Kafka, RabbitMQ",
        "Front-End: DOM manipulation, Websockets, React, Redux Toolkit",
      ],
      "Advanced Software Engineering Immersive Program (specializing in Python & JS)",
    ],
    "Advertise Purple": [
      "2021 - 2022",
      [
        "Product Manager (SaaS)",
        "Led SaaS platform feature development, introducing new robust frameworks and features that significantly bolstered customer engagement and retention",
        "Developed in-depth platform performance reporting to regularly generate actionable insights",
        "Improved cross-team processes, leading to efficient and better communications between product and support and sales teams",
      ],
      "Affiliate management agency focused on matching clients with personalized affiliates",
    ],
    "SessionM / Mastercard": [
      "2017 - 2021",
      [
        "Senior Analyst (Strategy & Analytics)",
        "Designed, managed, and optimized rewards programs for industry leaders, including multiple Fortune 500 brands; drove hundreds of millions of dollars in measurable, incremental revenue impact for clients",
        "Spearheaded, as Product Owner, the redesign of productized reporting to measure and display the impact of client campaigns",
        "Pioneered a human-centric client engagement strategy that is now widely adopted by the Strategy & Analytics team, securing millions of dollars in platform and services deals",
        "Developed analytical and financial models that continue to be leveraged on high profile accounts by sales and client facing teams across SessionM and Mastercard",
        "Conducted rigorous data QA across managed service clients and implemented a formalized process for QA and documentation that is now adopted by data solutions team",
      ],
      "Customer data platform specializing in loyalty solutions; acquired by Mastercard in Oct 2019",
    ],
    "Dartmouth College": [
      "2013 - 2017",
      [
        "Bachelor of Arts; Double Major: Economics, Asian and Middle Eastern Studies (conc. in Japanese)",
        "GPA: 3.7/4.0",
        "James O. Freedman Presidential Scholar",
        "Ambassador, Guarini Student Advisory Board for all Dartmouth study abroad programs",
      ],
      "Leading global academic institution and a member of the Ivy League",
    ],
    "Tuck Business School": [
      "2016",
      [
        "Engaged in a highly selective business program that provides students with a solid foundation in core business skills such as managerial economics, financial accounting, corporate finance, marketing, business strategy and analytics",
        "Conducted a team valuation analysis of the cosmetics brand Ulta and presented our research on projected earnings, strategy, and DCF analyses to a panel of renowned executives",
      ],
      "Selected to participate in the Tuck Business Bridge Program for prospective business leaders",
    ],
  };

  return (
    <>
      <div className="p-title-container">
        <div className="p-title">my experiences</div>
      </div>
      <Subtitle prev="/" next="/projects/" />
      <div className="p-content-container">
        <div className="p-exp-board">
          {content.map((tcd) => {
            return (
              <div
                className="p-exp-post"
                onClick={() => {
                  setFocus(tcd[0]);
                }}
                key={`exp-${tcd[0]}`}
              >
                <div className="p-exp-post-title">{tcd[0]}</div>
                <div className="p-exp-post-date">{tcd[2]}</div>
                <div className="p-exp-post-content">{tcd[1]}</div>
              </div>
            );
          })}
        </div>
        <div className="p-learn-more">click note to learn more</div>
        {focus && (
          <div
            className="focus-bg"
            onClick={() => {
              setFocus(false);
            }}
          >
            <div className="p-focus-card">
              <div className="exp-d-post-title">{focus}</div>
              <div className="exp-d-post-date">{detailContent[focus][0]}</div>
              <div className="exp-d-post-company-desc">
                {detailContent[focus][2]}
              </div>
              <div className="exp-d-post-content">
                {detailContent[focus][1].map((item) => {
                  return (
                    <li>
                      <span className="li-text">{item}</span>
                    </li>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MainExperiences;
