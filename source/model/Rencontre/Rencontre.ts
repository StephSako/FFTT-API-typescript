export class Rencontre {
    libelle: string;
    nomEquipeA: string;
    nomEquipeB: string;
    scoreEquipeA: number | null;
    scoreEquipeB: number | null;
    lien: string;
    datePrevue: Date;
    dateReelle: Date | null;

    constructor (
        libelle: string,
        nomEquipeA: string,
        nomEquipeB: string,
        scoreEquipeA: number | null,
        scoreEquipeB: number | null,
        lien: string,
        datePrevue: Date,
        dateReelle: Date | null)
    {
        this.libelle = libelle;
        this.nomEquipeA = nomEquipeA;
        this.nomEquipeB = nomEquipeB;
        this.scoreEquipeA = scoreEquipeA;
        this.scoreEquipeB = scoreEquipeB;
        this.lien = lien;
        this.datePrevue = datePrevue;
        this.dateReelle = dateReelle;
    }
}