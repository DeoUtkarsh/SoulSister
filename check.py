import requests

# Hardcoded replica ID and API key
replica_id = "r8061045ac5d"  # replace with your actual replica ID
api_key = "2d8b9431f0ff4f179ec29d713b4688fc"  # replace with your actual API key

# Construct full URL
url = f"https://tavusapi.com/v2/replicas/{replica_id}"

# Set headers
headers = {
    "x-api-key": api_key
}

# Send GET request
response = requests.get(url, headers=headers)

# Print JSON response (or status info if something goes wrong)
try:
    print(response.json())
except Exception:
    print("Response not in JSON format:")
    print(response.text)
