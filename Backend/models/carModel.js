import mongoose from "mongoose";

// Define the Car Schema
const CarSchema = new mongoose.Schema({
  carManufacturer: { type: String, required: true },
  fuel: { type: String, required: true },
  transmission: { type: String, required: true },
  doorsNumber: { type: Number, required: true },
  vinNumber: { type: String, required: true, unique: true },
  carModel: { type: String, required: true },
  displacement: { type: String, required: true },
  seatsNumber: { type: Number, required: true },
  productionYear: { type: Number, required: true },
  power: { type: Number, required: true },
  bodyColor: { type: String, required: true },
  firstRegistration: { type: Date, required: true },
  mileage: { type: Number, required: true },
  bodyType: { type: String, required: true },
  interiorColor: { type: String, required: true },
  features: {
    exteriorAndPerformance: {
      type: mongoose.Schema.Types.Mixed,
      default: {}
    },
    interiorAndComfort: {
      type: mongoose.Schema.Types.Mixed,
      default: {}
    }
  },
  pictures: {
    main: { type: String, required: true }, // URL or path to the main picture
    others: [String] // URLs or paths to other pictures
  },
  price: { type: Number, required: true }
}, { timestamps: true });

export const Car = mongoose.model('Car', CarSchema);
