import { useState, useEffect } from "react";

export interface Review {
  id: string;
  name: string;
  service: string;
  rating: number;
  comment: string;
  date: string;
  images?: string[];
  videos?: string[];
}

const STORAGE_KEY = "user_reviews";

// Базовые отзывы для примера
const defaultReviews: Review[] = [
  {
    id: "1",
    name: "Анна Петрова",
    service: "Перевозка мебели",
    rating: 5,
    comment: "Отличная работа! Грузчики аккуратно перевезли всю мебель, ничего не повредили. Очень вежливые и профессиональные.",
    date: "2024-12-15",
  },
  {
    id: "2", 
    name: "Дмитрий Сидоров",
    service: "Переезд офиса",
    rating: 5,
    comment: "Быстро и качественно перевезли весь офис. Водитель приехал вовремя, грузчики работали слаженно. Рекомендую!",
    date: "2024-12-10",
  },
  {
    id: "3",
    name: "Елена Козлова", 
    service: "Доставка стройматериалов",
    rating: 4,
    comment: "Хорошая компания, доставили материалы точно в срок. Единственное - немного задержались из-за пробок.",
    date: "2024-12-08",
  },
  {
    id: "4",
    name: "Михаил Иванов",
    service: "Грузоперевозки",
    rating: 5,
    comment: "Уже не первый раз пользуюсь услугами. Всегда на высоте - и цены разумные, и качество отличное.",
    date: "2024-12-05",
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