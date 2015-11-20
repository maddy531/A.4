(function(){

var animals = [
	{name:'Dog', sound: 'arf'},
	{name:'Cat', sound: 'meow'},
	{name:'Monkey', sound:'man ahh ahh'}
	];

function seeAndSay(){
	animals.forEach(function(animal){
    animal.color = 'gray';
	console.log( 'The ' + animal.name + ' says ' + animal.sound + '! And is' + animal.color);

});
}
  seeAndSay();

})();
