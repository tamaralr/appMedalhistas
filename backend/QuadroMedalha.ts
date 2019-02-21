class QuadroMedalha{
	private qtde_vitorias: number;
	private qtde_medalhes: number;
	private pais_origem: number;
	private medalhas: Array<string>; 

	constructor(qtde_vitorias: number, qtde_medalhas: number, pais_origem: number, tipo_medalha:string){
		this.qtde_vitorias = qtde_vitorias;
		this.qtde_medalhes = qtde_medalhas;
		this.pais_origem = pais_origem;
		this.medalhas.push(tipo_medalha);
	}


}