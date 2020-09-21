public class Product {
    private final String name;
    private final ProductType type;
    private int price;

    public Product(String name, ProductType type, int price) {
        this.name = name;
        this.type = type;
        this.price = price;
    }

    public int price() {
        return this.price;
    }

    public ProductType type() {
        return this.type;
    }
}
