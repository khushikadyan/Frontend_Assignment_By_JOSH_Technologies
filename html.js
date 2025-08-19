document.addEventListener('DOMContentLoaded', function() {

    const navItems = document.querySelectorAll('.nav-item');
    const indicator = document.querySelector('.indicator');
    const activeItem = document.querySelector('.nav-item.active');
    positionIndicator(activeItem);
            
    navItems.forEach(item => {
    item.addEventListener('click', function() {        
        navItems.forEach(navItem => {
            navItem.classList.remove('active');
            });
            this.classList.add('active');
                positionIndicator(this);
            });
        });
            
    function positionIndicator(element) {
        const itemRect = element.getBoundingClientRect();
        const navRect = element.parentElement.getBoundingClientRect();
                
        const left = itemRect.left - navRect.left;
        const width = itemRect.width;
                
        indicator.style.left = `${left}px`;
        indicator.style.width = `${width}px`;
        }
            
    window.addEventListener('resize', function() {
        const activeItem = document.querySelector('.nav-item.active');
        positionIndicator(activeItem);
        });
    });

const track = document.getElementById('carouselTrack');
const dots = document.querySelectorAll('.dot');
const cardWidth = 320; 
const visibleCards = 3;

function scrollToPage(index) {
  const offset = index * cardWidth;
  track.style.transform = `translateX(-${offset}px)`;
  dots.forEach(dot => dot.classList.remove('active'));
  if (dots[index]) dots[index].classList.add('active');
}
