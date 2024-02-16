/* Global variables and constants */
// Input constants
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const idInput = document.getElementById('idNumber');
const jobTitleInput = document.getElementById('jobTitle');
const salaryInput = document.getElementById('salary');

const submitButton = document.getElementById('submitButton');

// Employee container
const employees = document.getElementById('employeeData');

// Monthly cost display
const totalMonthly = document.getElementById('totalMonthly');

// Employee currentIndex
var currentIndex = 0;

var currentMonthlyCost = 0;

/**Function to add employees to the DOM.
 * Will call update monthly cost and over budget check
 * @param {event} event 
 */
function addEmployee(event){
    // Incrementing currentIndex
    currentIndex ++;

    // Creating a new employee row
    let employee = document.createElement('tr');

    // Creating a new index table data
    let index = document.createElement('td');
    index.textContent = currentIndex;
    employee.appendChild(index);

    // Creating a new first name table data
    let firstName = document.createElement('td');
    firstName.textContent = firstNameInput.value;
    employee.appendChild(firstName);

    // Creating a new last name table data
    let lastName = document.createElement('td');
    lastName.textContent = lastNameInput.value;
    employee.appendChild(lastName);

    // Creating a new id number table data
    let idNumber = document.createElement('td');
    idNumber.textContent = idInput.value;
    employee.appendChild(idNumber);

    let jobTitle = document.createElement('td');
    jobTitle.textContent = jobTitleInput.value;
    employee.appendChild(jobTitle);

    // Creating a new salary table data
    let salary = document.createElement('td');
    salary.textContent = salaryInput.value;
    salary.className = 'salaryValue';
    employee.appendChild(salary);

    // Calling update on monthly cost
    updateMonthlyCost();

    // Creating a new remove button
    let removeButton = document.createElement('button'); //will add onclick attribute after writing function
    removeButton.textContent = 'Delete';
    removeButton.className = 'deleteButton';
    employee.appendChild(removeButton);

    // Appending employee to the DOM
    employees.appendChild(employee);
}


/**Function to check if over budget and apply over-budget if neccesary
 * 
 */


/**Function to delete employees
 * Will call update monthly cost, update index
 */


/**Function to update monthly cost
 * Will call check if over budget
 */
function updateMonthlyCost(event){
    let salaryValue = salaryInput.value;
    // Dividing by 12 for monthly cost
    let monthlyPay = salaryValue / 12;
    currentMonthlyCost += monthlyPay;

    // Updating monthly cost on DOM
    totalMonthly.textContent = currentMonthlyCost;
}


/**Function to update employeeIndex
 * 
 */


/* Event listeners to give buttons functionality */
submitButton.addEventListener('click', function(event){
    event.preventDefault();
    addEmployee();
    firstNameInput.value = '';
    lastNameInput.value = '';
    idInput.value = '';
    jobTitleInput.value = '';
    salaryInput.value = '';
})