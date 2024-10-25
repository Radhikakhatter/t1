import json
import pandas as pd
import matplotlib.pyplot as plt

# Load JSON data from a file
with open('data.json', 'r') as file:
    data = json.load(file)

# Create a DataFrame from the JSON data
df = pd.DataFrame(data)

# Convert 'createdAt' to datetime format
df['createdAt'] = pd.to_datetime(df['createdAt'])

# Sort the DataFrame by date
df = df.sort_values(by='createdAt')

# Plot the data
plt.figure(figsize=(10, 5))
plt.plot(df['createdAt'], df['total_kwh'], marker='o', linestyle='-', color='b')
plt.xlabel('Date')
plt.ylabel('Energy Consumption (kWh)')
plt.title('Energy Consumption vs Date')
plt.grid(True)
plt.show()
