/// script for index page

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('defaultOpen').click();

    document.getElementById('loginForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const result = await response.json();

        if (result.success) {
            window.location.href =  '1page.html'; // Redirect to a dashboard page or another authenticated page
        } else {
            document.getElementById('login-error-message').textContent = result.message;
        }
    });

    document.getElementById('registerForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const username = document.getElementById('new-username').value;
        const password = document.getElementById('new-password').value;
        const email = document.getElementById('email').value;

        const response = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password, email })
        });

        const result = await response.json();

        if (result.success) {
            window.location.href = '/dasebord'; // Redirect to a dashboard page or another authenticated page
        } else {
            document.getElementById('register-error-message').textContent = result.message;
        }
    });
});
function openTab(evt, tabName) {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }

    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
    }

    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.className += ' active';
}

function navigateToPage(url) {
    window.location.href = url;
}



///script for national.html


const playerData = {
    portugal: {
        players: [
            { name: "Roberto Martínez", position: "Manager", age: 50, club: "Portugal National Team", image: "image1/roberto_martinez.jpeg" },
            { name: "Cristiano Ronaldo (CP)", position: "Forward",  age: 39, club: "Al Nassr", image: "image1/rona1.jpeg" },
            { name: "Pepe", position: "Center Back", age: 41, club: "FC Porto", image: "image1/pep.jpeg" },
            { name: "Rui Patricio", position: "Goalkeeper", age: 36, club: "AS Roma", image: "image1/navas.jpeg" },
            { name: "Otávio", position: "Right Back", age: 29, club: "Al Nassr", image: "image1/otávio.jpeg" },
            { name: "Ruben Dias", position: "Center Back", age: 26, club: "Manchester City", image: "image1/Rúben Dias.jpeg" },
            { name: "Raphael Guerreiro", position: "Left Back", age: 30, club: "Bayern Munich", image: "image1/Raphael.jpeg" },
            { name: "Danilo Pereira", position: "Defensive Midfielder", age: 32, club: "Paris Saint-Germain", image: "image1/Danilo Pereira.jpeg" },
            { name: "Bruno Fernandes", position: "Attacking Midfielder", age: 29, club: "Manchester United", image: "image1/bruno.jpeg" },
            { name: "Gonçalo Ramos", position: "Forward", age: 22, club: "Paris Saint-Germain", image: "image1/gonçalo ramos.jpeg" },
            { name: "Bernardo Silva", position: "Right Winger", age: 29, club: "Manchester City", image: "image1/bernadosila.jpeg" },
            { name: "Diogo Jota", position: "Left Winger", age: 27, club: "Liverpool", image: "image1/Diogo Dalot 🇵🇹.jpeg" },
            { name: "Diogo Costa", position: "Goal Keeper", age: 24, club: "FC Porto", image: "image1/Diogo Costa.jpeg" }
        ]
    },

    argentina: {
        players: [
             { name: "Lionel Scaloni", position: "Manager", age: 45, club: "Argentina National Team", image: "image1/lionel_scaloni.jpeg" },
             { name: "Lionel Messi (CP)", position: "Forward", age: 36, club: "Inter Miami CF", image: "image1/leo.jpeg" },
             { name: "Mac Allister", position: "Forward", age: 25, club: "Liverpool", image: "image1/Mac Allister.jpeg" },
             { name: "Julián Álvarez", position: "Forward",  age: 24, club: "Manchester City", image: "image1/Julián Álvarez.jpeg" },
             { name: "Nicolás Otamendi", position: "Center Back", age: 36, club: "SL Benfica", image: "image1/Nicolás Otamendi.jpeg" },
             { name: "Lucas Martínez Quarta", position: "Center Back", age: 27, club: "Fiorentina", image: "image1/lucas.jpeg" },
             { name: "Nicolás Tagliafico", position: "Left Back", age: 31, club: "Olympique Lyonnais", image: "image1/Nicolás Tagliafico.jpeg" },
             { name: "Rodrigo De Paul", position: "Central Midfielder", age: 29, club: "Atlético Madrid", image: "image1/De Paul 7❤.jpeg" },
             { name: "Paulo Dybala", position: "Forward",  age: 30, club: "AS Roma", image: "image1/dybala.jpeg" },
             { name: "Cuti Romero", position: "Center Back", age: 26, club: "Tottenham Hotspur", image: "image1/Cuti Romero.jpeg" },
             { name: "Ángel Di María", position: "Winger",  age: 36, club: "SL Benfica", image: "image1/Di María.jpeg" },
             { name: "Lautaro Martínez", position: "Forward",  age: 26, club: "Inter Milan", image: "image1/lautaro mar.jpeg" },
             { name: "Emiliano Martínez", position: "Goalkeeper", age: 31, club: "Aston Villa", image: "image1/e martines.jpeg" }

        ]
    },
    brazil: {
        players: [
             { name: "Dorival Júnior", position: "Manager",  age: 62, club: "Brazil National Team", image: "image1/tite.jpeg" },
             { name: "Neymar Jr", position: "Forward",  age: 32, club: "Al Hilal", image: "image1/neymar.jpeg" },
             { name: "Roberto Firmino", position: "Forward",  age: 32, club: "Al Ahli", image: "image1/Roberto Firmino.jpeg" },
             { name: "Alisson Becker", position: "Goalkeeper",  age: 31, club: "Liverpool", image: "image1/Alisson Becker.jpeg" },
             { name: "Danilo", position: "Right Back", age: 32, club: "Juventus", image: "image1/Direito  Danilo.jpeg" },
             { name: "Vinicius Jr", position: "Left Wing", age: 23, club: "Real Madrid", image: "image1/Vinicius Jr.jpeg" },
             { name: "Thiago Silva", position: "Center Back", age: 39, club: "Chelsea", image: "image1/Thiago Silva.jpeg" },
             { name: "Rodrygo", position: "Forward", age: 23, club: "Real Madrid", image: "image1/Rodrygo.jpeg" },
             { name: "Casemiro", position: "Defensive Midfielder",  age: 32, club: "Manchester United", image: "image1/casimero.jpeg" },
             { name: "Fred", position: "Central Midfielder",  age: 31, club: "Fenerbahçe", image: "image1/Fred 🇧🇷.jpeg" },
             { name: "Raphinha", position: "Attacking Midfielder",  age: 27, club: "Barcelona", image: "image1/raphinha.jpeg" },
             { name: "Antony", position: "Forward", age: 24, club: "Manchester United", image: "image1/antony.jpeg" }
    ]
    
    },
    germany: {
       players: [
           { name: "Hansi Flick", position: "Manager",  age: 58, club: "Germany National Team", image: "image1/hanzy.jpeg" },
           { name: "Manuel Neuer", position: "Goalkeeper", age: 38, club: "Bayern Munich", image: "image1/Manuel Neuer.jpeg" },
           { name: "Antonio Rüdiger", position: "Center Back",  age: 31, club: "Real Madrid", image: "image1/Rudiger.jpeg" },
           { name: "Niklas Süle", position: "Center Back",  age: 28, club: "Borussia Dortmund", image: "image1/Niklas Süle-Germany.jpeg" },
           { name: "Joshua Kimmich", position: "Right Back",  age: 29, club: "Bayern Munich", image: "image1/Joshua Kimmich.jpeg" },
           { name: "David Raum", position: "Left Back",  club: "RB Leipzig", image: "image1/David Raum 🇩🇪.jpeg" },
           { name: "Ilkay Gündogan", position: "Central Midfielder",  age: 33, club: "Barcelona", image: "image1/Ilkay Gündoğan.jpeg" },
           { name: "Leon Goretzka", position: "Central Midfielder",  age: 29, club: "Bayern Munich", image: "image1/Leon Goretzka.jpeg" },
           { name: "Kai Havertz", position: "Attacking Midfielder", age: 24, club: "Arsenal", image: "image1/kai_3.jpeg" },
           { name: "Serge Gnabry", position: "Right Winger",  age: 28, club: "Bayern Munich", image: "image1/serge gnabry.jpeg" },
           { name: "Leroy Sané", position: "Left Winger", age: 28, club: "Bayern Munich", image: "image1/leroy sané.jpeg" },
           { name: "Thomas Müller", position: "Forward", age: 28, club: "Bayern Munich", image: "image1/Thomas Müller-Germany.jpeg" }
        ]
     },
     spain: {
       players: [
           { name: "Luis de la Fuente", position: "Manager",  age: 62, club: "Spain National Team", image: "image1/luis_de_la_fuente.jpeg" },
           { name: "David de Gea", position: "Goalkeeper",  age: 33, club: "Manchester United", image: "image1/david_de_gea.jpeg" },
           { name: "Jordi Alba", position: "Left Back",  age: 33, club: "Barcelona", image: "image1/jordi_alba.jpeg" },
           { name: "Carvajal", position: "Center Back",  age: 37, club: "Reaal madrid", image: "image1/Carvajal.jpeg" },
           { name: "Pau Torres", position: "Center Back",  age: 26, club: "Villarreal", image: "image1/pau_torres.jpeg" },
           { name: "César Azpilicueta", position: "Right Back", age: 34, club: "Chelsea", image: "image1/cesar_azpilicueta.jpeg" },
           { name: "Sergio Busquets", position: "Defensive Midfielder", age: 34, club: "Barcelona", image: "image1/sergio_busquets.jpeg" },
           { name: "Koke", position: "Central Midfielder",  age: 31, club: "Atlético Madrid", image: "image1/koke.jpeg" },
           { name: "Pedri", position: "Attacking Midfielder",  age: 20, club: "Barcelona", image: "image1/pedri.jpeg" },
           { name: "Ferran Torres", position: "Right Winger",  age: 24, club: "Manchester City", image: "image1/farren.jpeg" },
           { name: "Gerard Moreno", position: "Forward",  age: 31, club: "Villarreal", image: "image1/gerarad_moreno.jpeg" },
           { name: "Álvaro Morata", position: "Forward",  age: 30, club: "Juventus", image: "image1/alvaro_morata.jpeg" }
           ]
    },
    england: {
       players: [
        { name: "Gareth Southgate", position: "Manager", achievements: "UEFA European Championship runner-up", age: 53, club: "England National Team", image: "image1/gareth_southgate.jpeg" },
        { name: "Jordan Pickford", position: "Goalkeeper", achievements: "Euro 2020 runner-up", age: 30, club: "Everton", image: "image1/jordan_pickford.jpeg" },
        { name: "Kyle Walker", position: "Right Back", achievements: "Premier League champion", age: 34, club: "Manchester City", image: "image1/kyle_walker.jpeg" },
        { name: "John Stones", position: "Center Back", achievements: "Premier League champion", age: 30, club: "Manchester City", image: "image1/john_stones.jpeg" },
        { name: "Harry Maguire", position: "Center Back", achievements: "Euro 2020 runner-up", age: 31, club: "Manchester United", image: "image1/harry_maguire.jpeg" },
        { name: "Luke Shaw", position: "Left Back", achievements: "Euro 2020 runner-up", age: 28, club: "Manchester United", image: "image1/luke_shaw.jpeg" },
        { name: "Declan Rice", position: "Defensive Midfielder", achievements: "Conference League winner", age: 25, club: "Arsenal", image: "image1/declan_rice.jpeg" },
        { name: "Jude Bellingham", position: "Central Midfielder", achievements: "Bundesliga champion", age: 21, club: "Real Madrid", image: "image1/jude_bellingham.jpeg" },
        { name: "Mason Mount", position: "Attacking Midfielder", achievements: "Champions League winner", age: 25, club: "Manchester United", image: "image1/mason_mount.jpeg" },
        { name: "Bukayo Saka", position: "Right Winger", achievements: "Euro 2020 runner-up", age: 22, club: "Arsenal", image: "image1/bukayo_saka.jpeg" },
        { name: "marcus rashford", position: "Left Winger", achievements: "FA Cup", age: 29, club: "Man United", image: "image1/rasford.jpeg" },
        { name: "Harry Kane", position: "Forward", achievements: "Premier League top scorer", age: 30, club: "Bayern Munich", image: "image1/harry_kane.jpeg" }
    
           ]
    },

    france: {
    players: [
        { name: "Didier Deschamps", position: "Manager", achievements: "World Cup winner", age: 55, club: "France National Team", image: "image1/didier_deschamps.jpeg" },
        { name: "Hugo Lloris", position: "Goalkeeper", achievements: "World Cup winner", age: 35, club: "Tottenham Hotspur", image: "image1/hugo_lloris.jpeg" },
        { name: "Lucas Hernández", position: "Left Back", achievements: "Champions League winner", age: 26, club: "Bayern Munich", image: "image1/lucas_hernandez.jpeg" },
        { name: "Raphael Varane", position: "Center Back", achievements: "Champions League winner", age: 29, club: "Manchester United", image: "image1/raphael_varane.jpeg" },
        { name: "Presnel Kimpembe", position: "Center Back", achievements: "Ligue 1 champion", age: 26, club: "Paris Saint-Germain", image: "image1/presnel_kimpembe.jpeg" },
        { name: "Benjamin Pavard", position: "Right Back", achievements: "Champions League winner", age: 26, club: "Bayern Munich", image: "image1/benjamin_pavard.jpeg" },
        { name: "N'Golo Kanté", position: "Defensive Midfielder", achievements: "Premier League champion", age: 31, club: "Chelsea", image: "image1/ngolo_kante.jpeg" },
        { name: "Paul Pogba", position: "Central Midfielder", achievements: "World Cup winner", age: 30, club: "Manchester United", image: "image1/paul_pogba.jpeg" },
        { name: "Antoine Griezmann", position: "Attacking Midfielder", achievements: "Europa League winner", age: 31, club: "Barcelona", image: "image1/antoine_griezmann.jpeg" },
        { name: "Kylian Mbappé", position: "Forward", achievements: "Ligue 1 champion", age: 24, club: "Paris Saint-Germain", image: "image1/kylian_mbappe.jpeg" },
        { name: "Karim Benzema", position: "Forward", achievements: "Champions League winner", age: 34, club: "Real Madrid", image: "image1/karim_benzema.jpeg" },
        { name: "Kingsley Coman", position: "Forward", achievements: "Champions League winner", age: 26, club: "Bayern Munich", image: "image1/kingsley_coman.jpeg" }
       ]
    },

    netherlands: {
    players: [
        { name: "Louis van Gaal", position: "Manager", achievements: "FIFA World Cup runner-up", age: 70, club: "Netherlands National Team", image: "image1/louis_van_gaal.jpeg" },
        { name: "Maarten Stekelenburg", position: "Goalkeeper", achievements: "Eredivisie champion", age: 38, club: "Ajax", image: "image1/maarten_stekelenburg.jpeg" },
        { name: "Denzel Dumfries", position: "Left Back", achievements: "FA Cup winner", age: 31, club: "Galatasaray", image: "image1/Denzel Dumfries.jpeg" },
        { name: "Stefan de Vrij", position: "Center Back", achievements: "Serie A champion", age: 30, club: "Inter Milan", image: "image1/Virgil van Dijk.jpeg" },
        { name: "Matthijs de Ligt", position: "Center Back", achievements: "Serie A champion", age: 23, club: "Juventus", image: "image1/Marten de Roon.jpeg" },
        { name: "Cody Gakpo", position: "Right Back", achievements: "Eredivisie champion", age: 26, club: "PSV Eindhoven", image: "image1/Cody Gakpo.jpeg" },
        { name: "Frenkie de Jong", position: "Central Midfielder", achievements: "La Liga champion", age: 24, club: "Barcelona", image: "image1/frenkie_de_jong.jpeg" },
        { name: "Georginio Wijnaldum", position: "Central Midfielder", achievements: "Premier League champion", age: 30, club: "Paris Saint-Germain", image: "image1/georginio_wijnaldum.jpeg" },
        { name: "Davy Klaassen", position: "Attacking Midfielder", achievements: "Eredivisie champion", age: 28, club: "Ajax", image: "image1/davy_klaassen.jpeg" },
        { name: "Steven Berghuis", position: "Right Winger", achievements: "Eredivisie champion", age: 30, club: "Ajax", image: "image1/Steven Berghuis.jpeg" },
        { name: "Memphis Depay", position: "Forward", achievements: "Ligue 1 champion", age: 28, club: "Barcelona", image: "image1/memphis_depay.jpeg" },
        { name: "Donyell Malen", position: "Forward", achievements: "Eredivisie champion", age: 23, club: "Borussia Dortmund", image: "image1/Nathan Aké.jpeg" }
      ]
    },
   
    italy: {
    players: [
        { name: "Roberto Mancini", position: "Manager", age: 57, club: "Italy National Team", image: "image1/roberto_mancini.jpeg" },
        { name: "Gianluigi Donnarumma", position: "Goalkeeper", age: 26, club: "Paris Saint-Germain", image: "image1/gianluigi_donnarumma.jpeg" },
        { name: "Francesco Acerbi", position: "Center Back",  age: 36, club: "Inter Milan", image: "image1/francesco_acerbi.jpeg" },
        { name: "Federico Dimarco", position: "Left Back", age: 26, club: "Inter Milan", image: "image1/federico_dimarco.jpeg" },
        { name: "Leonardo Bonucci", position: "Center Back", age: 35, club: "Juventus", image: "image1/leonardo_bonucci.jpeg" },
        { name: "Giovanni Di Lorenzo", position: "Right Back", age: 28, club: "Napoli", image: "image1/giovanni_di_lorenzo.jpeg" },
        { name: "Marco Verratti", position: "Central Midfielder", age: 30, club: "Paris Saint-Germain", image: "image1/marco_verratti.jpeg" },
        { name: "Jorginho", position: "Central Midfielder", age: 30, club: "Chelsea", image: "image1/jorginho.jpeg" },
        { name: "Nicolò Barella", position: "Attacking Midfielder", age: 25, club: "Inter Milan", image: "image1/nicolo_barella.jpeg" },
        { name: "Federico Chiesa", position: "Right Winger", age: 24, club: "Juventus", image: "image1/federico_chiesa.jpeg" },
        { name: "Lorenzo Insigne", position: "Left Winger", age: 30, club: "Napoli", image: "image1/lorenzo_insigne.jpeg" },
        { name: "Ciro Immobile", position: "Forward",age: 32, club: "Lazio", image: "image1/ciro_immobile.jpeg" }
      ]
    },

    belgium: {
    players: [
    
        { name: "Domenico Tedesco", position: "Manager", age: 38, club: "Belgium National Team", image: "image1/Domenico Tedesco.jpeg" },
        { name: "Thibaut Courtois", position: "Goalkeeper", age: 30, club: "Real Madrid", image: "image1/thibaut_courtois.jpeg" },
        { name: "Toby Alderweireld", position: "Center Back", age: 33, club: "Al-Duhail", image: "image1/toby_alderweireld.jpeg" },
        { name: "Jan Vertonghen", position: "Center Back", age: 35, club: "Benfica", image: "image1/jan_vertonghen.jpeg" },
        { name: "Thomas Meunier", position: "Right Back", age: 30, club: "Borussia Dortmund", image: "image1/thomas_meunie.jpeg" },
        { name: "Timothy Castagne", position: "Left Back", age: 25, club: "Leicester City", image: "image1/timothy_castagne.jpeg" },
        { name: "Axel Witsel", position: "Central Midfielder", age: 33, club: "Borussia Dortmund", image: "image1/axel_witsel.jpeg" },
        { name: "Youri Tielemans", position: "Central Midfielder", age: 25, club: "Leicester City", image: "image1/youri_tielemans.jpeg" },
        { name: "Kevin De Bruyne", position: "Attacking Midfielder", age: 31, club: "Manchester City", image: "image1/kevin_de_bruyne.jpeg" },
        { name: "Eden Hazard", position: "Left Winger", age: 32, club: "Real Madrid", image: "image1/eden_hazard.jpeg" },
        { name: "Yannick Carrasco", position: "Right Winger",  age: 28, club: "Atletico Madrid", image: "image1/yannick_carrasco.jpeg" },
        { name: "Romelu Lukaku", position: "Forward", age: 29, club: "Chelsea", image: "image1/romelu_lukaku.jpeg" }
       ]
    }   


};
     
