function auth_msg(workRole) {
    let authorizationBasedCode;

    switch (workRole) {
        case "Employee":
            authorizationBasedCode = "You are authorized to have access to 'Dietary Services'.";
            break;
        case "Enrolled Member":
            authorizationBasedCode = "You are authorized to have access to 'Dietary Services' and one-on-one interaction with a dietician.";
            break;
        case "Subscriber":
            authorizationBasedCode = "You are authorized to have partial access to facilitate 'Dietary Services'.";
            break;
        case "Non-Subscriber":
            authorizationBasedCode = "Please enroll or subscribe first to avail this facility.";
            break;
        default:
            authorizationBasedCode = "Unknown role. Please try again with one of these roles: Employee, Enrolled Member, Subscriber, Non-Subscriber";
            break;
    }

    return authorizationBasedCode;
}

console.log('Dietary Services - Practice task');
console.log("Your work role is: " + " Employee\n" + "Available type of service: " + auth_msg("Employee"));
console.log("Your work role is: " + " Enrolled Member\n" + "Available type of service: " + auth_msg("Enrolled Member"));
console.log("Your work role is: " + " Subscriber\n" + "Available type of service: " + auth_msg("Subscriber"));
console.log("Your work role is: " + " Non-Subscriber\n" + "Available type of service: " + auth_msg("Non-Subscriber"));
console.log("Your work role is: " + " CEO\n" + "Available type of service: " + auth_msg("CEO"));
