'use client'
import React, {useEffect} from 'react'
import { RootState, AppDispatch } from '@/redux/store';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';

import { fetchSubCategory } from '@/redux/features/subcategoryslice';



export default function Page({ params }: { params: { category: string } }) {
    const dispatch=useDispatch<AppDispatch>()
    useEffect(()=>{
      dispatch(fetchSubCategory())
    },[])
    const{item}=useSelector((state:RootState)=>state.subcategory)
    console.log(item)
    console.log(params)
    const filterCategory=item.filter((subcategory)=>subcategory.id === params.category)
    console.log(filterCategory)
    return <>
    <div> {params.category}
    {filterCategory.map((products)=>(
        <div>
        <li><Link href={`/product/${params.category}/${products.subcategory}`}>{products.subcategory}</Link></li>
        <img src={products.image}/>
        </div>
    ))}
    
    
    </div>
    </>
  }