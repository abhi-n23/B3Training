import psycopg2
import psycopg2.extras

# database connection details
# it's not good to save DB cedentials in variables.
# hostname = 'localhost'
# database = 'emp_dept'
# username = 'postgres'
# pwd = 'abhi9573'
# port_id = 5433

conn = None
try:
    # context-manager      ...(with-as)
    conn = psycopg2.connect(host='localhost', dbname='emp_dept',
                            user='postgres', password='abhi9573', port=5433)
    cur = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)

    cur.execute('drop table if exists employee')
    cur.execute('drop table if exists department')

# create table
    create_department = ''' CREATE TABLE IF NOT EXISTS department(
                                        dept_id     int primary key,
                                        dept_name   varchar(5))'''
    cur.execute(create_department)

    create_employee = ''' CREATE TABLE IF NOT EXISTS employee(
                                    emp_id    int primary key,
                                    name      varchar(40) not null,
                                    salary    int,
                                    tax       int,
                                    dept_id   int references department(dept_id)) '''
    cur.execute(create_employee)


# insert values in tables
    insert_department = '''INSERT INTO department(dept_id,dept_name)
                                VALUES(%s,%s)'''
    insert_department_values = [
        (1, 'Dept1'),
        (2, 'Dept2'),
        (3, 'Dept3'),
        (4, 'Dept4')
    ]
    for record in insert_department_values:
        cur.execute(insert_department, record)

    insert_employee = ''' INSERT INTO employee(emp_id,name,salary,dept_id)
                                VALUES(%s,%s,%s,%s)'''
    insert_employee_values = [
        (1, 'Abhishek Ninawe', 230000, 2),
        (2, 'Shreeya Gondhalekar', 510000, 1),
        (3, 'Prathamesh Telkapalliwar', 770000, 4),
        (4, 'Adarsh Soyam', 1270000, 3),
        (5, 'Pallavi Ninawe', 1800000, 2)
    ]
    for record in insert_employee_values:
        cur.execute(insert_employee, record)

    conn.commit()

except Exception as error:
    print(error)
