def caesar_encrypt(text, shift):
    result = ""
    for char in text:
        if char.isalpha():
            base = ord('A') if char.isupper() else ord('a')
            result += chr((ord(char) - base + shift) % 26 + base)
        else:
            result += char
    return result

# 📝 User Input
plaintext = input("Enter text to encrypt: ")
try:
    shift = int(input("Enter shift value (e.g., 3): "))
    ciphertext = caesar_encrypt(plaintext, shift)
    print(f"\nCipher Text: {ciphertext}")
except ValueError:
    print("Please enter a valid integer for the shift.")
