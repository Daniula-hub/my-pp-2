UPDATE users 
SET highest_score = highest_score + $2 
WHERE user_name = $1
RETURNING user_name, profile_pic, highest_score;