
import java.util.*

class LoanMatcher(private val customer: Customer) {

    fun loans(): List<Loan> {
        val loans: MutableList<Loan> = ArrayList()
        if (this.customer.income() <= 3000) {
            loans.add(Loan("EMPRESTIMO_PESSOAL"))
        }
        return loans
    }

}
