import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
    const ref = useRef(null);
    const isInView = useInView(ref);
    useEffect(() => {
        console.log("Element is in view: ", isInView);
    }, [isInView]);
    return (
        <motion.div
            className="about"
            id="about"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={{
                visible: { opacity: 1, y: -50 },
                hidden: { opacity: 0, y: 0 },
            }}
        >
            <div className="title">
                <h2>About Me</h2>
            </div>
            <div className="about-grid">
                <div className="about-grid-info">
                    <p className="about-grid-info-text">
                        Hello! My name is Dan Mfala. I'm a mechatronics engineer with a passion for software development.
                        I started programming in 2019 ,I enjoy creating digital solutions that exceed client expectations.
                    </p>
                    <p className="about-grid-info-text">
                        Fast-forward to today, I specializee in designing and developing
                        high-quality solutions that delight our cliens and exceed their
                        expectations at{" "}
                        {/* <Link href="#" className='link' target='_blank'>
                            ......
                        </Link> */}
                    </p>
                    {/* <p className="about-grid-info-text">
                        I am aslo working on new project called&nbsp;
                        <Link
                            className='link'
                            target='_blank'
                            href='#'
                        >
                            FrontendVite
                        </Link>
                        &nbsp;aimed at enhancing frontend development skills.
                    </p> */}
                    <p className="about-grid-info-text">
                        Here are a few technologies I&apos;ve bee working with recently;
                    </p>
                    <ul className="about-grid-info-list">
                        <li className="about-grid-info-list-item">React</li>
                        <li className="about-grid-info-list-item">React Native</li>
                        <li className="about-grid-info-list-item">Next.js</li>
                        <li className="about-grid-info-list-item">Typescript</li>
                        <li className="about-grid-info-list-item">Node.js</li>
                        <li className="about-grid-info-list-item">Express.js</li>
                        <li className="about-grid-info-list-item">CSS</li>
                        <li className="about-grid-info-list-item">Python</li>
                        <li className="about-grid-info-list-item">Javascript</li>
                        <li className="about-grid-info-list-item">Xest.js</li>
                        <li className="about-grid-info-list-item">PHP</li>
                        <li className="about-grid-info-list-item">C++</li>
                    </ul>
                </div>
                <div className="about-grid-photo">
                    <div className="overlay"></div>
                    <div className="overlay-border"></div>
                    <div className="about-grid-photo-container">
                        <Image src="/../images/profile/profile.png" alt='profile' fill />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default About;
