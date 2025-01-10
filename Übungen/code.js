let isEnglish = false; 
function uebersetzten() {
    if (isEnglish) {
        document.getElementById('headline').innerHTML = 'Der Winter';
        document.getElementById('text').innerHTML = ' Der Winter ist eine wunderschöne Jahreszeit. Die kalte Luft und der Schnee machen alles still und friedlich. Es ist die perfekte Zeit, um sich mit einer Tasse Tee vor dem Kamin zu entspannen und die Wärme zu genießen.';
        
    }else{
        
        document.getElementById('headline').innerHTML = 'The Winter';
        
        document.getElementById('text').innerHTML = 'Winter is a beautiful season. The cold air and the snow make everything quiet and peaceful. It’s the perfect time to relax with a cup of tea by the fireplace and enjoy the warmth';
    }
    isEnglish = !isEnglish;
}

function login() {
    const age = document.getElementById('feld').value
    let content = '<h3 style="background-color: powderblue">Herzlich Willkommen</h3>';
    if (age === undefined) {
        content += '<h2>Bitte fülle das Feld aus</h2>';
        document.getElementById('answer').innerHTML = content
        return;
    }
    if (age < 12) {
        content += '<p>danke für den versuch </p><br>';
        content += '<p>komm später wieder</p>';
        
    }else if(age >12 && age <18){
        content += '<p>danke für den versuch </p><br>';
        content += '<p>du darfst bis 0 Uhr hier bleiben!</p>';
        
    }else{
        
        content += '<p>danke für den versuch </p><br>';
        content += '<p>Herzlich willkommen fühl dich wie zuhause</p>';
    }
    document.getElementById('answer').innerHTML = content;
}