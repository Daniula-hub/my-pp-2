SELECT user_id, user_name, password, profile_pic, highest_score FROM users
WHERE user_name = $1;