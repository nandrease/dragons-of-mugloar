import Noty from "noty";

const actions = {
  errorMessage: (_, message) => {
    new Noty({
      layout: "bottomCenter",
      timeout: 2000,
      theme: "semanticui",
      text: message,
      type: "error"
    }).show();
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
