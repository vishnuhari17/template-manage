import { query } from "../services/db.js";


const create_table_template = async () => {
    try {
        await query(`
            CREATE TABLE template(
            template_id VARCHAR(100) PRIMARY KEY,
            template_name VARCHAR(100),
            template_content VARCHAR(10000),
            creation_date DATE,
            type VARCHAR(50),
            created_by VARCHAR(100)
            );`
        );
        console.log("Table template created");
    } catch (error) {
        console.error(error);
    }
}


create_table_template();
