const slovianMaleName = ['Borzymir', 'Dalebor', 'Sambor', 'Borzygniew', 'Dobrosław', 'Dobrowoj', 'Ciechosław', 'Wojciech', 'Sieciech', 'Dobrociech', 'Domarad', 'Domosław', 'Domamir', 'Drogosław', 'Drogomir', 'Lubodrog', 'Siemidrog', 'Gniewomir', 'Mścigniew', 'Zbygniew', 'Częstogoj', 'Domagoj', 'Dobrogost', 'Gościsław', 'Miłogost', 'Uniegost', 'Jarosław', 'Jaromir', 'Jarostryj', 'Lubomir', 'Luboradz', 'Ludomir', 'Miłosław', 'Wojemił', 'Miłorad', 'Mirosław', 'Chociemir', 'Mirogod', 'Małomir', 'Myślimir', 'Drogomysł', 'Dobromysł', 'Witomysł', 'Radosław', 'Bogurad', 'Radomir', 'Sobierad', 'Więcerad', 'Racimir', 'Rasław', 'Racibor', 'Siemisław', 'Siemidrog', 'Siemirad', 'Sławomir', 'Sławobor', 'Gościsław', 'Jarosław', 'Stanisław', 'Sobiesław', 'Sobierad', 'Sobiemir', 'Witosław', 'Siemowit', 'Włodzisław', 'Włodzimir', 'Włościwoj', 'Wojsław', 'Dobrowoj', 'Częstowoj', 'Wojciech', 'Gościwuj', 'Jutrowuj', 'Domażyr', 'Żyrosław'];

const slovianFemaleName = ['Bądzsława', 'Biezdziadka', 'Bogdała', 'Bogna', 'Bogufała', 'Bogudać', 'Bogudarz', 'Bogmiła', 'Boguwłość', 'Bohuwola', 'Bolemira', 'Bosława', 'Bożena', 'Bratmiła', 'Budzisława', 'Chwalimira', 'Chwalisława', 'Ciecirada', 'Ciesława', 'Cieszysława', 'Cirzpisława', 'Czcibora', 'Czębira', 'Częstobrona', 'Częstowojna', 'Dadzboga', 'Dalebora', 'Dalewuja', 'Damroka', 'Dąbrówka', 'Dobiegniewa', 'Dobrawa', 'Dobrogniewa', 'Dobromiła', 'Dobromira', 'Dobroniega', 'Dobrosława', 'Dobrochna', 'Dobrosułka', 'Dobrowieść', 'Dobrowoja', 'Dobrożyźń', 'Domaczaja', 'Domasława', 'Drogomira', 'Drogosława', 'Dziadumiła', 'Dziersława', 'Falisława', 'Gniewosądka', 'Gościrada', 'Grodzisława', 'Grzymsława', 'Hubysława', 'Imisława', 'Izbygniewa', 'Janczysława', 'Jarogniewa', 'Jaromira', 'Jerosława', 'Kazimiera', 'Krzesława', 'Lechosława', 'Lubomira', 'Ludźmiła', 'Małomira', 'Mieczysława', 'Milena', 'Miłosława', 'Miłochna', 'Mirogniewa', 'Mironiega', 'Mirosława', 'Modliboga', 'Mojmira', 'Myślibora', 'Nasława', 'Nawojka', 'Niedomira', 'Nieluba', 'Niemiła', 'Nieradka', 'Niesiebudka', 'Niestanka', 'Pęsława', 'Pękosława', 'Pężyrka', 'Przeborka', 'Przesława', 'Ratsława', 'Radomiła', 'Redsława', 'Radochna', 'Radzisława', 'Rosława', 'Rzepicha', 'Samboja', 'Sędzisława', 'Szebora', 'Siecława', 'Sjęgniewa', 'Skarbimira', 'Sława', 'Sławobora', 'Smysława', 'Sobiesława', 'Stanisława', 'Stojsława', 'Strzesława', 'Suligniewa', 'Sulisława', 'Ścibora', 'Świebora', 'Świętomira', 'Świętosława', 'Święcsława', 'Święsława', 'Świętożyźń', 'Tolisława', 'Tomiła', 'Tomira', 'Tomisława', 'Tosława', 'Trzebiesława', 'Trzebosława', 'Tworzysława', 'Unisława', 'Wielisława', 'Wieńczysława', 'Więcsława', 'Wirzchosława', 'Wisława', 'Witosława', 'Wociecha', 'Wojsława', 'Wolisława', 'Wrocisława', 'Wszebora', 'Wszemiła', 'Wyszeniega', 'Wyszesława', 'Wysława', 'Zbygniewa', 'Zdziesława', 'Zwnisława', 'Żelisława', 'Żyrborka', 'Żyrosława', 'Żywia']


const btn = document.querySelector('button');
const div = document.querySelector('div');

const nameLottery = (i) => {
    const allNames = [...slovianFemaleName, ...slovianMaleName];
    const index = Math.floor(Math.random() * allNames.length)
    document.querySelector('div').innerHTML = allNames[index];
    let size = 25;
    div.style.padding = `${size}px`;

}



btn.addEventListener('click', nameLottery)