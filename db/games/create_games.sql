INSERT INTO games (question_quantity, score, user_id, category_id, difficulty_id) 
VALUES (10, $1, $2, $3, $4)
RETURNING *;