
# 🛡️ Phishing URL Detector using Python

A simple Python-based phishing URL detector that uses machine learning and feature engineering to classify URLs as **Legit ✅** or **Phishing 🚨**.

---

## 📌 Features

- Detects phishing URLs using basic URL-based heuristics.
- Trained with a `RandomForestClassifier`.
- Takes real-time user input to check suspicious links.
- Easily extendable with more data and features.

---


---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/phishing-url-detector.git
cd phishing-url-detector
````

### 2. Install Dependencies

```bash
pip install -r requirements.txt
```

Or manually install:

```bash
pip install pandas scikit-learn tldextract
```

---

## 🧠 How It Works

The script extracts features from each URL like:

* URL length
* HTTPS usage
* Number of dots and hyphens
* Suspicious TLDs (e.g., `.tk`, `.ml`, `.ga`)
* Whether the URL uses an IP address

These features are fed into a Random Forest model to make predictions.

---

## 💻 Usage

Run the script:

```bash
python phishing_detector.py
```

Then input any URL to check:

```
Enter a URL to check: http://paypal.login.verify-session.ru
Result: Phishing 🚨
```

---

## 🧪 Sample Dataset (Included)

A small sample dataset is hardcoded in the script for demo purposes. For real-world accuracy, use larger datasets like:

* [PhishTank](https://phishtank.org/)
* [OpenPhish](https://openphish.com/)
* [Alexa Top Sites](https://www.alexa.com/topsites) for legit URLs

---

## 🛠️ To-Do

* [ ] Add GUI with Tkinter
* [ ] Integrate Flask for web interface
* [ ] Improve dataset size and quality
* [ ] Save and load model using `joblib`

