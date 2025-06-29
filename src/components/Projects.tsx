import HexagonGrid from "./HexagonGrid";

const items = [
  {
    name: "UZHAVAN HOUSE",
    image: "assets/uh.png",
    metricLabel: "Project",
    score: 97,
    iconLeft: "fa fa-code",
    iconRight: "fa fa-cogs",
    iconLeftColor: "green",
    iconRightColor: "blue",
    color: "green",
  },
  {
    name: "WHATSAPP CLONE",
    image: "assets/whatsapp.png",
    metricLabel: "Project",
    score: 95,
    iconLeft: "fa fa-code",
    iconRight: "fa fa-comments",
    iconLeftColor: "blue",
    iconRightColor: "yellow",
    color: "blue",
  },
  {
    name: "URL SHORTENER",
    image: "assets/url-shortener.png",
    metricLabel: "Project",
    score: 92,
    iconLeft: "fa fa-code",
    iconRight: "fa fa-link",
    iconLeftColor: "green",
    iconRightColor: "yellow",
    color: "yellow",
  },
  {
    name: "MRMS",
    image: "assets/mrms.png",
    metricLabel: "Project",
    score: 89,
    iconLeft: "fa fa-medkit",
    iconRight: "fa fa-database",
    iconLeftColor: "red",
    iconRightColor: "blue",
    color: "red",
  },
  // Add more items...
];

const Projects = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">
        My <span>Projects</span>
      </h2>
      <HexagonGrid items={items} />
    </section>
  );
};

export default Projects;