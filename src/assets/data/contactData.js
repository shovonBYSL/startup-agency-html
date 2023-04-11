import { callIcon, locationIcon, mailIcon } from "../images/svg/contactIcons";

const contactInfo = [
  {
    id: 0,
    label: "Email Address",
    info: "Info@awardy.com",
    icon: mailIcon,
  },
  {
    id: 1,
    label: "Phone",
    info: "(678) 345-3456",
    icon: callIcon,
  },
  {
    id: 2,
    label: "Our Location",
    info: "29 Street, New York City",
    icon: locationIcon,
  },
];

const maps = [
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15321.711170148381!2d-115.1507843621328!3d36.166724970812446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80beb782a4f57dd1%3A0x3accd5e6d5b379a3!2sLas%20Vegas%2C%20NV%2C%20USA!5e0!3m2!1sen!2sbd!4v1679117463878!5m2!1sen!2sbd",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243569.00469648125!2d-119.89572733596707!3d36.66837588495603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sbd!4v1679118382084!5m2!1sen!2sbd",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10607.515429520472!2d-122.4329363636288!3d37.77519787392829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1679117714877!5m2!1sen!2sbd",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4277.058805282163!2d-74.00944643092939!3d40.71059097429385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1679117755876!5m2!1sen!2sbd",
];

export { contactInfo, maps };
