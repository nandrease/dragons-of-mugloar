import Noty from "noty";
import router from "@/router";

const actions = {
  errorMessage: (_, message) => {
    new Noty({
      layout: "bottomCenter",
      timeout: 2000,
      theme: "semanticui",
      text: message,
      type: "error"
    }).show();
    if (message === "Game Over") {
      router.push("/");
    }
  },

  successMessage: (_, message) => {
    new Noty({
      layout: "bottomCenter",
      timeout: 2000,
      theme: "semanticui",
      text: message,
      type: "success"
    }).show();
  }
};
export default {
  actions
};
