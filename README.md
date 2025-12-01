# Facial Recognition Application (using AWS)

This repository contains a facial recognition demo project that combines a small Python backend for employee registration/authentication and a React/Vite frontend app located in `facial-recognition-app`.

**Quick Summary**
- **Backend**: Python scripts at the repository root (`employee_registration.py`, `employee_authentication.py`) that interact with your environment and AWS resources.
- **Frontend**: `facial-recognition-app` — a Vite-based React app (source in `facial-recognition-app/src`, static assets in `facial-recognition-app/public`).

**Repository Layout**
- `employee_registration.py` : sample script to register an employee (face data, metadata).
- `employee_authentication.py` : sample script to authenticate/verify an employee using face data.
- `facial-recognition-app/` : frontend (Vite + React) with `package.json`, `src/`, `public/`.
- `backups/facial-recognition-app.bundle` : backup bundle containing the original sub-repo history (kept for safekeeping).

**Prerequisites**
- Python 3.8+ installed locally.
- Node.js 16+ and npm (or yarn/pnpm) for the frontend.
- AWS credentials configured (if you plan to use AWS services such as S3, Rekognition, or DynamoDB).

If you plan to run the AWS-related parts, configure credentials with one of these common methods:
```bash
# recommended: configure via AWS CLI
aws configure
# or set environment variables
export AWS_ACCESS_KEY_ID="..."
export AWS_SECRET_ACCESS_KEY="..."
export AWS_DEFAULT_REGION="us-east-1"
```

**Local Setup — Backend (Python)**
1. Create and activate a virtual environment:
```bash
python -m venv .venv
source .venv/Scripts/activate  # on Windows PowerShell use: .\.venv\Scripts\Activate.ps1
```
2. Install dependencies (if you have a `requirements.txt`, use it):
```bash
pip install -r requirements.txt || pip install boto3
```
3. Run the sample scripts (adjust arguments/environment as needed):
```bash
python employee_registration.py
python employee_authentication.py
```

**Local Setup — Frontend (React / Vite)**
1. Change into the frontend folder and install dependencies:
```bash
cd facial-recognition-app
npm install
```
2. Run the dev server:
```bash
npm run dev
```
3. Build for production:
```bash
npm run build
```

**About the imported app folder**
- The frontend was previously a nested git repository and has been imported into the parent repo. The original repository history is preserved in the bundle at `backups/facial-recognition-app.bundle`.
- To restore that history into a separate Git repo (optional), you can run:
```bash
git clone --bare backups/facial-recognition-app.bundle restored-repo.git
cd restored-repo.git
git push --mirror https://github.com/USERNAME/NEW-REPO.git
```
**Contributing**
- Open issues and PRs are welcome. For changes that affect AWS resources, document required IAM permissions.

**Contact**
- For questions about this repository, open an issue or contact the maintainer.
