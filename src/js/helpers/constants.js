// import {faker} from "@faker-js/faker";

const
    // columns definitions (title, data type, object key)
    employeesCols = [
        {header: `First Name`, dataType: `string`, fieldName: `firstName`},
        {header: `Last Name`, dataType: `string`, fieldName: `lastName`},
        {header: `Start Date`, dataType: `date`, fieldName: `startDate`},
        {header: `Department`, dataType: `select`, fieldName: `department`},
        {header: `Date of Birth`, dataType: `date`, fieldName: `birthDate`},
        {header: `Street`, dataType: `string`, fieldName: `street`},
        {header: `City`, dataType: `string`, fieldName: `city`},
        {header: `State`, dataType: `select`, fieldName: `state`},
        {header: `Zip Code`, dataType: `string`, fieldName: `zipCode`}
    ],
    departments = [
        {
            label: `Sales`,
            value: `sales`
        },
        {
            label: `Marketing`,
            value: `marketing`
        },
        {
            label: `Engineering`,
            value: `engineering`
        },
        {
            label: `Human Resources`,
            value: `humanresources`
        },
        {
            label: `Legal`,
            value: `legal`
        }
    ],
    states = [
        {
            label: `Alabama`,
            value: `AL`
        },
        {
            label: `Alaska`,
            value: `AK`
        },
        {
            label: `American Samoa`,
            value: `AS`
        },
        {
            label: `Arizona`,
            value: `AZ`
        },
        {
            label: `Arkansas`,
            value: `AR`
        },
        {
            label: `California`,
            value: `CA`
        },
        {
            label: `Colorado`,
            value: `CO`
        },
        {
            label: `Connecticut`,
            value: `CT`
        },
        {
            label: `Delaware`,
            value: `DE`
        },
        {
            label: `District Of Columbia`,
            value: `DC`
        },
        {
            label: `Federated States Of Micronesia`,
            value: `FM`
        },
        {
            label: `Florida`,
            value: `FL`
        },
        {
            label: `Georgia`,
            value: `GA`
        },
        {
            label: `Guam`,
            value: `GU`
        },
        {
            label: `Hawaii`,
            value: `HI`
        },
        {
            label: `Idaho`,
            value: `ID`
        },
        {
            label: `Illinois`,
            value: `IL`
        },
        {
            label: `Indiana`,
            value: `IN`
        },
        {
            label: `Iowa`,
            value: `IA`
        },
        {
            label: `Kansas`,
            value: `KS`
        },
        {
            label: `Kentucky`,
            value: `KY`
        },
        {
            label: `Louisiana`,
            value: `LA`
        },
        {
            label: `Maine`,
            value: `ME`
        },
        {
            label: `Marshall Islands`,
            value: `MH`
        },
        {
            label: `Maryland`,
            value: `MD`
        },
        {
            label: `Massachusetts`,
            value: `MA`
        },
        {
            label: `Michigan`,
            value: `MI`
        },
        {
            label: `Minnesota`,
            value: `MN`
        },
        {
            label: `Mississippi`,
            value: `MS`
        },
        {
            label: `Missouri`,
            value: `MO`
        },
        {
            label: `Montana`,
            value: `MT`
        },
        {
            label: `Nebraska`,
            value: `NE`
        },
        {
            label: `Nevada`,
            value: `NV`
        },
        {
            label: `New Hampshire`,
            value: `NH`
        },
        {
            label: `New Jersey`,
            value: `NJ`
        },
        {
            label: `New Mexico`,
            value: `NM`
        },
        {
            label: `New York`,
            value: `NY`
        },
        {
            label: `North Carolina`,
            value: `NC`
        },
        {
            label: `North Dakota`,
            value: `ND`
        },
        {
            label: `Northern Mariana Islands`,
            value: `MP`
        },
        {
            label: `Ohio`,
            value: `OH`
        },
        {
            label: `Oklahoma`,
            value: `OK`
        },
        {
            label: `Oregon`,
            value: `OR`
        },
        {
            label: `Palau`,
            value: `PW`
        },
        {
            label: `Pennsylvania`,
            value: `PA`
        },
        {
            label: `Puerto Rico`,
            value: `PR`
        },
        {
            label: `Rhode Island`,
            value: `RI`
        },
        {
            label: `South Carolina`,
            value: `SC`
        },
        {
            label: `South Dakota`,
            value: `SD`
        },
        {
            label: `Tennessee`,
            value: `TN`
        },
        {
            label: `Texas`,
            value: `TX`
        },
        {
            label: `Utah`,
            value: `UT`
        },
        {
            label: `Vermont`,
            value: `VT`
        },
        {
            label: `Virgin Islands`,
            value: `VI`
        },
        {
            label: `Virginia`,
            value: `VA`
        },
        {
            label: `Washington`,
            value: `WA`
        },
        {
            label: `West Virginia`,
            value: `WV`
        },
        {
            label: `Wisconsin`,
            value: `WI`
        },
        {
            label: `Wyoming`,
            value: `WY`
        }
    ],
    /*
    // pick a random value between 2 indices
    rnd = (lb, ub) => lb + Math.round(Math.random() * (ub - lb)),
    // column data filler
    createRandomEmployee = () => ({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        startDate: faker.date.past(),
        department: departments[rnd(0, departments.length - 1)],
        birthDate: faker.date.birthdate(),
        street: faker.address.streetAddress(false),
        city: faker.address.cityName(),
        state: states[rnd(0, states.length - 1)],
        zipCode: faker.address.zipCode()
    }),
    // generate sample employee data
    employeesSampleData = Array.from({length: 50}).map(x => createRandomEmployee());
    */
    employeesSampleData = [];

export {departments, states, employeesCols, employeesSampleData};