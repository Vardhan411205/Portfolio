let isExpanded = false;

document.getElementById('mainButton').addEventListener('click', function() {
  let buttonA = document.getElementById('buttonA');
  let buttonB = document.getElementById('buttonB');
  let buttonC = document.getElementById('buttonC');
  let buttonD = document.getElementById('buttonD');
  let buttonE = document.getElementById('buttonE');



  if (!isExpanded) {
    this.style.transform = 'rotate(45deg)';

    buttonA.style.transition = 'all 0.3s ease 0.3s';
    buttonA.style.transform = 'translate(-90px, 0px)';
    buttonA.style.opacity = '1';
    buttonA.style.pointerEvents = 'auto';

    buttonB.style.transition = 'all 0.3s ease 0.6s';
    buttonB.style.transform = 'translate( -60px, -60px)';
    buttonB.style.opacity = '1';
    buttonB.style.pointerEvents = 'auto';

    buttonC.style.transition = 'all 0.3s ease 0.9s';
    buttonC.style.transform = 'translate( 0px, -90px)';
    buttonC.style.opacity = '1';
    buttonC.style.pointerEvents = 'auto';

    buttonD.style.transition = 'all 0.3s ease 0.6s';
    buttonD.style.transform = 'translate( 60px, -60px)';
    buttonD.style.opacity = '1';
    buttonD.style.pointerEvents = 'auto';
    
    buttonE.style.transition = 'all 0.3s ease 0.3s';
    buttonE.style.transform = 'translate( 90px, 0px)';
    buttonE.style.opacity = '1';
    buttonE.style.pointerEvents = 'auto';
  } else {
    this.style.transform = 'rotate(0deg)';

    buttonA.style.transform = 'translate(0, 0)';
    buttonA.style.opacity = '0';
    buttonA.style.pointerEvents = 'none';

    buttonB.style.transform = 'translate(0, 0)';
    buttonB.style.opacity = '0';
    buttonB.style.pointerEvents = 'none';

    buttonC.style.transform = 'translate(0, 0)';
    buttonC.style.opacity = '0';
    buttonC.style.pointerEvents = 'none';
    
    buttonD.style.transform = 'translate(0, 0)';
    buttonD.style.opacity = '0';
    buttonD.style.pointerEvents = 'none';
    
    buttonE.style.transform = 'translate(0, 0)';
    buttonE.style.opacity = '0';
    buttonE.style.pointerEvents = 'none';    
  }

  isExpanded = !isExpanded;
});



// Initialize an array to keep track of the trail dots
const trail = [];
const maxTrailLength = 10; // Maximum number of dots in the trail
let isMoving = false; // To track whether the mouse is moving
let timer; // Timer for mouse movement

// Function to update the trail with new dots
function updateTrail(x, y) {
  // Remove the oldest dot if the trail exceeds the maximum length
  if (trail.length >= maxTrailLength) {
    const oldDot = trail.shift();
    oldDot.remove();
  }

  // Create a new dot element
  const newDot = document.createElement('div');
  newDot.className = 'dot';
  newDot.style.left = `${x - 1 + window.scrollX}px`; // Adjust for horizontal scroll
  newDot.style.top = `${y - 1 + window.scrollY}px`; // Adjust for vertical scroll
  document.body.appendChild(newDot);
  trail.push(newDot);

  // Apply animation to the new dot
  newDot.style.animation = `moveAlongPath 0.5s forwards`; // Fade out after travel
}

// Function to handle mouse movement events
function handleMouseMove(e) {
  const { clientX: x, clientY: y } = e; // Get cursor position
  isMoving = true;
  updateTrail(x, y);

  // Reset timer if the mouse is moving
  if (timer) clearTimeout(timer);

  timer = setTimeout(() => {
    isMoving = false;
    // Apply fade-out animation to all dots after a short delay
    trail.forEach(dot => dot.style.animation = `moveAlongPath 1s forwards`);
  }, 100);
}

// Add event listener for mouse movement
document.addEventListener('mousemove', handleMouseMove);


document.getElementById('colorButton').addEventListener('click', function() {
    this.classList.toggle('clicked');
  });
  
    document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});