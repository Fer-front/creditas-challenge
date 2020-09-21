import java.time.Instant;
import java.time.temporal.Temporal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class Order {

    private final Customer customer;
    private final Address address;
    private final List<OrderItem> items;
    private Temporal closedAt;
    private boolean paid;

    public Order(Customer customer, Address address) {
        this.customer = customer;
        this.address = address;
        this.items = new ArrayList<>();
        this.closedAt = null;
        this.paid = false;
    }

    public void addProduct(Product product, int quantity) throws Exception {
        Optional<OrderItem> productAlreadyAdded = items.stream()
                .filter(orderItem -> orderItem.product().equals(product))
                .findFirst();

        if (productAlreadyAdded.isPresent()) {
            throw new Exception("The product have already been added. Change the amount if you want more.");
        }
        items.add(new OrderItem(product, quantity));
    }

    public void pay() throws Exception {
        if (paid) {
            throw new Exception("The order has already been paid");
        }

        if (items.size() == 0) { // there are no items to be paid
            throw new Exception("Empty order can not be paid");
        }

        for (OrderItem orderItem: this.items) {
            if (orderItem.product().type().name().equals("PHYSICAL")) {
                orderItem.addLabel("shipping");
            }
        }

        closedAt = Instant.now();

        paid = true;
    }

    public int totalAmount() {
        return items.stream().map(OrderItem::total).reduce(0, Integer::sum);
    }

    public Address address() {
        return this.address;
    }

    public List<OrderItem> items() {
        return items;
    }
}
