import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';
function Projects() {
    const projectsData = [
        {
            image: "/../images/projects/root_tech.png",
            projectName: "Root Tech",
            projectLink: "https://www.roottechpro.com/",
            projectDescription: "Root Tech, a cutting-edge technology company, to develop their portfolio website using Next.js and TypeScript. This project involves creating a dynamic, responsive, and user-friendly platform to showcase Root Tech's innovative projects and diverse service offerings.",
            projectTech: [
                "Next", "Typescript", "Tailwind CSS",
            ],
            projectExternalLinks: {
                github: "",
                externalLink: "",
            }
        },
        {
            image: "/../images/projects/dashboard.png",
            projectName: "Dashboard",
            projectLink: "#",
            projectDescription: "I recently worked on a front-end project to create a modern dashboard using React.js and Material-UI. The goal was to develop an intuitive, user-friendly interface that provides a comprehensive overview of key metrics and data insights.",
            projectTech: [
                "React", "JavaScript/TypeScript", "Material - UI", "Chart.js ", "CSS",
            ],
            projectExternalLinks: {
                github: "",
                externalLink: "",
            }
        },
        {
            image: "/../images/projects/himalaya.png",
            projectName: "Himalaya Travel Agency",
            projectLink: "https://himalayatravel.net/study-in-north-cyprus/",
            projectDescription: "The educational consultant Himalaya Travel allows students to search, find and apply to all North Cyprus universities for  free. They bridge the gap between universities and students.The goal of this project was to build a UI/ UX design and development of the website website, and management system.",
            projectTech: [
                "PHP", "Javascript", "Mysql", "css"
            ],
            projectExternalLinks: {
                github: "",
                externalLink: "",
            }
        },
        {
            image: "/../images/projects/productive_machine.png",
            projectName: "Productive Machine",
            projectLink: "https://productivemachines.co.uk/",
            projectDescription: "I participated in the development of Productive machine, a project at Cypruscodes aimed at enhancing productivity through efficient task management and collaboration tools. My role involved both back-end and front-end development to ensure a seamless and functional user experience.",
            projectTech: [
                "Html", "Javascript", "Xest", "css"
            ],
            projectExternalLinks: {
                github: "",
                externalLink: "",
            }
        },
        {
            image: "/../images/projects/guestlist.png",
            projectName: "GuestList",
            projectLink: "https://app.ontheglist.com/authentication/login?returnUrl=%2F",
            projectDescription: "I contributed to the development of Guestlist, a project designed to manage and streamline event guest lists, enhancing the overall event management process. My role involved working on both back-end and front-end components to deliver a seamless user experience.",
            projectTech: [
                "React", "Javascript", "Xest", "css"
            ],
            projectExternalLinks: {
                github: "",
                externalLink: "",
            }
        },
        {
            image: "/../images/projects/rootacademie.png",
            projectName: "Root Academie",
            projectLink: "https://www.rootacademie.com/",
            projectDescription: "Root Académie, a free learning platform built with PHP and MySQL. This project aims to provide accessible and high-quality educational resources to users worldwide, fostering a community of learners and educators.",
            projectTech: [
                "Javascript", "Mysql", "PHP", "css"
            ],
            projectExternalLinks: {
                github: "",
                externalLink: "",
            }
        },

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
                                    <Image src={image} fill alt="myProject"  />
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
