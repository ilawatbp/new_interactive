import React from "react";

export default function CartPage() {
  return (
    <div className="min-h-screen bg-gray-100 pb-20 text-sm">
      {/* NAVBAR */}
      <nav className="bg-[#3b4044] shadow-md flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-4 text-white">
        <div className="flex items-center gap-4 mb-2 md:mb-0">
          <button className="border border-green-500 rounded-full px-4 py-2 hover:bg-green-500 transition">Home</button>
          <button className="border border-green-500 rounded-full px-4 py-2 hover:bg-green-500 transition">Discount All</button>
          <div className="flex items-center border border-green-500 rounded-full px-4 py-1 ml-2 relative">
            <p className="mr-6 text-white">Discount</p>
            <label className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-10 h-5 bg-gray-200 rounded-full peer peer-checked:bg-green-500 relative">
                <div className="absolute left-1 top-1 w-3 h-3 bg-green-700 rounded-full peer-checked:translate-x-5 peer-checked:bg-white transition-all"></div>
              </div>
            </label>
          </div>
        </div>

        <div className="flex flex-wrap justify-center md:justify-end gap-2">
          <button className="border border-green-500 rounded-full px-4 py-2 hover:bg-green-500 transition">Service Form</button>
          <button className="border border-green-500 rounded-full px-4 py-2 hover:bg-green-500 transition">Quotation History</button>
          <button className="border border-green-500 rounded-full px-4 py-2 hover:bg-green-500 transition">Save</button>
          <button className="border border-green-500 rounded-full px-4 py-2 hover:bg-green-500 transition">Clear All</button>
        </div>
      </nav>

      {/* MAIN CONTAINER */}
      <main className="max-w-[8.5in] mx-auto bg-white shadow-lg mt-6 p-6 md:p-10">
        {/* HEADER */}
        <header className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <img
              src="item/images/logo.png"
              alt="Logo"
              className="w-40 md:w-56"
            />
          </div>
          <div className="bg-white border p-4 rounded-lg w-full md:w-[300px]">
            <p className="text-green-600 font-semibold text-base">
              Ilaw atbp Trading
            </p>
            <p>123 Main Street, Makati</p>
            <p>Tel No: (02) 8123-4567</p>
            <p>Email: info@ilawatbp.com</p>
            <p>Website: www.ilawatbp.com</p>
          </div>
        </header>

        <hr className="border-green-600 mb-6" />

        {/* QUOTATION DETAILS */}
        <section className="grid md:grid-cols-2 gap-4 mb-6">
          <div>
            <table className="w-full text-sm">
              {["ATTENTION", "DESIGNATION", "COMPANY", "LOCATION", "PROJECT"].map((label) => (
                <tr key={label}>
                  <td className="font-semibold w-1/3 py-1">{label}</td>
                  <td>
                    <input
                      type="text"
                      className="w-full bg-gray-200 border-b border-white focus:outline-none focus:border-green-500 px-2"
                    />
                  </td>
                </tr>
              ))}
            </table>
          </div>
          <div>
            <table className="w-full text-sm">
              <tr>
                <td className="font-semibold w-1/2">DATE</td>
                <td>11/05/2025</td>
              </tr>
              <tr>
                <td className="font-semibold">QUOTATION NO.</td>
                <td>#000123</td>
              </tr>
              <tr>
                <td className="font-semibold">VALID UNTIL</td>
                <td>
                  <input
                    type="date"
                    className="bg-gray-200 border-b border-white focus:outline-none focus:border-green-500"
                  />
                </td>
              </tr>
            </table>
          </div>
        </section>

        {/* ITEM TABLE */}
        <section className="overflow-x-auto mb-10">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-y border-gray-400 bg-gray-50 text-center">
                <th className="py-2">Picture</th>
                <th>Quantity</th>
                <th>Description</th>
                <th>SRP (Php)</th>
                <th>Total Amount</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2].map((i) => (
                <tr key={i} className="border-b">
                  <td className="py-2 text-center">
                    <img
                      src="item/images/itemImage/sample.webp"
                      alt="item"
                      className="mx-auto w-32 md:w-40"
                    />
                  </td>
                  <td className="text-center align-top pt-4">2</td>
                  <td className="align-top pt-4">
                    <p className="font-semibold">LED Bulb 9W</p>
                    <p>Area: Showroom</p>
                  </td>
                  <td className="text-right align-top pt-4">158.00</td>
                  <td className="text-center align-top pt-4">316.00</td>
                </tr>
              ))}
              <tr className="font-semibold">
                <td colSpan="4" className="text-right py-2">
                  Total Amount (Php)
                </td>
                <td>
                  <input
                    type="text"
                    disabled
                    value="316.00"
                    className="w-full text-right bg-gray-200 border-none"
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="4" className="text-right py-2">
                  Delivery Charges
                </td>
                <td>
                  <input
                    type="number"
                    defaultValue="0"
                    className="w-full text-right bg-gray-200 border-none"
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="4" className="text-right py-2">
                  Installation Charges
                </td>
                <td>
                  <input
                    type="number"
                    defaultValue="0"
                    className="w-full text-right bg-gray-200 border-none"
                  />
                </td>
              </tr>
              <tr className="font-bold text-base">
                <td colSpan="4" className="text-right py-2">
                  Grand Total
                </td>
                <td className="text-center">316.00</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* TERMS */}
        <section className="mb-10">
          <h2 className="underline font-semibold mb-2">Terms and Conditions</h2>
          <table className="w-full text-sm">
            <tbody>
              <tr>
                <td className="w-5">1.</td>
                <td className="font-semibold w-1/4">Payment:</td>
                <td>50% down payment required upon order confirmation.</td>
              </tr>
              <tr>
                <td>2.</td>
                <td className="font-semibold">Price Change:</td>
                <td>Prices may change without prior notice.</td>
              </tr>
              <tr>
                <td>3.</td>
                <td className="font-semibold">Bank:</td>
                <td>
                  <div className="grid md:grid-cols-2 gap-4 mt-2">
                    <table className="w-full">
                      <tbody>
                        <tr>
                          <td className="font-semibold">Bank Name</td>
                          <td>: BDO</td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Account</td>
                          <td>: Ilaw atbp Trading</td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Account No</td>
                          <td>: 1234-5678-9012</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* LETTER FOOTER */}
        <section className="text-center mb-10">
          <p>Let's light up your projects together!</p>
          <p>Sincerely,</p>
        </section>

        <section className="w-full md:w-1/3">
          <table className="w-full">
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="Name of User"
                    defaultValue="Juan Dela Cruz"
                    className="w-full border-b border-gray-400 text-center"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="Designation"
                    defaultValue="Sales Engineer"
                    className="w-full border-b border-gray-400 text-center"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
