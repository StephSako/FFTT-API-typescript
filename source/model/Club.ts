export class Club {
    numero: string;
    nom: string;
    dateValidation: Date | null;
    idClub: string;
    typeClub: string;

    constructor (
        idClub: string,
        typeClub: string,
        numero: string,
        nom: string,
        dateValidation: Date | null)
    {
        this.idClub = idClub;
        this.typeClub = typeClub;
        this.numero = numero;
        this.nom = nom;
        this.dateValidation = dateValidation;
    }
}