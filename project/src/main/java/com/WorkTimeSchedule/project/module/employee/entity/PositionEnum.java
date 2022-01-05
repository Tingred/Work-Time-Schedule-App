package com.WorkTimeSchedule.project.module.employee.entity;

public enum PositionEnum {
    PRACOWNIK_LINII("Pracownik linii"),
    WOZKOWY("Wózkowy"),
    KIEROWNIK_LINII("Kierownik linii"),
    KIEROWNIK_HALI("Kierownik hali"),
    MAGAZYNIER("Magazynier"),
    MENADZER("Menadżer"),
    DYREKTOR("Dyrektor");

    public final String value;


    private PositionEnum(String value) {
        this.value = value;
    }

    public static PositionEnum fromString(String str) {
        try{
            return valueOf(str.toUpperCase());
        }catch (Exception e){
            return PRACOWNIK_LINII;
        }
    }

    @Override
    public String toString() {
        return this.value;
    }
}
