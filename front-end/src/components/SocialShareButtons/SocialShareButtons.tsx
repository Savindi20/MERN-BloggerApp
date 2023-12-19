import React from 'react'
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

interface SocialShareButtonsProps{
    url:any;
    title:any;
}

const SocialShareButtons = ({url, title }:SocialShareButtonsProps) => {
  return (
    <div className="flex gap-4">
      <a
        target="_blank"
        rel="noreferrer"
        href={`=${url}`}
      >
        <FacebookIcon className="text-[#3b5998] w-12 h-auto transition-transform duration-300 hover:scale-105 shadow-2xl" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`=${url}`}
      >
        <InstagramIcon className="text-[#E1306C] w-12 h-auto transition-transform duration-300 hover:scale-105 shadow-2xl" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`=${url}`}
      >
        <GitHubIcon className="text-[#171515] w-12 h-auto transition-transform duration-300 hover:scale-105 shadow-2xl" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`=${url}`}
      >
        <TwitterIcon className="text-[#1DA1F2] w-12 h-auto transition-transform duration-300 hover:scale-105 shadow-2xl" />
      </a>
    </div>
  )
}

export default SocialShareButtons