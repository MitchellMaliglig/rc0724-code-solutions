SELECT line1, cities.name, district
FROM cities
JOIN addresses USING ("cityId");
