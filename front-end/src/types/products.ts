export interface Products {
    author: Author;
    categories: string[];
    items: Item[];
}

export interface Author {
    lastname: string;
    name: string;
}

export interface Item {
    condition: string;
    free_shipping: boolean;
    id: string;
    picture: string;
    price: Price;
    title: string;
}

export interface Price {
    amount: number;
    currency: string;
    decimals: number;
}