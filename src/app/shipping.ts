export interface Shipping {
    id: number;
    name: string;
    // [name: string]:any;
    address: string;
    city: string;
    state: string;
    zip: string;
}

export const shippingdata = [
    {
        id : 1,
        name : "",
        address: "",
        city: "",
        state: "",
        zip: ""
    }
];
// let data: shippingdata = {};