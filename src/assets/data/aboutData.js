import {
  github32,
  twitter32,
  dribble32,
  linkedin32,
} from "../images/svg/icons/socialIcons";

const aboutSocialLinks = [
  {
    id: 0,
    icon: github32,
    link: "https://github.com/",
  },
  {
    id: 1,
    icon: twitter32,
    link: "https://twitter.com/",
  },
  {
    id: 2,
    icon: dribble32,
    link: "https://dribbble.com/",
  },
  {
    id: 3,
    icon: linkedin32,
    link: "https://www.linkedin.com/",
  },
];

const teamData = [
  {
    id: 0,
    img: require("../images/about/team/1.png"),
    name: "Michael Jackson",
    designation: "Senior Consultant",
    socialLinks: [
      { id: 0, label: "facebook", link: "https://facebook.com/" },
      { id: 1, label: "twitter", link: "https://twitter.com/" },
      { id: 2, label: "pinterest", link: "https://www.pinterest.com/" },
      { id: 3, label: "dribbble", link: "https://dribbble.com/" },
    ],
  },
  {
    id: 1,
    img: require("../images/about/team/2.png"),
    name: "George Smith",
    designation: "Consultant",
    socialLinks: [
      { id: 0, label: "facebook", link: "https://facebook.com/" },
      { id: 1, label: "twitter", link: "https://twitter.com/" },
      { id: 2, label: "pinterest", link: "https://www.pinterest.com/" },
      { id: 3, label: "dribbble", link: "https://dribbble.com/" },
    ],
  },
  {
    id: 2,
    img: require("../images/about/team/3.png"),
    name: "Brian Williams",
    designation: "Senior Consultant",
    socialLinks: [
      { id: 0, label: "facebook", link: "https://facebook.com/" },
      { id: 1, label: "twitter", link: "https://twitter.com/" },
      { id: 2, label: "pinterest", link: "https://www.pinterest.com/" },
      { id: 3, label: "dribbble", link: "https://dribbble.com/" },
    ],
  },
  {
    id: 3,
    img: require("../images/about/team/4.png"),
    name: "Samantha Jones",
    designation: "Consultant",
    socialLinks: [
      { id: 0, label: "facebook", link: "https://facebook.com/" },
      { id: 1, label: "twitter", link: "https://twitter.com/" },
      { id: 2, label: "pinterest", link: "https://www.pinterest.com/" },
      { id: 3, label: "dribbble", link: "https://dribbble.com/" },
    ],
  },
];

export { aboutSocialLinks, teamData };
