# Royal Enfield Static Clone

A fully responsive static website clone of Royal Enfield's official website, built with HTML5, CSS3, and JavaScript. This project showcases modern web design techniques with interactive image carousels, smooth animations, and a comprehensive navigation system.

---

## 🎯 Project Overview

This is a front-end static clone of the Royal Enfield website featuring:
- Multiple image carousel sections with navigation
- Responsive navbar with scroll-hiding animation
- News and media showcase
- Motorcycle models gallery
- Rides/experiences section
- Apparel and accessories showcase
- Store locator section
- Comprehensive footer with links

---

## 🛠️ Technologies Used

### **HTML5**
- Semantic markup structure
- Meta tags for viewport and favicon
- Proper form elements and links
- Font Awesome CDN integration for icons

### **CSS3**
#### Layout & Positioning:
- **CSS Grid** - Used extensively for complex layouts
  - Multi-column grid layouts for navigation items
  - Responsive grid template columns for navbar sections
  - Grid-based content arrangements
  
- **Flexbox** - Used for flexible component layouts
  - Carousel button positioning
  - Dot navigation alignment
  - Navigation item distribution

#### Styling Features:
- **Positioning** - Fixed, absolute, and relative positioning
  - Fixed navbar that hides on scroll
  - Absolute positioned overlay text and buttons on images
  - Relative positioning for carousel elements
  
- **Animations & Transitions**
  - Smooth navbar slide animation on scroll (0.3s ease)
  - Image hover zoom effects with transform: scale()
  - Custom wobble animation for interactive elements
  - Hover state transitions
  
- **Custom Scrollbar Styling**
  - WebKit scrollbar customization
  - Custom scrollbar track and thumb colors
  - Themed scrollbars for consistent branding

- **Effects**
  - Hover transformations (scale, color changes)
  - Opacity and background transitions
  - Border styling for button states

---

## 📁 File Structure

```
Royal Enfield/
├── index.html          # Main HTML structure
├── index.js            # JavaScript functionality
├── style.css           # Styling and layout
├── README.md           # Documentation
└── img/                # Image assets folder
    ├── logo (1).png
    ├── favicon-32x32.png
    ├── india-flag-icon-128.png
    └── [motorcycle & content images]
```

---

## 🚀 Features & Components

### **1. Navigation Bar**
- **DOM Structure**: Fixed positioning navbar with logo and menu items
- **Functionality**: Auto-hides navbar on scroll down, shows on scroll up
- **Layout**: Grid-based with three columns (logo, main menu, user options)
- **Icons**: Font Awesome integration for dropdown arrows and magnifying glass
- **Responsive**: Dropdown indicators for submenus

### **2. Image Carousels (7 Different Sliders)**
- **Technology Used**: JavaScript DOM manipulation
- **Features**:
  - Previous/Next button navigation
  - Dot indicator navigation
  - Auto-slide functionality (4-second intervals)
  - Click-based carousel control
  - Display toggle using `display: none/block`

- **Carousel Systems**:
  1. **Box1** - Hero carousel (5 slides with auto-play)
  2. **Box2** - News and media showcase (4 items)
  3. **Box3** - Motorcycle models (11 different bikes)
  4. **Box4** - Rides/Experiences section (9 slides)
  5. **Box5** - Apparel showcase (5 items)
  6. **Box6** - Accessories/Parts (2 categories)
  7. **Box7** - Store Locator (4 location types)

### **3. Navigation Menus (navbar2-6)**
- **Layout**: Grid-based button layout with pipe separators
- **Interaction**: Click handlers to switch between categories
- **Active State**: Dynamic CSS class addition for highlighted selections (red color)
- **Scrollable**: Horizontal scrolling for mobile compatibility

### **4. Footer Section**
- **Layout**: Grid-based multi-column layout
- **Content**: Social media links, company info, product links
- **Structure**: Organized into multiple sections with nested lists

---

## 💻 JavaScript Implementation Details

### **Core Functions**

#### Image Carousel Logic (6 carousel systems):
```javascript
// Each carousel follows this pattern:
- displayimg() / displayimg2() / displayimg3() ... displayimg6()
  └─ Displays image at specified index
  └─ Updates active dot/button styling
  
- nextimg() / nextimg2() / nextimg3() ... nextimg6()
  └─ Navigate forward/backward in carousel
  
- CurrentSlide() / CurrentSlide2() / CurrentSlide3() ... CurrentSlide6()
  └─ Jump to specific slide
```

**Key DOM Methods Used**:
- `getElementsByClassName()` - Select carousel images and buttons
- `style.display = "none"/"block"` - Toggle image visibility
- `className` manipulation - Add/remove active states with string operations
- `setInterval()` - Auto-play functionality (4-second intervals)
- `addEventListener()` - Scroll detection for navbar

### **Event Listeners**
- **Window Scroll Event** - Navbar hide/show functionality
  - Tracks scroll direction to animate navbar up/down
  - Compares current vs. previous scroll position
  
- **Click Events** - Carousel navigation and category switching
  - Inline onclick handlers in HTML elements
  - Triggers carousel/slide updates
  
- **Interval Events** - Auto-slide carousel updates
  - `setInterval()` automatically advances carousel every 4 seconds

### **State Management**
- Variables: `imageno`, `imageno2`, `imageno3`, ... `imageno6`
  - Track current slide index for each carousel
- `lastScrollTop` - Tracks previous scroll position for navbar animation
- Scope: Global variables (not encapsulated, suitable for simple projects)

---

## 🎨 CSS Features Used

### **Layout Techniques**

