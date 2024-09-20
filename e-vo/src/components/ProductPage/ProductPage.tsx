'use client'
 
import { usePathname } from 'next/navigation'
import ProductLargeContainer from './ProductLargeContainer'
import ProductLargeDescription from './ProductLargeDescription'
import Carousel from './Carousel'
import ProductImages from './ProductImages'
import PageContainer from '../Pages/PageContainer'
import PageHeader from '../Pages/PageHeader'
import SideList from '../ProductsPage/SideList'
import ProductListContainer from '../ProductsPage/ProductListContainer'

export default function ProductPage(){
    const pathname = usePathname(),
          pathnameArr = pathname.split('/')

    const product: Product = fetchProduct(pathname[pathname.length - 1])

    return (
        <PageContainer>
            <ProductLargeContainer>
                <div className='h-[60vh]'>
                    <Carousel images={product.images}/>
                    <ProductImages images={product.images}/>
                </div>

                <ProductLargeDescription name={product.name} price={product.price} colors={product.colors} categories={product.categories}/>
            </ProductLargeContainer>

            <ProductListContainer title='Similar products'>
                <SideList products={[1,2,3,4,5]}/>
            </ProductListContainer>
        </PageContainer>
    )
}

function fetchProduct(id: string){
    const product: Product = {
        id: 'apsodaposkdas',
        name: "OASIS 2",
        price: 90,
        categories: [
            { text: 'clothes'},
            { text: 'sports' },
            { text: '' }
        ],
        colors: ['red', 'gray'],
        images: [
            '/sneakers-1.jpg',
            '/sneakers-2.jpg',
            '/sneakers-3.jpg',
            '/sneakers-4.jpg',
            '/sneakers-5.jpg',
            '/sneakers-6.jpg'
        ]
    }

    return product
}