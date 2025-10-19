// Dashboard JavaScript
document.addEventListener('DOMContentLoaded', function() {
    loadUserData();
    loadDashboardData();
    initializeEventListeners();
});

function loadUserData() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    
    // Update user info in header
    const userNameElement = document.getElementById('userName');
    const userAvatarElement = document.getElementById('userAvatar');
    
    if (userNameElement && currentUser.fullName) {
        userNameElement.textContent = currentUser.fullName;
    }
    
    if (userAvatarElement && currentUser.fullName) {
        userAvatarElement.textContent = currentUser.fullName.charAt(0).toUpperCase();
    }
}

function loadDashboardData() {
    // Check if we're on student or tutor dashboard
    const isStudentDashboard = window.location.pathname.includes('student-dashboard');
    
    if (isStudentDashboard) {
        loadStudentDashboard();
    } else {
        loadTutorDashboard();
    }
}

function loadStudentDashboard() {
    // Sample data - in real app, this would come from backend
    const sampleSessions = [
        {
            id: 1,
            tutor: 'Dr. Sarah Johnson',
            subject: 'Mathematics',
            date: '2024-01-15',
            time: '14:00',
            duration: '1 hour',
            status: 'upcoming'
        },
        {
            id: 2,
            tutor: 'Prof. Mike Chen',
            subject: 'Physics',
            date: '2024-01-16',
            time: '10:00',
            duration: '1.5 hours',
            status: 'upcoming'
        }
    ];

    const sampleTutors = [
        {
            id: 1,
            name: 'Dr. Sarah Johnson',
            subjects: ['Mathematics', 'Calculus'],
            rating: 4.9,
            rate: 45,
            students: 124
        },
        {
            id: 2,
            name: 'Prof. Mike Chen',
            subjects: ['Physics', 'Engineering'],
            rating: 4.8,
            rate: 50,
            students: 89
        },
        {
            id: 3,
            name: 'Ms. Emily Davis',
            subjects: ['English', 'Literature'],
            rating: 4.7,
            rate: 40,
            students: 156
        }
    ];

    // Populate upcoming sessions
    const sessionList = document.getElementById('upcomingSessionList');
    if (sessionList) {
        sessionList.innerHTML = sampleSessions.map(session => `
            <div class="session-item">
                <div class="session-info">
                    <h4>${session.subject}</h4>
                    <div class="session-meta">
                        with ${session.tutor} • ${session.date} at ${session.time}
                    </div>
                </div>
                <div class="session-actions">
                    <button class="btn btn-primary btn-small" onclick="joinSession(${session.id})">Join</button>
                    <button class="btn btn-outline btn-small" onclick="rescheduleSession(${session.id})">Reschedule</button>
                </div>
            </div>
        `).join('');
    }

    // Populate available tutors
    const tutorsList = document.getElementById('availableTutorsList');
    if (tutorsList) {
        tutorsList.innerHTML = sampleTutors.map(tutor => `
            <div class="tutor-item">
                <div class="tutor-info">
                    <h4>${tutor.name}</h4>
                    <div class="tutor-rating">⭐ ${tutor.rating}/5.0</div>
                    <div class="tutor-meta">
                        ${tutor.subjects.join(', ')} • $${tutor.rate}/hour
                    </div>
                </div>
                <div class="session-actions">
                    <button class="btn btn-primary btn-small" onclick="viewTutorProfile(${tutor.id})">View</button>
                    <button class="btn btn-success btn-small" onclick="bookSession(${tutor.id})">Book</button>
                </div>
            </div>
        `).join('');
    }

    // Update stats
    updateStat('completedSessions', '12');
    updateStat('upcomingSessions', sampleSessions.length.toString());
    updateStat('hoursLearned', '24');
    updateStat('activeTutors', sampleTutors.length.toString());
}

