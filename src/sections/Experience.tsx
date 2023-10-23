import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { once } from 'events';

function Experience() {
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        const transformSeleted = () => {
            const underline = document.querySelector<HTMLElement>(".underline");
            underline!.style.top = `${selected * 2.5}rem`;
        };
        transformSeleted();
    },[selected])
    const experiences = [
        {
            name: "Root Tech",
            role: "Full Stack Developer",
            url: "#",
            start: "January 2019",
            end: "Present",
            shortDescription: [
                "I had experience working on a large codebase utilizing kibana and Elasticsearch.",
                "Throughout my work, I've utilized various MERN stack technologies, including React, TypeScript"
            ]
        },
        {
            name: "Root Acdemy",
            role: "Assisst.Instructor",
            url: "#",
            start: "October 2018",
            end: "Present",
            shortDescription: [
                "Helping student with the code, Exercices and Basic Programming"
            ]
        },
        {
            name: "CyprusCode",
            role: "Junior Full Stack Developer",
            url: "#",
            start: "May 2022",
            end: "August 2022",
            shortDescription:["#"],
        }
    ]
  return (
      <motion.div
          className="experience"
          id="experience"
          initial="hidden"
          whileInView="visible"
          viewport={{once:true}}
          transition={{ duration: 0.6 }}
          variants={{
              visible: { opacity: 1, y: -50 },
              hidden:{opacity:0, y:0}
          }}
      >
          <div className="title">
              <h2>
                  Where I&apos;ve Worked
              </h2>
          </div>
          <div className="container">
              <ul className="exp-slider">
                  <div className="underline"></div>
                  {
                      experiences.map((experience, index) => {
                          return (
                              <li key={index} className={`exp-slider-item ${index === selected && "exp-slider-item-selected"}`}
                                onClick={() => setSelected(index)}
                              >
                                  <span>{experience.name}</span>
                              </li>
                          );
                      })
                  }
              </ul>
              <div className="exp-details">
                  <div className="exp-details-position">
                      <h3>
                          <span>{experiences[selected].role}</span>
                          <span className="exp-details-position-company">
                              &nbsp;@&nbsp;
                              <Link className='link' href={ experiences[selected].url}>
                                  {experiences[selected].name}{ " "}
                              </Link>
                            </span>
                      </h3>
                      <p className="exp-details-ranges">
                          {experiences[selected].start} - {experiences[selected].end}
                      </p>
                      <ul className="exp-details-list">
                          {experiences[selected].shortDescription.map(
                              (description, index) => (
                                  <li key={index} className='exp-details-list-item'>
                                      {description}
                                  </li>
                              )
                          )}
                      </ul>
                  </div>
              </div>
          </div>
    </motion.div>
  )
}

export default Experience;