document.querySelectorAll('.nation-img').forEach(img => {
    img.addEventListener('click', () => {
        const nation = img.getAttribute('data-nation');
        const playerInfoContainer = document.getElementById('player-info-container');
        const playerInfo = document.getElementById('player-info');

        // Clear previous player info
        playerInfo.innerHTML = "";

        const players = playerData[nation]?.players || [];

        if (players.length > 0) {
            players.forEach(player => {
                const playerDiv = document.createElement("div");
                playerDiv.className = "player-info";
                playerDiv.innerHTML = `<h3>${player.name}</h3>
                                       <img src="${player.image}" alt="${player.name} Image" style="max-width: 80px;">
                                       <p>Age: ${player.age}</p>
                                       <p>Position: ${player.position}</p>
                                       <p>Club: ${player.club}</p>`;
              playerInfo.appendChild(playerDiv);
            });
            playerInfoContainer.style.display = 'block';
        } else {
            playerInfoContainer.style.display = 'none';
        }
    });
});
/// script for league.html
 
function toggleDetails(id) {
    const allDetails = document.querySelectorAll('.league-details');
    allDetails.forEach(detail => {
        if (detail.id !== id) {
            detail.style.display = 'none';
        }
    });
    const details = document.getElementById(id);
    details.style.display = details.style.display === 'block' ? 'none' : 'block';
}

