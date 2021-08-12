module.exports = {
  invoices: [
      { id: 1011, beneficiary_id: 10, amount: 6903.60, date: new Date('2021-07-03'),    invoice_num: '1324AB30',
          pnr: null, pax: 'Fred Martinez' },
      { id: 1012, beneficiary_id: 10, amount: 1200.0, date: new Date('2021-09-10'), invoice_num: 'AADB20349',
          pnr: null, pax: 'Anna Johansen, Bill Johansen' },
      { id: 1013, beneficiary_id: 12, amount: 10300.20, date: new Date('2020-01-01'), invoice_num: '10123444',
          pnr: 'AA#423', pax: null }
  ],
  beneficiaries: [
      { id: 10, name: "Milrun UP & Away" },
      { id: 11, name: "Roberto" },
      { id: 12, name: "Rocket Sky" }
  ]
}

