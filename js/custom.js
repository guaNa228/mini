$(function(){

	var hf = function(){
		var h_header = $('header').height();
		var h_footer = $('footer').height();
		$('.content').css({
			'paddingTop': h_header,
			'paddingBottom': h_footer
		});
	}

	$(window).bind('load resize', hf);

});

$(document).on("focusin", ".drop_message_input, .drop_message_text", function () {
	$(this).parent().children("span").animate({
			color: "#f39c12"
		}, 200, function() {
			// Animation complete.
		})
})

$(document).on("focusout", ".drop_message_input, .drop_message_text", function () {
	$(this).parent().children("span").animate({
			color: "#0d0d0d"
		}, 200, function() {
			// Animation complete.
		})
})

$(document).ready(function skill_bars_f () {
	skill_bars_desc = $(".skill_bar_desctiption");
	skill_bars = $(".skill_bar");
	for (var i=0; i<skill_bars.length; i++) {
		perc = $(skill_bars_desc[i]).find("span").text().substring(2);
		$(skill_bars[i]).css("background", "linear-gradient(90.0deg, #f39c12 0%, #e6e6e6"+perc+")")
	}
	return;
});

//--------------------------------------------------------------------------------------------------------

let kek = document.querySelectorAll('.portfolio_menu span');
let projects = document.querySelectorAll('.project_item');
kek.forEach((value) => value.onclick = cringe);

function cringe() {
	kek.forEach((value) => {
		if (value==this) {
			value.classList.add('active');
			projects.forEach((prjct) => {
				if (this.textContent=='all works') {
					prjct.classList.remove('hidden');
				}
				else {
					if (prjct.lastElementChild.textContent.toLowerCase()!=this.textContent) {
						prjct.classList.add('hidden');
					} else {
						prjct.classList.remove('hidden');
					}
				}
			});
		} else {
			value.classList.remove('active');
		}
	});
}