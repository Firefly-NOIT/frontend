import cv2
import numpy as np

# Replace with the correct URL format for your camera
url = "http://192.168.36.172:8080/"  # Update this

import cv2
import numpy as np

cp = cv2.VideoCapture(url)
while(True):
    camera, frame = cp.read()
    if frame is not None:
        cv2.imshow("Frame", frame)
    q = cv2.waitKey(1)
    if q==ord("q"):
        break
cv2.destroyAllWindows()