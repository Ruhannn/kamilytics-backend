import { Schema, model, Document } from "mongoose";

interface ISavaData extends Document {
    time: Date;
    page: string;
    browser: string;
    os: string;
    device: string;
    country: string;
    timezone: string;
}

const savaDataSchema = new Schema<ISavaData>({
    time: { type: Date, required: true },
    page: { type: String, required: true },
    browser: { type: String, required: true },
    os: { type: String, required: true },
    device: { type: String, required: true },
    country: { type: String, required: true },
    timezone: { type: String, required: true },
});

const savaData = model<ISavaData>("savaData", savaDataSchema);

export default savaData;
