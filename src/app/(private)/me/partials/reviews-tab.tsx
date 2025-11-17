'use client';

import { useLoans } from '@/hooks/useLoans';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Star } from 'lucide-react';
import { useMe } from '@/hooks/useMe';
import { useReviews } from '@/hooks/useReviews';
import { CreateUpdateReviewRequest } from '@/types/Reviews.type';

export default function ReviewsTab() {
  // Hooks
  const { loans, isLoadingLoans, hasError } = useLoans();
  const { reviews, isLoadingReviews, hasError: isReviewsError } = useMe();
  const { createReview, deleteReview, isLoading } = useReviews();

  // States
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBookId, setSelectedBookId] = useState<number | null>(null);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  if (isLoadingLoans) return <p>Loading Reviews...</p>;
  if (hasError || !loans) return <p>Failed to load reviews.</p>;

  if (isLoadingReviews) return <p>Loading Reviews...</p>;
  if (isReviewsError || !reviews) return <p>Failed to load reviews.</p>;

  const handleGiveReview = (bookId: number) => {
    setSelectedBookId(bookId);
    setRating(0);
    setHoverRating(0);
    setReviewText('');
    setModalOpen(true);
  };

  const handleUpdateReview = (
    bookId: number,
    review: CreateUpdateReviewRequest
  ) => {
    setSelectedBookId(bookId);
    setRating(review.star);
    setHoverRating(review.star);
    setReviewText(review.comment);
    setModalOpen(true);
  };

  const handleSubmit = () => {
    if (!selectedBookId) return;
    createReview({
      bookId: selectedBookId,
      star: rating,
      comment: reviewText,
    });

    setModalOpen(false);
  };

  // Show only unique and returned loans
  const returnedLoans = loans.loans.filter(
    (loan) => loan.status === 'RETURNED'
  );
  const uniqueReturnedLoans = Array.from(
    new Map(returnedLoans.map((loan) => [loan.book.id, loan])).values()
  );

  return (
    <div className='space-y-2'>
      {uniqueReturnedLoans.map((loan) => {
        const userReview = reviews.reviews.find(
          (r) => r.bookId === loan.book.id
        );

        return (
          <div key={loan.id}>
            <p>Book: {loan.book.title}</p>
            {loan.book.coverImage && (
              <p>Image URL: {loan.book.coverImage?.url}</p>
            )}
            <p>Borrowed: {loan.borrowedAt}</p>
            <p>Due: {loan.dueAt}</p>
            <p>Status: {loan.status}</p>
            {loan.returnedAt && <p>Returned: {loan.returnedAt}</p>}

            {userReview ? (
              <>
                <p>{userReview.comment} </p>
                <Button
                  onClick={() =>
                    handleUpdateReview(loan.book.id, {
                      bookId: loan.book.id,
                      star: userReview.star,
                      comment: userReview.comment,
                    })
                  }
                >
                  Update Review
                </Button>
                <Button
                  onClick={() => deleteReview(userReview.id)}
                  variant='destructive'
                >
                  Delete Review
                </Button>
              </>
            ) : (
              <Button onClick={() => handleGiveReview(loan.book.id)}>
                Give Review
              </Button>
            )}
          </div>
        );
      })}

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Give a Review</DialogTitle>
          </DialogHeader>

          <DialogDescription className='text-sm text-muted-foreground'>
            Write your review and choose a rating.
          </DialogDescription>

          {/* Review Textarea */}
          <Textarea
            placeholder='Write your review...'
            className='w-full'
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />

          {/* ⭐ Star Rating */}
          <div className='flex items-center gap-2 mt-4'>
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={32}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => setRating(star)}
                className={`
                  cursor-pointer transition
                  ${
                    star <= (hoverRating || rating)
                      ? 'fill-yellow-400 stroke-yellow-500'
                      : 'stroke-gray-400'
                  }
                `}
              />
            ))}
          </div>

          <DialogFooter className='mt-6'>
            <Button variant='outline' onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={rating === 0 || reviewText.trim() === '' || isLoading}
            >
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
