var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Decorator (eine Funktion)
var CustomerComponent = /** @class */ (function () {
    function CustomerComponent() {
        this.title = 'Überschrift';
        this.subtitle = 'Kunden und so';
        this.customers = [
            {
                "id": 5,
                "name": "Hans",
            },
            {
                "id": 1,
                "name": "Hans",
            },
            {
                "id": 2,
                "name": "Peter",
            },
        ];
    }
    CustomerComponent = __decorate([
        Component({
            template: "\n<h1>{{title}}</h1>\n<p>{{subtitle}}</p>\n"
        }),
        __metadata("design:paramtypes", [])
    ], CustomerComponent);
    return CustomerComponent;
}());
console.log((new CustomerComponent()).render());
function Component(config) {
    return function (classRef) {
        classRef.prototype.render = function () {
            // return config.template.replace('{{title}}', this.title);
            var _this = this;
            var workTemplate = config.template;
            Object.keys(this).forEach(function (prop) {
                workTemplate = workTemplate.replace("{{" + prop + "}}", _this[prop]);
            });
            return workTemplate;
        };
    };
}
//# sourceMappingURL=CustomerComponent.js.map