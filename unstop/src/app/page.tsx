// import Image from "next/image";
import React from 'react';
import '../css/page.css';
import Image from 'next/image';
export default function Home () {
  // function handleClick() {
  //   alert('Button clicked!');
  // }
  // const handleClick = () =>{
  //   alert('notification sent!');
  // }
  return(
    <>
    <div className = "main-div" >
        <p className='h'>Lorem Ipsum...</p>
        <p className='p1'>Lorem ipsum dolor sit amet lorem s.</p>
        <Image src='/bell.jpg' alt='no image' className='im1' width={100} height={100} />
        <div><button  className='b1'>Send notification</button></div>
    </div>
    </>
  )
}