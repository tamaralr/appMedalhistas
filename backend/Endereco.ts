export class Endereco{
	private rua: string;
	private numero: number;
	private bairro: string;
	private cidade: string;
	private pais: string;
	private desc_local: string; //Ex: Evento no Polo Esportivo {tal}

	constructor(rua: string, numero: number, bairro: string, cidade: string, pais: string, desc_local: string){
		this.rua= rua;
		this.numero = numero;
		this.bairro = bairro;
		this.cidade = cidade;
		this.pais = pais;
		this.desc_local = desc_local;
	}


}