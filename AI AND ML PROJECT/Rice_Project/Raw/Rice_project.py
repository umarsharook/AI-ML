import streamlit as st
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
from PIL import Image

# Set Streamlit page configuration
st.set_page_config(page_title="Rice Type Identification AI", layout="centered")

# Title and description
st.title("🌾 Rice Type Identification AI")
st.markdown("""
Welcome to the Rice Type Identification AI tool.  
Upload an image of a rice grain, and the model will predict its variety.  
This tool helps farmers, researchers, and gardeners make better agricultural decisions.
""")

# Load the trained model (ensure rice_model.h5 is in the same directory)
@st.cache_resource
def load_rice_model():
    return load_model("rice_model.h5")

model = load_rice_model()

# Define class labels (you can load from a file if preferred)
class_names = ['Basmati', 'Jasmine', 'Arborio', 'Glutinous', 'Brown']

# File uploader
uploaded_file = st.file_uploader("📤 Upload a rice grain image", type=["jpg", "jpeg", "png"])

if uploaded_file is not None:
    # Display uploaded image
    img = Image.open(uploaded_file).convert("RGB")
    st.image(img, caption="Uploaded Image", use_column_width=True)

    # Preprocess the image
    img_resized = img.resize((224, 224))  # Assuming model expects 224x224 input
    img_array = image.img_to_array(img_resized)
    img_array = np.expand_dims(img_array, axis=0)
    img_array = img_array / 255.0  # Normalize as per MobileNet preprocessing

    # Perform prediction
    prediction = model.predict(img_array)
    predicted_index = np.argmax(prediction)
    predicted_class = class_names[predicted_index]
    confidence = prediction[0][predicted_index]

    # Show result
    st.success(f"🔍 Predicted Rice Type: **{predicted_class}**")
    st.info(f"🔢 Confidence Score: **{confidence:.2%}**")

    # Extra info or redirect link
    st.markdown("📚 [Learn more about rice varieties](https://en.wikipedia.org/wiki/List_of_rice_varieties)")

else:
    st.warning("Please upload an image to get started.")

# Footer
st.markdown("---")
st.markdown("🧠 Powered by MobileNetv4 + CNN | 📷 Developed for farmers, researchers, and gardeners.")
