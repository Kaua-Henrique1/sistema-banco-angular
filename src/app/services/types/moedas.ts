export interface DolarAPI {
    code: string;
    codein: string;
    name: string;
    high: string;
    low: string;
    bid: string;
    create_date: string;
}

export interface EuroAPI {
    code: string;
    codein: string;
    name: string;
    high: string;
    low: string;
    bid: string;
    create_date: string;
}

export interface RespostaDolar {
    USDBRL: DolarAPI;
}

export interface RespostaEuro {
    EURBRL: EuroAPI;
}