import React from "react";

const ShippingDelivery = () => {
  return (
    <main className="min-h-screen bg-white text-gray-700">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#050B18]">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-[#050B18] to-black/30" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-24 lg:px-12">
          <div className="max-w-4xl">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Shipping Information
            </span>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              Shipping & Delivery
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
              
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
          <div className="space-y-12">

            {/* Processing */}
            <section>
              <h2 className="mb-5 text-2xl font-bold text-[#050B18] sm:text-3xl">
                Processing
              </h2>

              <div className="space-y-4 text-base leading-8 text-gray-600">
                <p>
                  Products that are readily available will be shipped within{" "}
                  <strong className="font-semibold text-gray-900">
                    24 working hours
                  </strong>{" "}
                  following receipt of payment.
                </p>

                <p>
                  For products not currently in stock, please allow a maximum
                  of{" "}
                  <strong className="font-semibold text-gray-900">
                    21 business days
                  </strong>{" "}
                  for delivery.
                </p>
              </div>
            </section>

            {/* Delivery Time */}
            <section>
              <h2 className="mb-5 text-2xl font-bold text-[#050B18] sm:text-3xl">
                Delivery Time
              </h2>

              <p className="text-base leading-8 text-gray-600">
                Shipping time within India can vary depending on your
                location, typically ranging from{" "}
                <strong className="font-semibold text-gray-900">
                  7 to 10 business days
                </strong>
                .
              </p>
            </section>

            {/* Carriers */}
            <section>
              <h2 className="mb-5 text-2xl font-bold text-[#050B18] sm:text-3xl">
                Carriers
              </h2>

              <p className="mb-5 text-base leading-8 text-gray-600">
                We employ the following carriers for order delivery:
              </p>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "BlueDart",
                  "DTDC",
                  "Xpressbees",
                  "Hotline",
                  "Delhivery",
                  "ECommExpress",
                ].map((carrier) => (
                  <div
                    key={carrier}
                    className="rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-center font-semibold text-[#050B18] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    {carrier}
                  </div>
                ))}
              </div>
            </section>

            {/* Order Tracking */}
            <section>
              <h2 className="mb-5 text-2xl font-bold text-[#050B18] sm:text-3xl">
                Order Tracking
              </h2>

              <div className="space-y-4 text-base leading-8 text-gray-600">
                <p>
                  If the shipping carrier provides a tracking number, we will
                  update your order with this information.
                </p>

                <p>
                  Please be aware that some orders may not have tracking
                  numbers, in which case we will inform you before shipping.
                </p>
              </div>
            </section>

            {/* Territory */}
            <section>
              <h2 className="mb-5 text-2xl font-bold text-[#050B18] sm:text-3xl">
                Territory
              </h2>

              <p className="text-base leading-8 text-gray-600">
                We exclusively ship within{" "}
                <strong className="font-semibold text-gray-900">
                  India
                </strong>
                .
              </p>
            </section>

            {/* Back Orders */}
            <section>
              <h2 className="mb-5 text-2xl font-bold text-[#050B18] sm:text-3xl">
                Back Orders
              </h2>

              <div className="space-y-4 text-base leading-8 text-gray-600">
                <p>
                  If an item goes on backorder, we will ship the part of your
                  order that is currently in stock.
                </p>

                <p>
                  Once the remaining items become available, we will ship the
                  rest of your order.
                </p>

                <p>
                  There will be{" "}
                  <strong className="font-semibold text-gray-900">
                    no additional charges
                  </strong>{" "}
                  for shipping and handling for the second shipment.
                </p>
              </div>
            </section>

          </div>

          {/* Company Information */}
          <div className="mt-16 rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-[#050B18]">
              Eminent Audio Visual Pvt. Ltd.
            </h3>

            <p className="mt-2 text-base leading-7 text-gray-600">
              For shipping and delivery related queries, please contact us.
            </p>

            <a
              href="mailto:info@eminentav.in"
              className="mt-4 inline-block font-semibold text-blue-600 transition-colors duration-300 hover:text-blue-800"
            >
              info@eminentav.in
            </a>

            <p className="mt-2 text-sm text-gray-500">
              Website:{" "}
              <a
                href="https://www.eminentav.in"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 transition-colors hover:text-blue-800"
              >
                www.eminentav.in
              </a>
            </p>
          </div>

          {/* Bottom Note */}
          <div className="mt-10 border-t border-gray-200 pt-8">
            <p className="text-sm leading-7 text-gray-500">
              This Shipping & Delivery Policy applies to orders placed through
              Eminent Audio Visual Pvt. Ltd. and is intended for deliveries
              within India.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
};

export default ShippingDelivery;