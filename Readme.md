# Stopwatch using HTML CSS and JS (Asynchronous Programming)

A modern, responsive stopwatch application built with vanilla HTML, CSS, and JavaScript featuring asynchronous programming concepts.

## 🚀 Features

- **Precise Timing**: High-precision stopwatch with centisecond accuracy
- **Start/Stop Functionality**: Toggle timer with visual button state changes
- **Lap Times**: Record multiple lap times with timestamps
- **Reset Capability**: Clear all times and reset to initial state
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Dark theme with smooth animations and visual effects
- **User-Friendly**: Intuitive interface with clear visual feedback

## 📁 Project Structure

```
stopWatch/
├── index.html          # Main HTML structure
├── style.css           # Complete styling and animations
├── script.js           # JavaScript functionality (no classes)
└── Readme.md          # Project documentation
```

## 🎯 User Stories Implemented

✅ **User Story 1**: Create a div with the class container and center it on screen  
✅ **User Story 2**: Give body background black colour and text colour white  
✅ **User Story 3**: Implement a label tag and show the time in this label tag  
✅ **User Story 4**: Implement two buttons named as Lap and Start  
✅ **User Story 5**: Start button starts the timer of the stopwatch  
✅ **User Story 6**: The lap button prepends a new list element with the current time  
✅ **User Story 7**: If stopwatch is running change the start button to stop button with a red background  
✅ **User Story 8**: If the user stops the time change the Lap button to reset which resets the stopwatch

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with flexbox, animations, and responsive design
- **JavaScript (ES5+)**: Asynchronous programming with setInterval, event handling

## 📱 How to Use

1. **Start Timer**: Click the "Start" button to begin timing
2. **Record Lap**: While running, click "Lap" to record current time
3. **Stop Timer**: Click "Stop" (red button) to pause the timer
4. **Reset**: When stopped, click "Reset" to clear all times

## 🎨 Design Features

- **Dark Theme**: Professional black background with white text
- **Visual Feedback**: Buttons change color and state based on timer status
- **Smooth Animations**: Hover effects and transition animations
- **Responsive Layout**: Adapts to different screen sizes
- **Glowing Effects**: Text shadows and visual enhancements

## 💻 Technical Implementation

### Asynchronous Programming Concepts Used:

- **setInterval()**: For continuous time updates every 10ms
- **setTimeout()**: For animation delays and visual effects
- **Event Listeners**: Asynchronous button click handling
- **DOM Manipulation**: Dynamic content updates

### Key Functions:

- `initializeStopwatch()`: Sets up DOM elements and event listeners
- `start()` / `stop()`: Controls timer state and UI updates
- `lap()`: Records lap times with animations
- `formatTime()`: Converts milliseconds to readable format
- `updateDisplay()`: Updates time display in real-time

## 🚀 Getting Started

Live Demo <code>https://shorturl.at/N7BKP</code>

1. Clone or download the project files
2. Open `index.html` in any modern web browser
3. Start using the stopwatch immediately - no setup required!
