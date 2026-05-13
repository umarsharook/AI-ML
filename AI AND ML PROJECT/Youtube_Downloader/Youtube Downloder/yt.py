import subprocess
import os

def download_video(url, path='.'):
    try:
        command = ['yt-dlp', '-P', path, url]
        subprocess.run(command, check=True)
        print("✅ Download complete!")
    except subprocess.CalledProcessError as e:
        print("❌ Download failed:", e)

if __name__ == "__main__":
    url = input("Enter YouTube video URL: ").strip()
    path = input("Enter download path (or leave blank for current folder): ").strip()
    if not os.path.exists(path) and path != '':
        print("⚠️ Path not found, using current directory.")
        path = '.'
    download_video(url, path if path else '.')
