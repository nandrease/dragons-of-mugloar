const actions = {
  errorMessage: (_, message) => {
    alert("ERROR: " + message);
  },

  successMessage: (_, message) => {
    alert(message);
  }
};
export default {
  actions
};
