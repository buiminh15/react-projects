import { lazy } from "react";

const Home = lazy(() => import("../containers/Home"));
const About = lazy(() => import("../containers/About"));
const ContactUs = lazy(() => import("../containers/ContactUs"));
const Sales = lazy(() => import("../containers/Sales"));
const Service = lazy(() => import("../containers/Service"));
const ThankYou = lazy(() => import("../containers/ThankYou"));
const Webinar = lazy(() => import("../containers/Webinar"));

const routes = [
  {
    path: "/",
    title: "home",
    component: <Home />,
  },
  {
    path: "about",
    title: "about",
    component: <About />,
  },
  {
    path: "service",
    title: "service",
    component: <Service />,
  },
  {
    path: "/thank-you",
    title: "thank you",
    component: <ThankYou />,
  },
  {
    path: "/sales",
    title: "sales",
    component: <Sales />,
  },
  {
    path: "/webinar",
    title: "webinar",
    component: <Webinar />,
  },
  {
    path: "/contact-us",
    title: "contact us",
    component: <ContactUs />,
  },
];

export default routes;
