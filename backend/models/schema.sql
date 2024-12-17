

create table template(
  template_id int primary key,
  template_name varchar(100),
  template_content text,
  creation_date date,
  type varchar(50),
  created_by varchar(100)
)