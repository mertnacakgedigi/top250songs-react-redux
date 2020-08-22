import React from 'react'
import Skeleton from 'react-loading-skeleton';
export default function Loading() {
    return (
    <tbody>
    <td><Skeleton count={20} height={70}/></td> 
    <td><Skeleton count={20} height={70}/></td> 
    <td><Skeleton count={20} height={70}/></td> 
    <td><Skeleton count={20} height={70}/></td> 
    <td><Skeleton count={20} height={70}/></td> 
    <td><Skeleton count={20} height={70}/></td> 
   </tbody>
    )
}
