import { callIcon, mailIcon, mapIcon } from "../images/svg/icons/commonIcons";

const addressData = [
  {
    id: 0,
    icon: callIcon,
    label: "(678) 345-3456",
  },
  {
    id: 1,
    icon: mailIcon,
    label: "info@awardy.com",
  },
  {
    id: 2,
    icon: mapIcon,
    label: `215 road, broklyn street,
    NY 600`,
  },
];

const footerItems = [
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
    label: "Contact",
    link: "/contact-us",
  },
  {
    id: 4,
    label: "Blog",
    link: "/blogs",
  },
];

export { addressData, footerItems };
