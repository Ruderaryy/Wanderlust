const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/reviews.js");
const Listing = require("../models/listing.js");

const {validateReview, isLoggedIn, isReviewAuthor } = require("../middlewares.js");

const reviewController = require("../controllers/review.js");
const review = require("../models/reviews.js");

//POST Review Route
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.CreateNewReview));

//DELETE Review Route
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.DestroyReview));

module.exports = router;