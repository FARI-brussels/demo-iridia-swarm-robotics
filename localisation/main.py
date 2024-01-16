from ultralytics import YOLO
# Load model and calibration data
MTX, DIST, H = load_coefficients("calibration/calibration.yml")
MODEL = YOLO("vision/runs/detect/train2/weights/best.pt")
