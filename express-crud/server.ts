import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

type Grade = {
  gradeId?: number;
  name: string;
  course: string;
  score: number; // A number between 0 and 100
};

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

app.use(express.json());

// write your routes

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
      SELECT * FROM "grades";
    `;
    const result = await db.query<Grade>(sql);
    const grades = result.rows;
    if (grades) {
      res.status(200).json(grades);
    } else {
      res.status(200).json([]);
    }
  } catch (err) {
    next(err);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    validateGradeId(gradeId);
    const sql = `
      SELECT * FROM "grades"
      WHERE "gradeId" = $1;
    `;
    const params = [gradeId];
    const result = await db.query<Grade>(sql, params);
    const grade = result.rows[0];
    if (grade) {
      res.status(200).json(grade);
    } else {
      throw new ClientError(404, `grade ${gradeId} not found`);
    }
  } catch (err) {
    next(err);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    validateName(name);
    validateCourse(course);
    validateScore(score);
    const sql = `
      INSERT INTO "grades" ("name", "course", "score")
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const params = [name, course, score];
    const result = await db.query<Grade>(sql, params);
    const grade = result.rows[0];
    res.status(201).json(grade);
  } catch (err) {
    next(err);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    const { name, course, score } = req.body;
    validateGradeId(gradeId);
    validateName(name);
    validateCourse(course);
    validateScore(score);
    const sql = `
      UPDATE "grades"
      SET "name" = $2, "course" = $3, "score" = $4
      WHERE "gradeId" = $1
      RETURNING *;
    `;
    const params = [gradeId, name, course, score];
    const result = await db.query<Grade>(sql, params);
    const grade = result.rows[0];
    if (grade) {
      res.status(200).json(grade);
    } else {
      throw new ClientError(404, `grade ${gradeId} not found`);
    }
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    validateGradeId(gradeId);
    const sql = `
      DELETE FROM "grades"
      WHERE "gradeId" = $1
      RETURNING *;
    `;
    const params = [gradeId];
    const result = await db.query<Grade>(sql, params);
    const grade = result.rows[0];
    if (grade) {
      res.sendStatus(204);
    } else {
      throw new ClientError(404, `grade ${gradeId} not found`);
    }
  } catch (err) {
    next(err);
  }
});

// implement after routes for error handling
app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});

// validation functions
function validateGradeId(gradeId: string): void {
  const id = +gradeId;
  if (!Number.isInteger(id)) {
    throw new ClientError(400, `Non-integer grade ID: ${gradeId}`);
  }
}

function validateName(name: string): void {
  if (!name) {
    throw new ClientError(400, 'Undefined name');
  }
}

function validateCourse(course: string): void {
  if (!course) {
    throw new ClientError(400, 'Undefined course');
  }
}

function validateScore(score: string): void {
  if (!score) {
    throw new ClientError(400, 'Undefined score');
  } else if (Number(score) < 0) {
    throw new ClientError(400, `${score} is negative`);
  } else if (Number(score) > 100) {
    throw new ClientError(400, `${score} is over 100`);
  }
}
