SELECT CONCAT(edu.education_type, ', Category: ', c.category_type) AS labels, COUNT(c.category_type) AS quantity FROM users u, games g, categories c, education edu
WHERE u.user_id = g.user_id AND u.education_id = edu.education_id AND c.category_id = g.category_id
GROUP BY edu.education_type, c.category_type
ORDER BY education_type, quantity DESC;