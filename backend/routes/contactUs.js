const express = require("express");
const router = express.Router();
const Contact = require("../models/contactUs");
router.post("/contact", function (req, res) {
  try {
    const Newcheckout = new Contact({
      fname: req.body.fname,
      email: req.body.email,
      mobile: req.body.mobile,
      address: req.body.address,
      desc: req.body.desc,
    });

  

    Newcheckout.save()
      .then((staff) => {
        res.status(200).json({
          success: true,
          message: " Thank you for your contact us",
          data: staff,
        });
      })
      .catch((error) => {
        res.status(400).json({
          success: false,
          message: " Product Register process error",
          error,
        });
      });
  } catch (err) {
    res.send(err);
  }

});



router.get("/getContact", (req, res) => {
  Contact.find({})
    .exec()
    .then((doctors) => {
      res.json({
        success: true,
        message: "Doctor are Succesfully Deleted",
        data: doctors,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        message: " Deleting process have an error",
        error,
      });
    });
});

module.exports = router;
