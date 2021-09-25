export interface Payment {
    id: number;
    creditcardnumber: string;
    expirationdate: string;
    CVVcode: string;
}

export const paymentdata  = [
    {
        id:1,
        creditcardnumber: '',
        expirationdate: '',
        CVVcode: ''
    }
];
