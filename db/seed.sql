CREATE TABLE genders (
gender_id SERIAL PRIMARY KEY,
gender_type VARCHAR(7) NOT NULL
);

INSERT INTO genders 
(gender_type)
VALUES
('Male'), ('Female'), ('Other')

CREATE TABLE education (
education_id SERIAL PRIMARY KEY,
education_type VARCHAR(20) NOT NULL
);

INSERT INTO education 
(education_type)
VALUES
('School'), ('High School'), ('College'), ('Other')

CREATE TABLE categories (
category_id SERIAL PRIMARY KEY,
category_type VARCHAR(100) NOT NULL
);

INSERT INTO categories
(category_type)
VALUES
('General Knowledge'), ('Books'), ('Films'), ('Music'), ('Musicals and Theaters'), ('Television'), ('Video Games'), 
('Board Games'), ('Science and Nature'), ('Computer'), ('Sports'), ('Geography'), ('History'), ('Politics'), ('Celebrities'), ('Animals'), ('Vehicles'), ('Comics'), ('Gadgets'), ('Japanese Anime'), ('Cartoon and Animations')

CREATE TABLE minions (
minion_id SERIAL PRIMARY KEY,
minion_name VARCHAR(20) NOT NULL
);

INSERT INTO minions
(minion_name)
VALUES
('Dave'), ('Bob'), ('Jerry'), ('Carl')

CREATE TABLE difficulties (
difficulty_id SERIAL PRIMARY KEY,
difficulty_type VARCHAR(10) NOT NULL
);

INSERT INTO difficulties
(difficulty_type)
VALUES
('Easy'), ('Medium'), ('Hard')

CREATE TABLE users (
user_id SERIAL PRIMARY KEY,
user_name VARCHAR(20) NOT NULL UNIQUE,
password VARCHAR(200) NOT NULL,
user_age INTEGER NOT NULL,
country VARCHAR(100) NOT NULL,
highest_score INTEGER NOT NULL,
user_minion_id INTEGER REFERENCES minions(minion_id),
education_id INTEGER REFERENCES education(education_id),
gender_id INTEGER REFERENCES genders(gender_id)
);

CREATE TABLE games (
game_id SERIAL PRIMARY KEY,
question_quantity INTEGER NOT NULL,
score INTEGER
);

SELECT * FROM users;

ALTER TABLE games ADD COLUMN user_id INTEGER NOT NULL;

ALTER TABLE games 
ADD FOREIGN KEY ( 
 user_id 
) REFERENCES users(user_id);

ALTER TABLE games ADD COLUMN category_id INTEGER NOT NULL;

ALTER TABLE games 
ADD FOREIGN KEY ( 
 category_id 
) REFERENCES categories(category_id);

ALTER TABLE games ADD COLUMN difficulty_id INTEGER NOT NULL;

ALTER TABLE games 
ADD FOREIGN KEY ( 
 difficulty_id 
) REFERENCES difficulties(difficulty_id);

SELECT * FROM genders;

ALTER TABLE users ADD COLUMN user_email VARCHAR(100) NOT NULL;

ALTER TABLE users
DROP COLUMN country;

SELECT * FROM users;

 ALTER TABLE users DROP COLUMN user_minion_id;

DROP TABLE minions;

ALTER TABLE users ADD COLUMN profile_id TEXT;

SELECT * FROM users;

ALTER TABLE users ADD COLUMN profile_pic TEXT;