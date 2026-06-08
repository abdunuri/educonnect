# EduConnect

EduConnect is a static front-end prototype for an online tutoring platform that connects students and tutors.

## Main Concept

The project models a commission-free tutoring marketplace. Students can register, browse tutors, and schedule sessions, while tutors can manage session requests, availability, students, and earnings-style dashboard views.

## Features

- Landing page for the tutoring platform
- Student and tutor registration flows
- Role-based login redirect
- Student dashboard with sessions, tutors, and scheduling modal
- Tutor dashboard with sessions, requests, students, and availability modal
- Demo user persistence with `localStorage`
- Responsive CSS layouts

## Tech Stack

- HTML
- CSS
- Vanilla JavaScript
- Browser `localStorage`

## File Map

```text
index.html
css/
  style.css
  auth.css
  dashboard.css
js/
  main.js
  auth.js
  dashboard.js
pages/
  login.html
  register.html
  student-dashboard.html
  tutor-dashboard.html
```

## Run Locally

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Notes

This is a front-end prototype. Real payments, video calls, authentication, and scheduling persistence would require a backend integration.
