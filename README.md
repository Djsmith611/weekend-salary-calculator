# Salary Calculator
## Description
### What it is
- Created a "salary calculator" that allows the submission of employee information and salaries into a table.
- The monthly cost is updated when an employee is added to the table by dividing their salary by 12 and adding it to the current cost.
- The table includes a delete button for each new employee line that will remove the entire table row when clicked as well as update the "company's" monthly cost.
- The monthly cost will visually indicate when the cost has exceeded the monthly budget.
- The monthly budget is updateable through the HTML with the addition of the budget update input field. The current budget is also displayed.

### What else? 
- I made button animations that use different colors depending on which button is being hovered on.
- CSS was utilized to style the page, but came out looking very "IOS", so I restlyed the page using flexbox and three columns to make it look like an actual webpage.
- CSS variables were also included in the root of the CSS file to allow for easy restyling of the elements.

### The JavaScript
#### Add Employee
- The function to add employees creates a table row element, as well as table data elements containing employee data, and a delete button with an event listener all with their
- respective classes.
- All elements are appended to the table row before being appended to the table body in the HTML.

- ##### Update Cost
- This is called inside of the add employee function.
- The monthly cost is updated by calling the update monthly cost function. this is done using a boolean and number value as parameters.
- The boolean value 'isDeletion' determines wether or not the function is called is being executed as part of a row deletion.
- The number value is the employee's salary. This is divided by 12 and added to the current monthly cost.
- If the function is being called as a deletion, the value of the removed Employee's salary is divided by 12 and subtracted from the monthly cost.
- ###### Check Budget
- This function checks if the current monthly cost is less than the budget. It is called inside the update cost function.
- The over-budget class is applied if the budget is lower than the current monthly cost. This class changes the visuals of the footer element.
- The over-budget class is removed if the budget is above or equal to the current monthly cost, removing the visual changes.

- ##### Clear Inputs
- The clear input function is also called to clear the input fields keeping clutter off of the screen. This is done by setting the value of each input field to ''.


#### Update Budget
- This function allows the user to update the monthly budget being checked by the check budget function. It is called in an event listener attached to the submit button in the budget field.
- The check budget function is called to update the footer class if necessary.

#### Form Submission
- The form submission is handled by attaching an event listener with a function to the submit button in the input form.
- Default form submission & page reload is prevented in the function.
- Form validation is achieved by checking if all fields contain data before executing the add employee function. 
- If any fields in the form are empty, the event listener function will terminate and not run the add employee function.
