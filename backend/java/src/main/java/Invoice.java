public class Invoice {
    private final Address billingAddress;
    private final Address shippingAddress;

    public Invoice(Order order) {
        this.billingAddress = order.address();
        this.shippingAddress = order.address();
    }
}
