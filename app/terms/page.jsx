import React from "react";

function TermsAndCondition() {
  return (
    <div className="container mx-auto pb-20 space-y-8 mt-20">
      <div className="font-bold text-xl text-gray-800">
        Terms & Conditions
      </div>
      <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
        <div className="space-y-4">
          <div className="text-gray-700 text-lg font-medium">
            <p>
              <span className="font-semibold">Minimum Order Quantity (MOQ):</span>{" "}
              1 x 20 FCL
            </p>
          </div>

          <div className="text-gray-700 text-lg font-medium">
            <p>
              <span className="font-semibold">Payment Terms:</span> | 50% Advance
              & 50 % DP | or | 100% L/C at Sight |
            </p>
          </div>

          <div className="text-gray-700 text-lg font-medium">
            <p>
              <span className="font-semibold">Shipping Terms:</span> FOB, CNF, CIF
            </p>
          </div>

          <div className="text-gray-700 text-lg font-medium">
            <p>
              <span className="font-semibold">Port of Loading:</span> Karachi,
              Pakistan
            </p>
          </div>

          <div className="text-gray-700 text-lg font-medium">
            <p>
              <span className="font-semibold">Offer Free Sample:</span> Yes
            </p>
          </div>

          <div className="text-gray-700 text-lg font-medium">
            <p>
              <span className="font-semibold">Estimated Shipping Date:</span> 20
              Days After Confirmation
            </p>
          </div>

          <div className="text-gray-700 text-lg">
            <p className="font-semibold mb-2">Shipping Documents</p>
            <ul className="pl-8 space-y-2">
              <li className="font-medium">A) Commercial Invoice</li>
              <li className="font-medium">B) Packing List</li>
              <li className="font-medium">C) B/L</li>
              <li className="font-medium">D) Certificate of Origin</li>
              <li className="font-medium">E) Insurance Documents ( Only for CIF Term)</li>
              <li className="font-medium">E) Phytosanitary Certificate (If Applicable)</li>
              <li className="font-medium">F) Fumigation Certificate (If Applicable)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsAndCondition;
