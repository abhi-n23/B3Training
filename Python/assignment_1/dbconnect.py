import psycopg2
import psycopg2.extras

# database connection details
# it's not good to save DB cedentials in variables.
# hostname = 'localhost'
# database = 'emp_dept'
# username = 'postgres'
# pwd = 'abhi9573'
# port_id = 5433
# conn = None


class DB_connect:

    # try:
    # context-manager      ...(with-as)
    conn = psycopg2.connect(host='localhost', dbname='emp_dept',
                            user='postgres', password='abhi9573', port=5433)
    cur = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)

    # create table

    def __init__(self) -> None:
        pass

    def create_table(self):
        # print("hello from create table")                          #to check whether the table is running or not
        DB_connect.cur.execute('drop table if exists employee')
        DB_connect.cur.execute('drop table if exists department')

        create_department = ''' CREATE TABLE IF NOT EXISTS department(
                                                dept_id     serial primary key,
                                                dept_name   varchar(10))'''
        DB_connect.cur.execute(create_department)

        create_employee = ''' CREATE TABLE IF NOT EXISTS employee(
                                            emp_id    serial primary key,
                                            name      varchar(40) not null,
                                            salary    int,
                                            dept_id   int references department(dept_id),
                                            tax       int) '''
        DB_connect.cur.execute(create_employee)

    # insert values in tables

    def insert(self, tablename, column_list, argument_list):
        # print("hello from insert table")                         # to check whether the table is running or not

        columns = ""
        values = ""
        new_columns = ""
        new_values = ""

        for i in column_list:
            columns += "{},"
            values += "%s,"

        for char in range(0, len(columns)-1):
            new_columns += columns[char]
        for char in range(0, len(values)-1):
            new_values += values[char]

        # print(columns)
        # print(values)
        # print(new_columns)
        # print(new_values)

        insert_department = "INSERT INTO {} ({}) VALUES({})".format(
            tablename, new_columns, new_values)

        print(insert_department)

        for i in range(0, 1):
            insert_department = insert_department.format(*column_list)

        DB_connect.cur.execute(insert_department, argument_list)

        print(
            f"----------------------New {tablename} Inserted---------------------\n")

    def delete_record(self, tablename, name_to_delete):
        delete_script = "DELETE FROM {} WHERE name = '{}'".format(tablename,
                                                                  name_to_delete)
        ans = input(
            "\nAre you sure you want to delete {}'s record(Y/N)?".format(name_to_delete))
        if ans == 'Y' or ans == 'y':
            DB_connect.cur.execute(delete_script)
            print(
                "\n--------------------{}'s Data Deleted--------------------\n".format(name_to_delete))

    def Calctax(self, calculation, salary, name):
        update_script = "update employee set tax = {} where name = '{}'" .format(
            calculation, name)
        DB_connect.cur.execute(update_script)

        print('{:25} have a salary of Rs.{:<8} and pays tax of Rs. {:<8}'.format(
            name, salary, calculation))

    def displayrecords():
        print(
            '\n----------------------------All Employee Records----------------------------')
        DB_connect.cur.execute('select * from employee')
        for record in DB_connect.cur.fetchall():
            print('{:25} = {:8}'.format(record['name'], record['salary']))

    # def displayafter():

    conn.commit()
    # except Exception as error:
    #     print(error)


class departmentTable:
    tablename = "department"
    columnlist = ["dept_name"]

    def add(self, *values):
        print(values)
        # values = input(f"Enter values  (',' separated) : ").split(",")
        DB_connect.insert(self, departmentTable.tablename,
                          departmentTable.columnlist, values)

    def delete(self, name_to_delete):
        DB_connect.delete_record(
            self, departmentTable.tablename, name_to_delete)

    def update(self, column, name_to_update, value):
        update_script = "update {} set {} = {} where name= '{}'".format(
            departmentTable.tablename, column, value, name_to_update)
        print(
            "\n--------------------{}'s Data Updated--------------------\n".format(name_to_update))
        DB_connect.cur.execute(update_script)

    DB_connect.conn.commit()


class employeeTable:
    tablename = "employee"
    columnlist = ["name", "salary", "dept_id"]

    def add(self, *values):
        print(values)
        # input(f"Enter values {employeeTable.columnlist} (',' separated) : ").split(",")
        DB_connect.insert(self, employeeTable.tablename,
                          employeeTable.columnlist, values)

    def delete(self, name_to_delete):
        DB_connect.delete_record(self, employeeTable.tablename, name_to_delete)

    def update(self, name_to_update, column, value):
        update_script = "update {} set {} = {} where name= '{}'".format(
            employeeTable.tablename, column, value, name_to_update)
        print(
            "\n--------------------{}'s Data Updated--------------------\n".format(name_to_update))
        DB_connect.cur.execute(update_script)

    DB_connect.conn.commit()


# column_list = ["name", "salary", "dept_id"]
# tablename = "department"
# columns = ""
# values = ""
# for index, value in enumerate(column_list):
#     columns += "{},"
#     values += "%s,"

# new_columns = ""
# new_values = ""
# for char in range(0, len(columns)-1):
#     new_columns += columns[char]
# for char in range(0, len(values)-1):
#     new_values += values[char]

# # values
# print(columns)
# print(values)
# print(new_columns)
# print(new_values)
# print()
# #  column_list[0], column_list[1], column_list[2],
# insert_department = "INSERT INTO {} ({}) VALUES({})".format(
#     tablename, new_columns, new_values)

# for i in range(0, 1):
#     insert_department = insert_department.format(
#         column_list[i], column_list[i+1], column_list[i+2])

# print(insert_department)
