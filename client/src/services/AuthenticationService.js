/* eslint-disable comma-dangle */
/* eslint-disable space-before-function-paren */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
// eslint-disable-next-line to ignore the next line.
/* eslint-disable */
import Api from "@/services/api.js";
const credentials = { email: "testing@gmail.com", password: "123456" };
const AuthenticationService = {
  register() {
    return Api().post("register", credentials);
  }
};

// // AuthenticationService.register({
// //   email: "testing@gmail.com",
// //   password: "123456"
// // });
// export default {
//   register(credentials) {
//     return Api().post("register", credentials);
//   }
// };
export default AuthenticationService;
