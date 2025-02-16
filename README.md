# DIS_WebLookAndFeel

## Overview

DIS_WebLookAndFeel is a web-based platform designed to help users report, track, and locate lost pets. The application integrates real-time data from Data.gov using APIs to provide statistical insights and improve pet recovery rates. The intuitive interface ensures ease of use and accessibility across devices.

This project was developed with the primary goal of assisting pet owners in finding their lost pets through a user-friendly web interface. The system allows users to report missing pets, view found pets, and analyze real-time pet recovery statistics. By leveraging API integration, this platform enhances the efficiency of pet tracking and retrieval.

## Features

- User Authentication: Secure login and user access.
- Lost & Found Pet Reporting: Users can submit and browse reports of missing pets.
- Data Integration with Data.gov API: Fetches real-time statistics on pet recoveries.
- Interactive Statistics Page: Displays pet recovery trends and insights.
- 
## Technologies Used

- Programming Languages**: HTML, CSS, JavaScript
- Frontend Frameworks**: Bootstrap for responsive design
- API Integration**: Data.gov API for real-time data retrieval
- Version Control**: Git, GitHub
- Performance Optimization**: Lazy loading images, caching techniques

## Installation

1. Clone the Repository:
   git clone https://github.com/Girisai3008/DIS_WebLookAndFeel.git
   cd DIS_WebLookAndFeel

2. Open in Browser:
   - Open `pages/home.html` in any modern web browser to access the platform.

## How to Use the Application

1. Navigate to the homepage.
2. Report a lost or found pet via lost.html and found.html pages.
3. View statistical insights on stats.html using real-time data.
4. Browse through the about section to learn more about the platform.

## Folder Structure

```
📁 DIS_WebLookAndFeel
├── 📁 assets             # Images & Media
│   ├── background.jpg
│   ├── P1.jpg
│   ├── P2.jpg
│   ├── P3.jpg
│   ├── kitten.jpeg
│   ├── rabbit.jpeg
│   ├── groupmen1.jpg
│   ├── groupmen2.jpg
│   ├── groupmen3.jpg
│   ├── groupmen4.jpg
│   ├── datamodel.jpg
├── 📁 css                # Stylesheets
│   ├── styles.css
│   ├── aboutusStyle.css
│   ├── stylesFound.css
│   ├── styleStats.css
├── 📁 js                 # JavaScript Files
│   ├── script.js
│   ├── lostScript.js
│   ├── charts.js
├── 📁 pages              # Web Pages
│   ├── about.html
│   ├── home.html
│   ├── index.html
│   ├── lost.html
│   ├── found.html
│   ├── stats.html
├── 📄 .gitignore         # Git Ignore File
├── 📄 .gitattributes     # Git Attributes File
├── 📄 README.md          # Project Documentation
```

## API Integration (Data.gov)
- Fetches real-time pet recovery statistics from Data.gov.
- Updates dynamic statistics on the pages/stats.html page.
- Ensures accurate and up-to-date information for users.



