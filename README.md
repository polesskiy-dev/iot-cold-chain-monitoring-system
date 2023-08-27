# IoT Cold Chain monitoring

## Project overview

The Cold Chain Monitoring is an open source software platform that collects conditions (temperature, humidity, etc.) data from physical devices (IoT sensors) to monitor sensitive products as they move through the supply chain.

### Components of the system

- [Backend: Serverless AWS cloud app]()
- [Frontend: Web app Dashboard]()
- [Mobile: App to access the device]()
    - [iOS]()
    - [Android]()
- [Desktop: Console App for device management (bootloader, self-testing)]()
- [Data logger physical device (sensor)](https://github.com/polesskiy-dev/iot-risk-data-logger-nfc-samd21)
    - [Risk data logger device firmware](https://github.com/polesskiy-dev/iot-risk-data-logger-nfc-samd21/tree/main/firmware)
    - [Data logger hardware - PCB, Schematics, Manufacturing files](https://github.com/polesskiy-dev/iot-risk-data-logger-nfc-samd21/tree/main/hardware)
    - [Data logger enclosure drawings, 3D printing optimized](https://github.com/polesskiy-dev/iot-risk-data-logger-nfc-samd21/tree/main/enclosure)
    
## Documentation

### Posible use cases for the solution

- *Pharmaceutical*: Ensure the safety and efficacy of vaccines and medications during storage and transportation.
- *Food*: Prevent spoilage and maintain freshness of perishable food products, such as meat, fish, and dairy.
- *Biotech*: Ensure accuracy and prevent degradation of biological samples, such as DNA and RNA.
- *Chemical*: Prevent contamination and ensure stability of sensitive chemicals during storage and transportation.
- *Electronic*: Prevent damage and ensure proper functioning of sensitive electronics during storage and transportation.

### System Actors

- *Organization*: Represents the company that owns and manages the sensors. It consists of *Users* and *Sensors*.
- *Users Roles*:
    - *Operator* - a User with operator privileges who can manage and perform actions on the sensors owned by the organization. Operators can start, stop sensor logging and fetch/upload data from the sensors they operated through the mobile app.
    - *Administrator* - a User with administrative privileges who has access to all sensors data additionally to *Operator* privileges e.g. update device firmware, add/remove devices from *Organization*.
    - *Reviever* (is it a good name?) - a User with read-only privileges who can view the data from the sensors owned by the organization. 
    - *Supply Chain Integration* - a User representing a supply chain partner who can view/monitor the data from the sensors e.g. through the API.
- *Sensors*: Represents the physical devices (sensors) used for monitoring the cold chain. Sensors can be owned by the organization and are associated with operators.

[Use cases initial draft](./docs/requirements/usecases.md)

### Required documentation
- [ ] Describe high level architecture of the system based on #Components of the system (diagram)
- [ ] Describe data flow between components (diagram)
- [ ] Describe basic scenarious of the system (flowcharts? text?)
    - [ ] For the Operator (Mobile app + device)
    - [ ] For the Reviever role (Web app)
    - [ ] For the Administrator role (Web app)
    - [ ] For the Administrator role (Console app)

