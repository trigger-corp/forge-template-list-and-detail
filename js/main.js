var scrollTop = function () {
	setTimeout(function () {
		document.body.scrollTop = 0;
	}, 0);
}
var updateRecipes = function (search) {
	scrollTop();
	$('.content').html('<ul class="list"></ul>');
	$.each(data[search], function (i, recipe) {
		var el = $('<li><img src="'+recipe.thumb+'">'+recipe.title+'</li>');
		el.on('click', function () {
			scrollTop();
			$('.content').html('<div class="recipe"><h3>'+recipe.title+'</h3><img src="'+recipe.img+'"><ul class="ingredients"></ul><p><a href="#" onclick="forge.tabs.open(\''+recipe.source+'\')">View full recipe</a></p></div>');
			$.each(recipe.ingredients, function (i, ingredient) {
				$('.ingredients').append('<li>'+ingredient+'</li>');
			});
			forge.tabbar.setInactive();
		});
		$('.list').append(el);
	});
}

forge.topbar.setTitle("Recipe shopping list");
var starterButton = forge.tabbar.addButton({
	text: "Starters",
	icon: "img/tomato.png",
	index: 0
}, function (button) {
	button.onPressed.addListener(function () {
		updateRecipes("starter");
	});
	button.setActive();
	updateRecipes("starter");
});

var mainButton = forge.tabbar.addButton({
	text: "Mains",
	icon: "img/pizza.png",
	index: 1
}, function (button) {
	button.onPressed.addListener(function () {
		updateRecipes("main");
	});
});
var dessertButton = forge.tabbar.addButton({
	text: "Desserts",
	icon: "img/strawberry.png",
	index: 2
}, function (button) {
	button.onPressed.addListener(function () {
		updateRecipes("dessert");
	});
});