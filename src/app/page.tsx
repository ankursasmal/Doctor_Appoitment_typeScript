// import Image from "next/image";
import Head from 'next/head';

// if style using external file like react
  import style from './style/page.module.css'
 function page() {
   return (
     <div className={style.home}>
         <Head>
        <title>Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     </div>
   )
 }
 
 export default page
 
