import pandas as pd

# Load the CSV file
df = pd.read_csv(r'C:\Users\Pratham Jain\SisterDear\LuminousTechnoX\Complete_data.csv')  # Adjust the delimiter if needed

# Concatenate columns
df['Combined'] = df['Senddate'] + ' ' + df['Hours']

# Save the result to a new CSV file
df.to_csv(r'C:\Users\Pratham Jain\SisterDear\LuminousTechnoX\Complete_data_new.csv', index=False)
