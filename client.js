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

// Monthly cost to update
var currentMonthlyCost = 0;

/* Budget variables */
// Display for current budget
const budgetDisplay = document.getElementById('budget');
// Budget to update initialized at 20000
var budget = 20000;
// New budget field
const newBudget = document.getElementById('budgetInput');

/**Function to add employees to the DOM.
 * Will call update monthly cost and over budget check
 * @param {click} event 
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
    // Calling update on monthly cost, false for no deletion
    updateMonthlyCost(false, parseFloat(salaryInput.value));
    // Creating a new remove button
    let removeButton = document.createElement('button'); //will add onclick attribute after writing function
    removeButton.textContent = 'Delete';
    removeButton.className = 'deleteButton';
    removeButton.addEventListener('click', removeEmployee);
    employee.appendChild(removeButton);
    // Appending employee to the DOM
    employees.appendChild(employee);
    // Clearing all input fields
    clearInputs();
}// End addEmployee


/**Function to check if over budget and apply over-budget if neccesary
 * 
 */
function checkBudget(){

}

/**
 * Removes employee and updates the salary
 * @param {click} event 
 */
function removeEmployee(event){
    // Selecting this employee's salary
    let salaryElement = event.target.closest('tr').querySelector('.salaryValue');
    // Parsing employee's salary into a number
    let yearlyPay = parseFloat(salaryElement.textContent);
    // Updating monthly cost, true for deletion
    updateMonthlyCost(true, yearlyPay);
    // Removing employee from list
    event.target.parentElement.remove();
}// End removeEmployee


/**
 * Updates the monthly cost variable and DOM representation
 * @param {boolean} isDeletion *makes function reuseable for adding and deleting employees
 * @param {number} salaryValue 
 */
function updateMonthlyCost(isDeletion = false, salaryValue = 0){
    // Translating the yearly salary to monthly pay
    let monthlyPay = salaryValue/12;
    // Checking if function is being called as a deletion
    if(isDeletion){
        // If removing an employee
        currentMonthlyCost -= monthlyPay;
    } else {
        // If adding an employee
        currentMonthlyCost += monthlyPay;
    }
    // Updating totalMonthly, using toFixed to prevent 'weird computer math'
    totalMonthly.textContent = currentMonthlyCost.toFixed(2);
}// End updateMonthlyCost


/**Function to update employeeIndex
 * 
 */

/**
 * Clears input fields
 * @param {click} event 
 */
function clearInputs(event){
    firstNameInput.value = '';
    lastNameInput.value = '';
    idInput.value = '';
    jobTitleInput.value = '';
    salaryInput.value = '';
} // End clearInputs

/* Event listeners to give buttons functionality */
// Submit button adds an employee
submitButton.addEventListener('click', function(event){
    event.preventDefault();
    addEmployee();
})
// Delete button listeners are applied in the add employee function