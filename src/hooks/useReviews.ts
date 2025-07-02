import { useState, useEffect } from "react";

export interface Review {
  id: string;
  name: string;
  service: string;
  rating: number;
  comment: string;
  date: string;
}

const STORAGE_KEY = "user_reviews";

// Базовые отзывы для примера
const defaultReviews: Review[] = [];

export const useReviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const savedReviews = localStorage.getItem(STORAGE_KEY);
    if (savedReviews) {
      try {
        const parsedReviews = JSON.parse(savedReviews);
        setReviews([...defaultReviews, ...parsedReviews]);
      } catch (error) {
        console.error("Error parsing saved reviews:", error);
        setReviews(defaultReviews);
      }
    } else {
      setReviews(defaultReviews);
    }
  }, []);

  const addReview = (review: Review) => {
    const savedReviews = localStorage.getItem(STORAGE_KEY);
    let userReviews: Review[] = [];

    if (savedReviews) {
      try {
        userReviews = JSON.parse(savedReviews);
      } catch (error) {
        console.error("Error parsing saved reviews:", error);
      }
    }

    const newUserReviews = [review, ...userReviews];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newUserReviews));
    setReviews([...defaultReviews, ...newUserReviews]);
  };

  const getAverageRating = () => {
    if (reviews.length === 0) return 0;
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    return (sum / reviews.length).toFixed(1);
  };

  const getReviewsByRating = (rating: number) => {
    return reviews.filter((review) => review.rating === rating).length;
  };

  return {
    reviews,
    addReview,
    getAverageRating,
    getReviewsByRating,
    totalReviews: reviews.length,
  };
};
