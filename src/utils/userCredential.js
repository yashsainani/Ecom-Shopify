const userCredentialChk = () => {

    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
    if (userDetails === null) return false;
    return true;
};

export default userCredentialChk;