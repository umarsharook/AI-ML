import pandas as pd
import tldextract
from urllib.parse import urlparse
from sklearn.ensemble import RandomForestClassifier

# Sample training data (for demo; you should expand this)
data = {
    "url": [
        "http://www.bankofamerica.com.login.verify-session.com",
        "https://github.com",
        "http://paypal.com.security.alerts.cn",
        "https://www.google.com",
        "http://free.netflix-account.com",
        "https://openai.com"
    ],
    "label": [1, 0, 1, 0, 1, 0]  # 1 = Phishing, 0 = Legit
}
df = pd.DataFrame(data)

# Feature extraction function
def extract_features(url):
    parsed = urlparse(url)
    ext = tldextract.extract(url)

    return pd.Series({
        'url_length': len(url),
        'hostname_length': len(parsed.netloc),
        'path_length': len(parsed.path),
        'has_https': int(parsed.scheme == 'https'),
        'num_dots': url.count('.'),
        'num_hyphens': url.count('-'),
        'has_ip': int(any(char.isdigit() for char in ext.domain) and ext.suffix == ''),
        'is_suspicious_tld': int(ext.suffix in ['tk', 'ml', 'ga', 'cf', 'gq'])
    })

# Prepare data
X = df['url'].apply(extract_features)
y = df['label']

# Train model
model = RandomForestClassifier()
model.fit(X, y)

# Prediction function
def predict_url(url):
    features = extract_features(url).to_frame().T
    prediction = model.predict(features)
    return "Phishing 🚨" if prediction[0] == 1 else "Legit ✅"

# 🔍 User input
user_url = input("Enter a URL to check: ").strip()
result = predict_url(user_url)
print(f"\nURL: {user_url}\nResult: {result}")
