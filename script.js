document.addEventListener('DOMContentLoaded', function() {
    const homePage = document.getElementById('home');
    const aboutPage = document.getElementById('about');
    const contactPage = document.getElementById('contact');
    const mainContent = document.getElementById('main-content');
    const GamesPage = document.getElementById('Games');
  
    homePage.addEventListener('click', function() {
      mainContent.innerHTML = `
        <div class="container">
          <h2>Welcome to our website!</h2>
          <p>This is the home page content.</p>
        </div>
      `;
    });
  
    aboutPage.addEventListener('click', function() {
      mainContent.innerHTML = `
        <div class="container">
          <h2>About Us</h2>
          <p>Me and my group are proffesional at (programming)<h3>why did we want to start this website?</h3><h5>So back in the day we wanted to help others in the childhood, but didnt know how to help others now
          that i know how to programm we wanted to help other's start coding.But learning to code in our website its boring,so i took ideas from my group, and decided to put games in our website so it wouldnt get boring, so u can feel free to look around and use this website if this is useful too you.</h5> 
          </p>
        </div>
        <style>
        h3 {
          color: white;
        }

        h5 {
          color: white;
        }

        p {
          color: white;
        }

        </style>


      `;
    });
    GamesPage.addEventListener('click', function() {
      GamesPage.innerHTML = `
        <div class="container">
          <h2>Games:</h2>
          <h><a href="ColorGame/index.html">
          <img border="0" alt="W3Schools" src="images/Snake_OG-logo.jpg" width="100" height="100">
          </a>
          <a href="pixel art generator/index.html">
          <img border="0" alt="W3Schools" src="images/Pixels.jpg" width="100" height="100" >
          </a>
          <a href="Memory-Game-master/index.html">
          <img border="0" alt="W3Schools" src="images/emir.jpg" width="100" height="100" >
          </a>
          <a href="TicTac/index.html">
          <img border="0" alt="W3Schools" src="images/tic.png" width="100" height="100" >
          </a>
          <a href="Wordle/wordle.html">
          <img border="0" alt="W3Schools" src="images/WORDLE.webp" width="100" height="100" >
          </a><h2>More are coming soon...</h2></h>
        </div>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        `;
      });

  
    contactPage.addEventListener('click', function() {
      mainContent.innerHTML = `
        <div class="container">
          <h2>contact</h2>
          <h>This is the contact page contact if u have any problem u can contact us here in these medias.</h>
        </div>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <style>



        .fa {
          padding: 20px;
          font-size: 30px;
          width: 50px;
          text-align: center;
          text-decoration: none;
          margin: 5px 2px;
        }
        
        .fa:hover {
            opacity: 0.7;
        }
        
        .fa-facebook {
          background: #3B5998;
          color: white;
        }
        
        
        .fa-instagram {
          background: #125688;
          color: white;
        }
        
        </style>
        </head>
        <body>
        
        <!-- Add font awesome icons -->
        <a href="https://www.facebook.com/profile.php?id=61556560796731" class="fa fa-facebook"></a>
        <a href="https://www.instagram.com/techfinity3/" class="fa fa-instagram"></a>
        
      `;
    });
  });
  