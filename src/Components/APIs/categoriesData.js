import shoes from "./Images/shoes.jpg";
import bags from "./Images/bags.jpg";
import necklace from "./Images/necklace.jpg";
import neckBag from "./Images/neck bag.jpg";
import waist from "./Images/waist.jpg";
import heels from "./Images/heels.jpg";
import GCooker from "./Images/gasCooker.jpg";
import shelf from "./Images/shelf.jpg";
import drive from "./Images/drive.png";
import strap from "./Images/strap.png";
import cap from "./Images/cap.png";
import shirt from "./Images/shirt.png";
import fryPan from "./Images/fryPans.jpg";
import wrist from "./Images/wrist.jpg";
import sleeve from "./Images/sleeve.jpg";
import bras from "./Images/bra's.jpg";
import coffee from "./Images/coffee.jpg";
import cups from "./Images/cups.jpg";
import undies from "./Images/undies.jpg";
import lady from "./Images/lady.png";
import hair from "./Images/hair.jpg";
import hanger from "./Images/hanger.jpg";

export const Data = [
    {id:1, category:"Fashion", element:{        
        deals:[
            {id:1,deal:{txtA:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea delectus ut quam saepe earum in dolorem necessitatibus....", 
                txtB:"text1", txtC:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea delectus ut quam saepe earum in dolorem necessitatibus....", 
                txtD:"text2", img1:strap, img2:drive, link:""}},
            {id:2,deal:{txtA:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea delectus ut quam saepe earum in dolorem necessitatibus....", 
                txtB:"text1", txtC:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea delectus ut quam saepe earum in dolorem necessitatibus....", 
                txtD:"text2", img1:shirt, img2:cap, link:""}}
        ],
        topProducts:[
            {id:1,product:{
                categoryProduct:"Clothes",
                image:[
                    {id:1,img:shirt}, 
                    {id:2,img:sleeve},
                    {id:3,img:bras}, 
                    {id:4,img:undies}, 
                    {id:5,img:lady}, 
                    {id:6,img:shirt}
                ],
                link:"/products/clothes"
            }},
            {id:2,product:{
                categoryProduct:"Shoes", 
                image:[
                    {id:1, img:shoes}, 
                    {id:2, img:heels}, 
                    {id:3, img:shoes}, 
                    {id:4, img:shoes}, 
                    {id:5, img:shoes}, 
                    {id:6, img:shoes}
                ],
                link:"/products/shoes"
            }},
            {id:3,product:{
                categoryProduct:"Bags", 
                image:[
                    {id:1, img:bags}, 
                    {id:2, img:neckBag}, 
                    {id:3, img:bags}, 
                    {id:4, img:bags}, 
                    {id:5, img:bags}, 
                    {id:6, img:bags}
                ],
                link:"/products/bags"
            }},
            {id:4,product:{
                categoryProduct:"Wrist Watches", 
                image:[
                    {id:1, img:wrist}, 
                    {id:2, img:wrist}, 
                    {id:3, img:wrist}, 
                    {id:4, img:wrist}, 
                    {id:5, img:wrist}, 
                    {id:6, img:wrist}
                ],
                link:"/products/wristWatches"
            }},
            {id:5,product:{
                categoryProduct:"Necklace", 
                image:[
                    {id:1, img:necklace}, 
                    {id:2, img:necklace}, 
                    {id:3, img:necklace}, 
                    {id:4, img:necklace}, 
                    {id:5, img:necklace}, 
                    {id:6, img:necklace}
                ],
                link:"/products/Necklace"
            }},
            {id:6,product:{
                categoryProduct:"Glasses",
                image:[
                    {id:1, img:neckBag}, 
                    {id:2, img:neckBag}, 
                    {id:3, img:neckBag}, 
                    {id:4, img:neckBag}, 
                    {id:5, img:neckBag}, 
                    {id:6, img:neckBag}
                ], 
                link:"/products/Glasses"
            }},
            {id:7,product:{
                categoryProduct:"Bangles",
                image:[
                    {id:1, img:GCooker}, 
                    {id:2, img:GCooker}, 
                    {id:3, img:GCooker}, 
                    {id:4, img:GCooker}, 
                    {id:5, img:GCooker}, 
                    {id:6, img:GCooker}
                ], 
                link:"/products/Bangles"
            }},
            {id:8,product:{
                categoryProduct:"Ear Rings", 
                image:[
                    {id:1, img:shelf}, 
                    {id:2, img:shelf}, 
                    {id:3, img:shelf}, 
                    {id:4, img:shelf}, 
                    {id:5, img:shelf}, 
                    {id:6, img:shelf}
                ],
                link:"/products/EarRings"
            }}
        ]       
    }},



    {id:2, category:"Bproducts", element:{        
        deals:[
            {id:1,deal:{txtA:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea delectus ut quam saepe earum in dolorem necessitatibus....", 
                txtB:"text1", txtC:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea delectus ut quam saepe earum in dolorem necessitatibus....", 
                txtD:"text2", img1:strap, img2:drive, link:""}},
            {id:2,deal:{txtA:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea delectus ut quam saepe earum in dolorem necessitatibus....", 
                txtB:"text1", txtC:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea delectus ut quam saepe earum in dolorem necessitatibus....", 
                txtD:"text2", img1:shirt, img2:cap, link:""}}
        ],
        topProducts:[
            {id:1,product:{
                categoryProduct:"Diapers",
                image:[
                    {id:1,img:shirt}, 
                    {id:2,img:sleeve},
                    {id:3,img:bras}, 
                    {id:4,img:hanger}, 
                    {id:5,img:lady}, 
                    {id:6,img:shirt}
                ],
                link:"/products/diapers"
            }},
            {id:2,product:{
                categoryProduct:"Baby Cream", 
                image:[
                    {id:1, img:shoes}, 
                    {id:2, img:heels}, 
                    {id:3, img:shoes}, 
                    {id:4, img:shoes}, 
                    {id:5, img:shoes}, 
                    {id:6, img:shoes}
                ],
                link:"/products/shoes"
            }},
            {id:3,product:{
                categoryProduct:"Bags", 
                image:[
                    {id:1, img:bags}, 
                    {id:2, img:neckBag}, 
                    {id:3, img:coffee}, 
                    {id:4, img:bags}, 
                    {id:5, img:bags}, 
                    {id:6, img:bags}
                ],
                link:"/products/bags"
            }},
            {id:4,product:{
                categoryProduct:"Wrist Watches", 
                image:[
                    {id:1, img:cups}, 
                    {id:2, img:wrist}, 
                    {id:3, img:wrist}, 
                    {id:4, img:wrist}, 
                    {id:5, img:wrist}, 
                    {id:6, img:wrist}
                ],
                link:"/products/wristWatches"
            }},
            {id:5,product:{
                categoryProduct:"Necklace", 
                image:[
                    {id:1, img:necklace}, 
                    {id:2, img:necklace}, 
                    {id:3, img:necklace}, 
                    {id:4, img:necklace}, 
                    {id:5, img:necklace}, 
                    {id:6, img:necklace}
                ],
                link:"/products/Necklace"
            }},
            {id:6,product:{
                categoryProduct:"Glasses",
                image:[
                    {id:1, img:neckBag}, 
                    {id:2, img:neckBag}, 
                    {id:3, img:neckBag}, 
                    {id:4, img:neckBag}, 
                    {id:5, img:neckBag}, 
                    {id:6, img:neckBag}
                ], 
                link:"/products/Glasses"
            }},
            {id:7,product:{
                categoryProduct:"Bangles",
                image:[
                    {id:1, img:hair}, 
                    {id:2, img:GCooker}, 
                    {id:3, img:GCooker}, 
                    {id:4, img:GCooker}, 
                    {id:5, img:GCooker}, 
                    {id:6, img:GCooker}
                ], 
                link:"/products/Bangles"
            }},
            {id:8,product:{
                categoryProduct:"Ear Rings", 
                image:[
                    {id:1, img:shelf}, 
                    {id:2, img:shelf}, 
                    {id:3, img:shelf}, 
                    {id:4, img:shelf}, 
                    {id:5, img:shelf}, 
                    {id:6, img:shelf}
                ],
                link:"/products/EarRings"
            }}
        ]       
    }},



    {id:3, category:"Electronics", element:{        
        deals:[
            {id:1,deal:{txtA:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea delectus ut quam saepe earum in dolorem necessitatibus....", 
                txtB:"text1", txtC:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea delectus ut quam saepe earum in dolorem necessitatibus....", 
                txtD:"text2", img1:strap, img2:drive, link:""}},
            {id:2,deal:{txtA:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea delectus ut quam saepe earum in dolorem necessitatibus....", 
                txtB:"text1", txtC:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea delectus ut quam saepe earum in dolorem necessitatibus....", 
                txtD:"text2", img1:shirt, img2:cap, link:""}}
        ],
        topProducts:[
            {id:1,product:{
                categoryProduct:"Clothes",
                image:[
                    {id:1,img:shirt}, 
                    {id:2,img:sleeve},
                    {id:3,img:bras}, 
                    {id:4,img:undies}, 
                    {id:5,img:lady}, 
                    {id:6,img:shirt}
                ],
                link:"/products/clothes"
            }},
            {id:2,product:{
                categoryProduct:"Shoes", 
                image:[
                    {id:1, img:shoes}, 
                    {id:2, img:heels}, 
                    {id:3, img:shoes}, 
                    {id:4, img:shoes}, 
                    {id:5, img:shoes}, 
                    {id:6, img:shoes}
                ],
                link:"/products/shoes"
            }},
            {id:3,product:{
                categoryProduct:"Bags", 
                image:[
                    {id:1, img:bags}, 
                    {id:2, img:neckBag}, 
                    {id:3, img:bags}, 
                    {id:4, img:bags}, 
                    {id:5, img:bags}, 
                    {id:6, img:bags}
                ],
                link:"/products/bags"
            }},
            {id:4,product:{
                categoryProduct:"Wrist Watches", 
                image:[
                    {id:1, img:wrist}, 
                    {id:2, img:wrist}, 
                    {id:3, img:wrist}, 
                    {id:4, img:wrist}, 
                    {id:5, img:wrist}, 
                    {id:6, img:wrist}
                ],
                link:"/products/wristWatches"
            }},
            {id:5,product:{
                categoryProduct:"Necklace", 
                image:[
                    {id:1, img:necklace}, 
                    {id:2, img:necklace}, 
                    {id:3, img:necklace}, 
                    {id:4, img:necklace}, 
                    {id:5, img:necklace}, 
                    {id:6, img:necklace}
                ],
                link:"/products/Necklace"
            }},
            {id:6,product:{
                categoryProduct:"Glasses",
                image:[
                    {id:1, img:neckBag}, 
                    {id:2, img:neckBag}, 
                    {id:3, img:neckBag}, 
                    {id:4, img:neckBag}, 
                    {id:5, img:neckBag}, 
                    {id:6, img:neckBag}
                ], 
                link:"/products/Glasses"
            }},
            {id:7,product:{
                categoryProduct:"Bangles",
                image:[
                    {id:1, img:GCooker}, 
                    {id:2, img:GCooker}, 
                    {id:3, img:GCooker}, 
                    {id:4, img:GCooker}, 
                    {id:5, img:GCooker}, 
                    {id:6, img:GCooker}
                ], 
                link:"/products/Bangles"
            }},
            {id:8,product:{
                categoryProduct:"Ear Rings", 
                image:[
                    {id:1, img:shelf}, 
                    {id:2, img:shelf}, 
                    {id:3, img:shelf}, 
                    {id:4, img:shelf}, 
                    {id:5, img:shelf}, 
                    {id:6, img:shelf}
                ],
                link:"/products/EarRings"
            }}
        ]       
    }},


    {id:4, category:"H_O", element:{        
        deals:[
            {id:1,deal:{txtA:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea delectus ut quam saepe earum in dolorem necessitatibus....", 
                txtB:"text1", txtC:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea delectus ut quam saepe earum in dolorem necessitatibus....", 
                txtD:"text2", img1:strap, img2:drive, link:""}},
            {id:2,deal:{txtA:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea delectus ut quam saepe earum in dolorem necessitatibus....", 
                txtB:"text1", txtC:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea delectus ut quam saepe earum in dolorem necessitatibus....", 
                txtD:"text2", img1:shirt, img2:cap, link:""}}
        ],
        topProducts:[
            {id:1,product:{
                categoryProduct:"Clothes",
                image:[
                    {id:1,img:shirt}, 
                    {id:2,img:sleeve},
                    {id:3,img:bras}, 
                    {id:4,img:undies}, 
                    {id:5,img:lady}, 
                    {id:6,img:shirt}
                ],
                link:"/products/clothes"
            }},
            {id:2,product:{
                categoryProduct:"Shoes", 
                image:[
                    {id:1, img:shoes}, 
                    {id:2, img:heels}, 
                    {id:3, img:shoes}, 
                    {id:4, img:shoes}, 
                    {id:5, img:shoes}, 
                    {id:6, img:shoes}
                ],
                link:"/products/shoes"
            }},
            {id:3,product:{
                categoryProduct:"Bags", 
                image:[
                    {id:1, img:waist}, 
                    {id:2, img:neckBag}, 
                    {id:3, img:bags}, 
                    {id:4, img:bags}, 
                    {id:5, img:bags}, 
                    {id:6, img:bags}
                ],
                link:"/products/bags"
            }},
            {id:4,product:{
                categoryProduct:"Wrist Watches", 
                image:[
                    {id:1, img:wrist}, 
                    {id:2, img:wrist}, 
                    {id:3, img:wrist}, 
                    {id:4, img:wrist}, 
                    {id:5, img:wrist}, 
                    {id:6, img:wrist}
                ],
                link:"/products/wristWatches"
            }},
            {id:5,product:{
                categoryProduct:"Necklace", 
                image:[
                    {id:1, img:necklace}, 
                    {id:2, img:necklace}, 
                    {id:3, img:fryPan}, 
                    {id:4, img:necklace}, 
                    {id:5, img:necklace}, 
                    {id:6, img:necklace}
                ],
                link:"/products/Necklace"
            }},
            {id:6,product:{
                categoryProduct:"Glasses",
                image:[
                    {id:1, img:neckBag}, 
                    {id:2, img:neckBag}, 
                    {id:3, img:neckBag}, 
                    {id:4, img:neckBag}, 
                    {id:5, img:neckBag}, 
                    {id:6, img:neckBag}
                ], 
                link:"/products/Glasses"
            }},
            {id:7,product:{
                categoryProduct:"Bangles",
                image:[
                    {id:1, img:GCooker}, 
                    {id:2, img:GCooker}, 
                    {id:3, img:GCooker}, 
                    {id:4, img:GCooker}, 
                    {id:5, img:GCooker}, 
                    {id:6, img:GCooker}
                ], 
                link:"/products/Bangles"
            }},
            {id:8,product:{
                categoryProduct:"Ear Rings", 
                image:[
                    {id:1, img:shelf}, 
                    {id:2, img:shelf}, 
                    {id:3, img:shelf}, 
                    {id:4, img:shelf}, 
                    {id:5, img:shelf}, 
                    {id:6, img:shelf}
                ],
                link:"/products/EarRings"
            }}
        ]       
    }},


    {id:5, category:"H_B", element:{        
        deals:[
            {id:1,deal:{txtA:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea delectus ut quam saepe earum in dolorem necessitatibus....", 
                txtB:"text1", txtC:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea delectus ut quam saepe earum in dolorem necessitatibus....", 
                txtD:"text2", img1:strap, img2:drive, link:""}},
            {id:2,deal:{txtA:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea delectus ut quam saepe earum in dolorem necessitatibus....", 
                txtB:"text1", txtC:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea delectus ut quam saepe earum in dolorem necessitatibus....", 
                txtD:"text2", img1:shirt, img2:cap, link:""}}
        ],
        topProducts:[
            {id:1,product:{
                categoryProduct:"Clothes",
                image:[
                    {id:1,img:shirt}, 
                    {id:2,img:sleeve},
                    {id:3,img:bras}, 
                    {id:4,img:undies}, 
                    {id:5,img:lady}, 
                    {id:6,img:shirt}
                ],
                link:"/products/clothes"
            }},
            {id:2,product:{
                categoryProduct:"Shoes", 
                image:[
                    {id:1, img:shoes}, 
                    {id:2, img:heels}, 
                    {id:3, img:shoes}, 
                    {id:4, img:shoes}, 
                    {id:5, img:shoes}, 
                    {id:6, img:shoes}
                ],
                link:"/products/shoes"
            }},
            {id:3,product:{
                categoryProduct:"Bags", 
                image:[
                    {id:1, img:bags}, 
                    {id:2, img:neckBag}, 
                    {id:3, img:bags}, 
                    {id:4, img:bags}, 
                    {id:5, img:bags}, 
                    {id:6, img:bags}
                ],
                link:"/products/bags"
            }},
            {id:4,product:{
                categoryProduct:"Wrist Watches", 
                image:[
                    {id:1, img:wrist}, 
                    {id:2, img:wrist}, 
                    {id:3, img:wrist}, 
                    {id:4, img:wrist}, 
                    {id:5, img:wrist}, 
                    {id:6, img:wrist}
                ],
                link:"/products/wristWatches"
            }},
            {id:5,product:{
                categoryProduct:"Necklace", 
                image:[
                    {id:1, img:necklace}, 
                    {id:2, img:necklace}, 
                    {id:3, img:necklace}, 
                    {id:4, img:necklace}, 
                    {id:5, img:necklace}, 
                    {id:6, img:necklace}
                ],
                link:"/products/Necklace"
            }},
            {id:6,product:{
                categoryProduct:"Glasses",
                image:[
                    {id:1, img:neckBag}, 
                    {id:2, img:neckBag}, 
                    {id:3, img:neckBag}, 
                    {id:4, img:neckBag}, 
                    {id:5, img:neckBag}, 
                    {id:6, img:neckBag}
                ], 
                link:"/products/Glasses"
            }},
            {id:7,product:{
                categoryProduct:"Bangles",
                image:[
                    {id:1, img:GCooker}, 
                    {id:2, img:GCooker}, 
                    {id:3, img:GCooker}, 
                    {id:4, img:GCooker}, 
                    {id:5, img:GCooker}, 
                    {id:6, img:GCooker}
                ], 
                link:"/products/Bangles"
            }},
            {id:8,product:{
                categoryProduct:"Ear Rings", 
                image:[
                    {id:1, img:shelf}, 
                    {id:2, img:shelf}, 
                    {id:3, img:shelf}, 
                    {id:4, img:shelf}, 
                    {id:5, img:shelf}, 
                    {id:6, img:shelf}
                ],
                link:"/products/EarRings"
            }}
        ]       
    }},


    {id:6, category:"Sgoods", element:{        
        deals:[
            {id:1,deal:{txtA:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea delectus ut quam saepe earum in dolorem necessitatibus....", 
                txtB:"text1", txtC:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea delectus ut quam saepe earum in dolorem necessitatibus....", 
                txtD:"text2", img1:strap, img2:drive, link:""}},
            {id:2,deal:{txtA:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea delectus ut quam saepe earum in dolorem necessitatibus....", 
                txtB:"text1", txtC:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea delectus ut quam saepe earum in dolorem necessitatibus....", 
                txtD:"text2", img1:shirt, img2:cap, link:""}}
        ],
        topProducts:[
            {id:1,product:{
                categoryProduct:"Clothes",
                image:[
                    {id:1,img:shirt}, 
                    {id:2,img:sleeve},
                    {id:3,img:bras}, 
                    {id:4,img:undies}, 
                    {id:5,img:lady}, 
                    {id:6,img:shirt}
                ],
                link:"/products/clothes"
            }},
            {id:2,product:{
                categoryProduct:"Shoes", 
                image:[
                    {id:1, img:shoes}, 
                    {id:2, img:heels}, 
                    {id:3, img:shoes}, 
                    {id:4, img:shoes}, 
                    {id:5, img:shoes}, 
                    {id:6, img:shoes}
                ],
                link:"/products/shoes"
            }},
            {id:3,product:{
                categoryProduct:"Bags", 
                image:[
                    {id:1, img:bags}, 
                    {id:2, img:neckBag}, 
                    {id:3, img:bags}, 
                    {id:4, img:bags}, 
                    {id:5, img:bags}, 
                    {id:6, img:bags}
                ],
                link:"/products/bags"
            }},
            {id:4,product:{
                categoryProduct:"Wrist Watches", 
                image:[
                    {id:1, img:wrist}, 
                    {id:2, img:wrist}, 
                    {id:3, img:wrist}, 
                    {id:4, img:wrist}, 
                    {id:5, img:wrist}, 
                    {id:6, img:wrist}
                ],
                link:"/products/wristWatches"
            }},
            {id:5,product:{
                categoryProduct:"Necklace", 
                image:[
                    {id:1, img:necklace}, 
                    {id:2, img:necklace}, 
                    {id:3, img:necklace}, 
                    {id:4, img:necklace}, 
                    {id:5, img:necklace}, 
                    {id:6, img:necklace}
                ],
                link:"/products/Necklace"
            }},
            {id:6,product:{
                categoryProduct:"Glasses",
                image:[
                    {id:1, img:neckBag}, 
                    {id:2, img:neckBag}, 
                    {id:3, img:neckBag}, 
                    {id:4, img:neckBag}, 
                    {id:5, img:neckBag}, 
                    {id:6, img:neckBag}
                ], 
                link:"/products/Glasses"
            }},
            {id:7,product:{
                categoryProduct:"Bangles",
                image:[
                    {id:1, img:GCooker}, 
                    {id:2, img:GCooker}, 
                    {id:3, img:GCooker}, 
                    {id:4, img:GCooker}, 
                    {id:5, img:GCooker}, 
                    {id:6, img:GCooker}
                ], 
                link:"/products/Bangles"
            }},
            {id:8,product:{
                categoryProduct:"Ear Rings", 
                image:[
                    {id:1, img:shelf}, 
                    {id:2, img:shelf}, 
                    {id:3, img:shelf}, 
                    {id:4, img:shelf}, 
                    {id:5, img:shelf}, 
                    {id:6, img:shelf}
                ],
                link:"/products/EarRings"
            }}
        ]       
    }},


    {id:7, category:"FCupboards", element:{        
        deals:[
            {id:1,deal:{txtA:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea delectus ut quam saepe earum in dolorem necessitatibus....", 
                txtB:"text1", txtC:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea delectus ut quam saepe earum in dolorem necessitatibus....", 
                txtD:"text2", img1:strap, img2:drive, link:""}},
            {id:2,deal:{txtA:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea delectus ut quam saepe earum in dolorem necessitatibus....", 
                txtB:"text1", txtC:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea delectus ut quam saepe earum in dolorem necessitatibus....", 
                txtD:"text2", img1:shirt, img2:cap, link:""}}
        ],
        topProducts:[
            {id:1,product:{
                categoryProduct:"Clothes",
                image:[
                    {id:1,img:shirt}, 
                    {id:2,img:sleeve},
                    {id:3,img:bras}, 
                    {id:4,img:undies}, 
                    {id:5,img:lady}, 
                    {id:6,img:shirt}
                ],
                link:"/products/clothes"
            }},
            {id:2,product:{
                categoryProduct:"Shoes", 
                image:[
                    {id:1, img:shoes}, 
                    {id:2, img:heels}, 
                    {id:3, img:shoes}, 
                    {id:4, img:shoes}, 
                    {id:5, img:shoes}, 
                    {id:6, img:shoes}
                ],
                link:"/products/shoes"
            }},
            {id:3,product:{
                categoryProduct:"Bags", 
                image:[
                    {id:1, img:bags}, 
                    {id:2, img:neckBag}, 
                    {id:3, img:bags}, 
                    {id:4, img:bags}, 
                    {id:5, img:bags}, 
                    {id:6, img:bags}
                ],
                link:"/products/bags"
            }},
            {id:4,product:{
                categoryProduct:"Wrist Watches", 
                image:[
                    {id:1, img:wrist}, 
                    {id:2, img:wrist}, 
                    {id:3, img:wrist}, 
                    {id:4, img:wrist}, 
                    {id:5, img:wrist}, 
                    {id:6, img:wrist}
                ],
                link:"/products/wristWatches"
            }},
            {id:5,product:{
                categoryProduct:"Necklace", 
                image:[
                    {id:1, img:necklace}, 
                    {id:2, img:necklace}, 
                    {id:3, img:necklace}, 
                    {id:4, img:necklace}, 
                    {id:5, img:necklace}, 
                    {id:6, img:necklace}
                ],
                link:"/products/Necklace"
            }},
            {id:6,product:{
                categoryProduct:"Glasses",
                image:[
                    {id:1, img:neckBag}, 
                    {id:2, img:neckBag}, 
                    {id:3, img:neckBag}, 
                    {id:4, img:neckBag}, 
                    {id:5, img:neckBag}, 
                    {id:6, img:neckBag}
                ], 
                link:"/products/Glasses"
            }},
            {id:7,product:{
                categoryProduct:"Bangles",
                image:[
                    {id:1, img:GCooker}, 
                    {id:2, img:GCooker}, 
                    {id:3, img:GCooker}, 
                    {id:4, img:GCooker}, 
                    {id:5, img:GCooker}, 
                    {id:6, img:GCooker}
                ], 
                link:"/products/Bangles"
            }},
            {id:8,product:{
                categoryProduct:"Ear Rings", 
                image:[
                    {id:1, img:shelf}, 
                    {id:2, img:shelf}, 
                    {id:3, img:shelf}, 
                    {id:4, img:shelf}, 
                    {id:5, img:shelf}, 
                    {id:6, img:shelf}
                ],
                link:"/products/EarRings"
            }}
        ]       
    }},


    {id:8, category:"Drinks", element:{        
        deals:[
            {id:1,deal:{txtA:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea delectus ut quam saepe earum in dolorem necessitatibus....", 
                txtB:"text1", txtC:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea delectus ut quam saepe earum in dolorem necessitatibus....", 
                txtD:"text2", img1:strap, img2:drive, link:""}},
            {id:2,deal:{txtA:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea delectus ut quam saepe earum in dolorem necessitatibus....", 
                txtB:"text1", txtC:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea delectus ut quam saepe earum in dolorem necessitatibus....", 
                txtD:"text2", img1:shirt, img2:cap, link:""}}
        ],
        topProducts:[
            {id:1,product:{
                categoryProduct:"Clothes",
                image:[
                    {id:1,img:shirt}, 
                    {id:2,img:sleeve},
                    {id:3,img:bras}, 
                    {id:4,img:undies}, 
                    {id:5,img:lady}, 
                    {id:6,img:shirt}
                ],
                link:"/products/clothes"
            }},
            {id:2,product:{
                categoryProduct:"Shoes", 
                image:[
                    {id:1, img:shoes}, 
                    {id:2, img:heels}, 
                    {id:3, img:shoes}, 
                    {id:4, img:shoes}, 
                    {id:5, img:shoes}, 
                    {id:6, img:shoes}
                ],
                link:"/products/shoes"
            }},
            {id:3,product:{
                categoryProduct:"Bags", 
                image:[
                    {id:1, img:bags}, 
                    {id:2, img:neckBag}, 
                    {id:3, img:bags}, 
                    {id:4, img:bags}, 
                    {id:5, img:bags}, 
                    {id:6, img:bags}
                ],
                link:"/products/bags"
            }},
            {id:4,product:{
                categoryProduct:"Wrist Watches", 
                image:[
                    {id:1, img:wrist}, 
                    {id:2, img:wrist}, 
                    {id:3, img:wrist}, 
                    {id:4, img:wrist}, 
                    {id:5, img:wrist}, 
                    {id:6, img:wrist}
                ],
                link:"/products/wristWatches"
            }},
            {id:5,product:{
                categoryProduct:"Necklace", 
                image:[
                    {id:1, img:necklace}, 
                    {id:2, img:necklace}, 
                    {id:3, img:necklace}, 
                    {id:4, img:necklace}, 
                    {id:5, img:necklace}, 
                    {id:6, img:necklace}
                ],
                link:"/products/Necklace"
            }},
            {id:6,product:{
                categoryProduct:"Glasses",
                image:[
                    {id:1, img:neckBag}, 
                    {id:2, img:neckBag}, 
                    {id:3, img:neckBag}, 
                    {id:4, img:neckBag}, 
                    {id:5, img:neckBag}, 
                    {id:6, img:neckBag}
                ], 
                link:"/products/Glasses"
            }},
            {id:7,product:{
                categoryProduct:"Bangles",
                image:[
                    {id:1, img:GCooker}, 
                    {id:2, img:GCooker}, 
                    {id:3, img:GCooker}, 
                    {id:4, img:GCooker}, 
                    {id:5, img:GCooker}, 
                    {id:6, img:GCooker}
                ], 
                link:"/products/Bangles"
            }},
            {id:8,product:{
                categoryProduct:"Ear Rings", 
                image:[
                    {id:1, img:shelf}, 
                    {id:2, img:shelf}, 
                    {id:3, img:shelf}, 
                    {id:4, img:shelf}, 
                    {id:5, img:shelf}, 
                    {id:6, img:shelf}
                ],
                link:"/products/EarRings"
            }}
        ]       
    }},


    {id:9, category:"Hygiene", element:{        
        deals:[
            {id:1,deal:{txtA:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea delectus ut quam saepe earum in dolorem necessitatibus....", 
                txtB:"text1", txtC:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea delectus ut quam saepe earum in dolorem necessitatibus....", 
                txtD:"text2", img1:strap, img2:drive, link:""}},
            {id:2,deal:{txtA:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea delectus ut quam saepe earum in dolorem necessitatibus....", 
                txtB:"text1", txtC:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea delectus ut quam saepe earum in dolorem necessitatibus....", 
                txtD:"text2", img1:shirt, img2:cap, link:""}}
        ],
        topProducts:[
            {id:1,product:{
                categoryProduct:"Clothes",
                image:[
                    {id:1,img:shirt}, 
                    {id:2,img:sleeve},
                    {id:3,img:bras}, 
                    {id:4,img:undies}, 
                    {id:5,img:lady}, 
                    {id:6,img:shirt}
                ],
                link:"/products/clothes"
            }},
            {id:2,product:{
                categoryProduct:"Shoes", 
                image:[
                    {id:1, img:shoes}, 
                    {id:2, img:heels}, 
                    {id:3, img:shoes}, 
                    {id:4, img:shoes}, 
                    {id:5, img:shoes}, 
                    {id:6, img:shoes}
                ],
                link:"/products/shoes"
            }},
            {id:3,product:{
                categoryProduct:"Bags", 
                image:[
                    {id:1, img:bags}, 
                    {id:2, img:neckBag}, 
                    {id:3, img:bags}, 
                    {id:4, img:bags}, 
                    {id:5, img:bags}, 
                    {id:6, img:bags}
                ],
                link:"/products/bags"
            }},
            {id:4,product:{
                categoryProduct:"Wrist Watches", 
                image:[
                    {id:1, img:wrist}, 
                    {id:2, img:wrist}, 
                    {id:3, img:wrist}, 
                    {id:4, img:wrist}, 
                    {id:5, img:wrist}, 
                    {id:6, img:wrist}
                ],
                link:"/products/wristWatches"
            }},
            {id:5,product:{
                categoryProduct:"Necklace", 
                image:[
                    {id:1, img:necklace}, 
                    {id:2, img:necklace}, 
                    {id:3, img:necklace}, 
                    {id:4, img:necklace}, 
                    {id:5, img:necklace}, 
                    {id:6, img:necklace}
                ],
                link:"/products/Necklace"
            }},
            {id:6,product:{
                categoryProduct:"Glasses",
                image:[
                    {id:1, img:neckBag}, 
                    {id:2, img:neckBag}, 
                    {id:3, img:neckBag}, 
                    {id:4, img:neckBag}, 
                    {id:5, img:neckBag}, 
                    {id:6, img:neckBag}
                ], 
                link:"/products/Glasses"
            }},
            {id:7,product:{
                categoryProduct:"Bangles",
                image:[
                    {id:1, img:GCooker}, 
                    {id:2, img:GCooker}, 
                    {id:3, img:GCooker}, 
                    {id:4, img:GCooker}, 
                    {id:5, img:GCooker}, 
                    {id:6, img:GCooker}
                ], 
                link:"/products/Bangles"
            }},
            {id:8,product:{
                categoryProduct:"Ear Rings", 
                image:[
                    {id:1, img:shelf}, 
                    {id:2, img:shelf}, 
                    {id:3, img:shelf}, 
                    {id:4, img:shelf}, 
                    {id:5, img:shelf}, 
                    {id:6, img:shelf}
                ],
                link:"/products/EarRings"
            }}
        ]       
    }},


    {id:10, category:"HCleaning", element:{        
        deals:[
            {id:1,deal:{txtA:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea delectus ut quam saepe earum in dolorem necessitatibus....", 
                txtB:"text1", txtC:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea delectus ut quam saepe earum in dolorem necessitatibus....", 
                txtD:"text2", img1:strap, img2:drive, link:""}},
            {id:2,deal:{txtA:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea delectus ut quam saepe earum in dolorem necessitatibus....", 
                txtB:"text1", txtC:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea delectus ut quam saepe earum in dolorem necessitatibus....", 
                txtD:"text2", img1:shirt, img2:cap, link:""}}
        ],
        topProducts:[
            {id:1,product:{
                categoryProduct:"Clothes",
                image:[
                    {id:1,img:shirt}, 
                    {id:2,img:sleeve},
                    {id:3,img:bras}, 
                    {id:4,img:undies}, 
                    {id:5,img:lady}, 
                    {id:6,img:shirt}
                ],
                link:"/products/clothes"
            }},
            {id:2,product:{
                categoryProduct:"Shoes", 
                image:[
                    {id:1, img:shoes}, 
                    {id:2, img:heels}, 
                    {id:3, img:shoes}, 
                    {id:4, img:shoes}, 
                    {id:5, img:shoes}, 
                    {id:6, img:shoes}
                ],
                link:"/products/shoes"
            }},
            {id:3,product:{
                categoryProduct:"Bags", 
                image:[
                    {id:1, img:bags}, 
                    {id:2, img:neckBag}, 
                    {id:3, img:bags}, 
                    {id:4, img:bags}, 
                    {id:5, img:bags}, 
                    {id:6, img:bags}
                ],
                link:"/products/bags"
            }},
            {id:4,product:{
                categoryProduct:"Wrist Watches", 
                image:[
                    {id:1, img:wrist}, 
                    {id:2, img:wrist}, 
                    {id:3, img:wrist}, 
                    {id:4, img:wrist}, 
                    {id:5, img:wrist}, 
                    {id:6, img:wrist}
                ],
                link:"/products/wristWatches"
            }},
            {id:5,product:{
                categoryProduct:"Necklace", 
                image:[
                    {id:1, img:necklace}, 
                    {id:2, img:necklace}, 
                    {id:3, img:necklace}, 
                    {id:4, img:necklace}, 
                    {id:5, img:necklace}, 
                    {id:6, img:necklace}
                ],
                link:"/products/Necklace"
            }},
            {id:6,product:{
                categoryProduct:"Glasses",
                image:[
                    {id:1, img:neckBag}, 
                    {id:2, img:neckBag}, 
                    {id:3, img:neckBag}, 
                    {id:4, img:neckBag}, 
                    {id:5, img:neckBag}, 
                    {id:6, img:neckBag}
                ], 
                link:"/products/Glasses"
            }},
            {id:7,product:{
                categoryProduct:"Bangles",
                image:[
                    {id:1, img:GCooker}, 
                    {id:2, img:GCooker}, 
                    {id:3, img:GCooker}, 
                    {id:4, img:GCooker}, 
                    {id:5, img:GCooker}, 
                    {id:6, img:GCooker}
                ], 
                link:"/products/Bangles"
            }},
            {id:8,product:{
                categoryProduct:"Ear Rings", 
                image:[
                    {id:1, img:shelf}, 
                    {id:2, img:shelf}, 
                    {id:3, img:shelf}, 
                    {id:4, img:shelf}, 
                    {id:5, img:shelf}, 
                    {id:6, img:shelf}
                ],
                link:"/products/EarRings"
            }}
        ]       
    }},


    {id:11, category:"Toys", element:{        
        deals:[
            {id:1,deal:{txtA:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea delectus ut quam saepe earum in dolorem necessitatibus....", 
                txtB:"text1", txtC:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea delectus ut quam saepe earum in dolorem necessitatibus....", 
                txtD:"text2", img1:strap, img2:drive, link:""}},
            {id:2,deal:{txtA:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea delectus ut quam saepe earum in dolorem necessitatibus....", 
                txtB:"text1", txtC:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea delectus ut quam saepe earum in dolorem necessitatibus....", 
                txtD:"text2", img1:shirt, img2:cap, link:""}}
        ],
        topProducts:[
            {id:1,product:{
                categoryProduct:"Clothes",
                image:[
                    {id:1,img:shirt}, 
                    {id:2,img:sleeve},
                    {id:3,img:bras}, 
                    {id:4,img:undies}, 
                    {id:5,img:lady}, 
                    {id:6,img:shirt}
                ],
                link:"/products/clothes"
            }},
            {id:2,product:{
                categoryProduct:"Shoes", 
                image:[
                    {id:1, img:shoes}, 
                    {id:2, img:heels}, 
                    {id:3, img:shoes}, 
                    {id:4, img:shoes}, 
                    {id:5, img:shoes}, 
                    {id:6, img:shoes}
                ],
                link:"/products/shoes"
            }},
            {id:3,product:{
                categoryProduct:"Bags", 
                image:[
                    {id:1, img:bags}, 
                    {id:2, img:neckBag}, 
                    {id:3, img:bags}, 
                    {id:4, img:bags}, 
                    {id:5, img:bags}, 
                    {id:6, img:bags}
                ],
                link:"/products/bags"
            }},
            {id:4,product:{
                categoryProduct:"Wrist Watches", 
                image:[
                    {id:1, img:wrist}, 
                    {id:2, img:wrist}, 
                    {id:3, img:wrist}, 
                    {id:4, img:wrist}, 
                    {id:5, img:wrist}, 
                    {id:6, img:wrist}
                ],
                link:"/products/wristWatches"
            }},
            {id:5,product:{
                categoryProduct:"Necklace", 
                image:[
                    {id:1, img:necklace}, 
                    {id:2, img:necklace}, 
                    {id:3, img:necklace}, 
                    {id:4, img:necklace}, 
                    {id:5, img:necklace}, 
                    {id:6, img:necklace}
                ],
                link:"/products/Necklace"
            }},
            {id:6,product:{
                categoryProduct:"Glasses",
                image:[
                    {id:1, img:neckBag}, 
                    {id:2, img:neckBag}, 
                    {id:3, img:neckBag}, 
                    {id:4, img:neckBag}, 
                    {id:5, img:neckBag}, 
                    {id:6, img:neckBag}
                ], 
                link:"/products/Glasses"
            }},
            {id:7,product:{
                categoryProduct:"Bangles",
                image:[
                    {id:1, img:GCooker}, 
                    {id:2, img:GCooker}, 
                    {id:3, img:GCooker}, 
                    {id:4, img:GCooker}, 
                    {id:5, img:GCooker}, 
                    {id:6, img:GCooker}
                ], 
                link:"/products/Bangles"
            }},
            {id:8,product:{
                categoryProduct:"Ear Rings", 
                image:[
                    {id:1, img:shelf}, 
                    {id:2, img:shelf}, 
                    {id:3, img:shelf}, 
                    {id:4, img:shelf}, 
                    {id:5, img:shelf}, 
                    {id:6, img:shelf}
                ],
                link:"/products/EarRings"
            }}
        ]       
    }},


    {id:12, category:"Others", element:{        
        deals:[
            {id:1,deal:{txtA:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea delectus ut quam saepe earum in dolorem necessitatibus....", 
                txtB:"text1", txtC:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea delectus ut quam saepe earum in dolorem necessitatibus....", 
                txtD:"text2", img1:strap, img2:drive, link:""}},
            {id:2,deal:{txtA:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea delectus ut quam saepe earum in dolorem necessitatibus....", 
                txtB:"text1", txtC:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea delectus ut quam saepe earum in dolorem necessitatibus....", 
                txtD:"text2", img1:shirt, img2:cap, link:""}}
        ],
        topProducts:[
            {id:1,product:{
                categoryProduct:"Clothes",
                image:[
                    {id:1,img:shirt}, 
                    {id:2,img:sleeve},
                    {id:3,img:bras}, 
                    {id:4,img:undies}, 
                    {id:5,img:lady}, 
                    {id:6,img:shirt}
                ],
                link:"/products/clothes"
            }},
            {id:2,product:{
                categoryProduct:"Shoes", 
                image:[
                    {id:1, img:shoes}, 
                    {id:2, img:heels}, 
                    {id:3, img:shoes}, 
                    {id:4, img:shoes}, 
                    {id:5, img:shoes}, 
                    {id:6, img:shoes}
                ],
                link:"/products/shoes"
            }},
            {id:3,product:{
                categoryProduct:"Bags", 
                image:[
                    {id:1, img:bags}, 
                    {id:2, img:neckBag}, 
                    {id:3, img:bags}, 
                    {id:4, img:bags}, 
                    {id:5, img:bags}, 
                    {id:6, img:bags}
                ],
                link:"/products/bags"
            }},
            {id:4,product:{
                categoryProduct:"Wrist Watches", 
                image:[
                    {id:1, img:wrist}, 
                    {id:2, img:wrist}, 
                    {id:3, img:wrist}, 
                    {id:4, img:wrist}, 
                    {id:5, img:wrist}, 
                    {id:6, img:wrist}
                ],
                link:"/products/wristWatches"
            }},
            {id:5,product:{
                categoryProduct:"Necklace", 
                image:[
                    {id:1, img:necklace}, 
                    {id:2, img:necklace}, 
                    {id:3, img:necklace}, 
                    {id:4, img:necklace}, 
                    {id:5, img:necklace}, 
                    {id:6, img:necklace}
                ],
                link:"/products/Necklace"
            }},
            {id:6,product:{
                categoryProduct:"Glasses",
                image:[
                    {id:1, img:neckBag}, 
                    {id:2, img:neckBag}, 
                    {id:3, img:neckBag}, 
                    {id:4, img:neckBag}, 
                    {id:5, img:neckBag}, 
                    {id:6, img:neckBag}
                ], 
                link:"/products/Glasses"
            }},
            {id:7,product:{
                categoryProduct:"Bangles",
                image:[
                    {id:1, img:GCooker}, 
                    {id:2, img:GCooker}, 
                    {id:3, img:GCooker}, 
                    {id:4, img:GCooker}, 
                    {id:5, img:GCooker}, 
                    {id:6, img:GCooker}
                ], 
                link:"/products/Bangles"
            }},
            {id:8,product:{
                categoryProduct:"Ear Rings", 
                image:[
                    {id:1, img:shelf}, 
                    {id:2, img:shelf}, 
                    {id:3, img:shelf}, 
                    {id:4, img:shelf}, 
                    {id:5, img:shelf}, 
                    {id:6, img:shelf}
                ],
                link:"/products/EarRings"
            }}
        ]       
    }},


]
