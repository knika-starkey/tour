let price;
let a = prompt('Введите страну:');
let hot = confirm("Тур горячий?");
switch (a){
   case 'Турция':
        price = 200; 
        price = hot? price - price*0.2 : price;
        break;
   case 'Египет':
        price = 100;
        price = hot? price - price*0.2 : price;
        break;
   case 'Гавайи':
        price = 350;
        price = hot? price - price*0.2 : price;
        break;
   case 'Мальдивы':
        price = 1000;
        price = hot? price - price*0.2 : price;
        break;
   case 'Испания':
        price = 870;
        price = hot? price - price*0.2 : price;
        break;
   case 'Одесса':
        price = 50;
        price = hot? price - price*0.2 : price;
        break;
   case 'Дубай':
        price = 3500;
        price = hot? price - price*0.2 : price;
        break;
   default:
        price='У нас нет такой страны';
}
alert(price + "$");
