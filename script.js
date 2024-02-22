/* Global variables and constants */
// Input constants
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const idInput = document.getElementById('idNumber');
const jobTitleInput = document.getElementById('jobTitle');
const salaryInput = document.getElementById('salary');
// Submit button
const submitButton = document.getElementById('submitButton');
// Footer
const footer = document.getElementById('footer');
// Employee container
const employees = document.getElementById('employeeData');
// Monthly cost display
const totalMonthly = document.getElementById('totalMonthly');
// Monthly cost to update
let currentMonthlyCost = 0;
/* Budget variables */
// Display for current budget
const budgetDisplay = document.getElementById('budget');
// Budget to update initialized at 20000
let budget = 20000;
// New budget field
const newBudget = document.getElementById('budgetInput');
// Budget button
const budgetButton = document.getElementById('updateBudget');

/**Function to add employees to the DOM.
 * Will call update monthly cost and over budget check
 * @param {click} event 
 */
function addEmployee(event){
    // Creating a new employee row
    let employee = document.createElement('tr');
    // Creating a new first name table data
    let firstName = document.createElement('td');
    firstName.textContent = firstNameInput.value;
    firstName.className = 'nonDelete';
    employee.appendChild(firstName);
    // Creating a new last name table data
    let lastName = document.createElement('td');
    lastName.textContent = lastNameInput.value;
    lastName.className = 'nonDelete'
    employee.appendChild(lastName);
    // Creating a new id number table data
    let idNumber = document.createElement('td');
    idNumber.textContent = idInput.value;
    idNumber.className = 'nonDelete';
    employee.appendChild(idNumber);
    let jobTitle = document.createElement('td');
    jobTitle.textContent = jobTitleInput.value;
    jobTitle.className = 'nonDelete';
    employee.appendChild(jobTitle);
    // Creating a new salary table data
    let salary = document.createElement('td');
    salary.textContent = '$'+ parseFloat(salaryInput.value).toFixed(2);
    salary.className = 'salaryValue';
    salary.classList.add('nonDelete');
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


/**
 * Applies and removes over-budget class
 * @param {click} event 
 */
function checkBudget(event){
    if (budget < currentMonthlyCost){
        // Applies 'over-budget' if over the current budget
        footer.classList.add('over-budget');
    } else{
        // Removes 'over-budget' if not over the current budget
        footer.classList.remove('over-budget');
    }// End if/else
}// End checkBudget


/**
 * Removes employee and updates the salary
 * @param {click} event 
 */
function removeEmployee(event){
    // Selecting this employee's salary
    let salaryElement = event.target.closest('tr').querySelector('.salaryValue');
    // Removing all characters besides numbers
    let salaryText = salaryElement.textContent.replace ('$', '');
    // Parsing employee's salary into a number
    let yearlyPay = parseFloat(salaryText);
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
    }// End if/else
    // Updating totalMonthly, using toFixed to prevent 'weird computer math'
    totalMonthly.textContent = currentMonthlyCost.toFixed(2);
    // Check if over budget
    checkBudget();
}// End updateMonthlyCost


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


function updateBudget(event){
    budget = newBudget.value
    budgetDisplay.textContent = budget;
    checkBudget();
}// End updateBudget


/* Event listeners to give buttons functionality */
// Submit button adds an employee
submitButton.addEventListener('click', function(event){
    event.preventDefault();
    if (firstNameInput.value.trim() && lastNameInput.value.trim() && idInput.value.trim() && jobTitleInput.value.trim() && salaryInput.value.trim()) {
        // Ensures all fields are filled
        addEmployee();
    } else {
        // Not all fields are filled
        return;
    }// End if/else
})// End event listener function

budgetButton.addEventListener('click', updateBudget)
// Delete button listeners are applied in the add employee function