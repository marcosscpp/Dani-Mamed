import initializeIcons from "./modules/init-icons";
import SmoothScroll from "./modules/smooth-scroll";

import AOS from 'aos';
import 'aos/dist/aos.css';

import BasicForm from "./modules/form";

initializeIcons();
const smoothsCroll = new SmoothScroll("a[href^='#']").init()
AOS.init();

const basicForm = new BasicForm("[data-basic-form]")
