
const toggel = document.querySelector('.toggel');
const nav = document.querySelector('.nav-bar');

toggel.addEventListener('click', _ => {
   nav.classList.toggle('show-nav');
});


const header = document.querySelector('.header');
window.addEventListener('scroll', _=> {
   header.classList.toggle('fixed-header' , header.getBoundingClientRect().height <= scrollY);
});

/*==========Scroll section active link========= */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-bar > a');
window.onscroll = _ => {
   sections.forEach(element => {
      const scroll = window.scrollY ; //returns number of pixels the document has been scrolled virtically.
      const height = element.offsetHeight ; // return the height of the element
      const top = element.offsetTop ; // return the top position of the element
      const id = element.getAttribute('id');

      if (scroll >= top && scroll <= top + height) {
         navLinks.forEach(lnk => {
            lnk.classList.remove('active');
         });
         document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
      }

      nav.classList.remove('show-nav');

   });

}
/*========== End Scroll section active link========= */


// Services array 
const servicse = [
   {
      courseName: `Non-linear data structures`, 
      courseLink: `https://youtube.com/playlist?list=PL2xsPNbpw3ogfsrSAKO0mQI-DAU5bF6iq&si=MJcT0ZVSyhPBDUc-`, 
      courseImage: `images/ds1.jpeg`,
      courseDiscription:`This course provides a comprehensive introduction to essential structures like <span>trees</span>, <span>graphs</span>, <span>heaps</span> etc..(recording).Designed for any one need to study these topics.implementations in C++.`,
   },
   {
      courseName: `All About Array C/C++`, 
      courseLink: `https://youtube.com/playlist?list=PL2xsPNbpw3ojCuRnWf_GC-qH3-qHQsA35&si=Yw2c2hWlw4wMIkOM`, 
      courseImage: `images/ar2.jpeg`,
      courseDiscription:`Everything you want to know about the array, and the relationship with pointers. <br>
      What does <span>index</span> mean? <br>
      Well, why does the <span>index start from zero</span> ?! <br>
      Why is the array <span>fast to access</span> ?. and more.. `,
   },
   {
      courseName: `Pointers and memory management in C/C++`, 
      courseLink: `https://youtube.com/playlist?list=PL2xsPNbpw3ohkK6kmoQEnGSbtHODX-jeE&si=tv_SNY_OOt63eHUu`, 
      courseImage: `images/ptr.jpeg`,
      courseDiscription:`course dives deep into the fundamentals of pointers and efficient memory handling in C/C++. It covers concepts like pointer arithmetic, dynamic memory allocation, memory leaks.. ,and best practices for memory management`,
   },
];
let servicseContent = servicse.map(box => {
   return`
      <div class="services-box">
         <img src="${box.courseImage}" alt="course-image" width="100%" style="border-radius: 10px;">
         <a href="${box.courseLink}">
            <h3>${box.courseName}</h3>
         </a>

         <p>
            ${box.courseDiscription}
         </p>
         
         <a href="${box.courseLink}" class="btn">View</a>
      </div> 
   `
}).join("");
document.querySelector(`.services-container`).innerHTML = servicseContent ;  

