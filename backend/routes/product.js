const express = require("express");
const router = express.Router();
const validateRegister = require("../validation/ProductVali");
const multer = require("multer");
const Product = require("../models/Product");

const storage = multer.diskStorage({
  destination: function (req, file, next) {
    next(null, "Images/Uploads");
  },
  filename: function (req, file, next) {
    next(null, file.originalname);
  },
});

const fileFilter = (req, file, next) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    next(null, true);
  } else {
    next(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

router.post("/register", upload.single("file"), (req, res) => {

  console.log("req", req.body)
  let media = [];

  // req.files.forEach((files) => {
  //   media.push(files.filename);
  // });

  // let array1 = JSON.parse(req.body.colornames)

  const { errors, isValid } = validateRegister(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  else {

    const NewProduct = new Product({
      ProductId: req.body.product_id,
      ProductName: req.body.product_name,
      product_price: req.body.product_price,
      Catagory: req.body.product_categorie,
      Avaliable_Quantity: req.body.available_quantity,
      Quantity: 1,
      Description: req.body.product_description,
      stock: req.body.stock_alert,
      media: req.file.filename,
    });

    NewProduct.save()
      .then((staff) => {
        res.status(200).json({
          success: true,
          message: " Product Register Success",
        });
      })
      .catch((error) => {
        res.status(400).json({
          success: false,
          message: " Product Register process error",
          error,
        });
      });
  }
});


router.post("/getProductSingle/:id", (req, res) => {
  var id = req.params.id;
  Product.findById(id)
    .sort({ ProductName: -1 })
    .exec()
    .then((user) => {
      res.json({
        success: true,
        message: " Fetch Staffs Successfully",
        data: user,
      });
    })
    .catch((err) => {
      res.json({
        success: false,
        message: "error are during Fetch Staff",
        err,
      });
    });
});


router.get("/getProduct", (req, res) => {
  Product.find()
    .sort({ ProductName: -1 })
    .exec()
    .then((user) => {
      res.json({
        success: true,
        message: " Fetch Staffs Successfully",
        data: user,
      });
    })
    .catch((err) => {
      res.json({
        success: false,
        message: "error are during Fetch Staff",
        err,
      });
    });
});


router.get("/deleteproduct/:id", (req, res) => {
  var id = req.params.id;

  console.log("delete id", id);
  Product.findByIdAndRemove(id)
    .exec()
    .then((doctors) => {
      res.json({
        success: true,
        message: "Product are Succesfully Deleted",
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

router.post("/updateProduct", (req, res) => {
  var id = req.body.id;
  console.log("req body", req.body)
  Product.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        ProductId: req.body.product_id,
        ProductName: req.body.product_name,
        product_price: req.body.product_price,
        Catagory: req.body.product_categorie,
        Avaliable_Quantity: req.body.available_quantity,
        Quantity: req.body.Quantity,
        Description: req.body.product_description,
        stock: req.body.stock_alert,
        // media: req?.file?.filename,
      },
    }
  )
    .exec()
    .then((product) => {
      if (!product) {
        res
          .status(404)
          .json({ success: false, Error: "Product not found for this id" });
      }
      else {
        res
          .status(200)
          .json({ success: true, message: "Product updated" });
      }
    })
    .catch((err) => {
      console.log("Product update Error: ", err);
    });
});





module.exports = router;
