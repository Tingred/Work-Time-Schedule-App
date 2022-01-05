package com.WorkTimeSchedule.project.module.employee.entity;

public enum GenderEnum {
    MEZCZYZNA("Mężczyzna"),
    KOBIETA("Kobieta"),
    INNA("Inna");

    public final String wartosc;

    private GenderEnum(String wartosc){
        this.wartosc = wartosc;
    }

    @Override
    public String toString() {
        return this.wartosc;
    }
}
