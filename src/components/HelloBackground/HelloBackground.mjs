import { HelloWorld } from "../HelloWorld/HelloWorld.mjs";
import { BackgroundColorMixin } from "../../mixins/BackgroundColorMixin/BackgroundColorMixin.mjs";

class HelloBackground extends BackgroundColorMixin(HelloWorld) {}

export { HelloBackground };