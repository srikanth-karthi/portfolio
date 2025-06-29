import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const certs = [
  {
    logo: "/images/aws-sa.png",
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services (AWS)",
    issued: "Jun 2025",
    link: "https://www.credly.com/earner/earned/badge/f37db2e2-6938-4826-9770-f2000f996a9c",
    skills: ["Amazon Web Services (AWS)", "Cloud Computing"],
  },
  {
    logo: "/images/cert-terrfrom.png",
    title: "HashiCorp Certified: Terraform Associate (003)",
    issuer: "HashiCorp",
    issued: "Mar 2025",
    expires: "Mar 2027",
    link: "https://www.credly.com/badges/a47ff647-67be-4c71-b598-9203ccdf258d/linked_in_profile",
    skills: ["Terraform"],
  },
  {
    logo: "/images/aws-academy.png",
    title: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    issued: "Jul 2023",
    link: "https://www.credly.com/go/5xeK1nGN",
    skills: ["Amazon Web Services (AWS)", "Cloud Computing"],
  },
  {
    logo: "/images/it-academy-cloud-and-virtualization-concepts.png",
    title: "Cloud and Virtualization Concepts",
    issuer: "Broadcom",
    issued: "Oct 2022",
    link: "https://www.credly.com/earner/earned/badge/5fb5549e-088b-4f3a-b187-649ff7a3b7af",
    skills: ["Amazon Web Services (AWS)", "Cloud Computing"],
  },
  {
    logo: "/images/into-cyber.png",
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    issued: "Jul 2023",
    link: "https://www.credly.com/badges/3b60ec66-e1b4-4175-a528-778805f311b0/print",
    skills: ["Amazon Web Services (AWS)", "Cloud Computing"],
  },




];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      const padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Certs</span>
        </h2>
        <div className="work-flex">
  {certs.map((_value, index) => (
    <a
      href={_value.link}
      target="_blank"
      rel="noreferrer"
      className="work-box"
      key={index}
    >
      <div className="work-info">
        <div className="work-title">
          <h3>0{index + 1}</h3>
          <div>
            <h4>{_value.issuer}</h4>
            <p>{_value.title}</p>
          </div>
        </div>
        <h4>Skills :</h4>
        {_value.skills.length > 0 && (
          <p>{_value.skills.join(", ")}</p>
        )}
      </div>
      <WorkImage image={_value.logo} alt="" />
    </a>
  ))}
</div>
      </div>
    </div>
  );
};

export default Work;
