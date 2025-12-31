require("dotenv").config();
const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");
const Lead = require("../models/lead.js");

const STATUS = ['new lead','cold' , 'warm' , 'hot' ,'not answering' , 'negotiating' ,'deal in pipeline' , 'deal'];
const ACTIVITY = ["active"];

const generateLead = () => ({
  seller: faker.person.fullName().toLowerCase(),
  address: faker.location.streetAddress() + ", FL",
  ap: faker.number.int({ min: 80000, max: 450000 }),
  closingTimeline: faker.number.int({ min: 1, max: 6 }),
  reason: faker.helpers.arrayElement([
    "relocating",
    "inheritance",
    "financial issues",
    "downsizing",
    "tax issues",
    "divorce"
  ]),
  mv: faker.number.int({ min: 200000, max: 1200000 }),
  condition: faker.helpers.arrayElement([
    "needs full rehab",
    "minor cosmetic fixes",
    "well maintained",
    "dated interior",
    "major foundation repairs needed"
  ]),
  note: faker.lorem.sentence(),
  datePushed: faker.date.recent({ days: 30 }),
  pusher: "khalednn12",
  client: "omaranwarss",
  phone: faker.string.numeric(10),
  status: faker.helpers.arrayElement(STATUS),
  activity: faker.helpers.arrayElement(ACTIVITY)
});

(async () => {
  try {
    await mongoose.connect(process.env.MongoDB_URI);
    console.log("MongoDB connected");

    // wipe existing leads
   // await Lead.deleteMany({});
    //console.log("Old leads removed");

    const leads = Array.from({ length: 100 }, generateLead);

    await Lead.insertMany(leads);
    console.log("✅ 100 leads inserted");

    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
