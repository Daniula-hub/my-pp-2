const bcrypt = require('bcryptjs');

const register = ( req, res ) => {
    const { userName, password: pw, email, gender, education, user_age } = req.body;
    const db = req.app.get('db');

    db.auth.find_user_by_username(userName)
    .then((users) => {
        if(users.length){
            res.status(500).send('Username Already Taken');
        } else {
            const password = bcrypt.hashSync(pw);
            const profile_pic = `https://robohash.org/${userName}.png`;
            db.auth.create_user(userName, password, user_age, education, gender, email, profile_pic)
            .then(userArr => {
                req.session.user = userArr[0];
                res.status(200).send(userArr[0]);
            })
        }
    }).catch((err) => res.status(500).send(`Error creating user: ${err}`))
}

const login = async ( req, res ) => {
    const { userName, password } = req.query;
    const db = req.app.get('db');

    try{
        const userArr = await db.auth.find_user_by_username(userName);
        if(userArr.length > 0){
            console.log("User: ", userArr[0]);
            const credentialMatch = bcrypt.compareSync(password, userArr[0].password);
            console.log("Password comparison: ", credentialMatch);
            if(credentialMatch){
                req.session.user = userArr[0];
                res.status(200).send(userArr[0]);
            }else{
                res.sendStatus(500);
            }
        }
    }catch(e) {
        res.sendStatus(403);
    }
}


const getUser = ( req, res ) => {
    const user = req.session.user;
    if(user){
        res.status(200).send(user);
    }else {
        res.sendStatus(404);
    }
}

const logout = ( req, res ) => {
    req.session.destroy(() => {
        res.sendStatus(200);
    });

}

module.exports = {
    register,
    login,
    getUser,
    logout
}