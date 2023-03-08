import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 3, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", iconClass: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", iconClass: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", iconClass: "fab fa-squarespace" },
];

export const services = [
  { id: 1, itemClass: "fas fa-wallet fa-fw", title: "saving money" },
  { id: 1, itemClass: "fas fa-tree fa-fw", title: "endless hiking" },
  { id: 1, itemClass: "fas fa-socks fa-fw", title: "amazing comfort" },
];

export const tours = [
  {
    id: 1,
    img: tour1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    des: "china",
    duration: "6 days",
    price: "from $2100",
  },
  {
    id: 2,
    img: tour2,
    date: "october 1th, 2020",
    title: "best of java",
    des: "indonesia",
    duration: "11 days",
    price: "from $1400",
  },
  {
    id: 3,
    img: tour3,
    date: "september 15th, 2020",
    title: "explore hong kong",
    des: "hong kong",
    duration: "8 days",
    price: "from $5000",
  },
  {
    id: 4,
    img: tour4,
    date: "december 5th, 2019",
    title: "kenya highlights",
    des: "kenya",
    duration: "20 days",
    price: "from $3300",
  },
];
