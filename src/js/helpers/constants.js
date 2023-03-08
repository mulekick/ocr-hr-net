const
    sample = [
        // sample data
        {
            firstName: `Yves`,
            lastName: `Jacquier`,
            birthDate: new Date(`2001-06-11T22:00:00.000Z`),
            startDate: new Date(`2023-03-01T23:00:00.000Z`),
            street: `15 Rue de la Faisanderie`,
            city: `Paris`,
            state: {label: `Arizona`, value: `AZ`},
            zipCode: `75000`,
            department: {label: `Marketing`, value: `humanresources`}
        },
        {
            firstName: `Hubert`,
            lastName: `Estier`,
            birthDate: new Date(`1996-12-11T22:00:00.000Z`),
            startDate: new Date(`2023-02-01T23:00:00.000Z`),
            street: `15 Allée de la Justice`,
            city: `Versailles`,
            state: {label: `American Samoa`, value: `AS`},
            zipCode: `78000`,
            department: {label: `Human Resources`, value: `marketing`}
        },
        {
            firstName: `Marianne`,
            lastName: `Vasseur`,
            birthDate: new Date(`1988-12-11T22:00:00.000Z`),
            startDate: new Date(`2021-02-01T23:00:00.000Z`),
            street: `15 Rue Grande`,
            city: `Melun`,
            state: {label: `Alabama`, value: `AL`},
            zipCode: `77000`,
            department: {label: `Human Resources`, value: `marketing`}
        }
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
    ];

export {sample, departments, states};