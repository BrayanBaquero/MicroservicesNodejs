CREATE TABLE user(
  id        VARCHAR(32),
  username  VARCHAR(32),
  `name`      VARCHAR(64)
);

CREATE TABLE auth(
  id   VARCHAR(32) NOT NULL PRIMARY KEY,
  username VARCHAR(32),
  password VARCHAR(64)
)

INSERT INTO user (id, username, `name`) VALUES (213,'username', 'name');