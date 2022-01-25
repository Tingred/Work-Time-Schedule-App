package com.WorkTimeSchedule.project.module.employee.entity;

import java.util.Arrays;
import java.util.Optional;

public enum PositionEnum {
    PRACOWNIK_LINII("Pracownik linii"),
    OPERATOR_WOZKA_WIDLOWEGO("Operator wozka widlowego"),
    KIEROWNIK_LINII("Kierownik linii"),
    KIEROWNIK_HALI("Kierownik hali"),
    MAGAZYNIER("Magazynier"),
    MENADZER("Menadzer"),
    DYREKTOR("Dyrektor");

    public final String value;


    private PositionEnum(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    @Override
    public String toString() {
        return this.value;
    }
}