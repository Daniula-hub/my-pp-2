SELECT CONCAT(c.category_type, ', Difficulty: ', d.difficulty_type) AS labels, COUNT(d.difficulty_type) AS quantity FROM games g, categories c, difficulties d
WHERE c.category_id = g.category_id AND d.difficulty_id = g.difficulty_id
GROUP BY c.category_type, difficulty_type
ORDER BY c.category_type, quantity DESC;