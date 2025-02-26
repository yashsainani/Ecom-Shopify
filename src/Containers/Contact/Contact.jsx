import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Contact.module.css";
import userCredentialChk from "../../utils/userCredential"

const Contact = () => {

    const navigate = useNavigate()

    useEffect(() => {
        if (!userCredentialChk()) navigate('/');
    }, []);

    return (
        <h1 className={styles.heading}>CONTACT COMPONENT IS UNDER DEVELOPMENT</h1>
    );
};

export default Contact;