// mongodb practice

{ $and : [ {number_of_employees : { $gte: 100 } }, { number_of_employees: { $lt: 1000} } ] }

{name: 1, number_of_employees: 1, _id: 0}

{number_of_employees: -1}

{ category_code: { $type: [10] } }

{"ipo.valuation_amount": 1, _id: 0}

{"ipo.valuation_amount": -1}