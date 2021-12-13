import dbconnect


try:

    # create object or DB_connect class
    obj1 = dbconnect.DB_connect()
    obj1.create_table()

    # create object or departmenttable class
    deptobj = dbconnect.departmentTable()

    # create object or employeetable class
    empobj = dbconnect.employeeTable()

    # calling add methods of both objets
    deptobj.add("dept 1")
    deptobj.add("dept 2")
    empobj.add("Abhishek Ninawe", 510000, 1)
    empobj.add("Shreeya Gondhalekar", 1510000, 2)
    empobj.add("Adarsh Soyam", 1810000, 1)


# fetch records
    dbconnect.DB_connect.displayrecords()

# update records
    print('\n--------------------------------------AFTER CALCULATING--------------------------------------')
    obj1.cur.execute('select * from employee')
    for record in obj1.cur.fetchall():

        if record['salary'] >= 0 and record['salary'] <= 250000:
            obj1.Calctax(0, record['salary'], record['name'])
            continue

        elif record['salary'] >= 250001 and record['salary'] <= 500000:
            obj1.Calctax((record['salary'] * 0.05),
                         record['salary'], record['name'])
            continue

        elif record['salary'] >= 500001 and record['salary'] <= 750000:
            obj1.Calctax((12500 + (record['salary'] * 0.1)),
                         record['salary'], record['name'])
            continue

        elif record['salary'] >= 750001 and record['salary'] <= 1000000:
            obj1.Calctax((37500 + (record['salary'] * 0.15)),
                         record['salary'], record['name'])
            continue

        elif record['salary'] >= 1000001 and record['salary'] <= 1250000:
            obj1.Calctax((75000 + (record['salary'] * 0.2)),
                         record['salary'], record['name'])
            continue

        elif record['salary'] >= 1250001 and record['salary'] <= 1500000:
            obj1.Calctax((125000 + (record['salary'] * 0.25)),
                         record['salary'], record['name'])
            continue

        else:
            obj1.Calctax((187500 + (record['salary'] * 0.3)),
                         record['salary'], record['name'])
            continue

    # del_record = input("\nEnter employee name to delete record = ")
    # obj1.delete_record(del_record)
    empobj.delete("Adarsh Soyam")
    empobj.update("Abhishek Ninawe", "salary", 1000000)

    dbconnect.DB_connect.displayrecords()

    obj1.conn.commit()


except Exception as error:
    print(error)

finally:
    # *** if we use "context manager" with clause will take care of closing the cursor for us***
    if obj1.cur is not None:
        obj1.cur.close()
    if obj1.conn is not None:
        obj1.conn.close()
