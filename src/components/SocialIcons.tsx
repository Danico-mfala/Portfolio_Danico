import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

import {
    FiGithub,
    FiInstagram,
    FiLinkedin,
    FiTwitter,
} from "react-icons/fi";
function SocialIcons() {
    const socialLinks = [
        {
            name: "Github",
            icon: <FiGithub />,
            link: "#"
        },
        {
            name: "Linkedin",
            icon: <FiLinkedin />,
            link: "https://www.linkedin.com/in/mfala-dan-19ab9917b/"
        },
        {
            name: "Instagram",
            icon: <FiInstagram />,
            link: "#"
        },
        {
            name: "Twitter",
            icon: <FiTwitter />,
            link: "#"
        }
    ]
  return (
      <motion.div
          className='social-icons'
            initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay:1.95
                }}
      >
          <ul className='social-icons-list'>
              {
                  socialLinks.map(({ name, icon, link }) => (
                      <li key={name} title={name} className='social-icons-list-item'>
                          <Link
                              href={link}
                              className='social-icons-list-item-link'
                              target='_blank'>
                              {icon}
                          </Link>
                      </li>
                  ))
              }
        </ul>
    </motion.div>
  )
}

export default SocialIcons
