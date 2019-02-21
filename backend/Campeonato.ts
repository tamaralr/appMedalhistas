import {Endereco} from "./Endereco";


class Campeonato{
	private modalidade: string;
	private local: Endereco;

	constructor(modalidade: string, local: Endereco){
		this.modalidade = modalidade;
		this.local = local;
	}
}