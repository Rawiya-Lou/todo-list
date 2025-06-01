# Task Manager

This is a simple Task Manager application that allows users to add, complete, and delete tasks. The application stores tasks in an array and provides a user-friendly interface for managing them.

## Features

- Add new tasks
- Mark tasks as completed
- Delete tasks
- Prevent duplicate tasks from being added
- Simple and intuitive user interface

## Getting Started

To run this application, follow these steps:

1. Clone the repository or download the source code.
2. Open the `index.html` file in your web browser.

## Code Explanation

- HTML Elements: The application uses three main elements:
  - An input box for entering tasks (`input-box`)
  - A container to display the list of tasks (`task-container`)
  - A button to add tasks (`add-btn`)

- JavaScript Functions:
  - `addTasks()`: This function adds a new task to the tasks array. It checks if the input is empty or if the task already exists.
  - `completedTasks(index)`: Marks a task as completed based on its index in the tasks array.
  - `renderTasks()`: Renders the list of tasks in the task container, creating list items for each task.
  
- Event Listeners:
  - Click events on the task container allow users to complete tasks by clicking on them or delete tasks by clicking on the delete icon.

## Usage

1. Type a task into the input box and click the "Add" button to add it to the list.
2. Click on a task to mark it as completed. Completed tasks will have a visual change.
3. Click the delete icon (×) next to a task to remove it from the list.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- Inspired by various task management applications.
- Thanks to the community for their contributions and feedback.