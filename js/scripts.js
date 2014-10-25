 $('html').addClass('js');
    $(document).ready(function() {
        // Stuff to do as soon as the DOM is ready
		window.addEventListener('DOMContentLoaded', function() {
			new QueryLoader2(document.getElementById("#header"), {
				barColor: "#fff",
				backgroundColor: "#fff",
				percentage: false,
				barHeight: 1,
				minimumTime: 200,
				fadeOutTime: 500
			});
			new QueryLoader2(document.querySelector("#content"), {
				barColor: "#fff",
				backgroundColor: "#fff",
				percentage: false,
				barHeight: 1,
				minimumTime: 200,
				fadeOutTime: 1000
			});
		});
});  







