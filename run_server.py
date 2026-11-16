import os
from backend.app import app

if __name__ == "__main__":
    host = os.environ.get("HOST", "0.0.0.0")
    port = int(os.environ.get("PORT", 5000))
    print(f"Starting CPA ANBIMA Backend on http://localhost:{port} ...")
    app.run(host=host, port=port, debug=False)
