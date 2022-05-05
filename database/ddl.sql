CREATE TABLE user(
  id        VARCHAR(32) unique key,
  username  VARCHAR(32),
  `name`      VARCHAR(64)
);

INSERT INTO user (id, username, `name`) VALUES (213,'username', 'name');

CREATE TABLE auth(
  id   VARCHAR(32) NOT NULL PRIMARY KEY,
  username VARCHAR(32),
  password VARCHAR(64)
);

CREATE TABLE user_follow(
	user_from VARCHAR(32),
	user_to    VARCHAR(32),
	UNIQUE KEY `user_follow_user_from_IDX` (`user_from`,`user_to`) USING BTREE
);

CREATE TABLE post(
	id   varchar(32) primary key ,
	`text` text,
	`user` varchar(32)
);

INSERT INTO post (id,`text`,`user`) VALUES ('999','Mi primer post', '123');

delete from post;

select * from auth;
select * from `user`;
select * from user_follow;