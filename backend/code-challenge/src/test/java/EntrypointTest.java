import org.junit.jupiter.api.Test;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

class EntrypointTest {

    @Test
    void returnsLoanPlansGivenAnUser() {
        Customer customer = new Customer("erikaya", "123.456.789-10", 29, "BH", 3000);
        Entrypoint entrypoint = new Entrypoint(customer);

        Customer expectation = entrypoint.output();

        assertThat(expectation.name()).isEqualTo("Erikaya");

        List<Loan> loans = expectation.loans();
        assertThat(loans).hasSize(1);

        Loan loan = loans.get(0);
        assertThat(loan.type()).isEqualTo("personal");
        assertThat(loan.interestRate()).isEqualTo(1);
    }
}
