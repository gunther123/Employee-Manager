INSERT INTO department (dep_name)
VALUES
    ('Sales'),
    ('HR'),
    ('IT/Customer Service'),
    ('Accounting');

INSERT INTO roles (title, salary, department_id)
VALUES
    ('Salesperson', 80000, 1),
    ('Regional Manager', 100000, 2),
    ('Assistant to RM', 50000, 2),
    ('HR Representative', 100000, 2),
    ('IT Support', 65000, 3),
    ('Help Desk Support', 40000, 3),
    ('Customer Service Rep', 45000, 3),
    ('Accountant', 90000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Michael', 'Scott', 2, null),
    ('Dwight', 'Schrute', 3, null),
    ('Jim', 'Halpert', 1, 1),
    ('Pam', 'Beasley', 1, 1),
    ('Kevin', 'Malone', 8, 1),
    ('Oscar', 'Martinez', 8, 1),
    ('Ryan', 'Howard', 1, 1),
    ('Phyllis', 'Vance', 1, 1),
    ('Angela', 'Martin', 8, 1),
    ('Creed', 'Bratton', 5, 1),
    ('Stanley', 'Hudson', 1, 1),
    ('Kelly', 'Kapoor', 7, 1),
    ('Toby', 'Flenderson', 4, null);