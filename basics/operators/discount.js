
var sellingPrice = 199;
var costPrice = 690;


discount = ((costPrice - sellingPrice)/costPrice)  * 100;
betterDiscountPercentage = Math.round(discount); // rounding things up using Math library
console.log("The Discount Percentage is : " +betterDiscountPercentage, "% off");
