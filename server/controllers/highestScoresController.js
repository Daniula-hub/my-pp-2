module.exports = {
    getScores: (req, res) => {
         const db = req.app.get('db');
         db.highestScores.get_scores()
         .then( data => {
              res.status(200).send(data);
         })
         .catch(err => {
              console.log("There was an error retrieving the highest scores: ", err);
         })
    },
    saveScore: (req, res) => {
         const {user, score} = req.body;
         const db = req.app.get('db');

         if(user && score){
              db.highestScores.save_score(user.user_name, score)
              .then(data => {
                   res.status(200).send(data);
              })
              .catch(err => {
                   console.log("There was an error saving the highest score by user.", err);
                   res.status(500);
              });
         }else{
              console.log("Couldn't find user nor score in saveScore, highestScoresController.");
              res.status(500);
         }
    }
};