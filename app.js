
document.getElementById('allow').addEventListener('click', function() {
  const links = document.querySelectorAll('.other'); // Select all links with the class 'other'
  links.forEach(link => {
    link.target = '_blank'; // Allow opening in a new window
  });
  document.querySelector('.cardios').style.display = 'none'; // Hide the button group
});

document.getElementById('dontallow').addEventListener('click', function() {
  const links = document.querySelectorAll('.other'); // Select all links with the class 'other'
  links.forEach(link => {
    link.target = '_self'; // Prevent opening in a new window
  });
  document.querySelector('.cardios').style.display = 'none'; // Hide the button group
});


function settings() {
  var x = document.getElementById("pop");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

        document.getElementById('imageLink').addEventListener('click', function (event) {
            event.preventDefault();
            document.body.classList.add('fade-out');
            setTimeout(function () {
                window.location.href = 'loader.html';
            }, 500);
        });

        const circle = document.querySelector('.progress');
        const gpaValue = 3.4;
        const maxGPA = 4.0;
        
        function setGPAProgress(gpa) {
            const circumference = 2 * Math.PI * 54;
            const progress = (gpa / maxGPA);
            const dashOffset = circumference * (1 - progress);
            
            circle.style.strokeDasharray = circumference;
            circle.style.strokeDashoffset = dashOffset;
        }

        document.addEventListener('DOMContentLoaded', () => {
            setGPAProgress(gpaValue);
        });

        const icons = document.querySelectorAll(".ico");

        const resetIcons = () => {
            icons.forEach((item) => {
                item.style.transform = "scale(1) translateY(0px)";
            });
        };

        icons.forEach((item, index) => {
            item.addEventListener("mouseover", () => focus(index));
            item.addEventListener("mouseleave", resetIcons);
        });

        const focus = (index) => {
            resetIcons();
            const transformations = [
                { idx: index - 2, scale: 1.1, translateY: 0 },
                { idx: index - 1, scale: 1.2, translateY: -6 },
                { idx: index, scale: 1.5, translateY: -10 },
                { idx: index + 1, scale: 1.2, translateY: -6 },
                { idx: index + 2, scale: 1.1, translateY: 0 }
            ];

            transformations.forEach(({ idx, scale, translateY }) => {
                if (icons[idx]) {
                    console.log(scale);
                    icons[idx].style.transform = `scale(${scale}) translateY(${translateY}px)`;
                }
            });
        };

        // Stack tag filtering
        const stackTags = document.querySelectorAll('.stack-tags .tag');
        const projectItems = document.querySelectorAll('.projects li');

        stackTags.forEach(tag => {
            tag.addEventListener('click', () => {
                const selectedTag = tag.getAttribute('data-tag');
                
                // Update selected state of tags
                stackTags.forEach(t => t.classList.remove('selected'));
                tag.classList.add('selected');
                
                // Filter projects
                projectItems.forEach(item => {
                    const itemTags = item.getAttribute('data-tags').split(',');
                    if (selectedTag === 'all' || itemTags.includes(selectedTag)) {
                        item.style.display = '';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });

        // Initialize with 'all' selected
        document.querySelector('.stack-tags .tag[data-tag="all"]').classList.add('selected');
