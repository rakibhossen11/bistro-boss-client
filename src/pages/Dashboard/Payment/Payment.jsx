import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckOutForm from "../CheckOutForm/CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hooks/useCart";

// TODO: provide publishedable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_PK);
const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce( ( sum , item ) => sum + item.price , 0 );
    const price = parseFloat(total.toFixed(2));
    return (
        <div>
            <SectionTitle subHeading='please process' heading='payment'></SectionTitle>
            <h2>teka o teka tomi uira uira aso...</h2>
            <Elements stripe={stripePromise}>
                <CheckOutForm cart={cart} price={price}></CheckOutForm>
            </Elements>
            
        </div>
    );
};

export default Payment;