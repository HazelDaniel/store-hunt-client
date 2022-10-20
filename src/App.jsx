import { ThemeProvider } from "styled-components";
import { GlobalCSS } from "./styles/styles.js";
import { initialThemeState, themeReducer } from "./reducers/theme.reducer.js";
import { useMemo, useReducer } from "react";
import { UpperPane } from "./layout-components/upper-pane/upper-pane.component";
import { ModalOverlay } from "./layout-components/modal-overlay/modal-overlay.component.jsx";
import { MobileNavProvider } from "./contexts/mobile-nav-context.js";
import {
  initialMobileNavState,
  mobileNavReducer,
} from "./reducers/mobile-nav-reducer.js";
import { DesktopSideTab } from "./layout-components/desktop-side-tab/desktop-side-tab.component.jsx";
import { Footer } from "./layout-components/footer/footer.component.jsx";
import { Home } from "./components/home/home.component.jsx";
import { Shop } from "./components/shop/shop.component.jsx";
import { ProductDetails } from "./components/product-details/product-details.component.jsx";
import { Cart } from "./components/cart/cart.component.jsx";
import { Checkout } from "./components/checkout/checkout.component.jsx";
import { Auth } from "./components/auth/auth.component.jsx";
import { Blog } from "./components/blog/blog.component.jsx";
import { Contact } from "./components/contact/contact.component.jsx";

function App() {
  const [themeState, themeDispatch] = useReducer(
    themeReducer,
    initialThemeState,
    (state) => state
  );
  const [mobileNavState, mobileNavDispatch] = useReducer(
    mobileNavReducer,
    initialMobileNavState,
    (state) => state
  );

  const mobileNavValue = useMemo(
    () => ({
      mobileNavState,
      mobileNavDispatch,
    }),
    [mobileNavState]
  );
  const themeValue = useMemo(
    () => ({
      themeState,
      themeDispatch,
    }),
    [themeState]
  );

  // noinspection JSValidateTypes
  return (
		<ThemeProvider theme={themeValue.themeState.theme}>
			<GlobalCSS />
			<MobileNavProvider value={mobileNavValue}>
				<>
					<UpperPane />
          <ModalOverlay />
          <DesktopSideTab />
          {/* <Auth /> */}
          {/* <Blog /> */}
          {/* <Cart /> */}
          {/* <Checkout /> */}
          {/* <Contact /> */}
          {/* <Home /> */}
          <ProductDetails />
          {/* <Shop /> */}
          <Footer />
				</>
			</MobileNavProvider>
		</ThemeProvider>
  );
}

export default App;
