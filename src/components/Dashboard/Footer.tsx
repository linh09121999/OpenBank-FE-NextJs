'use client'

import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter, FaVimeoV, FaYoutube } from "react-icons/fa"

interface FooterProps {
    isDark: boolean;
}


const Footer: React.FC<FooterProps> = ({ isDark }) => {
    return (
        <footer className={`relative w-full overflow-hidden ${isDark ? 'text-gray-200' : 'text-black '} mt-auto`}>
            <div className={`relative p-5 flex flex-col gap-5 `}>
                <p className="text-center text-base">© Copyright 2010 - 2023
                    <a href="http://tesobe.com/" className="text-green-600"> TESOBE GmbH</a>
                    , All Rights Reserved |
                    <a href="https://www.openbankproject.com/sitemap.xml" className="text-green-600"> Sitemap</a></p>
                <div className="flex gap-5 justify-center text-base text-green-600">
                    {[
                        { link: "https://www.linkedin.com/company/open-bank-project", icon: <FaLinkedinIn /> },
                        { link: "https://www.youtube.com/c/OpenBankProject", icon: <FaYoutube /> },
                        { link: "https://github.com/OpenBankProject", icon: <FaGithub /> },
                        { link: "https://vimeo.com/openbankproject", icon: <FaVimeoV /> },
                        { link: "https://www.facebook.com/openbankproject/", icon: <FaFacebookF /> },
                        { link: "https://twitter.com/OpenBankProject", icon: <FaTwitter /> }
                    ].map(({ link, icon }, index) => (
                        <a href={`${link}`} key={index}>
                            {icon}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer