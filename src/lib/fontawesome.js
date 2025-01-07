// lib/fontawesome.js
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faArrowRightArrowLeft,
  faCalendarCheck,
  faChevronDown,
  faFlagCheckered,
  faClockRotateLeft,
  faLocationCrosshairs,
  faExpand
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false; // Evita que FontAwesome inserte CSS automáticamente

library.add(
  faUser,
  faFacebook,
  faArrowRightArrowLeft,
  faCalendarCheck,
  faChevronDown,
  faFlagCheckered,
  faClockRotateLeft,
  faLocationCrosshairs,
  faExpand
);
