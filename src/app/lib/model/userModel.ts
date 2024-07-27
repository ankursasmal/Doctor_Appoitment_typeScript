import mongoose from "mongoose";
// import validator from 'validator';

// Define the type for schema options
type SchemaType = {
    name: string;
    email: string;
    password: string;
    cpassword: string;
    date: Date; // Changed from string to Date type
    role: string;
};

// Define the schema options object
const schema: SchemaType = {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // validate: {
        //     validator: (value: string) => validator.isEmail(value),
        //     message: 'Email is invalid'
        // }
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    role: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
};

// Create mongoose schema using the correct syntax
const userSchema = new mongoose.Schema(schema);

// Export mongoose model
export const userModel = mongoose.models.userModel || mongoose.model('userModel', userSchema);
