-- Adminer 4.8.1 PostgreSQL 14.1 (Debian 14.1-1.pgdg110+1) dump

DROP TABLE IF EXISTS "expenses";
DROP SEQUENCE IF EXISTS expenses_id_seq;
CREATE SEQUENCE expenses_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 5 CACHE 1;

CREATE TABLE "public"."expenses" (
    "id" integer DEFAULT nextval('expenses_id_seq') NOT NULL,
    "user_id" integer NOT NULL,
    "created_at" timestamptz DEFAULT now() NOT NULL,
    "amount" integer NOT NULL,
    "notes" text NOT NULL,
    CONSTRAINT "expenses_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

COMMENT ON TABLE "public"."expenses" IS 'Store my money';

INSERT INTO "expenses" ("id", "user_id", "created_at", "amount", "notes") VALUES
(1,	2,	'2022-01-25 16:52:08.737986+00',	22,	'first note'),
(2,	2,	'2022-01-25 16:52:15.4356+00',	30,	'third note'),
(3,	3,	'2022-01-25 16:52:21.991514+00',	10,	'apples'),
(4,	4,	'2022-01-25 16:52:28.441628+00',	99,	'computers'),
(5,	4,	'2022-01-25 16:52:33.541738+00',	20,	'train');

DROP TABLE IF EXISTS "users";
DROP SEQUENCE IF EXISTS users_id_seq;
CREATE SEQUENCE users_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 4 CACHE 1;

CREATE TABLE "public"."users" (
    "id" integer DEFAULT nextval('users_id_seq') NOT NULL,
    "name" text NOT NULL,
    "created_at" timestamptz DEFAULT now() NOT NULL,
    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

COMMENT ON TABLE "public"."users" IS 'It contains my users';

INSERT INTO "users" ("id", "name", "created_at") VALUES
(2,	'silvia',	'2022-01-25 16:38:35.902582+00'),
(3,	'franc',	'2022-01-25 16:38:43.302965+00'),
(4,	'antonio',	'2022-01-25 16:42:44.55125+00');

ALTER TABLE ONLY "public"."expenses" ADD CONSTRAINT "expenses_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;

-- 2022-01-25 17:05:07.520544+00