// portfolio
const portfolioArray = [
   {
      img:"./images/dental.png",
      name:"Dental Clinic",
      discription:"responsive, and user-friendly front-end interface designed for a dental clinic website.",
      link:"https://mahmoud-abd-elrazek.github.io/Dental-Clinic-Frontend/Home%20page/home.html",
   },
   {
      img:"./images/edu.jpeg",
      name:"EDU Community",
      discription:`
      let us create a focused and distraction-free environment for educational communities <br>
      Modern UI Design. <br>
      Responsive Layout<br>
      Interactive Components.`,
      link:'https://mahmoud-abd-elrazek.github.io/Edu_Community/postPedai/index.html',
   },
   {
      img:"./images/myprofile.png",
      name:"online portfolio",
      discription:"Welcome to my online portfolio! I'm Mhamoud Abedelrazek,",
      link:"https://mahmoud-abd-elrazek.github.io/my-portfolio-website/",
   },
   {
      img:"./images/elharthy2.png",
      name:"Web Design",
      discription:"personal website for a chairman.",
      link:"https://mahmoud-abd-elrazek.github.io/chairman-_website/",
   },
   {
      img:"./images/ds1.jpeg",
      name:"",
      discription:" I've aimed to provide well-documented implementations of both linear and non-linear DS, making this repo a valuable resource for those looking to understand the inner workings of these fundamentals",
      link:"https://github.com/Mahmoud-Abd-Elrazek/Data-Structures",
   },
   {
      img:"./images/think.jpeg",
      name:"Programming Problems",
      discription:"Created by a passionate computer science student, features programming problem solutions organized by topic",
      link:"https://github.com/Mahmoud-Abd-Elrazek/Programming-Problems",
   }

];
let portfolioContent = portfolioArray.map(box => {
   return `
   <div class="portfolio-box">
   <img src="${box.img}">
      <div class="portfolio-layer">
         <h2>${box.name}</h2>
         <p>${box.discription}</p>
         <a href="${box.link}" target="_blank" title="Go to the project">
            <svg viewBox="0 0 512 512" class="icons">
               <path d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"/>
            </svg>
         </a>
      </div>
   </div>
   `;
}).join("");
document.querySelector('.portfolio-container').innerHTML = portfolioContent ; 

window.addEventListener('load', _=> { 
   window.addEventListener('scroll', () => {
      const timelineItems = document.querySelectorAll('.services-box');
      timelineItems.forEach((item) => {
         const rect = item.getBoundingClientRect();
         if (rect.top < window.innerHeight - 100) {
            item.classList.add('visible');
         }
      });
   });
   window.addEventListener('scroll', () => {
      const timelineItems = document.querySelectorAll('.portfolio-box');
      timelineItems.forEach((item) => {
         const rect = item.getBoundingClientRect();
         if (rect.top < window.innerHeight - 100) {
            item.classList.add('visible');
         }
      });
   });
});
// ======================================================
/* Start slide  */
const users = [
   {
      id: 1 , 
      name: "Jackson levi" , 
      img: "./images/user-6.jpg" , 
      disc: `adipisicing elit. Sequi quisquam dolorum 
      adipisicing elit. Sequi quisquam dolorum 
      similique numquam eaque nemo, sint ullam! 
      Blanditiis voluptate esse voluptatem adipisci 
      recusandae enim, nisi quisquam! Ratione qui aliquid ullam.` 
   },
   {
      id: 2 , 
      name: "Mo Kamal" , 
      img: "./images/user-2.png" , 
      disc: `Lorem ipsum dolor sit, amet consectetur 
      adipisicing elit. Sequi quisquam dolorum 
      similique numquam eaque nemo, sint ullam! 
      Blanditiis voluptate esse voluptatem adipisci  
      recusandae enim, nisi quisquam! Ratione qui aliquid ullam.` 
   },
   {
      id: 3 ,  
      name: "Sladiana" , 
      img: "./images/user-3.png" , 
      disc: `Blanditiis voluptate esse voluptatem adipisci 
      recusandae enim, nisi quisquam! Ratione qui aliquid ullam.
      Lorem ipsum dolor sit, amet consectetur  
      Blanditiis voluptate esse voluptatem adipisci 
      recusandae enim, nisi quisquam! Ratione qui aliquid ullam.` 
   },
   {
      id: 4 ,  
      name: "Mauander" , 
      img: "./images/user-1.png" , 
      disc: `Blanditiis voluptate esse voluptatem adipisci 
      recusandae enim, nisi quisquam! Ratione qui aliquid ullam.
      Lorem ipsum dolor sit, amet consectetur  
      Blanditiis voluptate esse voluptatem adipisci 
      recusandae enim, nisi quisquam! Ratione qui aliquid ullam.` 
   },
   {
      id: 5,  
      name: "Khaled Saada", 
      img: "./images/user-4.jpg" , 
      disc: `Blanditiis voluptate esse voluptatem adipisci 
      recusandae enim, nisi quisquam! Ratione qui aliquid ullam.
      Lorem ipsum dolor sit, amet consectetur  
      Blanditiis voluptate esse voluptatem adipisci 
      recusandae enim, nisi quisquam! Ratione qui aliquid ullam.` 
   },
   {
      id: 6,  
      name: "Yosseif", 
      img: "./images/user-5.jpg" , 
      disc: `Blanditiis voluptate esse voluptatem adipisci 
      recusandae enim, nisi quisquam! Ratione qui aliquid ullam.
      Lorem ipsum dolor sit, amet consectetur  
      Blanditiis voluptate esse voluptatem adipisci 
      recusandae enim, nisi quisquam! Ratione qui aliquid ullam.` 
   },
];
// const  testimonailContainer = document.querySelector(`.cards`) ; 

