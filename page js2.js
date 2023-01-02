const coursesContainer = document.querySelector('.courses');

const courses=[
  {
    title: 'HTML COURSES TO BE DANGEROUS',
    prix: '15.99$US',
    category: 'HTML',
    course: 'html.png'
    
  },
  {
    title: 'STRAT LEARNING HTML THE EASY WAY',
    price: '19.99$US',
    category: 'HTML',
    couse: 'html1.png'
  },
  { title: 'HTML INTRODUCTION',
    price: '15.99$US',
    category: 'HTML',
    course:'htmlintro.png'

  },
  { title: 'FULL JS COURSE',
    price: '15.99$US',
    category: 'JS',
    image :'js.jpg'

  },
  { title: 'JS-ADVANCED JS CRASH COURSE',
    price: '15.99$US',
    category: 'JS',
    photo :'jsadvanced.jpg'

  },
  { title: 'JS-BASICS OF FUNCTIONS',
    price: '15.99$US',
    category: 'JS',
    course:'jsfunction.jpg'

  },
  { title: 'JS-VARIABLES',
    price: '15.99$US',
    category: 'JS',
    photo:'jsvariable.jpg'

  },
  { title: 'CSS-ZERO TO HERO',
    price: '13.99$US',
    category: 'CSS',
    photo:'css.jpg'

  },
  { title: 'CSS-POSITION COURSE',
    price: '10.99$US',
    category: 'CSS',
    photo:'css1.png'

  },
  { title: 'BEST PHP COURSES FOR BEGINNERS',
    price: '16.99$US',
    category: 'PHP',
    photo:'php1.png'

  },
  { title: 'PHP BEGINNER CRASH COURSE',
    price: '30.99$US',
    category: 'PHP',
    photo:'php2.jpg'

  },
  { title: 'PHP FULL COURSE',
    price: '20.99$US',
    category: 'PHP',
    photo:'php3.jpg'

  },
];



    // Affiche 3 courses aléatoires lorsque l'utilisateur clique sur le bouton
    function showRandomCourses() {
      // Sélectionne tous les éléments qui contiennent les courses
      const courseElements = document.querySelectorAll('.course');

      // Sélectionne 3 courses au hasard
      const randomCourses = [];
      for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * courseElements.length);
        randomCourses.push(courseElements[randomIndex]);
        courseElements.splice(randomIndex, 1);
      }

      // Affiche le contenu de chaque course sélectionnée au hasard
      for (const course of randomCourses) {
        document.body.innerHTML += course.innerHTML;
      }
    }

    // Définit l'événement click sur le bouton pour appeler la fonction showRandomCourses
    const button = document.querySelector('button');
    button.addEventListener('click', showRandomCourses);


