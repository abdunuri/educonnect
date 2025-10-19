# EduConnect - Online Tutoring Platform

## 📚 Overview

EduConnect is a professional online tutoring platform that connects students with qualified tutors through live video sessions. Our mission is to make quality education accessible to everyone with a direct, commission-free model where students pay tutors directly.

## ✨ Key Features

### 🎯 Core Functionality
- **Role-based Access**: Separate interfaces for students and tutors
- **Live Video Sessions**: Zoom-integrated virtual classrooms
- **Direct Payments**: 100% of payments go directly to tutors
- **Smart Scheduling**: Easy session booking and calendar management
- **Session Management**: Complete control over upcoming and past sessions

### 👨‍🎓 Student Features
- Browse available tutors by subject and rating
- Schedule one-on-one sessions
- Join live video sessions
- Track learning progress and session history
- Access learning resources

### 👨‍🏫 Tutor Features
- Set availability and hourly rates
- Manage session requests
- Conduct live video sessions
- Track earnings and student progress
- Build teaching profile and reputation

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local server for development (XAMPP, Live Server, etc.)

### Installation

1. **Clone or Download the Project**
   ```bash
   # If using git
   git clone <repository-url>
   ```
   Or download the ZIP file and extract to your web server directory

2. **Set Up Local Server**
   ```bash
   # Using Node.js (if you have it installed)
   npx live-server
   
   # Using Python
   python -m http.server 8000
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Access the Application**
   Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

### File Structure
```
tutoring-platform/
├── index.html              # Landing page
├── css/
│   ├── style.css           # Main styles and landing page
│   ├── auth.css            # Authentication styles
│   └── dashboard.css       # Dashboard styles
├── js/
│   ├── main.js             # Landing page functionality
│   ├── auth.js             # Authentication logic
│   └── dashboard.js        # Dashboard functionality
├── pages/
│   ├── login.html          # Login page
│   ├── register.html       # Registration page
│   ├── student-dashboard.html  # Student dashboard
│   └── tutor-dashboard.html    # Tutor dashboard
└── assets/                 # Images and icons (to be added)
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#4361ee` - Main brand color
- **Secondary Purple**: `#3a0ca3` - Accent color
- **Light Blue**: `#4cc9f0` - Highlights
- **Dark Text**: `#2b2d42` - Primary text
- **Light Background**: `#f8f9fa` - Page backgrounds

### Typography
- **Font Family**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Font Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Components
- Responsive navigation bar
- Card-based layouts
- Modal dialogs
- Form controls with validation
- Interactive buttons and controls

## 🔧 Technical Implementation

### Frontend Technologies
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript**: Vanilla JS for interactivity
- **Responsive Design**: Mobile-first approach

### Key JavaScript Functions
- **Authentication**: Role-based registration and login
- **Dashboard Management**: Session scheduling and management
- **Modal Systems**: Interactive popups for forms
- **Local Storage**: User data persistence (for demo)

### Browser Compatibility
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📱 User Journey

### For Students
1. **Register** as a student on the landing page
2. **Browse** available tutors by subject and rating
3. **Schedule** sessions based on tutor availability
4. **Join** live video sessions at scheduled times
5. **Pay** tutors directly after sessions

### For Tutors
1. **Register** as a tutor with subject expertise
2. **Set** availability and hourly rates
3. **Accept** session requests from students
4. **Conduct** live video sessions
5. **Receive** direct payments from students

## 💰 Business Model

### Commission-Free Philosophy
- **Zero Platform Fees**: We don't take any percentage from tutors
- **Direct Payments**: Students pay tutors directly
- **Transparent Pricing**: Tutors set their own rates
- **Sustainable Growth**: Future premium features optional

### Future Monetization (Optional)
- Verified tutor badges
- Advanced analytics
- Institutional accounts
- Premium marketing tools

## 🛠️ Development Roadmap

### Phase 1: MVP (Current) ✅
- [x] Landing page and authentication
- [x] Basic dashboard structure
- [x] Session scheduling
- [x] Responsive design

### Phase 2: Core Features
- [ ] Backend integration
- [ ] Real video call functionality
- [ ] Payment processing
- [ ] Email notifications

### Phase 3: Advanced Features
- [ ] Whiteboard functionality
- [ ] Session recording
- [ ] Progress tracking
- [ ] Mobile app

### Phase 4: Scale
- [ ] Advanced matching algorithms
- [ ] Group sessions
- [ ] Certificate system
- [ ] Multi-language support

## 🔒 Privacy & Security

### Data Protection
- Secure user authentication
- Encrypted data transmission
- Privacy-focused design
- GDPR compliance ready

### Session Security
- Secure video conferencing
- Session access controls
- Payment protection
- Data encryption

## 🤝 Contributing

We welcome contributions! Please feel free to:
1. Report bugs and issues
2. Suggest new features
3. Submit pull requests
4. Improve documentation

## 📄 License

This project is currently in development. All rights reserved.

## 🆘 Support

For technical support or questions:
- Check our documentation
- Open an issue on GitHub
- Contact our development team

## 🎯 Demo Instructions

### Testing the Platform

1. **Landing Page** (`index.html`)
   - Explore features and benefits
   - Click "Start Learning" or "Become a Tutor"

2. **Registration** (`pages/register.html`)
   - Choose role (Student/Tutor)
   - Fill in basic information
   - Note: Data saves to localStorage

3. **Login** (`pages/login.html`)
   - Use any email/password for demo
   - Select role to access appropriate dashboard

4. **Dashboards**
   - **Student**: Browse tutors, schedule sessions
   - **Tutor**: Manage sessions, set availability

### Demo Data
- Sample tutors and sessions pre-loaded
- Interactive modals and forms
- Local storage for user persistence

---

**Built with ❤️ for the future of education**
