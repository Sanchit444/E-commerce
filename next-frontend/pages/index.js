import React from 'react'
import { createClient } from "next-sanity";
import Herobanner from "../component/HeroBanner";
import { FooterBanner, Product } from '@/component';

const index = ({products,bannerData}) => {
  console.log(products);
  return (
    <>
    <Herobanner heroBanner={bannerData.length && bannerData[0]}></Herobanner>
    <div>{products[0].details}</div>
    <div className="products-heading">
      <h2>best selling product</h2>
      <p>speaker of many raiefslkf</p>
    </div>
    <div className='products-container'>
      {products?.map((product)=><Product key={product.id} product={product}/>)}
    </div>
    <FooterBanner footerBanner={bannerData && bannerData[0]}></FooterBanner>
    </>
  )
}
export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "r8fa7k7e",
    dataset: "production",
    useCdn: false
  });
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {
      products,
      bannerData
    }
  }
}



export default index