/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable semi */
module.export = (app) => {
  app.post("/register", (req, res) => {
    res.send({
      message: `Hello ${req.body.email} your user was register! have fun`,
    });
  });
};
