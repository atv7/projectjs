CREATE TABLE person -- снецаристы, художники и т.д.
(
    person_id SERIAL PRIMARY KEY, -- id персоны
    person_name VARCHAR(64) NOT NULL, -- имя персоны
    birthdate DATE, -- дата рождения
    photo text -- ссылка на фото
);

CREATE TABLE genre -- жанры
(
    genre_id SERIAL PRIMARY KEY,
    genre_name VARCHAR(64) NOT NULL
);

CREATE TABLE country -- страна
(
    country_id SERIAL PRIMARY KEY,
    country_name VARCHAR(64) NOT NULL
);

CREATE TABLE spectator -- зрители
(
    spectator_ID SERIAL PRIMARY KEY,
    spectator_country VARCHAR(64)
);

CREATE TABLE main_role -- главные роли
(
    main_role_id SERIAL PRIMARY KEY,
    main_role_name VARCHAR(64)
);

CREATE TABLE dubbing_role -- роли дубляжа
(
    dubbing_role_id SERIAL PRIMARY KEY,
    dubbing_role_name VARCHAR(64)
);

CREATE TABLE film
(
    film_id SERIAL PRIMARY KEY, -- id фильма
    title VARCHAR(64) NOT NULL, -- название фильма
    release_year INTEGER, -- год релиза
    rating REAL, -- рейтинг
    duration INTEGER, -- длительность
    description_film text, -- описание фильма
    poster text, -- ссылка на постер фильма
    trailer text, -- ссылка на трейлер фильма
    genre_id INTEGER,
    country_id INTEGER,
    screenwriter_id INTEGER, 
    FOREIGN KEY(screenwriter_id) REFERENCES person(person_id), -- сценарист
    director_id INTEGER, 
    FOREIGN KEY(director_id) REFERENCES person(person_id) -- режиссер
    
);


CREATE TABLE film_person 
(
    film_id INTEGER,
    person_id INTEGER,
    main_role_id INTEGER,
    dubbing_role_id INTEGER,
    PRIMARY KEY (film_id, person_id),
    FOREIGN KEY (film_id) REFERENCES film(film_id),
    FOREIGN KEY (person_id) REFERENCES person(person_id),
    FOREIGN KEY (main_role_id) REFERENCES main_role(main_role_id),
    FOREIGN KEY (dubbing_role_id) REFERENCES dubbing_role(dubbing_role_id)
);


INSERT INTO person (person_name) VALUES ('Фрэнк Дарабонт'), ('Стивен Кинг'), ('Дэвид Валдес');
INSERT INTO genre (genre_name) VALUES ('Драма'), ('Криминал');
INSERT INTO country (country_name) VALUES ('США'), ('Германия'), ('Япония');

--INSERT INTO spectator (spectator_name) VALUES ('USA'), ('Germany'), ('Russia');

INSERT INTO main_role (main_role_name) VALUES ('Том Хэнкс'), ('Дэвид Морс');
INSERT INTO dubbing_role (dubbing_role_name) VALUES ('Всеволод Кузнецов');

INSERT INTO spectator (spectator_country) VALUES ('США'), ('Германия'), ('Россия');

INSERT INTO film (title, release_year, duration, description_film, director_id) 
VALUES ('Зеленая миля', 1999, 189, 
'В тюрьме для смертников появляется заключенный с божественным даром. 
Мистическая драма по роману Стивена Кинга', 6);

INSERT INTO film_person 
VALUES (2,6,1,1);


SELECT title, person_name
from film
JOIN person ON film.director_id = person.person_id;