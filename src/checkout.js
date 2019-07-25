export async function checkout(sku) {
    const stripe = window.Stripe("pk_test_4GlgOrKa5GO5SNZMcc3WGOLf00mWGQr8q2", {
        betas: ["checkout_beta_4"],
    });

    const { error } = await stripe.redirectToCheckout({
        items: [{ sku, quantity: 1 }],
        successUrl: `http://localhost:8000/thanks/`,
        cancelUrl: `http://localhost:8000/`,
        billingAddressCollection: 'required',
    })
    if (error) {
        console.warn("Error:", error)
    }
}
