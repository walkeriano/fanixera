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
  faExpand,
  faLink,
  faArrowUpRightFromSquare,
  faUserSecret,
  faBell,
  faUserShield,
  faUserPen,
  faShieldHalved,
  faLayerGroup,
  faBookmark,
  faDeleteLeft,
  faAt,
  faKey,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";
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
  faExpand,
  faLink,
  faArrowUpRightFromSquare,
  faInstagram,
  faTiktok,
  faUserSecret,
  faBell,
  faGooglePlusG,
  faUserShield,
  faUserPen,
  faShieldHalved,
  faLayerGroup,
  faBookmark,
  faDeleteLeft,
  faAt,
  faKey,
  faXmark,
);
