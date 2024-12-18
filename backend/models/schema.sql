

create table template(
  template_id VARCHAR(100) PRIMARY KEY,
  template_name VARCHAR(100),
  template_content VARCHAR(10000),
  creation_date DATE,
  type VARCHAR(50),
  created_by VARCHAR(100),
  html VARCHAR(10000)
)