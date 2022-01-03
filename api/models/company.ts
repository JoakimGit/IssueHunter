import mongoose from "mongoose";

export interface CompanyDoc extends mongoose.Document {
  name: string;
  members: Array<any>;
}

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
});

const Company = mongoose.model<CompanyDoc>("Company", companySchema);

export default Company;
