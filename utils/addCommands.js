const connection = require('../db/connection.js')
const inquirer = require('inquirer')
const {addDeptPrompt, addRolePrompt, addEmpPrompt} = require('./prompts/prompts')
const {viewDepts, viewRoles} = require('./viewCommands');


addDept = () => {
    inquirer.prompt(addDeptPrompt)
        .then(answer => {
            var query = `INSERT INTO department (dep_name)
                        VALUES (?)`;
            connection.query(query, answer.addDept, (err, result) => {
                if (err) throw err;
                console.log('New department "' + answer.addDept + '" has been added.')

                viewDepts();
            });
        });
    };

    function example(){
        const roleSql = `SELECT dep_name, id FROM department`; 
        const dept = connection.query(roleSql, (err, data) => {
              if (err) throw err; 
          
              const deptQuery = data.map(({ dep_name, id }) => ({ name: dep_name, value: id }));
              console.log(deptQuery)
              return deptQuery;
        })
        deptArr = dept.map(({ dep_name, id }) => ({ name: dep_name, value: id }));
        console.log(deptArr)

    return dept;
}

    addRole = () => {
        inquirer.prompt(addRolePrompt)
        .then(answer => {
            const param = [answer.role, answer.salary];
            
            const dept = example();
            ///console.log(dept)
            // const roleSql = `SELECT dep_name, id FROM department`; 
      
            // connection.query(roleSql, (err, data) => {
            //   if (err) throw err; 
          
            //   const dept = data.map(({ dep_name, id }) => ({ name: dep_name, value: id }));
      
    //           inquirer.prompt([
    //           {
    //             type: 'list', 
    //             name: 'dept',
    //             message: "What department is this role in?",
    //             choices: dept
    //           }
    //           ])
    //     .then(deptChosen => {
    //           const dept = deptChosen.dept;
    //           param.push(dept);
  
    //           const sql = `INSERT INTO roles (title, salary, department_id)
    //                       VALUES (?, ?, ?)`;
  
    //           connection.query(sql, param, (err, result) => {
    //             if (err) throw err;
    //             console.log('Added ' + answer.role + " to roles!"); 
  
    //             viewRoles();
    //      });
    //    });
     })
    // })
}
    
module.exports = {addDept};