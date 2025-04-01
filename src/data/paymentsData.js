// Import the icons from react-icons/fa
import { FaBuilding, FaCreditCard, FaMoneyBillWave } from "react-icons/fa";

// Payment methods array with icons
export const paymentMethods = [
  { id: "bank", name: "Bank Transfer", icon: FaBuilding },
  { id: "paystack", name: "Pay with Paystack", icon: FaCreditCard },
  { id: "flutterwave", name: "Pay with Flutterwave", icon: FaMoneyBillWave },
];

// Payment history array
export const paymentHistory = [
  {
    id: 1,
    method: "Bank Transfer",
    amount: "₦50,000",
    date: "2024-03-25",
    status: "Completed",
  },
  {
    id: 2,
    method: "Paystack",
    amount: "₦20,000",
    date: "2024-03-22",
    status: "Pending",
  },
];
