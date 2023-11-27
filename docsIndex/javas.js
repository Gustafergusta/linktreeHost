function abrirmenu(x) {
    var menu = document.getElementById("menu");
    menu.classList.remove("hidden");
    
    // Para armazenar o valor
    localStorage.setItem('menu', x);
    document.getElementById('radio-video').checked = true;

    exibirVideo();
  }
  
  function fecharmenu() {
    var menu = document.getElementById("menu");
    menu.classList.add("hidden");
    localStorage.clear();
  }

  function exibirVideo() {
    // Para recuperar o valor
    var menu = localStorage.getItem('menu');

    if (menu == 1)
    {
      document.getElementById('video-glpi').style.display = 'block';
      document.getElementById('pdf-glpi').style.display = 'none';

      document.getElementById('video-ponto').style.display = 'none';
      document.getElementById('pdf-ponto').style.display = 'none';

      document.getElementById('video-gss').style.display = 'none';
      document.getElementById('pdf-gss').style.display = 'none';
    }
    else if(menu == 2)
    {
      document.getElementById('video-ponto').style.display = 'block';
      document.getElementById('pdf-ponto').style.display = 'none';

      document.getElementById('video-glpi').style.display = 'none';
      document.getElementById('pdf-glpi').style.display = 'none';

      document.getElementById('video-gss').style.display = 'none';
      document.getElementById('pdf-gss').style.display = 'none';
    }
    else if(menu == 3)
    {
      document.getElementById('video-ponto').style.display = 'none';
      document.getElementById('pdf-ponto').style.display = 'none';

      document.getElementById('video-glpi').style.display = 'none';
      document.getElementById('pdf-glpi').style.display = 'none';

      document.getElementById('video-gss').style.display = 'block';
      document.getElementById('pdf-gss').style.display = 'none';
    }
  }
  
  function exibirPDF() {

    var menu = localStorage.getItem('menu');

    if (menu == 1)
    {
      document.getElementById('pdf-glpi').style.display = 'block';
      document.getElementById('video-glpi').style.display = 'none';

      document.getElementById('pdf-ponto').style.display = 'none';
      document.getElementById('video-ponto').style.display = 'none';

      document.getElementById('pdf-gss').style.display = 'none';
      document.getElementById('video-gss').style.display = 'none';
    }
    else if(menu == 2)
    {
      document.getElementById('pdf-glpi').style.display = 'none';
      document.getElementById('video-glpi').style.display = 'none';

      document.getElementById('pdf-ponto').style.display = 'block';
      document.getElementById('video-ponto').style.display = 'none';

      document.getElementById('pdf-gss').style.display = 'none';
      document.getElementById('video-gss').style.display = 'none';
    }
    else if(menu == 3)
    {
      document.getElementById('pdf-glpi').style.display = 'none';
      document.getElementById('video-glpi').style.display = 'none';

      document.getElementById('pdf-ponto').style.display = 'none';
      document.getElementById('video-ponto').style.display = 'none';

      document.getElementById('pdf-gss').style.display = 'block';
      document.getElementById('video-gss').style.display = 'none';
    }
  }
  