package com.WorkTimeSchedule.project.module.employee;

public enum GenderEnum {
    MEZCZYZNA("Mężczyzna"),
    KOBIETA("Kobieta");


    public final String wartosc;

    private GenderEnum(String wartosc){
        this.wartosc = wartosc;
    }

    @Override
    public String toString() {
        return this.wartosc;
    }
}
