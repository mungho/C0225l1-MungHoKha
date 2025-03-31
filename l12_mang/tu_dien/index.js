document.getElementById('inputWord').addEventListener('keydown', function (keyboard){
    if(keyboard.key == "Enter"){
        dictionarySearch();
    }
})

function dictionarySearch(){
    let wordTranslation = document.getElementById('inputWord').value.trim().toLowerCase();
    let vietnameseDictionary = ["xin chào", "tạm biệt", "cảm ơn", "xin lỗi"];
    let englishDictionary = ["hello", "goodbye", "thank", "sorry"];
    let vietnameseIndex = vietnameseDictionary.indexOf(wordTranslation);
    let englishIndex = englishDictionary.indexOf(wordTranslation);

    if(englishIndex != -1){
        document.getElementById('result').innerHTML = 'The word in Vietnamese is: ' + vietnameseDictionary[englishIndex];
    }else if(vietnameseIndex != -1){
        document.getElementById('result').innerHTML = 'The word in English is: ' + englishDictionary[vietnameseIndex];
    }else{
        document.getElementById('result').innerHTML = "The '" + wordTranslation + "' word was not found";
    }
}