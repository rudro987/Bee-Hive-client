import AboutUs from "../pages/AboutUs/AboutUs";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import ContactUs from "../pages/ContactUs/ContactUs";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/ProductManagement/AddProduct";
import ProductManagement from "../pages/ProductManagement/ProductManagement";
import Products from "../pages/Products/Products";

export const allPaths = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name: "Products",
    path: "products",
    element: <Products />,
  },
  {
    name: "About us",
    path: "about-us",
    element: <AboutUs />,
  },
  {
    name: "Contact Us",
    path: "contact-us",
    element: <ContactUs />,
  },
  {
    name: "Product Management",
    path: "product-management",
    element: <ProductManagement />,
  },
  {
    name: "Cart",
    path: "cart",
    element: <Cart />,
  },
  {
    name: "Checkout",
    path: "checkout",
    element: <Checkout />,
  },
  {
    name: "Add Product",
    path: "add-product",
    element: <AddProduct />,
  },
];
