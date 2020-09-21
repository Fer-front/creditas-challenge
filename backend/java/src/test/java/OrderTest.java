import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class OrderTest {

    @Test
    void generateShippingLabelToOrderItemWhenPayingAPhysicProductType() throws Exception {
        Order order = new Order(new Customer(), new Address());

        Product floweredTShirt = new Product("Flowered t-shirt", ProductType.PHYSICAL, 35);

        order.addProduct(floweredTShirt, 1);

        order.pay();

        OrderItem orderItem = order.items().get(0);

        Assertions.assertEquals("shipping", orderItem.label());
    }

}
