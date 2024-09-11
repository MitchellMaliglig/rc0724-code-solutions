SELECT "firstName", "lastName"
FROM "actors"
JOIN ("films" JOIN "castMembers" USING ("filmId")) USING ("actorId")
WHERE "title" = 'Jersey Sassy';
