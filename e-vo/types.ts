type TextWithIcon = {
    text: string,
    icon?: JSX.Element
}

type Product = {
    id: string,
    name: string,
    price: number,
    categories: TextWithIcon[],
    colors: string[],
    images: string[]
}