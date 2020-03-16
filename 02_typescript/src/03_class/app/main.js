var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product(title, price) {
        this.title = title;
        this.price = price;
    }
    return Product;
}());
var Bekleidung = /** @class */ (function (_super) {
    __extends(Bekleidung, _super);
    function Bekleidung(size, title, price, brand) {
        var _this = _super.call(this, title, price) || this;
        _this.size = size;
        // Typüberprüfung zur Laufzeit fehlt
        //this.size = size;
        //this.brand = brand;
        Reflect.defineProperty(_this, 'brand', {
            value: brand,
            enumerable: true
        });
        console.log(size);
        console.log(_this.size);
        Object.seal(_this);
        return _this;
    }
    Bekleidung.prototype.passtDas = function (s) {
        return s === this.size;
    };
    Object.defineProperty(Bekleidung.prototype, "info", {
        get: function () {
            return Bekleidung.info;
        },
        enumerable: true,
        configurable: true
    });
    //private size: string;
    // private public
    Bekleidung.info = 'Only for testing';
    return Bekleidung;
}(Product));
var b = new Bekleidung('L', 'Hemd', 43, 'Olymp');
//console.log(b.info);
console.log(Bekleidung.info);
console.log(b.size);
console.log(b.passtDas('M'));
//# sourceMappingURL=main.js.map