import React from "react";

function ShippingPolicy() {
  return (
    <div className="container mx-auto pb-20 space-y-8 mt-20">
      <div className="font-bold text-xl text-gray-800">Shipping Policy</div>
      {/* Header */}
      <div className="text-gray-700 text-lg leading-relaxed font-medium">
        <span className="text-[#c11425]">Salt'n Grains</span> accept all small
        and bulk quantity order. The payment term, we prefer 50% Advance & 50%
        on DP (At sight) or 100 % LC ( At Sight).
      </div>

      {/* Main Content Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Shipping & Delivery */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Shipping & Delivery
          </h2>
          <div className="space-y-4 text-gray-700 font-medium">
            <p>
              All bulk order shipped by Air- Sea and Small Order shipped by DHL,
              TNT, FedEx Fast Delivery Courier Service, Small order shipped
              within 15-days, and bulk order delivery depend on the quantity of
              the order, which also used to ship within 30 to 50 working days.
            </p>
            <p>
              For delivery of any of placed order, please send the inquiry to
              our customer support department at email:
              <a href="mailto:saltngrains@gmail.com" className="text-gray-700">
                {" "}
                saltngrains@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Ordering */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Ordering</h2>
          <div className="space-y-4 text-gray-700 font-medium">
            <p>
              All small and bulk quantities order are accepted with buyers order
              details and against our Commercial Performs Invoice.
            </p>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">Payment Term</h3>
              <div className="space-y-1">
                <p>1) 50% Advance & 50% on DP (At sight) or</p>
                <p>2) 100 % LC ( At Sight)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy & Security */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-gray-800">Privacy & Security</h2>

        <p className="text-gray-700 leading-relaxed font-medium">
          It is our company policy to maintain privacy and secrecy of our
          client's order, and data. as your privacy is important to us.
        </p>

        <p className="text-gray-700 leading-relaxed font-medium">
          To better protect your privacy the following notice explains the
          information we collect, how it is used, how it is safeguarded, and how
          to contact us if you have any concerns. As part of the order process,
          the following information is collected.
        </p>

        <div className="space-y-2 text-gray-700 font-medium">
          <p>- Customer Name</p>
          <p>- Shipping / Billing Address</p>
          <p>- Email</p>
          <p>- Address</p>
          <p>- Phone number</p>
        </div>

        <p className="text-gray-700 leading-relaxed font-medium">
          These all information's we keep safe and secure, being the shipper
          it's our responsibility to give the better service to our prospective
          customers
        </p>
      </div>
    </div>
  );
}

export default ShippingPolicy;
