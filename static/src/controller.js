(function(){
	angular
		.module('app')
		.controller('MainController',MainController);

	MainController.$inject = [];
		
	function MainController(){
		var vm = this ;
		vm.nombre = 'sii';
		vm.change = function () {
			alert('Buscando ' + vm.search);
		};

	}

})();