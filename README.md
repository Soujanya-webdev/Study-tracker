# StudyFlow — YouTube Learning Tracker

## Description
StudyFlow is a simple web app that helps users organize and track YouTube videos they want to learn from. Users can create courses, add YouTube videos to them, and mark videos as completed to monitor their learning progress.

---

# Features

## Course Management
Users can create, edit, and delete learning courses.  
Each course contains a title, category, description, and a list of videos.

## Video Tracking
Users can add YouTube videos to a course by pasting the video URL or ID.

## Progress Tracking
Each course displays:
- total videos
- completed videos
- progress percentage

## Filtering
Users can filter courses by:
- all courses
- in progress
- completed
- category

## Search
Users can search courses by title.

## Local Storage
All data is saved in the browser using localStorage, so the progress remains after refreshing the page.

---

# Technologies Used

- HTML
- CSS
- Tailwind CSS
- JavaScript
- React (via CDN)
- Babel

---

# Project Structure

Single HTML file containing:
- UI layout
- styles
- React components
- application logic

Major components include:

- `App` – main application logic
- `CourseCard` – course preview in dashboard
- `CourseDetail` – detailed course view
- `AddCourseModal` – form for creating/editing courses
- `AddVideoModal` – form for adding videos
- `Toast` – notification messages

---

# How to Run the Project

## Step 1
Download the HTML file.

## Step 2
Save it as:

## Step 3
Open the file in a web browser.

No installation or server is required.

---

# How to Use

## Step 1 — Create a Course
Click **New Course** and enter:
- course title
- category
- optional description

## Step 2 — Add Videos
Open the course and click **Add Video**.  
Paste a YouTube URL and provide a title.

## Step 3 — Track Progress
Mark videos as completed using the checkbox.

## Step 4 — View Progress
Progress bars show completion percentage for each course.

---

# Data Storage
All data is stored in browser `localStorage` under the key:

No backend database is used.

---

# Limitations

- Works only in the browser
- No user accounts
- No cloud synchronization
- Video titles are entered manually

---

# Possible Improvements

- automatic YouTube metadata fetching
- drag and drop video ordering
- user authentication
- cloud storage
- progress analytics
