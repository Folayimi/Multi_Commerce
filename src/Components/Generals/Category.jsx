import { Link, useParams} from "react-router-dom";
import {Data} from "../APIs/categoriesData";
import { dataC} from '../APIs/homeData';
import {HSection,InvisibleBar} from "../styledComponents";

const Category = ({onMobile}) =>{
    const {name} = useParams();
    const chosenCategory = Data.find((items)=> items.category === name);          
    return(
        <>                            
            {
                onMobile ?
                <>
                <HSection>
                    <InvisibleBar/>
                    <div className="Flabel" style={{color:"white"}}>
                        <h2>Check Out Our Top Selling Fashion Items</h2>                 
                    </div>
                    {
                        chosenCategory.element['deals'].map((items)=>{
                            return <Deals {...items} key={items.id}/>
                        })
                    }
                </HSection>
                </>
                :
                <>
                <HSection>
                    <InvisibleBar/>
                    <div className="Flabel" style={{color:"white"}}>
                        <h2>Check Out Our Top Selling Fashion Items</h2>                 
                    </div>
                    {                        
                        chosenCategory.element['deals'].map((items)=>{
                            return <Deals {...items} key={items.id}/>
                        })
                    }
                </HSection>
                <div className="categories">
                    {
                        dataC.map((items)=>{
                            return <CategoryD {...items} key={items.id}/>
                        })
                    }
                </div>                
                </>
            }     
            <div className="Fashion">
                {
                    chosenCategory.element['topProducts'].map((items)=>{
                        return <TopProducts {...items} key={items.id}/>
                    })
                }
            </div>                 
        </>
    )
}
export default Category;

const CategoryD = ({text,link}) =>{        
    return(
        <>
            <Link to={link}>
                <div className="Item"><p>{text}</p></div>
            </Link>
        </>
    )
}

const Deals = ({deal})=>{ 
           
    return(
        <>
        <div className="FContainer">
        <div className="FSprd1">
                <div className="Fprd1">
                    <div className="descr">
                        <div className="txt1">
                            <p>{deal['txtA']}</p>
                        </div>                      
                        <div className="txt2">
                            <p>{deal['txtB']}</p>
                        </div>                           
                    </div>
                    <img src={deal['img1']} alt="img"/>
                </div>
                <div className="Fprd2">
                    <div className="descr">
                        <div className="txt1">
                            <p>{deal['txtC']}</p>
                        </div>                      
                        <div className="txt2">
                            <p>{deal['txtD']}</p>
                        </div>                           
                    </div>
                    <img src={deal['img2']} alt="img"/>
                </div>
            </div>
        </div>            
        </>
    )
}

const TopProducts = ({product})=>{                
    return(
        <>
        <div className="FTopItems">
            <div className="txt"> {product['categoryProduct']}</div>
            <div className="topProducts">
            <div className="FPitems">
                {
                    product['image'].map((items)=>{   
                        return(
                            <div className="image" key={items.id}>
                                <img src={items.img} alt="shirt"/>                                                
                            </div>
                        )                                                                                                                                                                             
                    })                                                        
                }                                                    
            </div>
            <div className="explore">
                <Link to={product['link']}>
                    <button>Explore</button>
                </Link>
            </div>
            </div>
        </div>                
        </>
    )    
}