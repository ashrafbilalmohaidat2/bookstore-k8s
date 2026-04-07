import express, { Request, Response, NextFunction } from "express";
import { authenticate, isAdmin } from "../middlewares/auth.middleware";
import userController from "../controllers/user.controller";

const router = express.Router();

const asyncHandler = (fn: any) => (req: any, res: any, next: any) => {
	return Promise.resolve(fn(req, res, next)).catch(next);
};

router.get("/", authenticate, asyncHandler(userController.getProfile));
router.put("/", authenticate, asyncHandler(userController.updateProfile));
router.delete("/", authenticate, asyncHandler(userController.deleteAccount));
router.post("/newsletter/toggle", authenticate, asyncHandler(userController.toggleNewsletter));

// Admin-only routes
router.post(
  "/newsletter/send",
  authenticate,
  isAdmin,
  asyncHandler(userController.sendNewsletter)
);
router.get(
  "/newsletter/subscribers",
  authenticate,
  isAdmin,
  asyncHandler(userController.getAllNewsletterSubscribers)
);
router.get(
  "/all",
  authenticate,
  isAdmin,
  asyncHandler(userController.getAllUsers)
);
router.delete(
  "/:userId",
  authenticate,
  isAdmin,
  asyncHandler(userController.deleteUser)
);
router.put(
  "/:userId",
  authenticate,
  isAdmin,
  asyncHandler(userController.updateUser)
);

// No custom wildcard; let global error handling manage 404s


export default router