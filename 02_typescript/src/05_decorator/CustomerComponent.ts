interface ICustomer {
    id: number;
    name: string;
}

// Decorator (eine Funktion)
@Component({
    template: `
<h1>{{title}}</h1>
<p>{{subtitle}}</p>
`
}) class CustomerComponent {
    private customers: ICustomer[];

    private title: string;
    private subtitle: string;

    constructor() {
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
        ]
    }
}

console.log((new CustomerComponent()).render());

function Component(config) {
    return (classRef) => {
        classRef.prototype.render = function () {
           // return config.template.replace('{{title}}', this.title);

            let workTemplate = config.template;
            Object.keys(this).forEach( (prop) =>  {
                workTemplate = workTemplate.replace(`{{${prop}}}`, this[prop]);
            });

            return workTemplate;
        }
    }
}

