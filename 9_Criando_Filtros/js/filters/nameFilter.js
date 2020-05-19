angular.module("listaTelefonica").filter("name", function () {
	return function (input) {
		var listaDeNomes = input.split(" "); //quebra o nome em pedaços sempre que ouver espaço em branco
		//map -> pra cada elemento da lista de nome todos tornam um unico array nome
		var listaDeNomesFormatada = listaDeNomes.map(function (nome) {
			if(nome.length <= 3) {
            			if(/(da|de|do|das|dos)/.test(nome)) return nome; //se for pronome nao fica maisculo 
				 }
			//charAt(0) é o primeiro caracter de nome, substring(1) sao os demais
			return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
		});
		return listaDeNomesFormatada.join(" "); //o que era espaço em branco volta a espaço em branco
	};
});
