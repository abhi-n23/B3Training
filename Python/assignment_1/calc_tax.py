import dbconnect


def Calctax(calculation, salary, name):
    update_script = "update employee set tax = {} where name = '{}'" .format(
        calculation, name)
    dbconnect.cur.execute(update_script)

    print('{:25} have a salary of Rs.{:<8} and pays tax of Rs. {:<8}'.format(
        name, salary, calculation))


try:

    # fetch records
    print('--------------------------------------BEFORE CALCULATING--------------------------------------')
    dbconnect.cur.execute('select * from employee')
    for record in dbconnect.cur.fetchall():
        print('{:30} = {:10}'.format(record['name'], record['salary']))


# update records
    print('--------------------------------------AFTER CALCULATING--------------------------------------')
    # update_script=''
    dbconnect.cur.execute('select * from employee')
    for record in dbconnect.cur.fetchall():

        if record['salary'] >= 0 and record['salary'] <= 250000:
            Calctax(0, record['salary'], record['name'])
            continue

        elif record['salary'] >= 250001 and record['salary'] <= 500000:
            Calctax((record['salary'] * 0.05),
                    record['salary'], record['name'])
            continue

        elif record['salary'] >= 500001 and record['salary'] <= 750000:
            Calctax((12500 + (record['salary'] * 0.1)),
                    record['salary'], record['name'])
            continue

        elif record['salary'] >= 750001 and record['salary'] <= 1000000:
            Calctax((37500 + (record['salary'] * 0.15)),
                    record['salary'], record['name'])
            continue

        elif record['salary'] >= 1000001 and record['salary'] <= 1250000:
            Calctax((75000 + (record['salary'] * 0.2)),
                    record['salary'], record['name'])
            continue

        elif record['salary'] >= 1250001 and record['salary'] <= 1500000:
            Calctax((125000 + (record['salary'] * 0.25)),
                    record['salary'], record['name'])
            continue

        else:
            Calctax((187500 + (record['salary'] * 0.3)),
                    record['salary'], record['name'])
            continue

    dbconnect.conn.commit()


except Exception as error:
    print(error)

finally:
    # *** if we use "context manager" with clause will take care of closing the cursor for us***
    if dbconnect.cur is not None:
        dbconnect.cur.close()
    if dbconnect.conn is not None:
        dbconnect.conn.close()
