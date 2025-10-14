import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import Product from "./models/product.model.js";

dotenv.config();
connectDB();

const products = [
  {name:"Women Round Neck Cotton Top", description:"A lightweight, usually knitted, pullover shirt...", price:100, image:["/images/p_img1.jpg"], category:"Women", subCategory:"Topwear", sizes:["S","M","L"], date:1716634345448, bestseller:true},
  {name:"Men Round Neck Pure Cotton T-shirt", description:"A lightweight, usually knitted, pullover shirt...", price:200, image:["/images/p_img2_1.jpg","/images/p_img2_2.jpg","/images/p_img2_3.jpg","/images/p_img2_4.jpg"], category:"Men", subCategory:"Topwear", sizes:["M","L","XL"], date:1716621345448, bestseller:true},
  {name:"Girls Round Neck Cotton Top", description:"A lightweight, usually knitted, pullover shirt...", price:220, image:["/images/p_img3.jpg"], category:"Kids", subCategory:"Topwear", sizes:["S","L","XL"], date:1716234545448, bestseller:true},
  {name:"Men Round Neck Pure Cotton T-shirt", description:"A lightweight, usually knitted, pullover shirt...", price:110, image:["/images/p_img4.jpg"], category:"Men", subCategory:"Topwear", sizes:["S","M","XXL"], date:1716621345448, bestseller:true},
  {name:"Women Round Neck Cotton Top", description:"A lightweight, usually knitted, pullover shirt...", price:130, image:["/images/p_img5.jpg"], category:"Women", subCategory:"Topwear", sizes:["M","L","XL"], date:1716622345448, bestseller:true},
  {name:"Girls Round Neck Cotton Top", description:"A lightweight, usually knitted, pullover shirt...", price:140, image:["/images/p_img6.jpg"], category:"Kids", subCategory:"Topwear", sizes:["S","L","XL"], date:1716623423448, bestseller:true},
  {name:"Men Tapered Fit Flat-Front Trousers", description:"A lightweight, usually knitted, pullover shirt...", price:190, image:["/images/p_img7.jpg"], category:"Men", subCategory:"Bottomwear", sizes:["S","L","XL"], date:1716621542448, bestseller:false},
  {name:"Men Round Neck Pure Cotton T-shirt", description:"A lightweight, usually knitted, pullover shirt...", price:140, image:["/images/p_img8.jpg"], category:"Men", subCategory:"Topwear", sizes:["S","M","L","XL"], date:1716622345448, bestseller:false},
  {name:"Girls Round Neck Cotton Top", description:"A lightweight, usually knitted, pullover shirt...", price:100, image:["/images/p_img9.jpg"], category:"Kids", subCategory:"Topwear", sizes:["M","L","XL"], date:1716621235448, bestseller:false},
  {name:"Men Tapered Fit Flat-Front Trousers", description:"A lightweight, usually knitted, pullover shirt...", price:110, image:["/images/p_img10.jpg"], category:"Men", subCategory:"Bottomwear", sizes:["S","L","XL"], date:1716622235448, bestseller:false},
  {name:"Men Round Neck Pure Cotton T-shirt", description:"A lightweight, usually knitted, pullover shirt...", price:120, image:["/images/p_img11.jpg"], category:"Men", subCategory:"Topwear", sizes:["S","M","L"], date:1716623345448, bestseller:false},
  {name:"Men Round Neck Pure Cotton T-shirt", description:"A lightweight, usually knitted, pullover shirt...", price:150, image:["/images/p_img12.jpg"], category:"Men", subCategory:"Topwear", sizes:["S","M","L","XL"], date:1716624445448, bestseller:false},
  {name:"Women Round Neck Cotton Top", description:"A lightweight, usually knitted, pullover shirt...", price:130, image:["/images/p_img13.jpg"], category:"Women", subCategory:"Topwear", sizes:["S","M","L","XL"], date:1716625545448, bestseller:false},
  {name:"Boy Round Neck Pure Cotton T-shirt", description:"A lightweight, usually knitted, pullover shirt...", price:160, image:["/images/p_img14.jpg"], category:"Kids", subCategory:"Topwear", sizes:["S","M","L","XL"], date:1716626645448, bestseller:false},
  {name:"Men Tapered Fit Flat-Front Trousers", description:"A lightweight, usually knitted, pullover shirt...", price:140, image:["/images/p_img15.jpg"], category:"Men", subCategory:"Bottomwear", sizes:["S","M","L","XL"], date:1716627745448, bestseller:false},
  {name:"Girls Round Neck Cotton Top", description:"A lightweight, usually knitted, pullover shirt...", price:170, image:["/images/p_img16.jpg"], category:"Kids", subCategory:"Topwear", sizes:["S","M","L","XL"], date:1716628845448, bestseller:false},
  {name:"Men Tapered Fit Flat-Front Trousers", description:"A lightweight, usually knitted, pullover shirt...", price:150, image:["/images/p_img17.jpg"], category:"Men", subCategory:"Bottomwear", sizes:["S","M","L","XL"], date:1716629945448, bestseller:false},
  {name:"Boy Round Neck Pure Cotton T-shirt", description:"A lightweight, usually knitted, pullover shirt...", price:180, image:["/images/p_img18.jpg"], category:"Kids", subCategory:"Topwear", sizes:["S","M","L","XL"], date:1716631045448, bestseller:false},
  {name:"Boy Round Neck Pure Cotton T-shirt", description:"A lightweight, usually knitted, pullover shirt...", price:160, image:["/images/p_img19.jpg"], category:"Kids", subCategory:"Topwear", sizes:["S","M","L","XL"], date:1716632145448, bestseller:false},
  {name:"Women Palazzo Pants with Waist Belt", description:"A lightweight, usually knitted, pullover shirt...", price:190, image:["/images/p_img20.jpg"], category:"Women", subCategory:"Bottomwear", sizes:["S","M","L","XL"], date:1716633245448, bestseller:false},
  {name:"Women Zip-Front Relaxed Fit Jacket", description:"A lightweight, usually knitted, pullover shirt...", price:170, image:["/images/p_img21.jpg"], category:"Women", subCategory:"Winterwear", sizes:["S","M","L","XL"], date:1716634345448, bestseller:false},
  {name:"Women Palazzo Pants with Waist Belt", description:"A lightweight, usually knitted, pullover shirt...", price:200, image:["/images/p_img22.jpg"], category:"Women", subCategory:"Bottomwear", sizes:["S","M","L","XL"], date:1716635445448, bestseller:false},
  {name:"Boy Round Neck Pure Cotton T-shirt", description:"A lightweight, usually knitted, pullover shirt...", price:180, image:["/images/p_img23.jpg"], category:"Kids", subCategory:"Topwear", sizes:["S","M","L","XL"], date:1716636545448, bestseller:false},
  {name:"Boy Round Neck Pure Cotton T-shirt", description:"A lightweight, usually knitted, pullover shirt...", price:210, image:["/images/p_img24.jpg"], category:"Kids", subCategory:"Topwear", sizes:["S","M","L","XL"], date:1716637645448, bestseller:false},
  {name:"Girls Round Neck Cotton Top", description:"A lightweight, usually knitted, pullover shirt...", price:190, image:["/images/p_img25.jpg"], category:"Kids", subCategory:"Topwear", sizes:["S","M","L","XL"], date:1716638745448, bestseller:false},
  {name:"Women Zip-Front Relaxed Fit Jacket", description:"A lightweight, usually knitted, pullover shirt...", price:220, image:["/images/p_img26.jpg"], category:"Women", subCategory:"Winterwear", sizes:["S","M","L","XL"], date:1716639845448, bestseller:false},
  {name:"Girls Round Neck Cotton Top", description:"A lightweight, usually knitted, pullover shirt...", price:200, image:["/images/p_img27.jpg"], category:"Kids", subCategory:"Topwear", sizes:["S","M","L","XL"], date:1716640945448, bestseller:false},
  {name:"Men Slim Fit Relaxed Denim Jacket", description:"A lightweight, usually knitted, pullover shirt...", price:230, image:["/images/p_img28.jpg"], category:"Men", subCategory:"Winterwear", sizes:["S","M","L","XL"], date:1716642045448, bestseller:false},
  {name:"Women Round Neck Cotton Top", description:"A lightweight, usually knitted, pullover shirt...", price:210, image:["/images/p_img29.jpg"], category:"Women", subCategory:"Topwear", sizes:["S","M","L","XL"], date:1716643145448, bestseller:false},
  {name:"Girls Round Neck Cotton Top", description:"A lightweight, usually knitted, pullover shirt...", price:240, image:["/images/p_img30.jpg"], category:"Kids", subCategory:"Topwear", sizes:["S","M","L","XL"], date:1716644245448, bestseller:false},
  {name:"Men Round Neck Pure Cotton T-shirt", description:"A lightweight, usually knitted, pullover shirt...", price:220, image:["/images/p_img31.jpg"], category:"Men", subCategory:"Topwear", sizes:["S","M","L","XL"], date:1716645345448, bestseller:false},
  {name:"Men Round Neck Pure Cotton T-shirt", description:"A lightweight, usually knitted, pullover shirt...", price:250, image:["/images/p_img32.jpg"], category:"Men", subCategory:"Topwear", sizes:["S","M","L","XL"], date:1716646445448, bestseller:false},
  {name:"Girls Round Neck Cotton Top", description:"A lightweight, usually knitted, pullover shirt...", price:230, image:["/images/p_img33.jpg"], category:"Kids", subCategory:"Topwear", sizes:["S","M","L","XL"], date:1716647545448, bestseller:false},
  {name:"Women Round Neck Cotton Top", description:"A lightweight, usually knitted, pullover shirt...", price:260, image:["/images/p_img34.jpg"], category:"Women", subCategory:"Topwear", sizes:["S","M","L","XL"], date:1716648645448, bestseller:false},
  {name:"Men Tapered Fit Flat-Front Trousers", description:"A lightweight, usually knitted, pullover shirt...", price:270, image:["/images/p_img35.jpg"], category:"Men", subCategory:"Bottomwear", sizes:["S","M","L","XL"], date:1716649745448, bestseller:false},
  {name:"Men Slim Fit Relaxed Denim Jacket", description:"A lightweight, usually knitted, pullover shirt...", price:290, image:["/images/p_img36.jpg"], category:"Men", subCategory:"Winterwear", sizes:["S","M","L","XL"], date:1716650845448, bestseller:false},
  {name:"Women Zip-Front Relaxed Fit Jacket", description:"A lightweight, usually knitted, pullover shirt...", price:310, image:["/images/p_img37.jpg"], category:"Women", subCategory:"Winterwear", sizes:["S","M","L","XL"], date:1716651945448, bestseller:false},
  {name:"Girls Round Neck Cotton Top", description:"A lightweight, usually knitted, pullover shirt...", price:280, image:["/images/p_img38.jpg"], category:"Kids", subCategory:"Topwear", sizes:["S","M","L","XL"], date:1716653045448, bestseller:false},
  {name:"Boy Round Neck Pure Cotton T-shirt", description:"A lightweight, usually knitted, pullover shirt...", price:300, image:["/images/p_img39.jpg"], category:"Kids", subCategory:"Topwear", sizes:["S","M","L","XL"], date:1716654145448, bestseller:false},
  {name:"Women Palazzo Pants with Waist Belt", description:"A lightweight, usually knitted, pullover shirt...", price:320, image:["/images/p_img40.jpg"], category:"Women", subCategory:"Bottomwear", sizes:["S","M","L","XL"], date:1716655245448, bestseller:false},
  {name:"Women Round Neck Cotton Top", description:"A lightweight, usually knitted, pullover shirt...", price:330, image:["/images/p_img41.jpg"], category:"Women", subCategory:"Topwear", sizes:["S","M","L","XL"], date:1716656345448, bestseller:false},
  {name:"Men Round Neck Pure Cotton T-shirt", description:"A lightweight, usually knitted, pullover shirt...", price:350, image:["/images/p_img42.jpg"], category:"Men", subCategory:"Topwear", sizes:["S","M","L","XL"], date:1716657445448, bestseller:false},
  {name:"Girls Round Neck Cotton Top", description:"A lightweight, usually knitted, pullover shirt...", price:340, image:["/images/p_img43.jpg"], category:"Kids", subCategory:"Topwear", sizes:["S","M","L","XL"], date:1716658545448, bestseller:false},
  {name:"Men Slim Fit Relaxed Denim Jacket", description:"A lightweight, usually knitted, pullover shirt...", price:360, image:["/images/p_img44.jpg"], category:"Men", subCategory:"Winterwear", sizes:["S","M","L","XL"], date:1716659645448, bestseller:false},
  {name:"Women Zip-Front Relaxed Fit Jacket", description:"A lightweight, usually knitted, pullover shirt...", price:380, image:["/images/p_img45.jpg"], category:"Women", subCategory:"Winterwear", sizes:["S","M","L","XL"], date:1716660745448, bestseller:false},
  {name:"Boy Round Neck Pure Cotton T-shirt", description:"A lightweight, usually knitted, pullover shirt...", price:400, image:["/images/p_img46.jpg"], category:"Kids", subCategory:"Topwear", sizes:["S","M","L","XL"], date:1716661845448, bestseller:false},
  {name:"Girls Round Neck Cotton Top", description:"A lightweight, usually knitted, pullover shirt...", price:410, image:["/images/p_img47.jpg"], category:"Kids", subCategory:"Topwear", sizes:["S","M","L","XL"], date:1716662945448, bestseller:false},
  {name:"Women Palazzo Pants with Waist Belt", description:"A lightweight, usually knitted, pullover shirt...", price:420, image:["/images/p_img48.jpg"], category:"Women", subCategory:"Bottomwear", sizes:["S","M","L","XL"], date:1716664045448, bestseller:false},
  {name:"Women Round Neck Cotton Top", description:"A lightweight, usually knitted, pullover shirt...", price:430, image:["/images/p_img49.jpg"], category:"Women", subCategory:"Topwear", sizes:["S","M","L","XL"], date:1716665145448, bestseller:false},
  {name:"Men Round Neck Pure Cotton T-shirt", description:"A lightweight, usually knitted, pullover shirt...", price:440, image:["/images/p_img50.jpg"], category:"Men", subCategory:"Topwear", sizes:["S","M","L","XL"], date:1716666245448, bestseller:false},
  {name:"Girls Round Neck Cotton Top", description:"A lightweight, usually knitted, pullover shirt...", price:450, image:["/images/p_img51.jpg"], category:"Kids", subCategory:"Topwear", sizes:["S","M","L","XL"], date:1716667345448, bestseller:false},
  {name:"Men Slim Fit Relaxed Denim Jacket", description:"A lightweight, usually knitted, pullover shirt...", price:460, image:["/images/p_img52.jpg"], category:"Men", subCategory:"Winterwear", sizes:["S","M","L","XL"], date:1716668445448, bestseller:false}
];

const seedProducts = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log("✅ Products seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
};

seedProducts();
