SELECT COUNT(*) AS user_quantity, edu.education_type, MAX(u.highest_score) AS highest_score FROM users u
INNER JOIN education edu
ON edu.education_id = u.education_id
GROUP BY edu.education_type
ORDER BY edu.education_type DESC;