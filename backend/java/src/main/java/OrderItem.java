public class OrderItem {
    private final Product product;
    private final int quantity;
    private String label;

    public OrderItem(Product product, int quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    public int total() {
        return product.price() * quantity;
    }

    public Product product() {
        return this.product;
    }

    public String label() {
        return this.label;
    }

    public void addLabel(String label) {
        this.label = label;
    }
}
