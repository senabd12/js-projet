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

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.value.toLowerCase();
    const courses = document.querySelectorAll('.course');
    courses.forEach(course => {
      if (course.dataset.category.toLowerCase() === category || category === 'HTML') {
        course.style.display = 'block';
      } else {
        course.style.display = 'none';
      }
    });
  });
});


buttons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.value.toLowerCase();
    const courses = document.querySelectorAll('.course');
    courses.forEach(course => {
      if (course.dataset.category.toLowerCase() === category || category === 'all') {
        course.style.display = 'block';
      } else {
        course.style.display = 'none';
      }
    });
  });
});


const rangeElement = document.querySelector('#prix');
rangeElement.addEventListener('input', () => {
  const minPrice = rangeElement.value;
  const courses = document.querySelectorAll('.course');
  courses.forEach(course => {
    // R??cup??re le prix du cours en utilisant la propri??t?? textContent de l'??l??ment span contenant le prix
    // Enl??ve le symbole "$" et le "US" du prix en utilisant la m??thode slice() et la m??thode trim() pour enlever les espaces en d??but et fin de cha??ne
    const coursePrice = course.querySelector('h6 ').textContent.slice(1, -3).trim();
    if (coursePrice >= minPrice) {
      course.style.display = 'block';
    } else {
      course.style.display = 'none';
    }
    
  });
});



const valueElement = document.querySelector('#prix-value');

rangeElement.addEventListener('input', () => {
  valueElement.textContent = rangeElement.value;
});


function updatePriceValue() {
  const rangeElement = document.querySelector('#prix');
  const priceValueElement = document.querySelector('#priceValue');
  priceValueElement.textContent = `Price:  ${rangeElement.value} $US`;
}



// S??lectionne l'input de recherche
const searchInput = document.querySelector('#category');

// Ajoute un ??couteur d'??v??nement "input" sur l'input de recherche
searchInput.addEventListener('input', () => {
  // R??cup??re le mot-cl?? entr?? par l'utilisateur
  const keyword = searchInput.value.trim().toLowerCase();

  // S??lectionne tous les ??l??ments article qui repr??sentent les cours
  const courses = document.querySelectorAll('.course');

  // Parcours chaque ??l??ment article
  courses.forEach(course => {
    // R??cup??re le titre du cours en utilisant la propri??t?? textContent de l'??l??ment h5 contenant le titre
    // Convertit le titre en minuscule en utilisant la m??thode toLowerCase()
    const courseTitle = course.querySelector('h5').textContent.toLowerCase();

    // V??rifie si le titre du cours contient le mot-cl??
    if (courseTitle.includes(keyword)) {
      // Si oui, affiche l'??l??ment
      course.style.display = 'block';
    } else {
      // Si non, masque l'??l??ment
     
      course.style.display = 'none';
    
   
    } 
  });
});





















