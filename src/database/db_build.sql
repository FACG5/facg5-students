BEGIN ;
DROP TABLE IF EXISTS students, projects;

CREATE TABLE students (
id SERIAL PRIMARY KEY,
name VARCHAR(100) NOT NULL UNIQUE ,
age INTEGER NOT NULL,
gender VARCHAR(30) NOT NULL,
cohort VARCHAR(30) NOT NULL,
password VARCHAR(100) NOT NULL
);

CREATE TABLE projects (
id SERIAL PRIMARY KEY,
student_id INTEGER,
name_project VARCHAR(500),
img_url text NOT NULL,
url text NOT NULL,
description text NOT NULL,
FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE
);




insert into students (name, age, gender, cohort, password) values
('MarwanElkhoudary', 31,' Male', 'FACG5', '$2a$10$uL3LFmGIlVhuNeF1LEMpReAsxDdNxwYsTSnbHRTAhvo3aJNzlhK4u'),
('AhmedABuLebda', 33,' Male', 'FACG5', '$2a$10$uL3LFmGIlVhuNeF1LEMpReAsxDdNxwYsTSnbHRTAhvo3aJNzlhK4u'),
('DoniaHassona', 20,' Female', 'FACG5', '$2a$10$uL3LFmGIlVhuNeF1LEMpReAsxDdNxwYsTSnbHRTAhvo3aJNzlhK4u'),
('SalwaAbuMoghesseb', 22,'Female', 'FACG5', '$2a$10$uL3LFmGIlVhuNeF1LEMpReAsxDdNxwYsTSnbHRTAhvo3aJNzlhK4u');


insert into projects (student_id, name_project, img_url, url, description) values
(1, 'Qustion and Answerd','https://www.rajras.in/wp-content/uploads/2016/07/qa-300x270.png' ,'https://questions5.herokuapp.com/', 'Qustion and Answes'),
(2, 'Qustion and Answerd','https://www.rajras.in/wp-content/uploads/2016/07/qa-300x270.png' ,'https://questions5.herokuapp.com/', 'Qustion and Answes'),
(3, 'Qustion and Answerd','https://www.rajras.in/wp-content/uploads/2016/07/qa-300x270.png' ,'https://questions5.herokuapp.com/', 'Qustion and Answes');



COMMIT;