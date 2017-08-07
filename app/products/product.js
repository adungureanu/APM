"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product = (function () {
    function Product(productId, productName, productCode, releaseDate, price, description, startRating, imageURL) {
        this.productId = productId;
        this.productName = productName;
        this.productCode = productCode;
        this.releaseDate = releaseDate;
        this.price = price;
        this.description = description;
        this.startRating = startRating;
        this.imageURL = imageURL;
    }
    Product.prototype.calculateDiscount = function (percent) {
        return this.price - (this.price * percent / 100);
    };
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=product.js.map