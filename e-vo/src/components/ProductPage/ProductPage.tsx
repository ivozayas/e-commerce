'use client'
 
import { usePathname } from 'next/navigation'
import ProductLargeContainer from './ProductLargeContainer'
import ProductLargeDescription from './ProductLargeDescription'
import Carousel from './Carousel'
import ProductImages from './ProductImages'
import PageContainer from '../Pages/PageContainer'
import SideList from '../ProductsPage/SideList'
import ProductListContainer from '../ProductsPage/ProductListContainer'
import { product } from '@/hook/useProduct'
import AddToCartButton from './AddToCartButton'
import BuyButtons from './BuyButtons'

export default function ProductPage(){
    const pathname = usePathname(),
          pathnameArr = pathname.split('/')

    return (
        <PageContainer>
            <ProductLargeContainer>
                <div className='h-fit'>
                    <Carousel images={product.images}/>
                    <ProductImages images={product.images}/>
                </div>

                <ProductLargeDescription brand={product.brand} name={product.name} id={product.id} price={product.price} colors={product.colors} categories={product.categories} sizes={product.sizes}>
                    <BuyButtons id={product.id}/>
                </ProductLargeDescription>
            </ProductLargeContainer>

            <div className='hidden xl:flex'>
                <ProductListContainer title='Similar products'>
                    <SideList products={[1,2,3,4,5]}/>
                </ProductListContainer>
            </div> 
        </PageContainer>
    )
}