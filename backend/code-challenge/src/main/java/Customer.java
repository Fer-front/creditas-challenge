import java.util.List;

import static java.util.Collections.emptyList;

public class Customer {
    private final String name;
    private final String cpf;
    private final int age;
    private final String location;
    private final int income;

    public Customer(String name, String cpf, int age, String location, int income) {
        this.name = name;
        this.cpf = cpf;
        this.age = age;
        this.location = location;
        this.income = income;
    }

    public String name() {
        return this.name;
    }

    public List<Loan> loans() {
        return emptyList();
    }
}
