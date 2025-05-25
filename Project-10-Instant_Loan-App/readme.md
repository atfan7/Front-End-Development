Learnings/Takeaways:



1. Client-Side validation is essential : Ensuring data entered is complete and in the form we expect before submission is necessary. I also used regular expressions, length verification to validate name, email, mobile number and loan amount. This brings down bad data entry and reduces unnecessary server calls, thus enhancing the user experience. 



2. Conditional Logic for Personalization: Used a Check() function to determine loan eligibility dynamically. Based on the input of the user, the UI gets updated with personalized messages and images. Feels more smooth and modern.



3. Using specific functions for tasks: I used Check, resetForn and Validate functions individually to handle a specific task. The code was more organized. Helped with debugging easily.



4. Use of Bootstrap in the project : The use of bootstrap's grid system and components helped to smoothly adjust layouts across different devices. I used buttons, forms, modals and navigation bars styling with it, saving a ton of time.



5. Modal Pop-up vs Redirecting to new page : Users can fill out the form directly in a modal popup after passing the eligibility check based on their CIBIL score and salary. Helps to keep users engaged with a single interface.
