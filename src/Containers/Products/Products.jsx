import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import styles from "./Products.module.css";
import { addProducts } from "../../Slices/Products";
import userCredentialChk from "../../utils/userCredential";

const Products = () => {

    const [category, setCategory] = useState([]);
    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fetchData = async() => {
        const res = await axios.get("https://fakestoreapi.com/products/categories");
        console.log(res.data);
        setCategory(res.data); 
    };

    const newItem = async(ele) => {
        const res = await axios.get(`https://fakestoreapi.com/products/category/${ele}`);
        dispatch(addProducts(res.data));
    };

    useEffect(() => {
        if(!userCredentialChk()) navigate('/');
        fetchData();
        newItem('electronics');
    }, []);


    return (
        <section className={styles.products}>
            <div className={styles.category}>
                <ul>
                    {
                        category.map(ele => <li key={ele} onClick={() => {newItem(ele)}}>{ele.toUpperCase()}</li>)
                    }
                </ul>
            </div>
            <div className={styles.items}>
                <ul>
                    {
                        products.map(ele => <li key={ele.id} onClick={() => {navigate(`/products/${ele.id}`)}}><Link key={ele.id} to={`/products/${ele.id}`} className={styles.link} >{ele.title}</Link></li>)
                    }
                </ul>
            </div>
        </section>
    );
};

export default Products;