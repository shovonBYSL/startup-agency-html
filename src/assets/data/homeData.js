import {
  advisorSvg,
  clientSvg,
  consultingSvg,
  marketingSvg,
  projectSvg,
  strategySvg,
} from "../images/svg/homeSvg";

const hireUsData = [
  {
    id: 0,
    icon: projectSvg,
    number: 850,
    label: "Running Project",
  },
  {
    id: 1,
    icon: clientSvg,
    number: 4520,
    label: "Happy Clients",
  },
  {
    id: 2,
    icon: advisorSvg,
    number: 1500,
    label: "Advisors",
  },
];

const featureData = [
  {
    id: 0,
    icon: consultingSvg,
    label: "Enterprise Consulting",
    details:
      "Our Consulting staff is beyond experienced. This means not just in IFS Applications, but our customer’s business as well.",
  },
  {
    id: 1,
    icon: strategySvg,
    label: "Strategy & Planning",
    details:
      "We dive deep into your brand, market and product positioning, to develop insights to design and test an effective campaign.",
  },
  {
    id: 2,
    icon: marketingSvg,
    label: "Marketing Research",
    details:
      "Our analytics and analysis help fine-tune every process for better performance. We test and tweak everything. It’s in our DNA",
  },
];

const testimonialData = [
  {
    id: 0,
    img: require("../images/home/testimonial/0.png"),
    name: "Richardson",
    type: "Intelli User",
    comment:
      "Most designers live in some sort of alternate to reality, creating unnecessary things for each other. Then they become trends.",
    rating: 5,
  },
  {
    id: 1,
    img: require("../images/home/testimonial/1.png"),
    name: "Robert Hook",
    type: "Intelli User",
    comment:
      "Most designers live in some sort of alternate to reality, creating unnecessary things for each other. Then they become trends.",
    rating: 4,
  },
  {
    id: 2,
    img: require("../images/home/testimonial/2.png"),
    name: "Glen Hovdal",
    type: "Intelli User",
    comment:
      "Most designers live in some sort of alternate to reality, creating unnecessary things for each other. Then they become trends.",
    rating: 5,
  },
  {
    id: 3,
    img: require("../images/home/testimonial/3.png"),
    name: "Wraus Marus",
    type: "Intelli User",
    comment:
      "Most designers live in some sort of alternate to reality, creating unnecessary things for each other. Then they become trends.",
    rating: 4,
  },
  {
    id: 4,
    img: require("../images/home/testimonial/4.png"),
    name: "Robert Hook",
    type: "Intelli User",
    comment:
      "Most designers live in some sort of alternate to reality, creating unnecessary things for each other. Then they become trends.",
    rating: 5,
  },
  {
    id: 5,
    img: require("../images/home/testimonial/5.png"),
    name: "Donald Fasue",
    type: "Intelli User",
    comment:
      "Most designers live in some sort of alternate to reality, creating unnecessary things for each other. Then they become trends.",
    rating: 4,
  },
];

export { hireUsData, featureData, testimonialData };
