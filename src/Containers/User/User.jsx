import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import styles from "./User.module.css";
import { addUsers } from "../../Slices/Products";
import userCredentialChk from "../../utils/userCredential";

const User = () => {

    const ProductsUser = useSelector(state => state.products.users);
    const [user, setUser] = useState(ProductsUser);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        if (!userCredentialChk()) navigate('/');
        const fetchData = async() => {
            const res = await axios.get('https://randomuser.me/api/?results=20');
            const data = res.data;
            console.log(data.results);
            dispatch(addUsers(data.results));
            setUser(data.results);
        };
        fetchData();
    }, []);

    const filter = (str) => {
        if (str === 'all') {
            setUser(ProductsUser);
            return;
        }
        const filteredUser = ProductsUser.filter(ele => ele.gender === str);
        setUser(filteredUser);
    }

    return(
        <section className={styles.user}>
            <h1>User Details</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et deleniti rem iusto dolor laboriosam perspiciatis. Hic aspernatur magnam expedita? Ratione eius amet minima mollitia ex, vel obcaecati numquam blanditiis vitae dolor? Doloribus id sit totam enim, possimus autem nam, dolores sequi perspiciatis laboriosam, nostrum debitis sed facere est aliquid quidem? Autem maiores repellat corrupti commodi rem quidem, illo architecto pariatur aspernatur voluptatem sit molestias eum, labore quas enim. Iure iste quidem consequatur corporis beatae nemo facilis, nesciunt in dolor fugit placeat sequi laborum et quae aut aliquam cumque, eligendi quas magnam! Totam nam magnam, consequatur velit distinctio officia blanditiis inventore reiciendis ullam architecto quod error ipsum maiores incidunt, unde veritatis quos temporibus. Vel, veniam? Reiciendis nesciunt magnam rerum expedita impedit obcaecati id, sit facilis facere labore aut, architecto voluptatum dolor magni rem voluptate consequatur velit praesentium tenetur consectetur nobis ullam eveniet numquam vitae. Ex dolore eligendi nesciunt, neque minus ad!</p>
            <form>
                <fieldset>
                    <legend>Filter Table Based On Gender</legend>
                    <div className={styles.gender}>
                        <input type="radio" name="gender" id="all" onClick={() => {filter('all')}} defaultChecked />
                        <label htmlFor="all">All</label>
                    </div>
                    <div className={styles.gender}>
                        <input type="radio" name="gender" id="female" onClick={() => {filter('female')}} />
                        <label htmlFor="female">Female</label>
                    </div>
                    <div className={styles.gender}>
                        <input type="radio" name="gender" id="male" onClick={() => {filter('male')}}  />
                        <label htmlFor="male">Male</label>
                    </div>
                </fieldset>
            </form>
            <table border={1} cellSpacing={0} className={styles.table}>
                <thead>
                    <tr>
                        <th>IMAGE</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>GENDER</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user && user.length > 0 ? 
                        user.map(ele => <tr>
                            <td><img src={`${ele.picture.thumbnail}`} alt="uerImage" /></td>
                            <td>{`${ele.name.title} ${ele.name.first} ${ele.name.last}`}</td>
                            <td>{ele.email}</td>
                            <td>{ele.gender}</td>
                        </tr> ) :
                        <tr><td colSpan={4}>No users available</td></tr>
                    }
                </tbody>
            </table>
        </section>
    );
};

export default User;