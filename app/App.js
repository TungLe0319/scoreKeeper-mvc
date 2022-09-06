import { SnackController} from "./Controllers/SnackController.js";

class App {
  // NOTE comment out values controller once you have one of your own
  // valuesController = new ValuesController();
  // USED new .this SnackController and it didn't work.
  SnackController = new SnackController()
}

window["app"] = new App();
