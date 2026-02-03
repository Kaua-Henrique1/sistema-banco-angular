export class Cliente {
    private _nome: string;
    private _cpf: number;
    private _dataNascimento: string;
    private _rendaBruta: number;
    private _telefone: number;

    constructor(nome: string, dataNascimento: string,rendaBruta: number,cpf: number,telefone: number,) {
        this._nome = nome
        this._cpf = cpf
        this._rendaBruta = rendaBruta
        this._dataNascimento = dataNascimento
        this._telefone = telefone
    }

    public get nome(): string {
        return this._nome
    }
    public set nome(v: string) {
        this._nome = v;
    }

    public get cpf(): number {
        return this._cpf
    }
    public set cpf(v: number) {
        this._cpf = v;
    }

    public get dataNascimento(): string {
        return this._dataNascimento
    }
    public set dataNascimento(v: string) {
        this._dataNascimento = v;
    }

    public get renda_bruta(): number {
        return this._rendaBruta
    }
    public set renda_bruta(v: number) {
        this._rendaBruta = v;
    }

    public get telefone(): number {
        return this._telefone
    }
    public set telefone(v: number) {
        this._telefone = v;
    }
}