from flask import Flask, request, jsonify, send_from_directory
import subprocess
import os

app = Flask(__name__, static_folder='.', static_url_path='')

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/download', methods=['POST'])
def download():
    data = request.get_json()
    url = data.get('url', '').strip()
    path = data.get('path', '').strip() or '.'

    if not url:
        return jsonify({'message': '⚠️ No URL provided.'})

    if not os.path.exists(path):
        path = '.'

    command = ['yt-dlp', '-P', path, url]
    try:
        subprocess.run(command, check=True)
        return jsonify({'message': '✅ Download complete!'})
    except subprocess.CalledProcessError as e:
        return jsonify({'message': f'❌ Download failed: {e}'})

if __name__ == '__main__':
    app.run(debug=True)