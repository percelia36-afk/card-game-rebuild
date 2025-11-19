-- building week12 card game db
-- users table

CREATE TABLE IF NOT EXISTS users (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  clerk_id TEXT,
  gamer_tag VARCHAR(30),
  user_profile TEXT
);

-- winners table
CREATE TABLE IF NOT EXISTS winners (
  id INT PRIMARY KEY GENERATED ALWAYS AS identity,
  user_id INT REFERENCES users(id),
  wins INT,
  played INT
);