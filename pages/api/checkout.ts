import { NextApiHandler } from 'next';
import Stripe from 'stripe';

const checkoutHandler: NextApiHandler = async (req, res) => {
  const stripeKey = process.env.STRIPE_SECRET_KEY;

  if (!stripeKey) {
    res.status(500).json({ message: 'Stripe key not found' });

    return;
  }

  const stripe = new Stripe(stripeKey, { apiVersion: '2022-11-15' });

  const stripeCheckoutSession = stripe.checkout.sessions.create({
    mode: 'payment',
    locale: 'pl',
    payment_method_types: ['p24', 'card'],
    success_url:
      'http://localhost:3001/checkout/success?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: 'http://localhost:3001/checkout/cancel',
    line_items: req.body,
  });

  res.status(201).json({ id: await stripeCheckoutSession });
};

export default checkoutHandler;
