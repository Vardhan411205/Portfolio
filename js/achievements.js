      let currentIndex = 0;
      const images = document.querySelectorAll('.carousel img');
      const texts = [
        'This certifies that Jovardhan Vijji has successfully completed the Ai in practice:Applying Ai course on June 05, 2024, through edX.',
        'This certifies that Jovardhan Vijji has successfully completed the Building a website course on June 26, 2024, through Programming Hub.',
        'This certifies that Jovardhan Vijji has successfully completed the ChatGpt course on June 26, 2024, through Programming Hub.',
        'This certifies that Jovardhan Vijji has successfully completed the Communication Skills course on oct 29, 2023, through tcs ion.',
        'This certifies that Jovardhan Vijji has successfully completed the crash course on spoft skills course on nov, 2023, through great Learning.','This certifies that Jovardhan Vijji has successfully completed the CSS course on June 26, 2024, through Programming Hub.',
          'This certifies that Jovardhan Vijji has successfully completed the Data Science Foundations course on oct, 2024, through Great Learning.',
          'This certifies that Jovardhan Vijji has successfully completed the Git course on June 26, 2024, through Programming Hub.',
          'This certifies that Jovardhan Vijji has successfully completed the Html course on mar 10, 2024, through Programming Hub.',
          'This certifies that Jovardhan Vijji has successfully completed the Html Advanced course on mar 28, 2024, through Programming Hub.',
          'This certifies that Jovardhan Vijji has successfully completed the Intrest calculator using Html , css & Js on may 31, 2024, through edX.',
          'This certifies that Jovardhan Vijji has successfully completed the interview skills course on oct 29, 2023, through tcs ion.',
          'This certifies that Jovardhan Vijji has successfully completed the Introduction to r course on oct, 2023, through Great Learning.',
          'This certifies that Jovardhan Vijji has successfully completed the Introduction to soft skills course on oct 30, 2023, through tcs ion',
          'This certifies that Jovardhan Vijji has successfully completed the Java servlets and jsp course on June 28, 2024, through Programming Hub.',
          'This certifies that Jovardhan Vijji has successfully completed the Python-3 course on June 26, 2024, through Programming Hub.',
          'This certifies that Jovardhan Vijji has successfully completed the RDBMS course on June 26, 2024, through Programming Hub.',
          'This certifies that Jovardhan Vijji has successfully completed the Resume Building course on nov, 2023, through Great Learning.',
          'This certifies that Jovardhan Vijji has successfully completed the SQL course on June 26, 2024, through Programming Hub.'
      ];
      const textElement = document.querySelector('.carousel .text');
      const certificatesList = document.querySelector('.scrollable-certificates');

      function showImage(index) {
        currentIndex = index;
        images.forEach((img, i) => {
          img.classList.remove('active');
          if (i === index) {
            img.classList.add('active');
            textElement.textContent = texts[i];
          }
        });
      }

      function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
      }

      function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
      }



      setInterval(nextImage, 3000);
