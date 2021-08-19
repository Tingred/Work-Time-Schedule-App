package com.WorkTimeSchedule.project.module.employee;

public class EmployeeDto {

    private String guid;
    private String imie;
    private String nazwisko;
    private Gender plec;
    private Position stanowisko;

    public String getImie() {
        return imie;
    }

    public EmployeeDto setImie(String imie) {
        this.imie = imie;
        return this;
    }

    public String getNazwisko() {
        return nazwisko;
    }

    public EmployeeDto setNazwisko(String nazwisko) {
        this.nazwisko = nazwisko;
        return this;
    }

    public Gender getPlec() {
        return plec;
    }

    public EmployeeDto setPlec(Gender plec) {
        this.plec = plec;
        return this;
    }

    public Position getStanowisko() {
        return stanowisko;
    }

    public EmployeeDto setStanowisko(Position stanowisko) {
        this.stanowisko = stanowisko;
        return this;
    }

    public String getGuid() {
        return guid;
    }

    public EmployeeDto setGuid(String guid) {
        this.guid = guid;
        return this;
    }
}
