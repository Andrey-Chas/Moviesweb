import { connectToDatabase } from "@/utils/database/database";
import User from "@/utils/database/models/user";
import { NextResponse } from "next/server";
import { trackRegistrationByGender } from "@/app/metrics/prometheus/prometheus";
import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
        const { name, email, age, gender, country, password, role } = await req.json();
        const hashedPassword = await bcrypt.hash(password, 10);

        await connectToDatabase();

        await User.create({ name, email, age, gender, country, password: hashedPassword, role });

        trackRegistrationByGender(gender);

        return NextResponse.json({ message: "User registered" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: `An error occured while registering the user ${error}` }, { status: 500 });
    }
}