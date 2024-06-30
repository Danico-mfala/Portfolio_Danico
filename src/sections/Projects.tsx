import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';
function Projects() {
    const projectsData = [
        {
            image: "/../images/projects/himalaya.png",
            projectName: "Himalaya Travel Agency",
            projectLink: "https://himalayatravel.net/study-in-north-cyprus/",
            projectDescription: "Lorem aiudaudasydsadnsiadsiduaisduasduasdybsdusaydsuagsdy",
            projectTech: [
                "PHP", "Javascript", "Mysql", "css"
            ],
            projectExternalLinks: {
                github: "",
                externalLink: "",
            }
        }, {
            image: "/../images/projects/rootacademie.png",
            projectName: "Root Academie",
            projectLink: "",
            projectDescription: "Root Academie is a platform for online study for free",
            projectTech: [
                "Javascript", "Mysql", "PHP", "css"
            ],
            projectExternalLinks: {
                github: "",
                externalLink: "",
            }
        }, {
            image: "/../images/projects/root_tech.png",
            projectName: "Root Tech",
            projectLink: "https://www.roottechpro.com/",
            projectDescription: "#",
            projectTech: [
                "Next", "Typescript", "Tailwind CSS",
            ],
            projectExternalLinks: {
                github: "",
                externalLink: "",
            }
        }

    ]
    return (
        <motion.div
            className='projects'
            id='work'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={{
                visible: { opacity: 1, y: -50 },
                hidden: { opacity: 0, y: 0 }
            }}
        >
            <div className="title">
                <h2>Some Things I&apos;Built</h2>
            </div>
            <div className="projects-container">
                {projectsData.map(({
                    image,
                    projectName,
                    projectLink,
                    projectDescription,
                    projectTech,
                    projectExternalLinks,
                }) => {
                    return (
                        // eslint-disable-next-line react/jsx-no-duplicate-props
                        <div className="project" key={projectName}>
                            <div className="project-image">
                                <div className="project-image-overlay"></div>
                                <div className="project-image-container">
                                    <Image src={image} fill alt={projectName} quality={100} />
                                </div>
                            </div>
                            <div className="project-info">
                                <p className="project-info-overline">Featured Project</p>
                                <Link href={projectLink} className="no-underline">
                                    <h3 className="project-info-title">{projectName}</h3>
                                </Link>
                                <div className="project-info-description">
                                    <p>{projectDescription}</p>
                                </div>
                                <ul className="project-info-tech-list">
                                    {projectTech.map((tech) => (
                                        <li className='project-info-tech-list-item' key={tech}>{tech}</li>
                                    ))}
                                </ul>
                                <ul className="project-info-links">
                                    <li className="project-info-links-item">
                                        <Link
                                            href={projectExternalLinks.github}
                                            className='project-info-links-item-link'
                                        >
                                            <FiGithub />
                                        </Link>
                                    </li>
                                    <li className="project-info-links-item">
                                        <Link
                                            href={projectExternalLinks.externalLink}
                                            className='project-info-links-link'>
                                            <FiExternalLink />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    );
                }
                )}
            </div>
        </motion.div>
    )
}

export default Projects
