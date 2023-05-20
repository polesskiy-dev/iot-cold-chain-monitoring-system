# Use cases

## Actors

- **Organization**: Represents the entity or company that owns and manages the sensors. It consists of **users** and owns sensors.

- **User**: Represents individuals who are part of the organization and interact with the system. Users can have two roles:
    - **Administrator**: A user with administrative privileges who has access to all sensors data additionally to **Operator** privileges.
    - **Operator**: A user with operator privileges who can manage and perform actions on the sensors owned by the organization. Operators can start and stop sensor logging and fetch data associated with the sensors they have operated.

- **Sensor**: Represents the physical sensors used for monitoring the cold chain. Sensors can be owned by the organization and are associated with users and their actions.

## Operator Use Cases

1. **Start Sensor Logging with Unstable Internet Connection**
    - Description: Allows the Operator to start the logging process for a specific sensor, even with an unstable internet connection. The Operator passes a unique ID to the sensor directly from their mobile device. Once the internet connection stabilizes, the Operator sends the location, Sensor ID, and start timestamp to the application server.
    - Actors: Operator
    - Preconditions: The Operator is authenticated and has the necessary permissions. The Operator has a mobile device with an unstable internet connection.
    - Steps:
        1. Select the sensor for which logging needs to be started.
        2. Generate a unique ID on the Operator's mobile device.
        3. Pass the unique ID to the sensor directly from the mobile device.
        4. Monitor the internet connection stability.
        5. Once the internet connection stabilizes:
            - Retrieve the location information (e.g., GPS coordinates) on the mobile device.
            - Send the location, Sensor ID, and start timestamp to the application server.
            - Verify that the server successfully receives the start logging information.
        6. Verify that the sensor has successfully started logging on the server.

2. **Stop Sensor Logging**
    - Description: Enables the Operator to stop the logging process for a specific sensor.
    - Actors: Operator
    - Preconditions: The Operator is authenticated and has the necessary permissions.
    - Steps:
        1. Select the sensor for which logging needs to be stopped.
        2. Trigger the stop logging action for the selected sensor.
        3. Verify that the sensor has successfully stopped logging.

3. **Fetch List of Operated Sensors**
    - Description: Allows the Operator to fetch the list of sensors that they have started or stopped logging.
    - Actors: Operator
    - Preconditions: The Operator is authenticated and has the necessary permissions.
    - Steps:
        1. Request the system to retrieve the list of sensors associated with the Operator.
        2. Receive and display the list of sensors operated by the Operator.

4. **Fetch Sensor Data**
    - Description: Enables the Operator to fetch the data recorded by the sensors they have operated.
    - Actors: Operator
    - Preconditions: The Operator is authenticated and has the necessary permissions.
    - Steps:
        1. Select the sensor for which data needs to be retrieved.
        2. Request the system to fetch the data recorded by the selected sensor.
        3. Receive and display the sensor data.
