function salary(input) {

    let openTabs = Number(input[0]);
    let salary = Number(input[1]);


    for (let i = 2; i < input.length; i++) {

        let site = String(input[i])

        if (site === "Facebook") {
            salary -= 150;

        } else if (site === "Instagram") {
            salary -= 100;
        } else if (site === "Reddit") {
            salary -= 50;
        }

    }

    if (salary <= 0) {
        console.log("You have lost your salary.");
    }
    else {

        console.log(salary);
    }

}

salary(["10",
    "750",
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Dev.bg",
    "Dev.bg"]);

// salary(["3",
// "500",
// "Github.com",
// "Stackoverflow.com",
// "softuni.bg"]);