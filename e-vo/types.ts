type TextWithIcon = {
    text: string,
    icon?: JSX.Element
}

type Size = {
    size: number | "XS" | "S" | "M" | "L" | "XL" | "XXL",
    stock: number
}

type Product = {
    id: string,
    name: string,
    brand: string,
    price: number,
    categories: string[],
    colors: string[],
    images: string[],
    sizes: Size[]
}