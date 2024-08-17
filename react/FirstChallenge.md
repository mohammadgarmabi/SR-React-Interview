### First Challenge: Contact Form with State Management

#### Challenge Description

In this challenge, you will create a contact form that sends user information to a server via an API. The focus will be on using **React Query** for managing network requests, **React Hook Form** for handling form inputs and validation, and **Zustand** for managing form state and API responses.

#### Requirements

1. **Build a Contact Form:**
   - Create a contact form using **React Hook Form** with the following fields:
     - Full Name
     - Email
     - Message
   - Use **Zod** for form validation (full name required, valid email, and message with a minimum of 10 characters).

2. **Submit the Form to the Server:**
   - Use **React Query** to submit the form data to a mock API:
     - API URL: `https://jsonplaceholder.typicode.com/posts`
     - Method: `POST`
     - Data: { name, email, message }
   - Manage the request status (loading, success, or error).

3. **Manage Form State:**
   - Use **Zustand** to store the form state and the result of the submission (success or error).
   - If the submission is successful, display the message "Your message was sent successfully!".
   - If the submission fails, display the message "An error occurred while sending your message.".

4. **React to Form Changes:**
   - Store the form state in **Zustand** on every field change.
   - Clear the form automatically if the submission is successful.

#### Constraints

- **Time Limit**: This challenge should be completed in one hour.
- **Simplicity and Speed**: Due to the time constraint, your code should be optimized and straightforward.

#### Suggested Time Allocation

- 15 minutes: Create the form and set up validation with React Hook Form and Zod.
- 15 minutes: Configure React Query to submit the data to the API and manage request status.
- 15 minutes: Manage form state with Zustand and display success or error messages.
- 15 minutes: Debugging and optimization.
