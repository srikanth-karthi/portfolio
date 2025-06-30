import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaMedium,
} from "react-icons/fa6";
import { SiLeetcode,SiHackerrank,SiTerraform, SiCredly } from "react-icons/si";
import { VscExtensions } from "react-icons/vsc";
import { GiNewspaper } from "react-icons/gi";
import { IoExtensionPuzzle } from "react-icons/io5";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);

      updatePosition();

      return () => {
        elem.removeEventListener("mousemove", onMouseMove);
      };
    });
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href="https://github.com/srikanth-karthi" target="_blank">
            <FaGithub />
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/srikanth-karthikeyan" target="_blank">
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a href="https://x.com/SRIKANTH_212003" target="_blank">
            <FaXTwitter />
          </a>
        </span>
        <span>
          <a href="https://www.instagram.com/srikanth_karthikeyan_" target="_blank">
            <FaInstagram />
          </a>
        </span>
        <span>
          <a href="https://leetcode.com/srikanthkarthi2003" target="_blank">
            <SiLeetcode />
          </a>
        </span>
        <span>
          <a href="https://medium.com/@srikanthkarthi2003" target="_blank">
            <FaMedium  />
          </a>
        </span>
        <span>
          <a href="https://www.hackerrank.com/profile/srikanthkarthi21" target="_blank">
            <SiHackerrank />
          </a>
        </span>
        <span>
          <a href="https://registry.terraform.io/namespaces/srikanth-karthi" target="_blank">
            <SiTerraform />
          </a>
        </span>
        <span>  
          <a href="https://marketplace.visualstudio.com/items?itemName=srikanthk.srikanth-generic-dev-tools" target="_blank">
            <VscExtensions />
          </a>
        </span>
        <span>  
          <a href="https://srikanth-newsletter.beehiiv.com/" target="_blank">
            <GiNewspaper />
          </a>
        </span>
        <span>  
          <a href="https://microsoftedge.microsoft.com/addons/search?developer=Srikanth-karthi" target="_blank">
            <IoExtensionPuzzle />
          </a>
        </span>
        <span>  
          <a href="https://www.credly.com/users/srikanth-karthi" target="_blank">
        <SiCredly />
          </a>
        </span>

  
      </div>
      <a className="resume-button" target="_blank" href="https://srikanth-karthi.github.io/old-portfolio/">
        <HoverLinks text="Earlier Creations" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
