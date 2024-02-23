# Salary Calculator

## Project Overview
The Salary Calculator is a dynamic web application designed to calculate and track the monthly cost of employee salaries within a set budget, offering real-time financial management and planning capabilities.

## Key Features

### 1. Employee Information Submission
- Facilitates the input of essential employee details such as name, position, and salary.
- Dynamically updates a table with submitted employee data for better management and visibility.

### 2. Dynamic Monthly Cost Calculation
- Automatically recalculates and updates the monthly cost as new employees are added or removed.
- Monthly costs are derived by dividing individual annual salaries by 12.

### 3. Deletion Capability
- Each employee entry in the table includes a delete button for easy removal.
- Adjusts the total monthly cost in real-time to reflect deletions, ensuring accuracy.

### 4. Budget Monitoring
- Visually alerts users when the total monthly cost exceeds the set budget.
- Includes functionality to update the budget as needed, adapting to financial changes.

## Technical Implementation

### Frontend Development
- Built using **HTML** for structure, with **CSS** for modern and responsive styling.
- **JavaScript** is employed for dynamic interactions and functionality.

### JavaScript Functions
- `addEmployee`: Adds new employee entries to the table and updates monthly costs.
- `updateMonthlyCost`: Recalculates the monthly cost with each addition or deletion of an employee.
- `checkBudget`: Checks the current monthly cost against the budget, applying visual indicators for over-budget situations.
- `clearInputs`: Clears input fields after submission to maintain a clean user interface.
- `updateBudget`: Allows for budget adjustments, ensuring the tool remains useful and accurate over time.

### User Interaction
- Utilizes event listeners for form submissions to prevent page reloads, ensuring a smooth user experience.
- Includes form validation to prevent incomplete submissions, maintaining data integrity.

### Styling and User Experience
- Features button animations for interactive user feedback.
- Uses a flexbox layout for a structured yet flexible design.

## Getting Started
To use the Salary Calculator, simply clone the repository, open the `index.html` file in a browser, and start adding employee information to see real-time budget calculations and adjustments.