#### Grid Layout Examples:
```css
#navitems {
  display: grid;
  grid-template-columns: 31% 55% 13%;
  align-items: center;
}

#navbar2main {
  display: grid;
  grid-template-columns: 9% 3% 11% 3% 11% 3% 13% 3% 9% 3% 12% 3% 15% 3% 15% 3% 10% 3% 10% 3% 10% 3%;
  overflow-x: auto;
}
```

#### Flexbox Layout Examples:
```css
#box1main {
  display: flex;
  position: relative;
}

.button {
  display: flex;
  justify-content: space-between;
}
```

### **Positioning Techniques**
- **Fixed**: `.navbar` - Stays at top during scroll
- **Absolute**: Overlay text/buttons on carousel images
- **Relative**: Container positioning for absolute child elements

### **Visual Effects**
- Hover scale transformations on images: `transform: scale(1.1)`
- Opacity transitions on buttons
- Custom scrollbar styling with `::-webkit-scrollbar`
- Background color animations on hover
- Border and shadow effects

### **Responsive Design Elements**
- Viewport meta tag for mobile compatibility
- Flexible width units (percentages)
- Overflow handling for carousel sections
- Grid auto-layout for responsive behavior

---

## 🔧 How It Works

### **Carousel Mechanism**
1. **HTML Structure**: All carousel slides contained in parent div with flex layout
2. **CSS Default State**: All images hidden with `display: none`
3. **JavaScript Tracking**: `imageno` variable tracks current slide (1-based indexing)
4. **Display Logic**: `displayimg()` function:
   - Loops through all images, setting display to "none"
   - Sets current image to `display: block`
   - Updates active button/dot styling
5. **Navigation**: 
   - Previous/Next buttons call `nextimg(±1)` to increment/decrement index
   - Dots/buttons call `CurrentSlide(n)` to jump to specific index
   - Wraps around at boundaries (circular carousel)
6. **Auto-play**: `setInterval()` calls `nextimg(1)` every 4 seconds

### **Navbar Scroll Animation**
1. Scroll listener tracks current scroll position with `window.pageYOffset`
2. Compares with `lastScrollTop` to detect scroll direction
3. Sets navbar CSS `top` property:
   - `-80px` when scrolling down (hidden above viewport)
   - `0` when scrolling up (visible)
4. Smooth transition via CSS: `transition: top 0.3s ease`
5. Mobile-safe check for negative scrolling

---

## 📱 Browser Compatibility
- **Chrome, Edge, Safari**: Full support with WebKit scrollbar styling
- **Firefox**: Standard scrollbar styling
- **Mobile Browsers**: Viewport meta tag ensures proper scaling
- **CSS Features**: Grid and Flexbox supported in all modern browsers

---

## 📝 Key CSS Classes & IDs Reference

### **Navigation Components**
- `#navbar` - Main fixed navbar
- `#navbar2` to `#navbar6` - Category-specific navigation bars
- `#navitems` - Navigation items container
- `#opt01`, `#opt02` - Navigation lists

### **Content Boxes**
- `#box1` to `#box7` - Main carousel containers
- `.image` to `.image7` - Individual carousel slide classes
- `#box1main` to `#box7main` - Carousel slide wrappers

### **Interactive Elements**
- `.dot` - Hero carousel indicators
- `.buttonsforbox3` to `.buttonsforbox7` - Category navigation buttons
- `.prev`, `.next` - Carousel arrow buttons

### **Active States**
- `.active` - Hero carousel active indicator (red: rgb(191, 10, 0))
- `.active2` to `.active5` - Active states for different carousel systems
- Hover states with color changes

### **Visual Elements**
- `.wobblemain`, `.wobble` - Hover animation classes
- `.droparrow` - Icon styling for dropdown indicators
- `#magnifyglass`, `#indiaflag` - Special icon elements

---

## 🎓 Learning Outcomes

This project demonstrates:

✅ **HTML5 Mastery**
- Semantic markup and proper structure
- CDN integration for external libraries

✅ **CSS3 Advanced Techniques**
- CSS Grid for complex multi-column layouts
- Flexbox for flexible component arrangement
- Fixed positioning with smooth animations
- Custom scrollbar styling
- Hover effects and transformations
- Absolute positioning for image overlays

✅ **Vanilla JavaScript (No Frameworks)**
- DOM manipulation with `getElementById`, `getElementsByClassName`
- Event handling (scroll, click)
- State management with variables
- Control flow with conditionals and loops
- Function definition and reuse
- setInterval for periodic tasks

✅ **Web Design Principles**
- Responsive design principles
- User interaction and feedback
- Visual hierarchy with overlays
- Color consistency (red accent color: rgb(191, 10, 0))
- Smooth animations and transitions

✅ **Project Organization**
- Separation of concerns (HTML, CSS, JS)
- Reusable component patterns
- Scalable carousel system

---

## 💡 Code Quality Notes

### Current Architecture:
- Follows simple procedural pattern suitable for static sites
- Global JavaScript variables track carousel state
- Inline onclick handlers in HTML
- CSS-heavy styling with extensive grid usage

### Potential Enhancements (Future):
- Refactor carousels into reusable JavaScript class/function
- Extract magic numbers (4000ms interval, image indices) into config
- Add keyboard navigation (arrow keys)
- Implement lazy loading for images
- Add touch/swipe support for mobile carousels
- Use CSS transitions instead of direct style.display manipulation

---

## 📌 Notes

- The project is a **static clone** (no backend/database)
- All carousels use vanilla JavaScript (no frameworks or libraries)
- Images are stored in the `img/` folder
- Font Awesome 6.5.2 is loaded via CDN for icons
- CSS is self-contained with no preprocessors (SASS/LESS)
- Designed to be lightweight and performant

---

**Created**: December 2024  
**Purpose**: Educational web design project showcasing Royal Enfield brand  
**Status**: Complete static clone with full functionality
