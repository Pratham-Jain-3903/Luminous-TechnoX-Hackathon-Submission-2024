import pandas as pd
import numpy as np

# Load the CSV file
file_path = "C:\\Users\\Manvendra Singh\\Desktop\\Hackathons and Exams\\Luminous\\Codes\\Energy data.csv"  # Update this with your file path
data = pd.read_csv(file_path)

# Define the number of devices and initialize new column names
num_devices = 4
device_columns = [f'Device_{i+1}_Consumption (kW)' for i in range(num_devices)]

# Function to split total consumption across four devices
def split_consumption(total_consumption):
    # Generate random weights for each device
    weights = np.random.dirichlet(np.ones(num_devices), size=1).flatten()
    # Allocate consumption based on the generated weights and round to 3 decimal places
    return np.round(weights * total_consumption, 3)

# Apply the function to each row in the dataframe
for i, col in enumerate(device_columns):
    data[col] = data['consumptionValue (kW)'].apply(lambda x: split_consumption(x)[i])

# Save the modified dataframe to a new CSV
output_path = 'Energy_data_with_device_consumption_rounded.csv'
data.to_csv(output_path, index=False)
