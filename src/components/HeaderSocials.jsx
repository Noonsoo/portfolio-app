import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"

function HeaderSocials() {
  return (
  <div className="header__socials">
    <a href="www.linkedin.com/in/nwafor-emmanuel-59999a1a8" target="_blank"><BsLinkedin /></a>
    <a href="https://github.com/Noonsoo" target="_blank"><FaGithub/></a>
  </div>
  )
}

export default HeaderSocials