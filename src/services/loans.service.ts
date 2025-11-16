import { api } from '@/lib/api/axiosInstance';
import type {
  CreateLoanRequest,
  CreateLoanResponse,
  GetMyLoansResponse,
  ReturnLoanResponse,
} from '@/types/Loans.type';

const prefix = '/api/loans';

// Get My Loans
export async function getMyLoans() {
  const res = await api.get<GetMyLoansResponse>(`${prefix}/my`);
  return res.data;
}

// Create Loan Book
export async function createLoan(data: CreateLoanRequest) {
  const res = await api.post<CreateLoanResponse>(`${prefix}`, data);
  return res.data;
}

// Return Book
export async function returnLoan(id: number) {
  const res = await api.patch<ReturnLoanResponse>(`${prefix}/${id}/return`);
  return res.data;
}
