import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <footer>
            <h2>Made by Michael Gibson</h2>
            <p>
                <li>
                    <a href="https://github.com/mlgibson8">
                        <li className="logo">
                            <VscGithubAlt />
                        </li>
                    </a>
                    < a href="https://www.linkedin.com/in/michael-gibson-067731280">
                        <li className="logo">
                            <AiOutlineLinkedin />
                        </li>                    
                    </a>
                    <a href="https://www.instagram.com/notgibby/">
                        <li className="logo">
                            <FaInstagram />
                        </li>
                    </a>                                    
                </li>
            </p>
        </footer>
    )
}

export default Footer;