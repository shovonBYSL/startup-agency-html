const { github, twitter, dribble } = require("../images/svg/icons/socialIcons");

const navItems = [
  {
    id: 0,
    label: "Home",
    link: "/",
  },
  {
    id: 1,
    label: "About",
    link: "/about-us",
  },
  {
    id: 2,
    label: "Services",
    link: "/services",
  },
  {
    id: 3,
    label: "Blog",
    link: "/blogs",
  },
  {
    id: 4,
    label: "Pages",
    dropdown: [
      {
        id: 0,
        label: "Coming Soon",
        link: "/coming-soon",
      },
      {
        id: 1,
        label: "404 Not found",
        link: "/404",
      },
    ],
  },
  {
    id: 5,
    label: "Contact",
    link: "/contact-us",
  },
];

const socialLinks = [
  {
    id: 0,
    icon: github,
    link: "https://github.com/",
  },
  {
    id: 1,
    icon: twitter,
    link: "https://twitter.com/",
  },
  {
    id: 2,
    icon: dribble,
    link: "https://dribbble.com/",
  },
];

export { navItems, socialLinks };
