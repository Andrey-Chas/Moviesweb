import { Counter } from "prom-client";

const registrationByMale = new Counter({
    name: "collectingByMale",
    help: "Number of users registered by specific gender",
    labelNames: ["gender"],
})

const registrationByFemale = new Counter({
    name: "collectingByFemale",
    help: "Number of users registered by specific gender",
    labelNames: ["gender"],
})

const registrationByOther = new Counter({
    name: "collectingByOther",
    help: "Number of users registered by specific gender",
    labelNames: ["gender"],
})

export function trackRegistrationByGender(gender) {
    {gender === "Male" ? registrationByMale.inc({ gender }) : gender === "Female" ? registrationByFemale.inc({ gender }) : registrationByOther.inc({ gender })}
}