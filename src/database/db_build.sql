BEGIN ;
DROP TABLE IF EXISTS students, projects;

CREATE TABLE students (
id SERIAL PRIMARY KEY,
username VARCHAR(100) NOT NULL UNIQUE,  
name VARCHAR(100) NOT NULL ,
age INTEGER NOT NULL,
gender VARCHAR(30) NOT NULL,
img text NOT NULL,
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




insert into students (username, name, age, gender,img, cohort, password) values
('melkhoudary','Marwan Elkhoudary',31,' Male', 'https://avatars0.githubusercontent.com/u/37986562?s=400&u=e5f19e1f9bc889af2cbf266cafabcb8d2b1c4f4b&v=4','FACG5', '$2a$10$uL3LFmGIlVhuNeF1LEMpReAsxDdNxwYsTSnbHRTAhvo3aJNzlhK4u'),
('aabulebda','Ahmad Abu Lebda' ,33,' Male','https://avatars0.githubusercontent.com/u/34221928?s=460&v=4', 'FACG5', '$2a$10$uL3LFmGIlVhuNeF1LEMpReAsxDdNxwYsTSnbHRTAhvo3aJNzlhK4u'),
('dhassona','Donia Hassona' ,20,' Female','https://avatars3.githubusercontent.com/u/30000982?s=400&v=4' ,'FACG5', '$2a$10$uL3LFmGIlVhuNeF1LEMpReAsxDdNxwYsTSnbHRTAhvo3aJNzlhK4u'),
('iali','Ibraheem Al-Shaikh Ali' ,22,'Male','https://avatars3.githubusercontent.com/u/34215823?s=460&v=4' ,'FACG5', '$2a$10$uL3LFmGIlVhuNeF1LEMpReAsxDdNxwYsTSnbHRTAhvo3aJNzlhK4u'),
('smughessib','Salwa Abu Mughessib',22,'Female','https://avatars1.githubusercontent.com/u/37841191?s=400&v=4' ,'FACG5', '$2a$10$uL3LFmGIlVhuNeF1LEMpReAsxDdNxwYsTSnbHRTAhvo3aJNzlhK4u'),
('osadiya','Ons Sadiya',22,'female','https://avatars3.githubusercontent.com/u/36223611?s=400&v=4' ,'FACG5', '$2a$10$uL3LFmGIlVhuNeF1LEMpReAsxDdNxwYsTSnbHRTAhvo3aJNzlhK4u'),
('aalmadhoun','Asmaa Al-Madhoun',22,'Female','https://avatars2.githubusercontent.com/u/38081411?s=400&v=4','FACG5','$2a$10$uL3LFmGIlVhuNeF1LEMpReAsxDdNxwYsTSnbHRTAhvo3aJNzlhK4u'),
('khassouna','Kannaan Hassouna',20,'Male','https://avatars2.githubusercontent.com/u/32320156?s=400&v=4','FACG5','$2a$10$uL3LFmGIlVhuNeF1LEMpReAsxDdNxwYsTSnbHRTAhvo3aJNzlhK4u'),
('malhanafi','Mohannad Al-Hanafi',22,'Male','https://avatars2.githubusercontent.com/u/30985258?s=400&v=4','FACG5','$2a$10$uL3LFmGIlVhuNeF1LEMpReAsxDdNxwYsTSnbHRTAhvo3aJNzlhK4u'),
('oshamla','Othman Shamla',22,'Male','https://avatars2.githubusercontent.com/u/16326221?s=400&v=4','FACG5','$2a$10$uL3LFmGIlVhuNeF1LEMpReAsxDdNxwYsTSnbHRTAhvo3aJNzlhK4u'),
('labdaljawwad','lubna abd aljawwad',22,'Female','https://avatars1.githubusercontent.com/u/26024284?s=460&v=4','FACG5','$2a$10$uL3LFmGIlVhuNeF1LEMpReAsxDdNxwYsTSnbHRTAhvo3aJNzlhK4u'),
('aabdallah','ahmad abdallah',22,'Male','https://dyn.web.whatsapp.com/pp?e=https%3A%2F%2Fpps.whatsapp.net%2Fv%2Ft61.11540-24%2F33555476_1740215192724066_4300609521522311168_n.jpg%3Foe%3D5B8AE5A4%26oh%3Df39c11f680b877a3c7403869edbca3d2&t=l&u=972599089478%40c.us&i=1528438403','FACG5','$2a$10$uL3LFmGIlVhuNeF1LEMpReAsxDdNxwYsTSnbHRTAhvo3aJNzlhK4u'),
('aahmed','Ali Haj Ahmed',29,'Male','https://avatars0.githubusercontent.com/u/36124895?s=460&v=4','FACG5','$2a$10$uL3LFmGIlVhuNeF1LEMpReAsxDdNxwYsTSnbHRTAhvo3aJNzlhK4u');


insert into projects (student_id, name_project, img_url, url, description) values
(1, 'Qustion and Answerd','https://www.rajras.in/wp-content/uploads/2016/07/qa-300x270.png' ,'https://questions5.herokuapp.com/', 'Our website that give you ability to register in site and add new Qustion and reply on other users questions.'),
(2, 'Qustion and Answerd','https://www.rajras.in/wp-content/uploads/2016/07/qa-300x270.png' ,'https://questions5.herokuapp.com/', 'Our website that give you ability to register in site and add new Qustion and reply on other users questions.'),
(3, 'Qustion and Answerd','https://www.rajras.in/wp-content/uploads/2016/07/qa-300x270.png' ,'https://questions5.herokuapp.com/', 'Our website that give you ability to register in site and add new Qustion and reply on other users questions.'),
(4,'courseSystem','https://camo.githubusercontent.com/1bbb9427c6cdbf4d8ca41a6292b3a58ca5ed5944/687474703a2f2f777777392e307a7a302e636f6d2f323031382f30382f30382f31342f3532393035323533332e706e67','https://courseproject5.herokuapp.com/','Our website that give you ability to register in site and add new Qustion and reply on other users questions.'),
(5,'Artista-db','http://farm4.static.flickr.com/3193/2313008961_a647e3f510_o.jpg','https://artista-db.herokuapp.com/','Art website, where the user can browse thepanting from the website database, and can add a panting if he like or can delete it, also the user can view the painters in the database.'),
(6,'KOA-Recipes' ,'https://camo.githubusercontent.com/fcd00732b04a1b93b553a355e9309f1368a94c9c/687474703a2f2f777777372e307a7a302e636f6d2f323031382f30382f31362f31302f3233303633373233342e706e67','https://github.com/FACG5/KOA-Recipes','Our website is a platform for sharing a recipe. Users can share recipes and try recipes shared by other users. And once they do, they can either tick tried and works or doesnot work.'),
(7,'KOA-Event-Planner','https://camo.githubusercontent.com/f04e568061ac432356f50b869e70f2c7512e1900/687474703a2f2f777777322e307a7a302e636f6d2f323031382f30382f30372f31332f3833323136393835362e706e67','https://github.com/FACG5/koa-event-planner','Our website is an Event planner. First you encounter a sign in page. If you are signed in you get forewarded to the main page of our website; the event planner. There, you can add name of the event, some additional content, the date and the time for the event then click go which will make you event details appear in a box under the original input fields. If you arenot registerd, you can register via a small link under the sign in fields which will foreward you to the registration page and after signing-up you get forewarded to the main page.'),
(8,'KOA-Event-Planner','https://camo.githubusercontent.com/f04e568061ac432356f50b869e70f2c7512e1900/687474703a2f2f777777322e307a7a302e636f6d2f323031382f30382f30372f31332f3833323136393835362e706e67','https://github.com/FACG5/koa-event-planner','Our website is an Event planner. First you encounter a sign in page. If you are signed in you get forewarded to the main page of our website; the event planner. There, you can add name of the event, some additional content, the date and the time for the event then click go which will make you event details appear in a box under the original input fields. If you arenot registerd, you can register via a small link under the sign in fields which will foreward you to the registration page and after signing-up you get forewarded to the main page.'),
(9,'HTML4KIDS','https://camo.githubusercontent.com/f0bb4fdb9b45cacb34fbf03df3b9393c3cecbd5f/687474703a2f2f777777372e307a7a302e636f6d2f323031382f30372f32352f31362f3539313930393135342e706e67','https://cryptic-wave-21405.herokuapp.com/','Our website that give you ability to enter any HTML tag in the input field which will give you back sensible suggestion related to the selected HTML tags.'),
(10,'Savvy--project-2','https://github.com/FACG5/Savvy--project-2','https://savvy-make-up.herokuapp.com/','Our website is A maekup finder. Through an inout bar, you can type in the firt letter or letters of the product you have in mind and it will give you a list of suggestions.'),
(11,'Savvy--project-2','https://github.com/FACG5/Savvy--project-2','https://savvy-make-up.herokuapp.com/','Our website is A maekup finder. Through an inout bar, you can type in the firt letter or letters of the product you have in mind and it will give you a list of suggestions.'),
(12,'Savvy--project-2','https://github.com/FACG5/Savvy--project-2','https://savvy-make-up.herokuapp.com/','Our website is A maekup finder. Through an inout bar, you can type in the firt letter or letters of the product you have in mind and it will give you a list of suggestions.'),
(13,'am-w5-project','https://github.com/FACG5/am-w5-project','https://w5-project.herokuapp.com/','Simple search weather app, that search for the weather in a city.');

COMMIT;