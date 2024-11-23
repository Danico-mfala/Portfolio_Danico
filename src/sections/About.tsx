import Image from "next/image";
import { motion } from "framer-motion";

function About() {
    return (
        <motion.div
            className="about"
            id="about"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            <div className="title">
                <h2>About Me</h2>
            </div>
            <div className="about-grid">
                <div className="about-grid-info">
                    <p className="about-grid-info-text">
                        Hello! My name is Dan Mfala. I&apos;m a mechatronics engineer with a passion for software development.
                        I started programming in 2019. I enjoy creating digital solutions that exceed client expectations.
                    </p>
                    <p className="about-grid-info-text">
                        Fast-forward to today, I specialize in designing and developing
                        high-quality solutions that delight our clients and exceed their
                        expectations at Root Tech.
                    </p>
                    <p className="about-grid-info-text">
                        Here are a few technologies I&apos;ve been working with recently:
                    </p>
                    <ul className="about-grid-info-list">
                        <li className="about-grid-info-list-item">React</li>
                        <li className="about-grid-info-list-item">React Native</li>
                        <li className="about-grid-info-list-item">Next.js</li>
                        <li className="about-grid-info-list-item">TypeScript</li>
                        <li className="about-grid-info-list-item">Node.js</li>
                        <li className="about-grid-info-list-item">Express.js</li>
                        <li className="about-grid-info-list-item">CSS</li>
                        <li className="about-grid-info-list-item">Python</li>
                        <li className="about-grid-info-list-item">JavaScript</li>
                        <li className="about-grid-info-list-item">Xest.js</li>
                        <li className="about-grid-info-list-item">PHP</li>
                        <li className="about-grid-info-list-item">C++</li>
                    </ul>
                </div>
                <div className="about-grid-photo">
                    <div className="overlay"></div>
                    <div className="overlay-border"></div>
                    <div className="about-grid-photo-container">
                        <Image
                            src="/images/profile/profile.png"
                            alt="Profile"
                            fill
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default About;
