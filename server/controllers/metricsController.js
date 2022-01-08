module.exports = {
    getCategoryByEducation: (req, res) => {
         const db = req.app.get('db');
         db.metrics.metric_category_by_education()
         .then(data => {
              res.status(200).send(data);
         })
         .catch(err => {
              console.log("There was an error retrieving the metric data related to categories by education: ", err);
              res.status(500).send(err);
         });
    },
    getDifficultyByCategory: (req, res) => {
         const db = req.app.get('db');
         db.metrics.metric_difficulty_by_category()
         .then(data => res.status(200).send(data))
         .catch(err => {
              console.log("There was an error retrieving the metric data related to difficulties by category: ", err);
              res.status(500).send(err);
         });
    },
    getEducationByhighestScores: (req, res) => {
         const db = req.app.get('db');
         db.metrics.metric_education_by_highestScores()
         .then(data => res.status(200).send(data))
         .catch(err => {
              console.log("There was an error retrieving the metric data related to education by highest scores: ", err);
              res.status(500).send(err);
         });
    }
};