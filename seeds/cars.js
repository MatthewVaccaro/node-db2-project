exports.seed = async function(knex) {
  await knex("cars").insert([
    {
      vin: 847211049,
      make: "Honda",
      model: "Civic",
      milleage: 12323,
      transmissionType: "Manuel",
      carStatus: "Great"
    },
    {
      vin: 483068126,
      make: "Toyota",
      model: "Camery",
      milleage: 34545,
      transmissionType: "automatic",
      carStatus: "Good"
    },
    {
      vin: 743009273,
      make: "Ford",
      model: "Escape",
      milleage: 3000,
      transmissionType: "Manuel",
      carStatus: "Good"
    },
    {
      vin: 100029384,
      make: "Nissan",
      model: "Altima",
      milleage: 2,
      transmissionType: "automatic",
      carStatus: "Amazing"
    },
    {
      vin: 102938475,
      make: "Dodge",
      model: "Ram",
      milleage: 999999,
      transmissionType: "Manuel",
      carStatus: "Very Bad"
    }
  ]);
};
