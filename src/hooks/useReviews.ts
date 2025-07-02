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
const defaultReviews: Review[] = [
  {
    id: "default-1",
    name: "Александр Петров",
    service: "Газель 1.5т",
    rating: 5,
    comment:
      "Отличная компания! Перевозили мебель при переезде. Все доставлено в срок, груз в целости и сохранности. Водитель профессиональный, вежливый.",
    date: "15.12.2024",
  },
  {
    id: "default-2",
    name: "Елена Смирнова",
    service: "Услуги грузчиков",
    rating: 5,
    comment:
      "Грузчики работали быстро и аккуратно. Помогли с подъемом мебели на 5 этаж. Очень довольна сервисом!",
    date: "10.12.2024",
  },
  {
    id: "default-3",
    name: "Михаил Козлов",
    service: "Грузовик 3т",
    rating: 4,
    comment:
      "Хорошая логистическая компания. Перевозили оборудование для офиса. Все прошло гладко, рекомендую.",
    date: "08.12.2024",
  },
];

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
