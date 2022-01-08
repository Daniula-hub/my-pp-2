SELECT COUNT(*) AS quantity, CONCAT(edu.education_type, ', Highest Score: ', MAX(u.highest_score)) as labels FROM users u
INNER JOIN education edu
ON edu.education_id = u.education_id
GROUP BY edu.education_type
ORDER BY edu.education_type DESC;