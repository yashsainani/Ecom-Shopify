import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import styles from "./ProductDetails.module.css";
import userCredentialChk from "../../utils/userCredential";

const ProductDetails = () => {

    let { id } = useParams();
    id = parseInt(id);
    const products = useSelector(state => state.products.products);
    const [item, setItem] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        if(!userCredentialChk()) navigate('/');
        const val = products.find(ele => ele.id === id);
        setItem(val);
    }, [])

    return (
        <section className={styles['product-details']}>
            {
                item ?
                <div className={styles.products}>
                    <h1>{`${item?.category?.toUpperCase()} CATEGORY`}</h1>
                    <div className={styles.item}>
                        <div className={styles.img}>
                            <img src={`${item.image}`} alt="" />
                        </div>
                        <div className={styles.info}>
                            <div className={styles.name}>
                                <h3>Product</h3>
                                <p>{item.title}</p>
                            </div>
                            <div className={styles.price}>
                                <h3>Product Price</h3>
                                <p>{item.price}</p>
                            </div>
                            <div className={styles.description}>
                                <h3>Product Description</h3>
                                <p>{item.description}</p>
                            </div>
                            <div className={styles.rating}>
                                <h3>Product Rating</h3>
                                <p>{item?.rating?.rate}</p>
                            </div>
                            <div className={styles.ratingCount}>
                                <h3>Rating Count</h3>
                                <p>{item?.rating?.count}</p>
                            </div>
                        </div>
                    </div>
                </div> :
                ''
            }
        </section>
    );
};

export default ProductDetails;