// let testimonailContent = users.map(card => {
//    return `
//    <div class="testinomail-card">
//          <div class="testinomail-img">
//             <img src="${card.img}" >
//          </div>
//          <h2>${card.name}</h2>
//          <p> ${card.disc}</p>
//    </div>
//    `
// }).join("");
// testimonailContainer.innerHTML = testimonailContent;
// console.log(testimonailContainer);
/* End Start slide  */

//========< Dark Light Mode >==========
let darkModeIcon = document.querySelector(`#dark-mode-icon`)
darkModeIcon.addEventListener('click', _ => {
   darkModeIcon.classList.toggle('light-mode') ;
   if(darkModeIcon.classList.contains('light-mode')){
      darkModeIcon.innerHTML=`
         <path d="M494.2 221.9l-59.8-40.5 13.7-71c2.6-13.2-1.6-26.8-11.1-36.4-9.6-9.5-23.2-13.7-36.2-11.1l-70.9 13.7-40.4-59.9c-15.1-22.3-51.9-22.3-67 0l-40.4 59.9-70.8-13.7C98 60.4 84.5 64.5 75 74.1c-9.5 9.6-13.7 23.1-11.1 36.3l13.7 71-59.8 40.5C6.6 229.5 0 242 0 255.5s6.7 26 17.8 33.5l59.8 40.5-13.7 71c-2.6 13.2 1.6 26.8 11.1 36.3 9.5 9.5 22.9 13.7 36.3 11.1l70.8-13.7 40.4 59.9C230 505.3 242.6 512 256 512s26-6.7 33.5-17.8l40.4-59.9 70.9 13.7c13.4 2.7 26.8-1.6 36.3-11.1 9.5-9.5 13.6-23.1 11.1-36.3l-13.7-71 59.8-40.5c11.1-7.5 17.8-20.1 17.8-33.5-.1-13.6-6.7-26.1-17.9-33.7zm-112.9 85.6l17.6 91.2-91-17.6L256 458l-51.9-77-90.9 17.6 17.6-91.2-76.8-52 76.8-52-17.6-91.2 91 17.6L256 53l51.9 76.9 91-17.6-17.6 91.1 76.8 52-76.8 52.1zM256 152c-57.3 0-104 46.7-104 104s46.7 104 104 104 104-46.7 104-104-46.7-104-104-104zm0 160c-30.9 0-56-25.1-56-56s25.1-56 56-56 56 25.1 56 56-25.1 56-56 56z"/>
      `;
   }else {
      darkModeIcon.innerHTML=`
         <path d="M279.135 512c78.756 0 150.982-35.804 198.844-94.775 28.27-34.831-2.558-85.722-46.249-77.401-82.348 15.683-158.272-47.268-158.272-130.792 0-48.424 26.06-92.292 67.434-115.836 38.745-22.05 28.999-80.788-15.022-88.919A257.936 257.936 0 0 0 279.135 0c-141.36 0-256 114.575-256 256 0 141.36 114.576 256 256 256zm0-464c12.985 0 25.689 1.201 38.016 3.478-54.76 31.163-91.693 90.042-91.693 157.554 0 113.848 103.641 199.2 215.252 177.944C402.574 433.964 344.366 464 279.135 464c-114.875 0-208-93.125-208-208s93.125-208 208-208z"/>
      `;
   }
   document.body.classList.toggle('dark-mode')
}); 

// Year Dynamic Loading
document.querySelector(`.date-of-year`).innerHTML = new Date().getFullYear();
