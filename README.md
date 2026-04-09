# 📚 Bookstore K8s — Full Stack MERN App on Kubernetes

A production-ready bookstore web application built with the MERN stack, containerized with Docker, and deployed on Kubernetes with a fully automated CI/CD pipeline.

---

## 🏗️ Architecture
User
↓
Ingress (NGINX)
↓
┌─────────────────────────────────────┐
│           Kubernetes Cluster         │
│                                     │
│  ┌──────────┐      ┌──────────────┐ │
│  │ Frontend │ ───► │   Backend    │ │
│  │  (React) │      │  (Node.js)   │ │
│  └──────────┘      └──────┬───────┘ │
│                           │         │
│                    ┌──────▼───────┐ │
│                    │   MongoDB    │ │
│                    │  (+ PV/PVC)  │ │
│                    └──────────────┘ │
└─────────────────────────────────────┘
---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, Redux Toolkit, Tailwind CSS |
| Backend | Node.js, Express.js, TypeScript |
| Database | MongoDB |
| Containerization | Docker, Docker Compose |
| Orchestration | Kubernetes (Minikube) |
| CI/CD | GitHub Actions (Self-hosted Runner) |
| Image Build | Docker Buildx (multi-platform) |
| Image Registry | Docker Hub |
| Image Scanning | Trivy |
| Ingress | NGINX Ingress Controller |
| Autoscaling | HPA (Horizontal Pod Autoscaler) |

---

## 🚀 Local Setup

### Prerequisites
- Docker Desktop
- Minikube
- kubectl
- Git

### 1 — Clone the repo
```bash
git clone https://github.com/ashrafbilalmohaidat2/bookstore-k8s.git
cd bookstore-k8s
```

### 2 — Run with Docker Compose
```bash
cd bookstore-main
docker compose up --build
```

App runs at `http://localhost:3000`

---

## ☸️ Kubernetes Deployment

### 1 — Start Minikube
```bash
minikube start
minikube addons enable ingress
minikube addons enable metrics-server
```

### 2 — Apply manifests
```bash
kubectl apply -f k8s/namespaces/
kubectl apply -f k8s/mongodb/
kubectl apply -f k8s/backend/
kubectl apply -f k8s/frontend/
kubectl apply -f k8s/ingress/
```

### 3 — Access the app
```bash
kubectl port-forward -n production service/frontend 3000:80
kubectl port-forward -n production service/backend 5000:5000
```

Open `http://localhost:3000`

### 4 — Verify everything is running
```bash
kubectl get pods -n production
kubectl get services -n production
kubectl get ingress -n production
kubectl get hpa -n production
```

---

## ⚙️ CI/CD Pipeline

Every push to the `devops` branch triggers the following automatically:
Push to devops branch
↓
Build multi-platform images (linux/amd64 + linux/arm64)
using Docker Buildx
↓
Scan images for vulnerabilities
using Trivy (HIGH + CRITICAL severity)
↓
Push images to Docker Hub
with commit SHA tag
↓
Update Kubernetes manifests
with new image tag
↓
Deploy to Kubernetes
using kubectl apply + rollout restart
### Required GitHub Secrets
| Secret | Description |
|---|---|
| `DOCKERHUB_USERNAME` | Docker Hub username |
| `DOCKERHUB_TOKEN` | Docker Hub access token (Read & Write) |

---

## 🔒 Kubernetes Resources

| Resource | Purpose |
|---|---|
| Namespace | Isolate dev and production environments |
| Deployment | Manage pods for frontend, backend, MongoDB |
| Service | Internal communication between pods |
| Ingress | Single entry point via NGINX |
| ConfigMap | Non-sensitive backend environment variables |
| Secret | Sensitive data (JWT secrets, Stripe key) |
| PersistentVolume | Storage for MongoDB data |
| PersistentVolumeClaim | Request storage for MongoDB |
| HPA | Auto-scale backend based on CPU usage |

---

## 👨‍💻 Author

**Ashraf Mheidat**  
Cloud & DevOps Engineer  
[GitHub](https://github.com/ashrafbilalmohaidat2) | [LinkedIn](https://linkedin.com/in/ashraf-bilal-mohaidat)