export interface ProductDetail {
    author: Author;
    item: Item;
}

export interface Author {
    lastname: string;
    name: string;
}

export interface Item {
    condition: string;
    description: string;
    free_shipping: boolean;
    id: string;
    picture: string;
    price: Price;
    sold_quantity: number;
    title: string;
    category: string;
}

export interface Price {
    amount: number;
    currency: string;
    decimals: number;
}
