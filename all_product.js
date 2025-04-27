import men_1 from './men_1.webp'
import men_2 from './men_2.jpg'
import men_3 from './men_3.jpg'
import men_4 from './men_4.jpg'
import men_5 from './men_5.jpg'
import men_6 from './men_6.jpeg'
import men_7 from './men_7.webp'
import men_8 from './men_8.webp'
import men_9 from './men_9.webp'
import men_10 from './men_10.jpg'
import men_11 from './men_11.jpg'
import men_12 from './men_12.jpg'
import men_13 from './men_13.jpg'
import men_14 from './men_14.webp'
import men_15 from './men_15.avif'
import men_16 from './men_16.jpeg'
import men_17 from './men_17.jpg'
import men_18 from './men_18.jpg'

import women_1 from './women_1.webp'
import women_2 from './women_2.webp'
import women_3 from './women_3.webp'
import women_4 from './women_4.webp'
import women_5 from './women_5.webp'
import women_6 from './women_6.webp'
import women_7 from './women_7.jpeg'
import women_8 from './women_8.jpeg'
import women_9 from './women_9.jpg'
import women_10 from './women_10.jpg'
import women_11 from './women_11.webp'
import women_12 from './women_12.webp'
import women_13 from './women_13.webp'
import women_14 from './women_14.webp'
import women_15 from './women_15.webp'
import women_16 from './women_16.webp'
import women_17 from './women_17.jpg'
import women_18 from './women_18.webp'


import kid_1 from './kid_1.jpeg'
import kid_2 from './kid_2.jpeg'
import kid_3 from './kid_3.jpg'
import kid_4 from './kid_4.jpg'
import kid_5 from './kid_5.jpg'
import kid_6 from './kid_6.jpg'
import kid_7 from './kid_7.webp'
import kid_8 from './kid_8.webp'
import kid_9 from './kid_9.webp'
import kid_10 from './kid_10.webp'




let all_product = [
   //mens's product
    {id:1, name:"Casual clothes for men", image:men_1, new_price:50.00, old_price:80.00, category:"mens"},
    {id:2, name:"Casual clothes for men", image:men_2, new_price:50.00, old_price:80.00, category:"mens"},
    {id:3, name:"Casual clothes for men", image:men_3, new_price:50.00, old_price:80.00, category:"mens"},
    {id:4, name:"Casual clothes for men", image:men_4, new_price:50.00, old_price:80.00, category:"mens"},
    {id:5, name:"Casual clothes for men", image:men_5, new_price:50.00, old_price:80.00, category:"mens"},
    {id:6, name:"Casual clothes for men", image:men_6, new_price:50.00, old_price:80.00, category:"mens"},
    {id:7, name:"Casual clothes for men", image:men_7, new_price:50.00, old_price:80.00, category:"mens"},
    {id:8, name:"Casual clothes for men", image:men_8, new_price:50.00, old_price:80.00, category:"mens"},
    {id:9, name:"Casual clothes for men", image:men_9, new_price:50.00, old_price:80.00, category:"mens"},
    {id:10, name:"Casual clothes for men", image:men_10, new_price:50.00, old_price:80.00, category:"mens"},
    {id:11, name:"Casual clothes for men", image:men_11, new_price:50.00, old_price:80.00, category:"mens"},
    {id:12, name:"Casual clothes for men", image:men_12, new_price:50.00, old_price:80.00, category:"mens"},
    {id:13, name:"Casual clothes for men", image:men_13, new_price:50.00, old_price:80.00, category:"mens"},
    {id:14, name:"Casual clothes for men", image:men_14, new_price:50.00, old_price:80.00, category:"mens"},
    {id:15, name:"Casual clothes for men", image:men_15, new_price:50.00, old_price:80.00, category:"mens"},
    {id:16, name:"Casual clothes for men", image:men_16, new_price:50.00, old_price:80.00, category:"mens"},
    {id:17, name:"Casual clothes for men", image:men_17, new_price:50.00, old_price:80.00, category:"mens"},
    {id:18, name:"Casual clothes for men", image:men_18, new_price:50.00, old_price:80.00, category:"mens"},

    // Women's products 
    {id:19, name:"Casual clothes for women", image:women_1, new_price:50.00, old_price:80.00, category:"womens"},
    {id:20, name:"Casual clothes for women", image:women_2, new_price:50.00, old_price:80.00, category:"womens"},
    {id:21, name:"Casual clothes for women", image:women_3, new_price:50.00, old_price:80.00, category:"womens"},
    {id:22, name:"Casual clothes for women", image:women_4, new_price:50.00, old_price:80.00, category:"womens"},
    {id:23, name:"Casual clothes for women", image:women_5, new_price:50.00, old_price:80.00, category:"womens"},
    {id:24, name:"Casual clothes for women", image:women_6, new_price:50.00, old_price:80.00, category:"womens"},
    {id:25, name:"Casual clothes for women", image:women_7, new_price:50.00, old_price:80.00, category:"womens"},
    {id:26, name:"Casual clothes for women", image:women_8, new_price:50.00, old_price:80.00, category:"womens"},
    {id:27, name:"Casual clothes for women", image:women_9, new_price:50.00, old_price:80.00, category:"womens"},
    {id:28, name:"Casual clothes for women", image:women_10, new_price:50.00, old_price:80.00, category:"womens"},
    {id:29, name:"Casual clothes for women", image:women_11, new_price:50.00, old_price:80.00, category:"womens"},
    {id:30, name:"Casual clothes for women", image:women_12, new_price:50.00, old_price:80.00, category:"womens"},
    {id:31, name:"Casual clothes for women", image:women_13, new_price:50.00, old_price:80.00, category:"womens"},
    {id:32, name:"Casual clothes for women", image:women_14, new_price:50.00, old_price:80.00, category:"womens"},
    {id:33, name:"Casual clothes for women", image:women_15, new_price:50.00, old_price:80.00, category:"womens"},
    {id:34, name:"Casual clothes for women", image:women_16, new_price:50.00, old_price:80.00, category:"womens"},
    {id:35, name:"Casual clothes for women", image:women_17, new_price:50.00, old_price:80.00, category:"womens"},
    {id:36, name:"Casual clothes for women", image:women_18, new_price:50.00, old_price:80.00, category:"womens"},

    // Kids' products 
    {id:37, name:"Casual clothes for kids", image:kid_1, new_price:50.00, old_price:80.00, category:"kids"},
    {id:38, name:"Casual clothes for kids", image:kid_2, new_price:50.00, old_price:80.00, category:"kids"},
    {id:39, name:"Casual clothes for kids", image:kid_3, new_price:50.00, old_price:80.00, category:"kids"},
    {id:40, name:"Casual clothes for kids", image:kid_4, new_price:50.00, old_price:80.00, category:"kids"},
    {id:41, name:"Casual clothes for kids", image:kid_5, new_price:50.00, old_price:80.00, category:"kids"},
    {id:42, name:"Casual clothes for kids", image:kid_6, new_price:50.00, old_price:80.00, category:"kids"},
    {id:43, name:"Casual clothes for kids", image:kid_7, new_price:50.00, old_price:80.00, category:"kids"},
    {id:44, name:"Casual clothes for kids", image:kid_8, new_price:50.00, old_price:80.00, category:"kids"},
    {id:45, name:"Casual clothes for kids", image:kid_9, new_price:50.00, old_price:80.00, category:"kids"},
    {id:46, name:"Casual clothes for kids", image:kid_10, new_price:50.00, old_price:80.00, category:"kids"}
];

export default all_product;