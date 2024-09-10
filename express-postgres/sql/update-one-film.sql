UPDATE "films"
SET "title" = 'African Pizza'
WHERE "filmId" = '5'
RETURNING *;