// script for live.html
document.addEventListener('DOMContentLoaded', function() {
    const leagues = [
        { id: 'uefa', name: 'UEFA Champions League', logo: 'image/ucl.jpeg ', link: 'https://www.uefa.com/uefachampionsleague/live/' },
        { id: 'premier-league', name: 'Premier League', logo: 'image/pl.jpeg', link: 'https://www.premierleague.com/matchweek/' },
        { id: 'laliga', name: 'La Liga', logo: 'image/lali.jpeg', link: 'https://www.laliga.com/en-GB/live' },
        { id: 'serie-a', name: 'Serie A', logo: 'image/Serie a.jpeg', link: 'https://www.legaseriea.it/en/live' },
        { id: 'saudi-pro-league', name: 'Saudi Pro League', logo: 'image/rsl-removebg-preview.jpg', link: 'https://www.spl.com.sa/en/live' },
        { id: 'national-teams', name: 'National Teams', logo: 'image/fifa.jpeg', link: 'https://www.fifa.com/live' }
    ];

    const navList = document.getElementById('nav-list');
    const mainContent = document.getElementById('main-content');

    leagues.forEach(league => {
        // Create navigation item
        const navItem = document.createElement('li');
        const logoLink = document.createElement('a');
        const leagueLogo = document.createElement('img');
        leagueLogo.src = league.logo;
        leagueLogo.alt = league.name + " logo";
        logoLink.href = `#${league.id}`;
        logoLink.addEventListener('click', function(event) {
            event.preventDefault();
            displayLeagueMatches(league);
        });
        logoLink.appendChild(leagueLogo);
        navItem.appendChild(logoLink);
        navList.appendChild(navItem);
    });

    function displayLeagueMatches(league) {
        // Clear previous content
        mainContent.innerHTML = '';

        // Create section for league
        const section = document.createElement('section');
        section.id = league.id;
        const sectionTitle = document.createElement('h2');
        sectionTitle.textContent = `${league.name} Live Matches`;
        const liveLink = document.createElement('a');
        liveLink.href = league.link;
        liveLink.target = '_blank';
        liveLink.textContent = 'Watch Live Matches';
        section.appendChild(sectionTitle);
        section.appendChild(liveLink);
        mainContent.appendChild(section);
    }
});

