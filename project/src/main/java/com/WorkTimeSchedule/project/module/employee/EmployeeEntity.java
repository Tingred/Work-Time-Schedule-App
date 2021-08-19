package com.WorkTimeSchedule.project.module.employee;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "employee")
public class EmployeeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String guid;
    private String imie;
    private String nazwisko;
    private Long pesel;
    private Long placa;

    @Enumerated(EnumType.STRING)
    private Gender plec;

    @Enumerated(EnumType.STRING)
    private Position stanowisko;


    public Long getId() {
        return id;
    }

    public EmployeeEntity setId(Long id) {
        this.id = id;
        return this;
    }

    public String getImie() {
        return imie;
    }

    public EmployeeEntity setImie(String imie) {
        this.imie = imie;
        return this;
    }

    public String getNazwisko() {
        return nazwisko;
    }

    public EmployeeEntity setNazwisko(String nazwisko) {
        this.nazwisko = nazwisko;
        return this;
    }

    public Long getPesel() {
        return pesel;
    }

    public EmployeeEntity setPesel(Long pesel) {
        this.pesel = pesel;
        return this;
    }

    public Long getPlaca() {
        return placa;
    }

    public EmployeeEntity setPlaca(Long placa) {
        this.placa = placa;
        return this;
    }

    public Gender getPlec() {
        return plec;
    }

    public EmployeeEntity setPlec(Gender plec) {
        this.plec = plec;
        return this;
    }

    public Position getStanowisko() {
        return stanowisko;
    }

    public EmployeeEntity setStanowisko(Position stanowisko) {
        this.stanowisko = stanowisko;
        return this;
    }

    public String getGuid() {
        return guid;
    }

    public EmployeeEntity setGuid(String guid) {
        this.guid = guid;
        return this;
    }
}
