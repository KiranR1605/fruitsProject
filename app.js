const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/fruitsDB");

const fruitsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "enter the name of fruit"]
  },
  price: {
    type: Number,
    min: 0
  }
});

const Fruit = mongoose.model("Fruit", fruitsSchema);

const apple = new Fruit({
  name: "apple",
  price: 100
});

const orange = new Fruit({
  name: "orange",
  price: 60
});

const banana = new Fruit({
  name: "banana",
  price: 20
});

// Fruit.insertMany([apple, banana, orange], (err) => {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("success");
//   }
// });

Fruit.find( (err, fruits) => {
  if (err) {
    console.log(err);
  } else {

    mongoose.connection.close();

    fruits.forEach(function(fruit) {
      console.log(fruit.name);
    });
  }
});
