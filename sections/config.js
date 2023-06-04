const optionsDevelopmentSystem = {
    endpoint: "http://..."
};

const optionsTestSystem = {
    endpoint: "http://..."
};

const optionsProductiveSystem = {
    endpoint: "http://..."
};


let options;
function systemName(ns) {

    if (ns == "developmentSystem") {
        options = optionsDevelopmentSystem;
    } else if (ns == "testSystem") {
        options = optionsTestSystem;
    } else {
        options = optionsProductiveSystem;
    }
    return options;
}

