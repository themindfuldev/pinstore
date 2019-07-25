export async function checkout(sku) {
    const stripe = window.Stripe("pk_test_4GlgOrKa5GO5SNZMcc3WGOLf00mWGQr8q2", {
        betas: ["checkout_beta_4"],
    });

    const { error } = await stripe.redirectToCheckout({
        items: [{ sku, quantity: 1 }],
        successUrl: `https://jolly-brattain-ec4665.netlify.com/thanks/`,
        cancelUrl: `https://jolly-brattain-ec4665.netlify.com/`,
        billingAddressCollection: 'required',
    })
    if (error) {
        console.warn("Error:", error)
    }
}