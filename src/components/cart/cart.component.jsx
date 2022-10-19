import { Wrapper } from "../../layout-components/wrapper/wrapper.component"
import { CartItem } from "../cart-item/cart-item.component";
import { ShopTopPane } from "../shop-top-pane/shop-top-pane.component"
import { CartStyled } from "./cart.styles";

const cartNavData = {
	rootPageText: "shop",
	subPageText: "shopping cart"
}
const CART_DATA = {
	subTotal: 9000,
	carts: [
		{
			imageUrl: `IMAGES/product/product-7.jpg`,
			name: `Leader Bag L`,
			price: 250.5,
			quantity: 3,
			isModified: false,
		},
		{
			imageUrl: `IMAGES/product/product-8.jpg`,
			name: `Leader Bag L`,
			price: 350,
			quantity: 2,
			isModified: true,
		},
		{
			imageUrl: `IMAGES/product/product-9.jpg`,
			name: `Leader Bag L`,
			price: 910,
			quantity: 2,
			isModified: false
		},
	],
};
export const Cart = () => {
	return (
		<Wrapper>
			<ShopTopPane navText={cartNavData} />
			<CartStyled>
				<div className="cart-total-price-wrapper">
					<p>cart total: <span>${CART_DATA.subTotal.toFixed(2)}</span></p>
					<button>Proceed to checkout</button>
				</div>
				<div className="cart-body">
					<div className="cart-heading-div">
						<p className="product-title">PRODUCT</p>
						<p className="quantity-title">QUANTITY</p>
						<p className="total-title">TOTAL</p>
					</div>
					<div className="cart-items-div">
						{CART_DATA.carts.map(item=> <CartItem item={item}/>)}
					</div>
					<div className="cart-cta-div">
						<button className="cart-cta">CONTINUE SHOPPING</button>
						<button className="cart-cta">UPDATE CART</button>
					</div>
				</div>
			</CartStyled>
		</Wrapper>
	)
};