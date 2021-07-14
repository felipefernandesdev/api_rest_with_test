create schema blog;

create table blog.psot (
  id serial primary key,
  title text not null,
  content text not null,
  date timestamp default now()
);