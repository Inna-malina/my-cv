import { toChangePortfolio } from "./modules/toChangePortfolio.js";
import { toChangeScreen } from "./modules/toChangeScreen.js";
import toTranslater from "./modules/toTranslater.js";
import { toMooveBorderLang } from "./modules/toMoveBorderLeng.js";
import { toMooveAnimate } from "./modules/toMooveAnimate.js";
import "./css/index.scss";

toTranslater();
toMooveBorderLang();
toMooveAnimate();
toChangeScreen();
toChangePortfolio();