function loadTutorDashboard() {
    // Sample data for tutor dashboard
    const sampleSessions = [
        {
            id: 1,
            student: 'John Smith',
            subject: 'Advanced Calculus',
            date: '2024-01-15',
            time: '14:00',
            duration: '1 hour',
            status: 'upcoming'
        },
        {
            id: 2,
            student: 'Emma Wilson',
            subject: 'Linear Algebra',
            date: '2024-01-15',
            time: '16:00',
            duration: '1.5 hours',
            status: 'upcoming'
        }
    ];

    const sampleRequests = [
        {
            id: 1,
            student: 'Alex Johnson',
            subject: 'Physics',
            date: '2024-01-16',
            time: '11:00',
            duration: '1 hour'
        }
    ];

    const sampleStudents = [
        {
            id: 1,
            name: 'John Smith',
            subjects: ['Mathematics', 'Physics'],
            sessions: 8,
            lastSession: '2024-01-10'
        },
        {
            id: 2,
            name: 'Emma Wilson',
            subjects: ['Mathematics'],
            sessions: 12,
            lastSession: '2024-01-12'
        }
    ];

    // Populate today's sessions
    const sessionsList = document.getElementById('todaysSessions');
    if (sessionsList) {
        sessionsList.innerHTML = sampleSessions.map(session => `
            <div class="session-item">
                <div class="session-info">
                    <h4>${session.subject}</h4>
                    <div class="session-meta">
                        with ${session.student} • ${session.time} (${session.duration})
                    </div>
                </div>
                <div class="session-actions">
                    <button class="btn btn-primary btn-small" onclick="startVideoCall(${session.id})">Start</button>
                </div>
            </div>
        `).join('');
    }

    // Populate session requests
    const requestsList = document.getElementById('sessionRequests');
    if (requestsList) {
        requestsList.innerHTML = sampleRequests.map(request => `
            <div class="request-item">
                <div class="session-info">
                    <h4>${request.subject}</h4>
                    <div class="session-meta">
                        ${request.student} • ${request.date} at ${request.time}
                    </div>
                </div>
                <div class="request-actions">
                    <button class="btn btn-success btn-small" onclick="acceptRequest(${request.id})">Accept</button>
                    <button class="btn btn-outline btn-small" onclick="declineRequest(${request.id})">Decline</button>
                </div>
            </div>
        `).join('');
    }

    // Populate students list
    const studentsList = document.getElementById('studentsList');
    if (studentsList) {
        studentsList.innerHTML = sampleStudents.map(student => `
            <div class="tutor-item">
                <div class="tutor-info">
                    <h4>${student.name}</h4>
                    <div class="tutor-meta">
                        ${student.sessions} sessions • Last: ${student.lastSession}
                    </div>
                </div>
                <div class="session-actions">
                    <button class="btn btn-outline btn-small" onclick="viewStudent(${student.id})">View</button>
                </div>
            </div>
        `).join('');
    }

    // Update stats
    updateStat('totalStudents', sampleStudents.length.toString());
    updateStat('completedSessions', '45');
    updateStat('earnings', '$2,250');
    updateStat('rating', '4.9');
}

function updateStat(elementId, value) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = value;
    }
}

function initializeEventListeners() {
    // Schedule form submission
    const scheduleForm = document.getElementById('scheduleForm');
    if (scheduleForm) {
        scheduleForm.addEventListener('submit', function(e) {
            e.preventDefault();
            scheduleSession();
        });
    }

    // Availability form submission
    const availabilityForm = document.getElementById('availabilityForm');
    if (availabilityForm) {
        availabilityForm.addEventListener('submit', function(e) {
            e.preventDefault();
            saveAvailability();
        });
    }
}

// Modal Functions
function openScheduleModal() {
    document.getElementById('scheduleModal').style.display = 'block';
}

function closeScheduleModal() {
    document.getElementById('scheduleModal').style.display = 'none';
}

function openAvailabilityModal() {
    document.getElementById('availabilityModal').style.display = 'block';
}

function closeAvailabilityModal() {
    document.getElementById('availabilityModal').style.display = 'none';
}

// Session Management
function scheduleSession() {
    alert('Session scheduled successfully!');
    closeScheduleModal();
}

function joinSession(sessionId) {
    document.getElementById('videoCallModal').style.display = 'block';
}

function startVideoCall(sessionId) {
    document.getElementById('videoCallModal').style.display = 'block';
}

function endVideoCall() {
    document.getElementById('videoCallModal').style.display = 'none';
    alert('Session ended successfully!');
}

function saveAvailability() {
    alert('Availability saved successfully!');
    closeAvailabilityModal();
}

// Placeholder functions for other actions
function bookSession(tutorId) {
    openScheduleModal();
}

function viewTutorProfile(tutorId) {
    alert(`Viewing tutor profile ${tutorId}`);
}

function acceptRequest(requestId) {
    alert(`Request ${requestId} accepted!`);
}

function declineRequest(requestId) {
    alert(`Request ${requestId} declined!`);
}

function viewStudent(studentId) {
    alert(`Viewing student ${studentId}`);
}

function openFindTutors() {
    alert('Opening find tutors page');
}

function openResources() {
    alert('Opening resources page');
}

function openSettings() {
    alert('Opening settings page');
}

function openStudentsList() {
    alert('Opening students list');
}

function openEarnings() {
    alert('Opening earnings page');
}

// Close modals when clicking outside
window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let modal of modals) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
}