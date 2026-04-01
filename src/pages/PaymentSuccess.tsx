import { useEffect } from "react";

const PaymentSuccess = () => {
  useEffect(() => {
    document.title = "Payment Successful | Hovrlay";
    window.location.href = "hovrlay://payment/success";
  }, []);

  return (
    <div className="flex grow items-center justify-center px-5 py-20 mt-16 bg-background">
      <div className="text-center max-w-md md:max-w-lg">
        <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-3">
          ✅ Payment Successful!
        </h1>
        <p className="text-base md:text-lg text-muted-foreground mb-8">
          Opening Hovrlay...
        </p>
        <a
          href="hovrlay://payment/success"
          className="text-primary hover:text-primary/80 transition-colors duration-200"
        >
          If Hovrlay doesn't open automatically, click here
        </a>
      </div>
    </div>
  );
};

export default PaymentSuccess;
