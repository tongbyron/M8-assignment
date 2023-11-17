// GLOBAL VARIABLES
let addForm             // THE ADD FORM
let id                  // THE ID TEXT BOX
let name                // THE NAME TEXT BOX
let extension                 // THE EXT TEXT BOX
let email               // THE EMAIL TEXT BOX
let department          // THE DEPARTMENT TEXT BOX
let empTable            // THE EMPLOYEES TABLE

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let empCount

// CREATE AN ARRAY OF EMPLOYEES

let employees = [[11111111, "Joe Biden", 1111, "joe.biden@us.gov", "Administrative"],
                  [22222222, "Donald Trump", 2222, "donald.trump@us.gov", "Engineering"],
                  [33333333, "Barack Obama", 3333, "barack.obama@us@us.gov", "Executive"],
                  [44444444, "George Bush", 4444, "george.bush@us.gov", "Marketing"],
                  [55555555, "Bill Clinton", 5555, "bill.clinton@us.gov", "QA"]]

// HELPER FUNCTION TO RETURN DOM ELEMENT
const $ = (id) => document.getElementById(id);

// GET DOM ELEMENTS
addForm         = $('addForm')
id              = $('id')
name            = $('name')
extension       = $('extension')
email           = $('email')
department      = $('department')
empTable        = $('empTable')
empCount        = $('empCount')

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
window.onload = function(){
    if (JSON.parse(localStorage.getItem('employees')) != null)
        employees = JSON.parse(localStorage.getItem('employees'));

    // BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
    buildGrid();
};

// ADD EMPLOYEE
addForm.addEventListener('submit', (e) => {
  // PREVENT FORM SUBMISSION
  e.preventDefault();

  // GET THE VALUES FROM THE TEXT BOXES
  // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
   let employee = [id.value, name.value, extension.value, email.value, department.value]

  // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
  employees.push(employee);

  // BUILD THE GRID
  buildGrid();

  // RESET THE FORM
  addForm.reset();

  // SET FOCUS BACK TO THE ID TEXT BOX
  id.focus();

});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
  // CONFIRM THE DELETE
  if (confirm('Are you sure you want to delete this employee?')) {

      // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
      // REMOVE EMPLOYEE FROM ARRAY
      employees.splice(e.target.parentNode.parentNode.rowIndex - 1, 1);

      // BUILD THE GRID
      buildGrid();
  }
});

// FUNCTION TO INSERT A CELL INTO ROW
function insertCellRow(row, value) {
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cell = row.insertCell();
    cell.innerHTML = value;
}

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTable.removeChild(empTable.children[1]);

    // REBUILD THE TBODY FROM SCRATCH
    let tbody = document.createElement('tbody');

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    for (let i of employees) {
      let row = tbody.insertRow();

      insertCellRow(row, i[0]);
      insertCellRow(row, i[1]);
      insertCellRow(row, i[2]);
      insertCellRow(row, i[3]);
      insertCellRow(row, i[4]);

      // CREATE THE DELETE BUTTON
      let cellDelete = row.insertCell()
      let deleteBtn = document.createElement('button')
      // ADD BOOTSTRAP CLASSES FOR A BUTTON
      deleteBtn.className = 'btn btn-danger btn-sm float-end'
      // CREATE TEXT NODE FOR DELETE BUTTON AND SET IT TO 'X'
      let textDelete = document.createTextNode('X')
      // APPEND TEXT NODE TO DELETE BUTTON
      deleteBtn.appendChild(textDelete)
      // APPEND DELETE BUTTON TO TR
      cellDelete.appendChild(deleteBtn)
    }
      
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(tbody) 

    // UPDATE EMPLOYEE COUNT
    empCount.innerHTML = employees.length;

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employees));

};