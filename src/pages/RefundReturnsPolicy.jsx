import React from "react";

const RefundReturnsPolicy = () => {
  return (
    <main className="min-h-screen bg-white text-gray-700">

      {/* =========================
          HERO SECTION
      ========================== */}
      <section className="relative overflow-hidden bg-[#050B18]">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-[#050B18] to-black/30" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-24 lg:px-12">
          <div className="max-w-4xl">

            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Customer Policy
            </span>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              Return & Replacement Policy
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
              
            </p>

          </div>
        </div>
      </section>


      {/* =========================
          POLICY CONTENT
      ========================== */}
      <section className="py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">

          <div className="space-y-12">

            {/* Return Policy */}
            <section>
              <h2 className="mb-5 text-2xl font-bold text-[#050B18] sm:text-3xl">
                Return & Replacement Policy
              </h2>

              <div className="space-y-5 text-base leading-8 text-gray-600">

                <p>
                  Eminent Audio Visual Pvt. Ltd. does not accept returns or
                  replacements once a product has been delivered.
                </p>

                <p>
                  However, if the product is found to be physically damaged,
                  defective, or dead on arrival (DOA) at the time of delivery,
                  you must notify us within{" "}
                  <strong className="font-semibold text-gray-900">
                    24 hours
                  </strong>{" "}
                  of the delivery date by emailing{" "}
                  <a
                    href="mailto:info@eminentav.in"
                    className="font-semibold text-blue-600 transition-colors hover:text-blue-800"
                  >
                    info@eminentav.in
                  </a>{" "}
                  along with your order details, clear photographs/videos of
                  the product, and the issue.
                </p>

                <p>
                  Such cases will be reviewed, and if approved after
                  verification, they will be considered for a replacement.
                </p>

                <p>
                  Please note that any claims reported after{" "}
                  <strong className="font-semibold text-gray-900">
                    24 hours
                  </strong>{" "}
                  of delivery will not be eligible for replacement and will
                  instead be handled under the applicable manufacturer’s
                  warranty policy.
                </p>

                <p>
                  For products that develop a manufacturing defect or
                  technical issue after the initial 24-hour period, the
                  product will be serviced or repaired through the authorized
                  service center or our service team, as applicable, in
                  accordance with the manufacturer’s warranty terms and
                  conditions.
                </p>

              </div>
            </section>


            {/* Important Section */}
            <section>
              <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-6 sm:p-8">

                <h2 className="mb-6 text-2xl font-bold text-[#050B18] sm:text-3xl">
                  Important
                </h2>

                <ul className="space-y-5 text-base leading-8 text-gray-700">

                  <li className="flex items-start gap-4">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-600" />

                    <span>
                      Returns are not accepted for any reason.
                    </span>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-600" />

                    <span>
                      Replacements are only considered for verified cases of
                      physical damage, manufacturing defects, or DOA reported
                      within 24 hours of delivery.
                    </span>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-600" />

                    <span>
                      Claims made after 24 hours of delivery will be treated
                      as warranty/service cases only.
                    </span>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-600" />

                    <span>
                      Physical damage caused after delivery, misuse, improper
                      installation, unauthorized modifications, or accidental
                      damage is not covered under warranty.
                    </span>
                  </li>

                </ul>

              </div>
            </section>


            {/* Contact Section */}
            <section>
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8">

                <h3 className="text-xl font-bold text-[#050B18] sm:text-2xl">
                  Need Help?
                </h3>

                <p className="mt-3 text-base leading-7 text-gray-600">
                  For any return, replacement, damage, DOA, or warranty-related
                  query, please contact our team with your order details and
                  supporting information.
                </p>

                <a
                  href="mailto:info@eminentav.in"
                  className="mt-5 inline-flex items-center rounded-lg bg-[#050B18] px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
                >
                  info@eminentav.in
                </a>

              </div>
            </section>

          </div>


          {/* =========================
              BOTTOM NOTE
          ========================== */}
          <div className="mt-12 border-t border-gray-200 pt-8">

            <p className="text-sm leading-7 text-gray-500">
              This Return & Replacement Policy applies to products purchased
              from Eminent Audio Visual Pvt. Ltd.
            </p>

          </div>

        </div>
      </section>

    </main>
  );
};

export default RefundReturnsPolicy;