SELECT "countries"."name", count("cities"."name")
FROM "countries"
JOIN "cities" USING ("countryId")
GROUP BY "countries"."name";
