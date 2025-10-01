/*
Scriptimiz kısaca şunu yapıyor. Girilen fiyat ile miktarı çarpıyor
ve sonucu p tagımızda yazıyor. Ancak bu işlemi yaparken eventListener
kullandım. Yani hiç bir buton kullanmadan girişleri yaptığınızda
sonuç altta yazıyor. üç değişken kullandım "fiyat", "input", "paragraph"
daha sonra bu değişkenlerin içerisine by id ile dataları çektim.

*/

const fiyat = document.getElementById('textInputFiyat');
const input = document.getElementById('textInput');
const paragraph = document.getElementById('test');


// event listener ekleyip içinde fonksiyonumu çalıştırıyorum.

input.addEventListener('input', function() {

    //input değişkenimizin içeriği yani (adet)'e yazdığımız değeri paragrafın textContentine alıyorum.
    paragraph.textContent = input.value;

    //daha sonra p tagımızın içindeki değer ile fiyat inputundan gelen değeri çarpıp üstüne de string eklemesi yaptım.
    paragraph.textContent = paragraph.textContent * fiyat.value + " Türk Lirası tutuyor.";
    
});

//tabiki enson aslında reset butonu eklenip temizlik yapılabilir ama artık onuda siz yapın.
//yada başka fonksiyonlar ile de resetlenebilir. CSS ve bootstrap kullanmadım uzuyordu iş :p