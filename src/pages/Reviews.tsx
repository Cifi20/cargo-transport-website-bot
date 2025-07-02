import Header from "@/components/Header";
import { Star, Quote } from "lucide-react";
import { useReviews } from "@/hooks/useReviews";
import ReviewForm from "@/components/ReviewForm";
import { useState } from "react";

const Reviews = () => {
  const { reviews, addReview, getAverageRating, totalReviews } = useReviews();
  const [showForm, setShowForm] = useState(false);

  const handleReviewSubmit = (review: any) => {
    addReview(review);
    setShowForm(false);
  };

  const averageRating = getAverageRating();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Отзывы клиентов
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Что говорят о нас наши клиенты
          </p>
          <div className="flex items-center justify-center space-x-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-6 w-6 ${parseFloat(averageRating) >= star ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                />
              ))}
            </div>
            <span className="text-lg font-semibold text-gray-900">
              {averageRating}
            </span>
            <span className="text-gray-600">({totalReviews} отзывов)</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {reviews.map((review, index) => (
            <div
              key={review.id || index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-orange-500 flex items-center justify-center text-white font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900">{review.name}</h3>
                  <p className="text-sm text-gray-600">{review.service}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${review.rating >= star ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Quote className="h-6 w-6 text-gray-300 absolute -top-2 -left-1" />
                <p className="text-gray-700 leading-relaxed pl-6">
                  {review.comment}
                </p>
              </div>
            </div>
          ))}
        </div>

        {!showForm && (
          <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Поделитесь своим опытом</h2>
            <p className="text-lg mb-6">Ваш отзыв поможет нам стать лучше</p>
            <button
              onClick={() => setShowForm(true)}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Оставить отзыв
            </button>
          </div>
        )}

        {showForm && (
          <div className="mb-8">
            <ReviewForm onReviewSubmit={handleReviewSubmit} />
            <div className="text-center mt-4">
              <button
                onClick={() => setShowForm(false)}
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                Отменить
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Reviews;
