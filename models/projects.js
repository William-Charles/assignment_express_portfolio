class Project {
  constructor(name, url, image, ...domains) {
    this.name = name;
    this.url = url;
    this.image = image;
    this.domains = domains;
  }
}

const projects = [
  new Project(
    "Royalty Free Music Player",
    "https://github.com/William-Charles/assignment_royalty_free_music_player",
    "/images/musicPlayer.png",
    "HTML5",
    "CSS3",
    "BOOTSTRAP",
    "jQuery",
    "JavaScript"
  ),
  new Project(
    "Viking CSS Garden",
    "https://github.com/William-Charles/assignment_viking_css_garden",
    "/images/cssGarden.png",
    "SASS",
    "HTML5",
    "CSS3"
  )
];

module.exports = {
  Project,
  projects
};
