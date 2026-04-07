import Stripe from "stripe";
import { serverConfig } from "../config";

// Initialize Stripe with test key if no real key is provided
const stripeKey = serverConfig.stripeSecretKey || "";

export const stripe = new Stripe(stripeKey, {
  apiVersion: "2025-08-27.basil",
  typescript: true,
});
