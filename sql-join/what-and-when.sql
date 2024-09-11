SELECT "releaseYear", "genres"."name"
FROM "films"
JOIN ("genres" JOIN "filmGenre" USING ("genreId")) USING ("filmId")
WHERE "title" = 'Boogie Amelie';
