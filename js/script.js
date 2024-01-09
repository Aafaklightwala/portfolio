/* Typing animation */
var typed = new Typed(".typing",{
    strings:["Python Programmer !","Web Developer !","MERN Stack Developer !"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
/* Typin animation End */
/*----------- Aside---------------*/
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length;
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
    for(let i=0; i<totalNavList; i++)
    {
        const a=navList[i].querySelector("a");
        a.addEventListener("click",function()
        {
            removeBackSection();
            for(let j=0; j<totalNavList;j++)
            {
                if(navList[j].querySelector("a").classList.contains("active"))
                {
                    addBackSection(j);
                    //allSection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");
            }
         this.classList.add("active")
         showSection(this);   
         if(window.innerWidth < 1200)
         {
            asideSectionTogglerBtn()
         }
        })
    }
    function removeBackSection()
    {
        for(let i=0; i<totalSection;i++)
        {
            allSection[i].classList.remove("back-section");
        }   
    }
    function addBackSection(num)
    {
        allSection[num].classList.add("back-section");
    }
    function showSection(element)
    {
        for(let i=0; i<totalSection;i++)
        {
            allSection[i].classList.remove("active");
        }
        const target =element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
    }

    function updateNav(element)
    {
        for(let i=0; i<totalNavList; i++)
        {
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
            {
                navList[i].querySelector("a").classList.add("active");
 
            }
        }
    }
    document.querySelector(".hire-me").addEventListener("click",function()
    {
        const sectionIndex = this.getAttribute("data-section-index");
        //console.log(sectionIndex);
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
    })
    const navTogglerBtn = document.querySelector(".nav-toggler"),
          aside = document.querySelector(".aside");
          navTogglerBtn.addEventListener("click",()=>
          {
            asideSectionTogglerBtn();
          })
          function asideSectionTogglerBtn()
          {
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
            for(let i=0;i<totalSection;i++)
            {
                allSection[i].classList.toggle("open");
            }
          }

    document.addEventListener("DOMContentLoaded", function() {
        // Find the form and button elements
        var form = document.querySelector('.contact-form form');
        var submitButton = document.querySelector('.contact-form button');

        // Add an event listener to the form
        form.addEventListener('submit', function(event) {
            // Prevent the default form submission
            event.preventDefault();

            // Add your form validation logic here if needed

            // You can use the following lines to gather form data and send it to a server
            var formData = new FormData(form);
            // Example: Send form data using fetch
            fetch('your-server-endpoint', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                // Handle the response from the server
                console.log(data);
            })
            .catch(error => {
                // Handle errors
                console.error('Error:', error);
            });
        });
    });

