INSERT INTO users
(user_name, password, user_age, highest_score, education_id, gender_id, user_email, profile_pic)
VALUES
($1, $2, $3, 0, $4, $5, $6, $7)
RETURNING user_name;